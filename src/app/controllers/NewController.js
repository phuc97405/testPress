class NewController {
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/slug
  show(req, res) {
    console.log("aaa  ", res);
    res.send("NEW DETAILT");
  }

  // hide(req, res) {
  //   console.log("aaa ", res);
  // }
}

module.exports = new NewController();
