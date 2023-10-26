const Course = require("../models/Course");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class SiteController {
  //[GET] /courses/:slug

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
    // res.send("COURSE DETAIL-" + req.params.slug);
  }
}

module.exports = new SiteController();
