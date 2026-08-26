# Criminality

Criminality is a red-and-black promotional website for a MultiCraft server. It presents the server as a high-risk survival experience with crew warfare, glowing combat UI, server intel, and join information.

## Tech Stack

- TanStack Start
- React 19
- TanStack Router
- Tailwind CSS 4
- Lucide React icons
- Netlify deployment

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Editing Server Details

The homepage content lives in `src/routes/index.tsx`. Update the placeholder server address and Discord invite in the `join-card` section when the real details are available.

The visual theme lives in `src/styles.css`, including the red-and-black color variables, glow effects, responsive layout rules, and typography.
