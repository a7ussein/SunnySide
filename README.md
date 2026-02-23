# Sunnyside Home Care LLC — Website

Professional website for Sunnyside Home Care LLC, a PSS (Personal Support Services) business providing compassionate personal care in Lewiston, Maine.

## Structure

```
SunnySide/
├── index.html              # Main entry point
├── css/
│   ├── variables.css       # Design tokens (colors, typography, spacing)
│   ├── base.css            # Reset, typography, utilities
│   ├── components.css      # Buttons, forms, reusable UI
│   └── sections.css        # Section-specific styles
├── js/
│   ├── main.js             # Entry point
│   ├── particles.js        # Hero background particles
│   ├── nav.js              # Navigation & mobile menu
│   ├── animations.js       # Scroll-triggered fade-ins
│   └── faq.js              # FAQ accordion
├── sunnyside-*.svg         # Brand assets
└── sunnyside-brand-guide.html
```

## Run Locally

```bash
npx serve
# or
python -m http.server 8000
```

Then open http://localhost:3000 (or 8000) in your browser.

## Features

- **Modular CSS** — Variables, base, components, and sections in separate files
- **Accessibility** — Skip link, ARIA labels, semantic HTML, focus states
- **SEO** — Meta tags, Open Graph, Schema.org (HomeHealthCareService)
- **Responsive** — Mobile-first, hamburger menu, fluid typography
- **Sections** — Hero, About, Services, Why Us, Testimonials, Core Values, FAQ, Contact

## Contact Form

The contact form currently shows a success message on submit. To connect to a backend, update the `handleContactSubmit` function in `index.html` to POST to your API or form service (e.g., Formspree, Netlify Forms).
