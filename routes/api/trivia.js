const router = require("express").Router();
const db = require("../models");

// Get the trivia data for all pokemon in the DB. 
router.get("/pokemon", (req, res) => {
 
  db.Trivia.find({})
    .then(trivia => res.json(trivia))
    .catch(err => res.json(err));
});

// Get "count" number of random trivia entries from the DB. Useful for populating trivia questions
router.get("/random/:count", (req, res) => {
  db.Trivia.aggregate(
    [{$sample: {size: parseInt(req.params.count)}}]
  )
  .then(random => res.json(random))
  .catch(err => res.json(err))
})


module.exports = router;
