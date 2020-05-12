const router = require("express").Router();
const passport = require("passport");
// const db = require("../models");


router.get("/github", passport.authenticate("github"));

router.get("/logout", function(req, res) {
    req.logout();
    res.json({ success: true });
  });

  router.get(
    "/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      let redirectUrl;
      process.env.NODE_ENV === "production"
        ? (redirectUrl = "/lobby")
        : (redirectUrl = "http://localhost:3000/lobby");
      res.redirect(redirectUrl);
    }
  );

    router.get("/status", (req, res) => {
      console.log('REQ.USER: ', req.user)
      req.user ? res.json(true) : res.json(false);
    });


module.exports = router;