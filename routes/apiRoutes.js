const router = require("express").Router();
const db = require("../models");

// Get the trivia data for all pokemon in the DB. 
router.get("/pokemon", (req, res) => {
 
  db.Trivia.find({})
    .then(trivia => res.json(trivia))
    .catch(err => res.json(err));
});

router.get("/random/:count", (req, res) => {
  db.Trivia.aggregate(
    [{$sample: {size: parseInt(req.params.count)}}]
  )
  .then(random => res.json(random))
  .catch(err => res.json(err))
})
//change to notes for push

module.exports = router;
