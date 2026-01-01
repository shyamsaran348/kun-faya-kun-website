# Kun Faya Kun Automation Engineering - Corporate Website

A professional, static corporate website for Kun Faya Kun Automation Engineering, showcasing industrial automation products.

## Project Overview

- **Stack**: React (Vite) + React Router
- **Data**: Static JSON (`src/data`) - No Backend
- **Styling**: Pure CSS (`src/styles/main.css`)
- **Type**: Single Page Application (SPA), static-export ready.

## How to Run Locally

1.  **Install Dependencies** (First time only):
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    This will start the local server at `http://localhost:5173`. Updates will reflect instantly.

## How to Build for Production

1.  **Generate Static Build**:
    ```bash
    npm run build
    ```
    This creates a `dist/` folder containing the optimized website.

2.  **Preview Production Build**:
    ```bash
    npm run preview
    ```
    This serves the `dist/` folder locally to verify the production build.

## Project Structure

```
src/
├── components/     # Reusable UI components (ProductCard, etc.)
├── data/          # JSON data files (products.json, categories.json)
├── layouts/       # MainLayout (Header/Footer)
├── pages/         # Route components (Home, Products, Detail)
├── styles/        # Global CSS
└── routes/        # AppRoutes configuration
```

## Deployment

This project is ready for static hosting services like **Netlify** or **Vercel**.
Simply connect your repository and set the build command to `npm run build` and publish directory to `dist`.
# kun-faya-kun-website
