# Personal Portfolio - Ganesh Jayakumar

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **React Router**: Client-side routing for smooth navigation
- **SEO Optimized**: Meta tags and structured content for search engines
- **Dark Mode Ready**: Built with dark mode support (coming soon)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel
- **SEO**: React Helmet Async

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── portfolio/       # Portfolio-specific components
│   │   └── blog/           # Blog-related components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── styles/             # CSS and styling
├── public/                 # Static assets
├── content/                # Blog posts and portfolio data
└── docs/                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        // ... more shades
        900: '#1e3a8a',
      }
    }
  }
}
```

### Content
- Update personal information in component files
- Modify portfolio data in the respective page components
- Add blog posts in the `content/blog/` directory

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🔮 Future Enhancements

- [ ] LinkedIn API integration for dynamic profile data
- [ ] Blog functionality with MDX support
- [ ] Dark mode toggle
- [ ] Contact form with backend integration
- [ ] Portfolio project showcase
- [ ] Analytics and performance monitoring

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: [Your Email]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
