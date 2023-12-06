const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const { engine } = require("express-handlebars");
const path = require("path");

const SortMiddleware = require("./app/middlewares/sortMiddleware");

const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

//connect to DB
db.connect();
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/press_dev"
// );

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware handle form
app.use(express.json());
app.use(methodOverride("_method"));

//Custom middleware
app.use(SortMiddleware);
app.get(
  "/name",
  function (req, res, next) {
    if (req.query.admin === "admin") {
      next();
    }
    res.status(403).json({ message: "Invalid admin" });
  },
  function (req, res, next) {
    res.json({ message: "Successfully" });
  }
);

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: require("./helpers/handlebars"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("combined"));

//Routes init
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
// "start": "nodemon --inspect src/index.js",
