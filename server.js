const next = require("next");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const routes = require("./config/routes");
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(handler);

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${3000}`);
  });
});
