// /pages/api/submitAnswers.js

import QuestionSet from "../../models/QuestionSet";

export default async function handler(req, res) {
  try {
    const { questionSetId, answers } = req.body;

    // Fetch the question set by ID
    const questionSet = await QuestionSet.findById(questionSetId);

    if (!questionSet) {
      return res.status(404).json({ error: "Question Set not found" });
    }

    // Calculate the score by comparing the answers
    let score = 0;
    for (let i = 0; i < questionSet.questions.length; i++) {
      const correctAnswer = questionSet.questions[i].answer;
      if (answers[i] === correctAnswer) {
        score++;
      }
    }

    res.status(200).json({ score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
