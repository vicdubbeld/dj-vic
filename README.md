# thedjvic.com

V!C DJ website — built with Next.js 14, TypeScript, CSS Modules.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx       # Root layout, metadata, global font import
  page.tsx         # Homepage — assembles all components
  globals.css      # CSS variables, brand colors, base styles

components/
  Nav.tsx / .module.css
  Hero.tsx / .module.css
  Stats.tsx / .module.css
  About.tsx / .module.css
  Mixes.tsx / .module.css
  Venues.tsx / .module.css
  BookCTA.tsx / .module.css
  Footer.tsx / .module.css
```

## TODOs before launch

- [ ] Replace YouTube URLs in `components/Mixes.tsx` with real links
- [ ] Update Instagram/YouTube/Discogs URLs in `components/Footer.tsx`
- [ ] Add a real photo to the Hero (replace the vinyl graphic)
- [ ] Write final bio copy in `components/About.tsx`
- [ ] Register thedjvic.com and point DNS
- [ ] Deploy to Vercel: `npx vercel`

## Deployment

Vercel is the easiest path:

```bash
npm i -g vercel
vercel
```

Then add your custom domain in the Vercel dashboard.

## Brand

- Primary color: `#ff6404`
- Display font: Bebas Neue
- Mono font: DM Mono
- Body font: DM Sans
