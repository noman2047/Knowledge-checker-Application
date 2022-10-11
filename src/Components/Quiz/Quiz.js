import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
  const quizQuestions=useLoaderData();
  const mcqTopic=quizQuestions.data.name;
  const getQuestions=quizQuestions.data.questions;
  return (
    <div>
      <h3 style={{marginTop:"50px",color:"blueviolet",fontWeight:"bold"}}>Quiz of {mcqTopic}</h3>
      {
        getQuestions.map(getQuestion=><QuizDetails key={getQuestion.id} getQuestion={getQuestion}></QuizDetails>)
      }
    </div>
  );
};

export default Quiz;