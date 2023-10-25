class NewController {
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/slug
  show(req, res) {
    console.log("aaa  ",
    
    res);


    res.send("NEW DETAILT");
  }
}

module.exports = new NewController();
