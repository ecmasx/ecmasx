# Portfolio Starter

This project uses React, Vite, React Router, and Tailwind CSS.

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Routes

- `/`
- `/projects`
- `/stack`

## Notes

Client-side routing is handled by `react-router-dom`, so navigation updates the URL
without a full page reload. The current UI is a dark desktop-first portfolio layout
with a sticky sidebar and dedicated `Home`, `Projects`, and `Stack` routes.

For static hosting, configure SPA fallback rewrites so all unknown routes serve
`index.html`.
