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
    // create: function(req, res) {
    //     db.User.create(req.body)
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.json(err))
    // },
    create: function(userBody) { //create a new user
        return db.User.create(userBody)
            .then(result => result)
            .catch(err => err);
    },
    // update: function(req, res) {
    //     // console.log("req", req)
    //     db.User.update(req.body)
    //     .then(dbUser => res.json(dbUser))
    //     .catch(err => res.json(err))
    // },
    update: function(userBody) {
        console.log("Updating...")
        return db.User.findOneAndUpdate(
            {username: userBody.username}, //find a user by userId
            userBody, //and then update with user data
            {new: true, useFindAndModify: false} //return new user
        )
    },
    createOrUpdate: function(user) { 
        //If new user, create, else update user
        // console.log("user", user);
        return db.User
            .find({username: user.username})
            .then(dbUser => { //returns an array of user objects
                if(dbUser.length > 0){
                    return this.update(user);
                } else {
                    return this.create(user);
                }
            }).catch(err => err);
    }
}