import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledBox = styled.div`
  justify-content: center;
  background-color: #aa80ff;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 30px;
  margin-bottom: 30px;
`;

export default function Quiz({ questionSet }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (questionSet && questionSet.questions) {
      setSelectedAnswers(Array(questionSet.questions.length).fill(null));
      setScore(null);
    }
  }, [questionSet]);
  
  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswerSelection = (selectedOptionIndex) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOptionIndex;
      return newAnswers;
    });
  };

  const handleQuizSubmission = async () => {
    try {
      const response = await axios.post("/api/submitAnswers", {
        questionSetId: questionSet._id,
        answers: selectedAnswers,
      });

      setScore(response.data.score);
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setScore(null);
  };

  const renderQuiz = () => {
    if (!questionSet) {
      return <div>QUIZ PAGE</div>;
    }
  
    const currentQuestion = questionSet.questions[currentQuestionIndex];
  
    return (
      <StyledBox>
        <h3>Question {currentQuestionIndex + 1}</h3>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  value={index}
                  checked={selectedAnswers[currentQuestionIndex] === index}
                  onChange={() => handleAnswerSelection(index)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        {currentQuestionIndex < questionSet.questions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button onClick={handleQuizSubmission}>Submit</button>
        )}
      </StyledBox>
    );
  };
  

  const renderScore = () => {
    return (
      <StyledBox>
        <h3>Your Score</h3>
        <p>
          {score}/{questionSet.questions.length}
        </p>
        <button onClick={resetForm}>Start New Quiz</button>
      </StyledBox>
    );
  };

  return score !== null ? renderScore() : renderQuiz();
}
