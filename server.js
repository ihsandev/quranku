const next = require("next");
const express = require("express");
const dev = process.env.NODE_ENV !== "production";
const routes = require("./config/routes");
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(handler);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
