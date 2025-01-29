// aiService.js
const axios = require('axios');

const getAIHint = async (question) => {
  const gptQuery =
    "You are a trivia master. Please provide a hint for the question below that encourages the user to think critically, but do not reveal the answer directly. The hint should be in 1-2 sentences and guide the user to analyze the question and options: " +
    question;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices?.[0]?.message?.content?.trim();
  } catch (error) {
    console.error('Error fetching hint from AI:', error.message);
    throw new Error('Failed to fetch AI hint');
  }
};

module.exports = { getAIHint };
