// /pages/api/questionSet.js

import QuestionSet from "../../models/QuestionSet";

export default async function handler(req, res) {
  try {
    // Fetch a random question set
    const questionSet = await QuestionSet.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(questionSet[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
