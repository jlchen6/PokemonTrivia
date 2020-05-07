const router = require("express").Router();
const db = require("../models");

// Get the trivia data for the pokemon with the given id. 
router.get("/api/pokemon/:id", (req, res) => {
 
  db.Trivia.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(trivia => res.json(trivia))
    .catch(err => res.status(422).end());
});

router.get("/api/size", (req, res) => {
  db.Trivia.find({})
  .then(data => {
    res.json(data.length)
  })
})

module.exports = router;
