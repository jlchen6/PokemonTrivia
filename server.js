const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes");
const app = express();

const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes")

const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define Github Strategy
const GitHubStrategy = require("passport-github2").Strategy;

let strategy = new GithubStrategy({
  clientID: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_ID_PRODUCTION : process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_SECRET_PRODUCTION : process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.NODE_ENV === "production" ? null : "/auth/github/callback"
},
  (accessToken, refreshToken, profile, done) => done(null, profile)
);


// not configured
let session = require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemonTrivia",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

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

app.use(session);
app.use(cors()); // allows the server to make requests to a different domain
app.use(passport.initialize());
app.use(passport.session());

// Use apiRoutes
app.use("/api", apiRoutes(passport));
app.use("/auth", authRoutes);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
