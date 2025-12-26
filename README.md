# DropCulture // Editorial Brutal Retail

A high-concept e-commerce store demo built with Astro 5, Tailwind CSS, and a custom "Lookbook Brutal" design system.

## Project Structure

- **`src/pages`**: Application routes (Home, Drops, Product, Lookbook, Store, Contact).
- **`src/components`**: Reusable UI components (`PosterCard`, `DropGrid`, `LabelChip`).
- **`src/layouts`**: Global layouts (`MainLayout`).
- **`src/styles`**: Global CSS and design tokens.
- **`src/data`**: Typescript-typed mock data for products and drops.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) (Custom configuration in `tailwind.config.mjs`)
- **Deployment**: Static Site Generation (SSG) for GitHub Pages.

## key Features

- **Editorial Brutalism**: High contrast, monochromatic pallete with Acid Magenta (`#FF2DAB`) accent.
- **Micro-interactions**: Custom reveal animations using `IntersectionObserver` and CSS masks.
- **Performance**: Zero-JS core, lazy-loaded images, static HTML generation.
- **SEO/Accessibility**: Semantic HTML, ARIA labels, JSON-LD schemas.

## Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for GitHub Pages with the base URL `/demo-drop-culture/`.
To deploy:

1. Create a repository named `demo-drop-culture` on GitHub.
2. Push the code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/demo-drop-culture.git
   git push -u origin main
   ```
3. Enable GitHub Pages in repo settings (Source: GitHub Actions or deploy from branch).
