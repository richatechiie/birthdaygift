# 🎀 Happy Birthday Bhna — Interactive Card

An animated, click-through birthday website built from your gift card PDF —
every page now pops, floats, twinkles and slides in, and the whole thing is
tied together with one flow instead of static slides.

## How it's built

This is a **static frontend** (plain HTML / CSS / JS — no framework, no
build step) because everything here is view + click logic, so nothing
actually needs a backend or a database. A tiny **optional Express server**
(`server.js`) is included only as a convenient way to run it locally with
`npm start` instead of double‑clicking the file — you don't need it to use
the site.

```
noni_site/
├── index.html        → all 7 "pages" (sections), one active at a time
├── css/style.css      → design tokens + every animation/keyframe
├── js/script.js       → the page state machine (routing, gift tracking)
├── assets/            → images cropped from your original PDF
├── server.js           → optional Express static server
└── package.json
```

## How to open it

**Easiest:** just double‑click `index.html` — everything runs client‑side.

**With the optional server:**
```bash
npm install
npm start
# then open http://localhost:3000
```

## The flow

1. **Landing** — title letters drop in, the gift box floats up with sparkles,
   then "Are you excited??" and the Yes/No buttons pop in.
2. **No →** a grumpy penguin page ("How dare u?!"), with a **Go back** button
   that returns to the landing page.
3. **Yes →** "Gifts for you my sweetest sister" — 3 gift boxes. Click any of
   them (in any order) to open that gift. Each one you've opened gets a
   green checkmark. Once **all three** are opened, the bottom button
   changes from *"open in sequence"* into a pulsing **Next ➜** button.
4. **Gift 1** — background blobs fade in, a polaroid of you two flies up
   from below, then "HAPPY BIRTHDAY" + the message fade in and gently
   twinkle/glow. **back** returns to the gift grid.
5. **Gift 2** — the bouquet photo and the gift box photo fly in from
   opposite sides while petals drift down the page. **back** returns to the
   gift grid.
6. **Gift 3** — the "Happy Birthday" banner pops in first, then the cake‑cat,
   then every sticker pops in one‑by‑one with a little idle float.
   **back** returns to the gift grid.
7. **Final page** — once all three gifts are opened, tap **Next** on the
   gift grid to reach the heart‑plaid closing page: the message lines
   animate in one at a time, floating hearts twinkle, and **home** takes you
   all the way back to the landing page for a replay.

## Notes

- Fully responsive (phone → desktop) and keeps the same gift‑tracking logic
  on any screen size.
- Every image in `assets/` was cropped directly from your uploaded PDF, so
  the art style matches exactly — nothing was replaced with stock art.
- Press `Esc` anywhere to jump straight back to the landing page.
