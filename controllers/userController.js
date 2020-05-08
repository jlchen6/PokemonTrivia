const db = require("../models");

// Define methods for the userController
module.exports = {
    findById: function(req, res) {
        db.User.findById(req.params.id)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err));
    },
    createOrUpdate: function(user) { //If new user, create, else update user
        return db.User
            .find({username: user.username})
            .then(dbUser => { //returns an array of user objects
                if(dbUser.length > 0){
                    //console.log(dbUser[0].username+" exists");
                    return this.update(user);
                } else {
                    //console.log("User does not exist");
                    return this.create(user);
                }
            }).catch(err => err);
        //Catch is end of return db.User section
    }
}