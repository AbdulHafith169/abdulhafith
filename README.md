# Abdul Hafeez Mohamed Abu-Grara – Portfolio

A modern, responsive personal portfolio website for Abdul Hafeez Mohamed Abu-Grara, hosted on GitHub Pages.

## Live Site

Visit the site at: `https://abdulhafith169.github.io/abdulhafith/`

## Project Structure

```
.
├── index.html    # Single-page portfolio
├── style.css     # All styles (dark/light theme, responsive layout, animations)
├── script.js     # Theme toggle, mobile nav, scroll animations, typed-text effect
└── cv/
    └── Abdul_Hafeez_CV.pdf   # ← Add your CV file here for the Download CV button
```

## Adding Your CV

The "Download CV" button in the Hero section links to `cv/Abdul_Hafeez_CV.pdf`.  
To enable it, place your CV file at that path:

```bash
mkdir -p cv
cp /path/to/your/cv.pdf cv/Abdul_Hafeez_CV.pdf
```

## Updating Contact Information

Open `index.html` and search for `abdulhafeez@example.com` and `linkedin.com/in/abdulhafeez` to replace them with your real details.

## Features

- 🌙 Dark / ☀️ Light mode toggle (persisted in `localStorage`)
- 📱 Mobile-responsive with hamburger menu
- ✨ Scroll-reveal animations (IntersectionObserver)
- ⌨️ Typed-text hero effect
- 🎨 Google Fonts (Inter + Fira Code)
- 🔗 Font Awesome icons
