require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes");
const app = express();
// const sessionCookie = require("cookie-session");
const session = require("express-session");
const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/authRoutes");
const userController = require("./controllers/userController");
const http = require("http").createServer(app);
const io = require("socket.io")(http);

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


// app.use(sessionCookie({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [process.env.NODE_ENV === "production" ? process.env.SESSION_SECRET_PRODUCTION : process.env.SESSION_SECRET,],
//   name: "session"
// }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(require("cookie-parser")());

app.use(passport.initialize());
// app.use(session);
app.use(passport.session());

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

  passport.serializeUser((user, done) => {
    // console.log('SERIALIZED USER: ', user.username)
    done(null, user)
  });

  passport.deserializeUser((profile, done) => {
    if (!profile) done(null, {});
    // console.log('DESERIALIZED USER: ', profile)
    user = {
      username: profile.username
    }
    userController.createOrUpdate(user)
      .then(dbUser =>{
        console.log("route hit")
        done(null, dbUser)})
      .catch(err => done(err, null));
  
  });


// Add routes, both API and view
app.use(routes);

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

// socket.io connection
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
})


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
