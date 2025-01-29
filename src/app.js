const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Allow requests from frontend

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define Quiz Schema
const QuizSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
}); 

const Quiz = mongoose.model("Quiz", QuizSchema);

// API Routes
app.get("/quiz", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

app.post("/quiz", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json({ message: "✅ Quiz added successfully!" });
});

// Start Server (Only for Local Testing)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}

// Export for Vercel
module.exports = app;
