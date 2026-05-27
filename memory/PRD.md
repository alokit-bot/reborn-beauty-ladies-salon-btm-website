# Reborn Beauty Ladies Salon — PRD

## Original Problem Statement
Build a 5-section frontend-only marketing website for Reborn Beauty Ladies Salon, BTM Layout, Bengaluru (10+ years in business, 4.5★ on Google). Include Hero, About, Services with pricing, Gallery, and Contact with Maps. Use deep rose/gold/cream palette, Playfair Display + Lato typography. No backend.

## User Personas
- **Local BTM woman (18–50)** browsing on mobile, seeking everyday salon services
- **Bride / bride's family** researching bridal-makeup studios before booking
- **Returning customer** wanting a quick phone number or directions

## Core Requirements (Static)
- Single-page React site, mobile-first responsive
- 5 scrollable sections + sticky nav + footer
- Click-to-call (`tel:+918041119254`) on all primary CTAs
- Google Maps embed + Get Directions external link
- INR (₹) pricing across 4 service categories
- Accessibility note (wheelchair-accessible) in footer
- Fonts: Playfair Display (headings), Lato (body)
- Colors: #C2185B (rose), #F9A825 (gold), #FFF8E7 (cream), #2D2D2D (charcoal)

## Implemented (2025-12)
- ✅ Sticky glassmorphism Navigation with mobile hamburger menu
- ✅ Hero — full-viewport bridal image, tagline, dual CTAs (book + see services), 4.5★ reviews badge
- ✅ About — editorial 2-column layout, stats (10+ years / 1,500+ reviews / 4.5★), 3 pillars (women-only / bridal specialists / neighbourhood)
- ✅ Services — 4 cardless categories (Bridal, Hair, Skin, Waxing & Nails) with full price ranges, hover rows, footer CTA
- ✅ Gallery — bento/tetris grid with bridal + hair + skin imagery, hover zoom
- ✅ Contact — dark charcoal section, phone + directions CTAs, full address, embedded Google Maps iframe, 7-day hours table
- ✅ Footer — brand mark, phone, hours, wheelchair-accessibility note
- ✅ Smooth scroll navigation between sections
- ✅ data-testid on all interactive elements

## Architecture
- React 19 + react-router-dom (single `/` route)
- Tailwind CSS for styling
- lucide-react for icons
- Component structure: `/app/frontend/src/components/site/{Navigation,Hero,About,Services,Gallery,Contact,Footer}.jsx`
- No backend, no MongoDB, no API calls

## Backlog (P1 / P2)
- **P1**: Instagram link + embed of recent posts (social proof for brides)
- **P1**: Testimonials carousel with real Google review excerpts
- **P1**: WhatsApp click-to-chat once the salon enables WhatsApp Business
- **P2**: Bridal-package landing pages (e.g. /bridal-trial)
- **P2**: Online booking form with date picker + service selector
- **P2**: Hindi/Kannada language toggle
- **P2**: SEO meta tags + JSON-LD LocalBusiness schema for Google rich results
