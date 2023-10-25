const Course = require("../models/Course");

class SiteController {
  index(req, res) {
    // res.json({ name: "test" });
    try {
      Course.find({}).then(function (courses) {
        res.json(courses);
      });
    } catch (error) {
      console.log("Error: " + error);
      res.status(400).json({ error: "ERROR!!!" });
    }
    res.render("home");
  }

  //[GET] /news/slug
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
