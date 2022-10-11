import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
  const quizQuestions=useLoaderData();
  const getQuestions=quizQuestions.data.questions;
  return (
    <div>
      {
        getQuestions.map(getQuestion=><QuizDetails key={getQuestion.id} getQuestion={getQuestion}></QuizDetails>)
      }
      <h1>This is mcq quiz system.</h1>
    </div>
  );
};

export default Quiz;