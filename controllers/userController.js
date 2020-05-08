const db = require("../models");

// Define methods for the userController
module.exports = {
    findByUsername: function(req, res) {
        db.User.find({username: req.params.username})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err));
    },
    findAll: function(req, res) {
        db.User.find({})
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.json(err));
    },
    create: function(req, res) {
        db.User.create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err))
    },
    // update: function(req, res) {
    //     db.User.update(req.body)
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.json(err))
    // },
    // createOrUpdate: function(user) { 
    //     //If new user, create, else update user
    //     return db.User
    //         .find({username: user.username})
    //         .then(dbUser => { //returns an array of user objects
    //             if(dbUser.length > 0){
    //                 //console.log(dbUser[0].username+" exists");
    //                 return this.update(user);
    //             } else {
    //                 //console.log("User does not exist");
    //                 return this.create(user);
    //             }
    //         }).catch(err => err);
    //     //Catch is end of return db.User section
    // }
}