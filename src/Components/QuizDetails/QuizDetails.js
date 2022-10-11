import React from 'react';
import './quiz.css'

const QuizDetails = (props) => {
  const {getQuestion}=props;
  const {id,question,options,correctAnswer}=getQuestion;

  return (
    <div className='container'>
      <div className='questions'>
        <h4>{question}</h4>
        <div className='option'>
          {
          options.map(option=><p>{option}</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;