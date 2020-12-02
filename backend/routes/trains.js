const router = require("express").Router();
const { SEARCH_TRAIN, SPOT_TRAIN } = require("../constants");
const searchService = require("../services/search-service");
const spotService = require("../services/spot-service");

router.route("/search").get((req, res) => {
  searchService(req, res, SEARCH_TRAIN)
});

router.route("/spot").get((req, res) => {
  spotService(req, res, SPOT_TRAIN)
});

module.exports = router;
