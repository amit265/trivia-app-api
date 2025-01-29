const Quiz = require("../models/quizModel");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuiz = async (req, res) => {
  const {
    question,
    options,
    correct_answer,
    level,
    category,
    description,
    hint,
    image,
    time_limit,
    tags,
    difficulty_score,
    is_active,
    attempt_count,
    success_rate,
    explanation_video,
    author,
    language,
    randomize_options
  } = req.body;

  try {
    // Create new quiz document
    const newQuiz = new Quiz({
      question,
      options,
      correct_answer,
      level,
      category,
      description,
      hint,
      image,
      time_limit,
      tags,
      difficulty_score,
      is_active,
      attempt_count,
      success_rate,
      explanation_video,
      author,
      language,
      randomize_options
    });

    // Save quiz to the database
    await newQuiz.save();

    // Send success response with the new quiz data
    res.status(201).json({ message: "Quiz created successfully", quiz: newQuiz });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.submitQuiz = async (req, res) => {
  const { userId, answers } = req.body; // Assume answers is an array of { questionId, userAnswer }

  try {
    const quizResults = await Promise.all(
      answers.map(async (answer) => {
        const quiz = await Quiz.findById(answer.questionId);
        const isCorrect = quiz.correct_answer === answer.userAnswer;
        return { quizId: quiz._id, isCorrect };
      })
    );

    // Calculate score
    const score = quizResults.filter((result) => result.isCorrect).length;
    
    res.json({ score, results: quizResults });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.editQuiz = async (req, res) => {
  const {
    question,
    options,
    correct_answer,
    level,
    category,
    description,
    hint,
    image,
    time_limit,
    tags,
    difficulty_score,
    is_active,
    attempt_count,
    success_rate,
    explanation_video,
    author,
    language,
    randomize_options
  } = req.body;

  try {
    // Find quiz by ID and update it
    const updatedQuiz = await Quiz.findByIdAndUpdate(
      req.body._id,
      {
        question,
        options,
        correct_answer,
        level,
        category,
        description,
        hint,
        image,
        time_limit,
        tags,
        difficulty_score,
        is_active,
        attempt_count,
        success_rate,
        explanation_video,
        author,
        language,
        randomize_options
      },
      { new: true }
    );

    // Send success response with the updated quiz data
    res.json({ message: "Quiz updated successfully", quiz: updatedQuiz });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    // Find quiz by ID and delete it
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: "Quiz deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
