const router = require("express").Router();
const triviaController = require("../../controllers/triviaController")

// matches with "/api/pokemon"
router.route("/")
.get(triviaController.findAll)

router.route("/random/:count")
.get(triviaController.getRandom)

module.exports = router;
