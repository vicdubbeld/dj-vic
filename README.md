# thedjvic.com

Personal DJ website for V!C (Vic Dubbeld) — a Portland-based open format DJ specializing in R&B, soul, funk, and hip-hop on vinyl and digital.

Live at [thedjvic.com](https://thedjvic.com)

## About the project

Built from scratch in a single session as part of a larger effort to establish V!C's online presence and DJ brand. The goal was a clean, bold, editorial site that feels like a music site — not a generic DJ template. Modeled loosely after [adjnamedflow.com](https://www.adjnamedflow.com) but with its own identity.

Features include an upcoming shows section, mix archive, light/dark mode toggle with localStorage persistence, SEO metadata optimized for Portland DJ search terms, and Vercel Analytics.

Deployed on Vercel with DNS managed through GoDaddy → Vercel nameservers. Auto-deploys on every push to main.

## Stack

- Next.js 15 (App Router)
- TypeScript
- CSS Modules
- Vercel (hosting + analytics)

## Brand

- Primary color: `#ff6404`
- Display font: Bebas Neue
- Mono font: DM Mono
- Body font: DM Sans

## Project structure

```
app/
  layout.tsx        # Root layout, metadata, SEO
  page.tsx          # Homepage — assembles all components
  globals.css       # CSS variables, light/dark theme tokens

components/
  Nav.tsx           # Sticky nav with theme toggle
  Hero.tsx          # Full photo split layout
  Stats.tsx         # 3-up stat bar
  About.tsx         # Two-photo grid with bio
  Shows.tsx         # Upcoming sets with dates and venues
  Mixes.tsx         # Mix archive linking to YouTube
  Venues.tsx        # Venue tag grid
  BookCTA.tsx       # Booking call to action
  ThemeProvider.tsx # Light/dark context + localStorage
  ThemeToggle.tsx   # Toggle button in nav
  Footer.tsx        # Social links
```