const db = require("../models");

// Define methods for triviaController
module.exports = {
    // // Get the trivia data for all pokemon in the DB. 
    findAll: function (req, res) {
        db.Trivia.find({})
            .then(trivia => res.json(trivia))
            .catch(err => res.json(err));
    },
    // // Get "count" number of random trivia entries from the DB. Useful for populating trivia questions
    getRandom: function (req, res) {
        db.Trivia.aggregate(
            [{ $sample: { size: parseInt(req.params.count) } }]
        )
            .then(random => res.json(random))
            .catch(err => res.json(err))
    }
}