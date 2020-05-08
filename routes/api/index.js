const path = require("path");
const router = require("express").Router();
const triviaRoutes = require("./trivia");
const userRoutes = require("./user");

// Book routes
router.use("/pokemon", triviaRoutes);

// Google Routes
router.use("/users", userRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
