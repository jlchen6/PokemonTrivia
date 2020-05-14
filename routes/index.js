const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");

// Auth Routes
router.use("/auth", authRoutes);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// changed out ../client/build/index.html -> / for developement
// router.use((req, res) =>
//     res.sendFile(path.join(__dirname, "/"))
// );


module.exports = router;
