const express = require("express");
const router = express.Router();

const sitesController = require("../app/controllers/SiteController");

router.get("/search", sitesController.search);
router.get("/", sitesController.index);

module.exports = router;
