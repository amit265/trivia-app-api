const express = require("express");
const leaderboardController = require("../controllers/leaderboardController");
const router = express.Router();

// Get leaderboard (no auth needed, or you can protect it)
router.get("/", leaderboardController.getLeaderboard);

module.exports = router;
