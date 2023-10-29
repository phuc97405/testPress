const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const $ = require("jquery");

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware handle form
app.use(express.json());
app.use(methodOverride("_method"));

//template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("combined"));
//test
//Routes init
route(app);

app.listen(port, () => console.log(`App listening on port ${port}`));
