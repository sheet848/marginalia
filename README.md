# The Book Nook Store - Marginalia

This project uses:

- Framework: TanStack Start v1 (React 19 full-stack framework with SSR) on Vite 7
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4 (via src/styles.css) with shadcn/ui (New York style) components and tw-animate-css
- Routing: TanStack Router (file-based routing in src/routes/)
- State management: Redux Toolkit + React-Redux (cart slice in src/store/)
- Data fetching: TanStack Query (React Query)
- Fonts: Fraunces (serif) + Inter (sans), loaded from Google Fonts
- Icons: Lucide
- Runtime/tooling: Bun as package manager; deployed to a Cloudflare Workers-style edge runtime
- Project-specific code: Custom BookCard / BookCover components, a books dataset in src/data/books.ts, and a generated hero image asset

No backend is enabled — all data is currently local/static.
