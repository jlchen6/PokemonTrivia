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

// Get all the users in the database
router.get("/users", (req, res) => {
  db.User.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err));
})

// Get all users that match the inputted username
router.get("/users/:username", (req, res) => {
  db.User.find({username: req.params.username})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// route to add a new user to the db
router.post("/users", (req, res) => {
  const user = new db.User(req.body);
  db.User.create(user)
  .then(dbUser => res.json(dbUser))
  .catch(err => res.json(err))
})


module.exports = router;
