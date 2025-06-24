# Puppeteer Compatibility Guidelines

## Overview
This document outlines best practices for ensuring consistent rendering across browsers and Puppeteer screenshots.

## Color and Gradient Best Practices

### ❌ Avoid: Tailwind Opacity Modifiers in Gradients
```css
/* DON'T USE - Causes rendering issues in Puppeteer */
bg-gradient-to-br from-primary/20 to-secondary/10
bg-gradient-to-r from-blue-500/30 to-green-400/20
```

### ✅ Use: Explicit Tailwind Color Classes
```css
/* RECOMMENDED - Consistent rendering everywhere */
bg-gradient-to-br from-stone-50 to-green-50
bg-gradient-to-r from-blue-100 to-green-100
```

### ✅ Alternative: Full Hex Values
```css
/* ALSO GOOD - When you need precise colors */
bg-gradient-to-br from-[#fafaf9] to-[#ecfdf5]
bg-[linear-gradient(135deg,#fafaf9_0%,#ecfdf5_100%)]
```

## Why This Matters

### The Problem
- Puppeteer's headless browser doesn't always interpret CSS custom properties with opacity modifiers correctly
- HSL color values from CSS variables combined with `/20`, `/10` opacity can render as unexpected colors (often yellow)
- This causes screenshots to look different from the actual website

### The Solution
- Use Tailwind's built-in color palette (e.g., `stone-50`, `green-50`)
- These colors render identically in all environments
- No dependency on CSS custom properties or opacity calculations

## Puppeteer Launch Configuration

When using Puppeteer programmatically, use these flags to reduce rendering glitches:

```javascript
const browser = await puppeteer.launch({
  args: [
    '--disable-gpu',
    '--no-sandbox', 
    '--disable-dev-shm-usage'
  ]
});
```

## Current Project Status

✅ **This project already follows these guidelines:**
- Hero section: `bg-gradient-to-br from-stone-50 to-green-50`
- About section: `bg-gradient-to-br from-stone-100 to-green-100`
- No opacity modifiers used in gradients
- Consistent rendering across all environments

## Testing Checklist

Before deploying, verify:
- [ ] No `/20`, `/10`, etc. opacity modifiers in gradient classes
- [ ] Screenshots render with correct colors in Puppeteer
- [ ] Colors match between browser and automated screenshots
- [ ] Gradients use explicit Tailwind color classes or hex values

## Examples from This Project

### Hero Section Background
```tsx
<div className=\"absolute inset-0 bg-gradient-to-br from-stone-50 to-green-50\"></div>
```

### About Section Background  
```tsx
<div className=\"aspect-square bg-gradient-to-br from-stone-100 to-green-100 rounded-3xl\">
```

These examples demonstrate proper gradient implementation that works consistently across all rendering environments.