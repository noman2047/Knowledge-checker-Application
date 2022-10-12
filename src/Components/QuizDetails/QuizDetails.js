import React from 'react';
import './quiz.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const QuizDetails = (props) => {
  const {getQuestion,children}=props;
  console.log(getQuestion);
  const {id,question,options,correctAnswer}=getQuestion;

  const CorrectAnswer = ()=>{
    toast.success(`Correct Answer Is :${correctAnswer}`, {
      position: toast.POSITION.TOP_RIGHT
  });
}

  return (
    <div className='container'>
      <div className='questions'>
       <div className="logoAndname">
          <h4><span style={{color:"black",border:"1px solid black",borderRadius:"20px",padding:"2px 10px"}}>Quiz {children[1]} :</span> {question}</h4>
          <button onClick={CorrectAnswer}><EyeIcon className="logo"/></button>
          <ToastContainer />
       </div>
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