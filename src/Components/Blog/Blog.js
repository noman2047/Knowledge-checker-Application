import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <h3 style={{textAlign:"center",margin:"20px"}}>Questions And Answers:</h3>
          <div style={{border:"2px solid blue",margin:"20px",padding:"40px 10px",borderRadius:"20px"}}>
          <h3>(1)What is a Purpose of React Router?</h3>
          <p><strong>Answer: </strong> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
          <h3>(2)How does Context API work?</h3>
          <p><strong>Answer:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>
          <h3>(3)What is use Ref in React?</h3>
          <p><strong>Answer:</strong> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
    </div>
    </div>
  );
};

export default Blog;