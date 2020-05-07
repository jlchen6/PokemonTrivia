const router = require("express").Router();
const db = require("../models");

// Get the trivia data for all pokemon in the DB. 
router.get("/api/pokemon", (req, res) => {
 
  db.Trivia.find({

  })
    .then(trivia => res.json(trivia))
    .catch(err => res.status(422).end());
});

router.get("/api/random/:count", (req, res) => {
  db.Trivia.aggregate(
    [{$sample: {size: req.params.count}}]
  )
})


module.exports = router;
