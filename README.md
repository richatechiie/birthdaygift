# 🎀 Happy Birthday Bhna — An Interactive Birthday Experience

A little piece of code, a lot of love. 💗

**Happy Birthday Bhna** is a personalized, animated birthday website created as a digital gift for my sister. Instead of a traditional birthday card, I built an interactive experience where every click reveals a new surprise, every animation adds a little magic, and every page carries a piece of my love for her.

Built with **HTML5, CSS3, and Vanilla JavaScript**, the website combines playful animations, interactive gift boxes, personalized visuals, and a multi-page navigation flow — all wrapped into one heartfelt experience.

## ✨ Features

- 🎁 **Interactive Landing Page** — Animated title, floating gift box, sparkles, and playful Yes/No buttons.
- 🐧 **Playful No-Button Interaction** — A fun penguin page with a navigation button to return home.
- 🎀 **Three Unlockable Gifts** — Users can open gifts in any order, with visual indicators tracking their progress.
- 📸 **Personalized Gift Pages** — Memories, birthday wishes, bouquet photos, and cute illustrations presented through animated layouts.
- 💖 **Animated Final Surprise** — A heart-themed closing page with sequential text animations and floating hearts.
- 🔄 **Replayable Experience** — Navigate between sections or return to the beginning to relive the surprise.
- 📱 **Responsive Design** — Layouts adapt to mobile, tablet, and desktop screen sizes.
- ⌨️ **Keyboard Interaction** — Press `Esc` to return to the landing page from anywhere in the experience.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and organization of all seven page sections |
| CSS3 | Styling, responsive layouts, keyframe animations, transitions, and visual effects |
| Vanilla JavaScript (ES6+) | Navigation logic, event handling, and gift progression |
| DOM Manipulation | Updating page visibility, button states, and gift completion indicators |
| Node.js + Express.js *(optional)* | Serving static frontend files through a local development server |
| npm | Managing the optional server's dependencies and start script |

## 🧩 How It Works

The website behaves like a small client-side application, even though it doesn't use a frontend framework.

**1. Section-Based Navigation**

All seven screens are defined as sections inside `index.html`. JavaScript controls which section is active, creating a single-page experience without full-page reloads.

**2. State Management**

A JavaScript state variable tracks which gifts have been opened. The gift grid updates dynamically to display completion indicators and enables the final navigation button only after all three gifts have been opened.

**3. Event-Driven Interactions**

Click event listeners handle the Yes/No choices, gift selection, back navigation, home navigation, and keyboard shortcuts.

**4. CSS Animation System**

Reusable CSS keyframes and transitions power floating elements, falling petals, glowing text, bouncing stickers, sparkles, and staggered entrance animations.

**5. Responsive UI**

CSS media queries and flexible layouts help maintain a consistent experience across different screen sizes without changing the underlying gift-tracking logic.

## 🎁 The Experience Flow

The website contains seven interactive sections:

1. **Landing Page** — A birthday welcome with animated typography and a floating gift box.
2. **Penguin Page** — A funny response when the user selects “No.”
3. **Gift Selection Page** — Three gift boxes that can be opened in any order.
4. **Gift 1: Birthday Wishes** — A polaroid-style memory, birthday message, and soft glowing effects.
5. **Gift 2: Flowers & Surprises** — Bouquet and gift imagery animated from opposite directions.
6. **Gift 3: Cake & Stickers** — A birthday banner, a cute cake-cat illustration, and sequential sticker animations.
7. **Final Surprise** — A heart-plaid closing screen with animated birthday messages and floating hearts.

Each gift page provides a way back to the selection screen. Once all three gifts are opened, the final surprise becomes accessible.

## 📂 Project Structure

```text
noni_site/
├── index.html          # Seven interactive page sections
├── css/
│   └── style.css       # Styling, responsive rules, animations
├── js/
│   └── script.js      # Navigation, event handling, gift state
├── assets/             # Personalized images extracted from the PDF
├── server.js           # Optional Express static server
├── package.json        # Project metadata and npm scripts
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Option 1: Run Without a Server

Since the core application is a static frontend, you can open `index.html` directly in your browser.

No build process, database, or backend service is required.

### Option 2: Run Using Express

If you prefer serving the project locally through Node.js:

**Prerequisites:** Node.js and npm installed.

```bash
# Install dependencies
npm install

# Start the local server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

*Note: The optional Express server must be configured in `server.js` and referenced by the `start` script in `package.json`.*

## 💡 Technical Highlights

- Implemented client-side navigation using DOM manipulation and active-section management.
- Designed an event-driven interaction model using JavaScript event listeners.
- Maintained gift completion state to control progression through the experience.
- Used CSS keyframes, transitions, and staggered animations to create dynamic visual feedback.
- Organized styling, application logic, and assets into separate files for maintainability.
- Built a responsive interface without relying on external frontend frameworks.
- Kept the architecture lightweight by avoiding unnecessary backend services and database dependencies.

## 🎨 Design Philosophy

The goal wasn't just to make a birthday website — it was to make opening a digital gift feel special.

Every animation, interaction, and personalized image was chosen to make the experience feel playful, warm, and memorable. The visuals are based on the original birthday gift PDF, preserving the personal style of the gift rather than replacing it with generic imagery.

## ❤️ Why I Built This

This project is a reminder that technology doesn't always have to solve a business problem or optimize a process. Sometimes, it can simply help us express love in a more creative way.

I wanted to give my sister something she could click through, explore, smile at, and revisit — a small digital experience made just for her.

**Built with HTML, CSS, JavaScript, and lots of love. 🎀💗**

---

*Made for my sweetest sister, Bhna. Happy Birthday!* 🎂# 🎀 Happy Birthday Bhna — An Interactive Birthday Experience

A little piece of code, a lot of love. 💗

**Happy Birthday Bhna** is a personalized, animated birthday website created as a digital gift for my sister. Instead of a traditional birthday card, I built an interactive experience where every click reveals a new surprise, every animation adds a little magic, and every page carries a piece of my love for her.

Built with **HTML5, CSS3, and Vanilla JavaScript**, the website combines playful animations, interactive gift boxes, personalized visuals, and a multi-page navigation flow — all wrapped into one heartfelt experience.

## ✨ Features

- 🎁 **Interactive Landing Page** — Animated title, floating gift box, sparkles, and playful Yes/No buttons.
- 🐧 **Playful No-Button Interaction** — A fun penguin page with a navigation button to return home.
- 🎀 **Three Unlockable Gifts** — Users can open gifts in any order, with visual indicators tracking their progress.
- 📸 **Personalized Gift Pages** — Memories, birthday wishes, bouquet photos, and cute illustrations presented through animated layouts.
- 💖 **Animated Final Surprise** — A heart-themed closing page with sequential text animations and floating hearts.
- 🔄 **Replayable Experience** — Navigate between sections or return to the beginning to relive the surprise.
- 📱 **Responsive Design** — Layouts adapt to mobile, tablet, and desktop screen sizes.
- ⌨️ **Keyboard Interaction** — Press `Esc` to return to the landing page from anywhere in the experience.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure and organization of all seven page sections |
| CSS3 | Styling, responsive layouts, keyframe animations, transitions, and visual effects |
| Vanilla JavaScript (ES6+) | Navigation logic, event handling, and gift progression |
| DOM Manipulation | Updating page visibility, button states, and gift completion indicators |
| Node.js + Express.js *(optional)* | Serving static frontend files through a local development server |
| npm | Managing the optional server's dependencies and start script |

## 🧩 How It Works

The website behaves like a small client-side application, even though it doesn't use a frontend framework.

**1. Section-Based Navigation**

All seven screens are defined as sections inside `index.html`. JavaScript controls which section is active, creating a single-page experience without full-page reloads.

**2. State Management**

A JavaScript state variable tracks which gifts have been opened. The gift grid updates dynamically to display completion indicators and enables the final navigation button only after all three gifts have been opened.

**3. Event-Driven Interactions**

Click event listeners handle the Yes/No choices, gift selection, back navigation, home navigation, and keyboard shortcuts.

**4. CSS Animation System**

Reusable CSS keyframes and transitions power floating elements, falling petals, glowing text, bouncing stickers, sparkles, and staggered entrance animations.

**5. Responsive UI**

CSS media queries and flexible layouts help maintain a consistent experience across different screen sizes without changing the underlying gift-tracking logic.

## 🎁 The Experience Flow

The website contains seven interactive sections:

1. **Landing Page** — A birthday welcome with animated typography and a floating gift box.
2. **Penguin Page** — A funny response when the user selects “No.”
3. **Gift Selection Page** — Three gift boxes that can be opened in any order.
4. **Gift 1: Birthday Wishes** — A polaroid-style memory, birthday message, and soft glowing effects.
5. **Gift 2: Flowers & Surprises** — Bouquet and gift imagery animated from opposite directions.
6. **Gift 3: Cake & Stickers** — A birthday banner, a cute cake-cat illustration, and sequential sticker animations.
7. **Final Surprise** — A heart-plaid closing screen with animated birthday messages and floating hearts.

Each gift page provides a way back to the selection screen. Once all three gifts are opened, the final surprise becomes accessible.

## 📂 Project Structure

```text
noni_site/
├── index.html          # Seven interactive page sections
├── css/
│   └── style.css       # Styling, responsive rules, animations
├── js/
│   └── script.js      # Navigation, event handling, gift state
├── assets/             # Personalized images extracted from the PDF
├── server.js           # Optional Express static server
├── package.json        # Project metadata and npm scripts
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Option 1: Run Without a Server

Since the core application is a static frontend, you can open `index.html` directly in your browser.

No build process, database, or backend service is required.

### Option 2: Run Using Express

If you prefer serving the project locally through Node.js:

**Prerequisites:** Node.js and npm installed.

```bash
# Install dependencies
npm install

# Start the local server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

*Note: The optional Express server must be configured in `server.js` and referenced by the `start` script in `package.json`.*

## 💡 Technical Highlights

- Implemented client-side navigation using DOM manipulation and active-section management.
- Designed an event-driven interaction model using JavaScript event listeners.
- Maintained gift completion state to control progression through the experience.
- Used CSS keyframes, transitions, and staggered animations to create dynamic visual feedback.
- Organized styling, application logic, and assets into separate files for maintainability.
- Built a responsive interface without relying on external frontend frameworks.
- Kept the architecture lightweight by avoiding unnecessary backend services and database dependencies.

## 🎨 Design Philosophy

The goal wasn't just to make a birthday website — it was to make opening a digital gift feel special.

Every animation, interaction, and personalized image was chosen to make the experience feel playful, warm, and memorable. The visuals are based on the original birthday gift PDF, preserving the personal style of the gift rather than replacing it with generic imagery.

## ❤️ Why I Built This

This project is a reminder that technology doesn't always have to solve a business problem or optimize a process. Sometimes, it can simply help us express love in a more creative way.

I wanted to give my sister something she could click through, explore, smile at, and revisit — a small digital experience made just for her.

**Built with HTML, CSS, JavaScript, and lots of love. 🎀💗**

---

*Made for my sweetest sister, Bhna. Happy Birthday!* 🎂