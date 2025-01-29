const { getAIHint } = require("../services/aiServices");

exports.aihint = async (req, res) => {
  const { question } = req.body;

  try {
    const hint = await getAIHint(question);
    res.json({ hint });
  } catch (error) {
    res.status(500).json({ message: "Failed to get AI hint" });
  }
};
