const User = require("../models/userModel");

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ score: -1 }).limit(10); // Top 10 users
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
