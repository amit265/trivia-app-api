const express = require("express");
const quizController = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Protected routes (auth middleware to protect quiz routes)
router.get("/", authMiddleware, quizController.getAllQuizzes);
router.post("/submit", authMiddleware, quizController.submitQuiz);

module.exports = router;
