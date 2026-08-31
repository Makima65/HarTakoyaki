# Siligna Resort and Events Place

## Project Context
We are building a private resort showcase web application optimized for direct Messenger/Viber bookings. We are using mock data for the packages and amenities until the client provides final details, but the core branding and contact reflect the live business.

## Aesthetic Translation (Strict UI/UX Guidelines)
The design must replicate a high-end, "Cine-Editorial" studio aesthetic.

### Colors
- **Backgrounds:** True black (`bg-black` or `#000000`)
- **Surface Cards:** Dark surface cards (`bg-neutral-900` or `#171717`)
- **Primary Text:** Pure white (`text-white`)
- **Secondary Text:** Muted gray (`text-neutral-400`)
- **Borders:** Incredibly subtle (`border-neutral-800`)

### Typography Layouts
- **Headings:** High-contrast Serif (e.g., Playfair Display). You MUST mix regular and *italic* text within the same main headings for an editorial feel (e.g., `Siligna Resort. *A private sanctuary.*`).
- **Body:** Clean, legible Sans-Serif (e.g., Inter), kept relatively small and highly readable.
- **Labels/Accents:** Uppercase Monospace with wide letter spacing for all eyebrows, nav links, and timecodes (e.g., `text-xs font-mono uppercase tracking-[0.2em] text-neutral-400`).

### Component Anatomy
- **Navbar:** Transparent, floating at the top, small uppercase tracking links, and a very minimalist bordered "BOOK NOW" button (white text, no background, white border on hover).
- **Timeline/Process:** Use a strict grid where the left column is just the monospace timecode (`00:01`), followed by an italic Serif title, and a small sans-serif description.
- **Cards:** Sharp corners or very subtle rounding (`rounded-md`), solid dark gray backgrounds, minimal padding, zero drop-shadows.
