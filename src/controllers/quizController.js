const Quiz = require("../models/quizModel");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
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
