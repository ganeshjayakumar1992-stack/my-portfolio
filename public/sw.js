// Service Worker for Portfolio PWA
const CACHE_NAME = 'portfolio-v2.0'
const STATIC_CACHE = 'portfolio-static-v2.0'
const DYNAMIC_CACHE = 'portfolio-dynamic-v2.0'

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico'
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files')
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        console.log('Static files cached successfully')
        return self.skipWaiting()
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }

  // Handle different types of requests
  if (url.pathname === '/' || url.pathname === '/index.html') {
    // Handle navigation requests
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request)
            .then((fetchResponse) => {
              // Cache the response for future use
              const responseClone = fetchResponse.clone()
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone)
                })
              return fetchResponse
            })
        })
        .catch(() => {
          // Return offline page if both cache and network fail
          return caches.match('/offline.html')
        })
    )
  } else if (request.destination === 'image') {
    // Handle image requests with cache-first strategy
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request)
            .then((fetchResponse) => {
              const responseClone = fetchResponse.clone()
              caches.open(DYNAMIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone)
                })
              return fetchResponse
            })
        })
    )
  } else if (request.destination === 'script' || request.destination === 'style') {
    // Handle CSS and JS with cache-first strategy
    event.respondWith(
      caches.match(request)
        .then((response) => {
          if (response) {
            return response
          }
          return fetch(request)
            .then((fetchResponse) => {
              const responseClone = fetchResponse.clone()
              caches.open(STATIC_CACHE)
                .then((cache) => {
                  cache.put(request, responseClone)
                })
              return fetchResponse
            })
        })
    )
  } else {
    // For other requests, try network first, then cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(request, responseClone)
              })
          }
          return response
        })
        .catch(() => {
          // Return cached response if network fails
          return caches.match(request)
        })
    )
  }
})

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle background sync tasks
      console.log('Background sync triggered')
    )
  }
})

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New portfolio update!',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Portfolio',
        icon: '/favicon.ico'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/favicon.ico'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Portfolio Update', options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})
