const router = require("express").Router();
const db = require("../models");

// Get all the users in the database
router.get("/users", (req, res) => {
    db.User.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

// Get all users that match the inputted username
router.get("/users/:username", (req, res) => {
    db.User.find({ username: req.params.username })
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