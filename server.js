// Optional tiny server — the site is 100% static, so this is only here for
// convenience if you'd rather run `node server.js` than open index.html
// directly or use `npx serve`.
//
// Usage:
//   npm install
//   npm start
//   open http://localhost:3000

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`🎀  Birthday site running at http://localhost:${PORT}`);
});
