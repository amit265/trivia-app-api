const express = require("express");
const quizController = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Protected routes (auth middleware to protect quiz routes)
router.get("/", quizController.getAllQuizzes);
router.post("/submit", authMiddleware, quizController.submitQuiz);
router.post("/", authMiddleware, quizController.createQuiz); // This line adds the POST method for creating a quiz
router.patch("/edit", authMiddleware, quizController.editQuiz); // This line adds the POST method for editing a quiz
router.delete("/delete/:id", authMiddleware, quizController.deleteQuiz); // This line adds the DELETE method for deleting a quiz

module.exports = router;
 