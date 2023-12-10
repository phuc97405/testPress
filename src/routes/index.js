const newsRouter = require("./news");
const siteRouter = require("./sites");
const coursesRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/me2", siteRouter);
}

module.exports = route;
