require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes");
const app = express();

const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/authRoutes")

const PORT = process.env.PORT || 3001;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pokemonTrivia",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

let session = require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
});

app.use(session);

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

// Define Github Strategy
const GitHubStrategy = require("passport-github2").Strategy;

let strategy = new GitHubStrategy(
{
  clientID: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_ID_PRODUCTION : process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.NODE_ENV === "production" ? process.env.GITHUB_CLIENT_SECRET_PRODUCTION : process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.NODE_ENV === "production" ? null : "/auth/github/callback"
},
  (accessToken, refreshToken, profile, done) => {
    console.log("Authenticating with Github");
    done(null, profile);
  });

  passport.use(strategy);

// Add routes, both API and view
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  cors({
    origin: "http://localhost:3001", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);


// Use apiRoutes
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
