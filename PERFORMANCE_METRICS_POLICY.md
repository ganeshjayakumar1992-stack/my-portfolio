# Performance Metrics Display Policy

## Overview
This document outlines the policy for displaying performance metrics in the portfolio website UI.

## Policy Statement
**Performance metrics should NEVER be displayed in the user interface without explicit permission from the project owner.**

## Prohibited Metrics
The following performance metrics are strictly prohibited from UI display:
- Load Time (e.g., "Load Time: 0.10ms")
- First Contentful Paint (FCP) (e.g., "FCP: 0.00ms")
- Largest Contentful Paint (LCP) (e.g., "LCP: 0.00ms")
- Cumulative Layout Shift (CLS) (e.g., "CLS: 0.000")

## Current Implementation
- Performance monitoring is active in the background for development purposes
- Metrics are logged to the browser console only
- No UI elements display performance data
- The `PerformanceMonitor` component returns `null` to prevent any UI display

## Guidelines for Future Development
1. **Never add performance metrics to UI without explicit approval**
2. **Console logging is acceptable** for development and debugging
3. **UI display requires written permission** from the project owner
4. **Document any changes** to performance monitoring in this file

## Implementation Details
- File: `src/components/performance/PerformanceMonitor.tsx`
- Current behavior: Returns `null` to prevent UI display
- Console logging: Active in development mode
- Production: No performance monitoring

## Compliance
- ✅ Performance metrics removed from UI
- ✅ Console logging maintained for development
- ✅ Policy documented for future reference
- ✅ No UI elements display performance data

## Last Updated
Date: $(date)
Action: Removed performance metrics from UI and established policy
