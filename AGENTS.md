# Criminality Project Notes

## Project Overview

Criminality is a promotional website for a MultiCraft server. The visual direction is an aggressive red-and-black survival/crime theme with glowing UI accents, grid overlays, and compact server information.

## Key Technologies

- TanStack Start with React 19
- TanStack Router file-based routes
- Tailwind CSS 4 through the Vite plugin
- Lucide React icons
- Netlify deployment through `@netlify/vite-plugin-tanstack-start`

## Key Directories

- `src/routes/__root.tsx` defines the document shell and metadata.
- `src/routes/index.tsx` contains the main Criminality landing page.
- `src/styles.css` contains the global theme, typography, layout, glow effects, and responsive styles.
- `public/` stores static assets such as the favicon and placeholder image.

## Coding Conventions

- Keep route components focused and colocated in `src/routes`.
- Use CSS variables in `src/styles.css` for theme colors before adding new hard-coded palette values.
- Use Lucide icons for UI symbols when possible.
- Keep text concise and server-specific; avoid generic marketing filler.
- Preserve the red-and-black glow identity for new sections or components.

## Non-Obvious Decisions

The site intentionally uses a single landing route instead of a full multi-page server portal. The user requested a website for the server name and aesthetic, so the first version prioritizes a strong public-facing homepage with editable placeholders for the server address and Discord invite.
