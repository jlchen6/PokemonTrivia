const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const GithubStrategy = require("passport-github2");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(cors()); // allows the server to make requests to a different domain
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define Github Strategy
passport.use(new GithubStrategy({
  clientID: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_ID_PRODUCTION : process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_SECRET_PRODUCTION : process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.NODE_ENV === "production" ? null : "/auth/github/callback"
},
  (accessToken, refreshToken, profile, done) => done(null, profile)
));

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((profile, done) => {
  if (!profile) done(null, {});
  // console.log(profile)
  user = {
    username: profile.username
  }
  userController.createOrUpdate(user)
    .then(dbUser =>(null, dbUser))
    .catch(err => done(err, null));

});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemonTrivia",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.use("/api", apiRoutes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
