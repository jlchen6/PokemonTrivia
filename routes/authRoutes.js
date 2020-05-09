const router = require("express").Router();
const passport = require("passport");
const db = require("../models");


router.get("/auth/github", passport.authenticate("github"));

router.get("/auth/logout", function(req, res) {
    req.logout();
    res.json({ success: true });
  });

  router.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      let redirectUrl;
      process.env.NODE_ENV === "production"
        ? (redirectUrl = "/")
        : (redirectUrl = "http://localhost:3000/");
      res.redirect(redirectUrl);
    }
  );


module.exports = router;