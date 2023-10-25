const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware handle form
app.use(express.json());

//template engine
app.engine(
  "hbs",

  engine({ extname: ".hbs" })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(path.join(__dirname, "resources/views"));

app.use(morgan("combined"));
//test
//Routes init
route(app);
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/news", (req, res) => {
//   res.render("news");
// });

// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.render("search");
// });
// app.post("/search", (req, res) => {
//   console.log("search", req.body);
//   res.render("search");
// });

app.listen(port, () => console.log(`Example app listening on port ${port}`));
