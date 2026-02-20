# Copilot Instructions for EkoMart Frontend

## Project Overview

- React (JSX) + Vite + Tailwind + custom CSS architecture
- Main navigation: sticky, responsive, multi-level, with account/cart/wishlist logic
- State managed via Zustand stores (see `src/store/`)
- Firebase authentication (see `firebase/`)

## Navbar Responsive Rules

- Desktop (`>=1024px`):
  - All dropdowns open on hover only
  - No overlays, no hamburger menu
  - No mobile elements visible
- Mobile/Tablet (`<1024px`):
  - Menu hidden by default, opens via hamburger (right side slide)
  - Dark overlay covers page when open
  - Clear close button
  - No hover logic (tap/accordion only)
  - Dropdowns become tap/accordion
  - No desktop-only elements visible

## CSS/JSX Guidelines

- Do NOT change class names or break JSX structure
- Only add CSS or media queries as needed for responsive fixes
- Fix z-index, overflow, transform, and visibility issues for overlays/menus
- Ensure initial state is correct (no flashing)
- No new libraries, no feature removals

## Key Files

- Navbar logic: `src/common/NavBar/NavBar.jsx`
- Navbar styles: `src/common/NavBar/NavBar.css`
- Zustand stores: `src/store/`
- Utility functions: `src/utils/`
- Firebase: `firebase/firebase.js`

## Developer Workflow

- Start: `npm run dev` (Vite)
- Build: `npm run build`
- Lint: `npm run lint`
- No custom test scripts defined

## Patterns & Conventions

- Responsive handled via custom CSS + Tailwind utility classes
- Desktop/mobile logic split by `lg:` classes and media queries
- Overlay and menu open/close state managed by React state (`mobileMenuOpen`)
- Avoid inline styles except for dynamic progress bars

## Examples

- See `NavBar.jsx` for conditional rendering and menu logic
- See `NavBar.css` for all responsive and dropdown behaviors

---

For any AI agent: strictly follow the above rules and project conventions. Do not introduce new patterns or break existing UI/UX logic.
