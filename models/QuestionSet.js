// /models/QuestionSet
import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSetSchema = new Schema({
  questionSetName: { type: String, required: true }, // Added questionSetName field
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
      answer: { type: Number, required: true },
    },
  ],
});

export default mongoose.models.QuestionSet || mongoose.model("QuestionSet", questionSetSchema);
