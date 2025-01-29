const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { 
    type: [String], 
    required: true,
    validate: [arr => arr.length >= 2, "At least two options are required."]
  },
  correct_answer: { type: [String], required: true },
  level: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Easy" },
  category: { type: String, required: true },
  description: { type: String, default: "" },
  hint: { type: String, default: "" },
  image: { type: String, default: "" },
  time_limit: { type: Number, default: 30 },
  tags: { type: [String], default: [] },
  difficulty_score: { type: Number, default: 5, min: 1, max: 10 },
  is_active: { type: Boolean, default: true },
  attempt_count: { type: Number, default: 0 },
  success_rate: { type: Number, default: 0 }, // e.g., 75% of users got it right
  explanation_video: { type: String, default: "" },
  author: { type: String, default: "Admin" },
  language: { type: String, default: "English" },
  randomize_options: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
