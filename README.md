# Garibook Assessment

A single-page marketing website for **Garibook**, an intercity car rental and ride booking platform in Bangladesh. The project is built with React and Vite, styled with Tailwind CSS, and animated with GSAP ScrollTrigger.

**Live Site:** https://garibook-assessment.vercel.app

---

## Overview

The site is a long-form landing page composed of stacked sections that tell the product story: hero and booking form, company stats, service categories, how-it-works steps, mobile app promotion, news and blogs, and a footer with a newsletter form.

Content covers the full Garibook ecosystem:

- **Rides** - intercity rentals, airport pick and drop, hourly rentals
- **Garibook Business** - corporate travel with a Vehicle Management System (VMS)
- **Garibook Club** - a community for car owners to earn from their vehicles
- **Smart Driver App** - a 0% commission driver application

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI library | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Animations | GSAP 3 (ScrollTrigger, MotionPathPlugin), Framer Motion |
| Icons | lucide-react, react-icons |
| Compiler | React Compiler (Babel preset) |
| Linting | ESLint 10 with React Hooks and React Refresh plugins |
| Font | Space Grotesk (Google Fonts) |
| Hosting | Vercel |

---

## Features

- **Sticky navbar** with scroll-aware styling, mobile drawer, active link tracking, and a language selector
- **Hero section** with switchable vehicle categories (Car, CNG, Truck, Bicycle) and a multi-step booking form
- **Stats section** with a scroll-scrubbed road SVG that draws itself while cards slide into place
- **Services tabs** (Rides, Business, Club, VMS) with content switching and a car animation driven along an SVG motion path
- **How it works** grid (choose car, driver, fare) plus rental use-case cards
- **Mobile app section** with a phone mockup, QR code, store badges, and copy-to-clipboard link
- **News and blogs** carousel with previous/next navigation
- **Footer** with sitemap columns and a newsletter subscribe form
- Fully responsive layout from mobile to wide desktop

---

## Code Structure & Architecture

### Project Layout

```
.
├── index.html                  # HTML entry, mounts React root, loads Space Grotesk
├── package.json                # Scripts and dependencies
├── vite.config.js              # Vite plugins: React, Tailwind, React Compiler
├── eslint.config.js            # Lint rules
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── main.jsx                # Application bootstrap
│   ├── App.jsx                 # Root component, section composition
│   ├── index.css               # Tailwind import, theme tokens, base styles
│   ├── assets/                 # Images, illustrations, and logos
│   ├── components/             # Reusable, self-contained UI pieces
│   │   ├── CarBookingForm.jsx
│   │   └── DriverPoster.jsx
│   └── pages/                  # Full-width page sections
│       ├── Navbar.jsx
│       ├── Landing.jsx
│       ├── About.jsx
│       ├── Service.jsx
│       ├── Heading.jsx
│       ├── Mobile_App.jsx
│       ├── New.jsx
│       └── Footer.jsx
└── dist/                       # Production build output
```

### Architecture Overview

The application follows a **static single-page composition** pattern. There is no router and no state management library; the entire site is one React tree rendered by `main.jsx`.

```
main.jsx
  └── <App />
        ├── <Navbar />          fixed header, shared UI state
        ├── <Landing />         hero + vehicle switcher + booking form
        ├── <About />           stats with GSAP road animation
        ├── <Service />         category tabs with motion path animation
        ├── <Heading />         how it works + rental use cases
        ├── <MobileApp />       app download promo
        ├── <New />             news and blog carousel
        └── <Footer />          sitemap + newsletter
```

### Layer Responsibilities

**1. Entry layer**

- `index.html` - document shell, root element, font preconnect, page title.
- `src/main.jsx` - creates the React root and renders `<App />` inside `StrictMode`.

**2. Composition layer**

- `src/App.jsx` - the only place where sections are ordered. Each section is an independent import, so sections can be added, removed, or reordered without touching their internals.

**3. Section layer (`src/pages/`)**

| File | Responsibility |
| --- | --- |
| `Navbar.jsx` | Fixed navigation. Holds scroll position, mobile menu open state, active link, and language dropdown. Injects the Space Grotesk font link at runtime as a fallback. |
| `Landing.jsx` | Hero section. Owns `selectedVehicle` state and maps each vehicle type to a hero image and icon, then renders `CarBookingForm` underneath. |
| `About.jsx` | Company stats. Uses `useLayoutEffect` + `gsap.context` with a scrubbed timeline: the road path draws via `strokeDashoffset` while stat cards enter from alternating directions. |
| `Service.jsx` | Category tabs (Rides, Business, Club, VMS). Switches content by category id and animates a car along an SVG path with `MotionPathPlugin`. |
| `Heading.jsx` | Presentational. Renders the "choose car / driver / fare" steps and the rental use-case cards from local data arrays. |
| `Mobile_App.jsx` | App download promo with phone mockup, QR code, and a copy-link interaction using a timed `copied` state. |
| `New.jsx` | News and blog carousel driven by local data arrays and index-based navigation. |
| `Footer.jsx` | Sitemap columns, contact details, and a controlled newsletter input with a submit handler. |

**4. Component layer (`src/components/`)**

| File | Responsibility |
| --- | --- |
| `CarBookingForm.jsx` | Self-contained booking form. Owns all form state locally (car selection, trip type, pickup, destination, date, time) and logs the payload on submit. |
| `DriverPoster.jsx` | Static promotional block for the Smart Driver App with decorative SVG arrows. |

**5. Asset layer (`src/assets/`)**

Images are imported directly into modules so Vite fingerprints and bundles them. No assets are referenced by absolute runtime paths.

**6. Style layer (`src/index.css`)**

- Imports Tailwind and the Google Font.
- Declares the `--font-sans` theme token so `font-sans` resolves to Space Grotesk.
- Sets global box-sizing, margins, and font-family overrides for form controls.

### State and Data Flow

- **Local state only.** Every interactive piece (`Navbar`, `Landing`, `Service`, `Mobile_App`, `New`, `Footer`, `CarBookingForm`) keeps its own `useState`. There is no shared or global store.
- **No backend calls.** Content lives in module-level constants (`vehicleData`, `CATEGORY_CONTENT`, `newsArticles`, `blogPosts`, `CARS`, `NAV_LINKS`, `footerNavigation`), so sections are easy to re-content without changing markup.
- **Event flow is one-directional and leaf-ward.** `Landing` passes nothing down; `CarBookingForm` reports its payload internally on submit.

### Animation Architecture

- **GSAP** is the primary animation engine. `About` and `Service` register `ScrollTrigger` (and `MotionPathPlugin` for the moving car) at module scope.
- Timelines are created inside `gsap.context` within `useLayoutEffect`, scoped to a section ref so they can be cleaned up correctly on unmount.
- Animations are **scroll-scrubbed**, meaning progress is tied to scroll position and reverses naturally when scrolling up.
- Small UI transitions (hover states, phone rotation, copy confirmation) use Tailwind transition utilities; Framer Motion is available for React-level motion.

### Build Architecture

`vite.config.js` wires three plugins:

1. `@vitejs/plugin-react` - JSX transform and Fast Refresh.
2. `@tailwindcss/vite` - Tailwind CSS 4 build integration.
3. `@rolldown/plugin-babel` with `reactCompilerPreset()` - runs the React Compiler so memoization is automatic.

---

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm (or a compatible package manager)

### Installation

```bash
git clone <repository-url>
cd garibook_assessment
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement. Open the printed local URL in your browser.

### Production Build

```bash
npm run build
```

Outputs the optimized static site to the `dist/` directory.

### Preview the Build

```bash
npm run preview
```

Serves the contents of `dist/` locally to verify the production build.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

---

## Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Start the development server |
| `build` | `npm run build` | Create a production build |
| `lint` | `npm run lint` | Run ESLint checks |
| `preview` | `npm run preview` | Preview the production build |

---

## Deployment

The site is deployed on Vercel as a static Vite project:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Framework preset:** Vite

Every push to the main branch triggers a new deployment.

---

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Edge, Safari). The layout is responsive across mobile, tablet, and desktop viewports.
