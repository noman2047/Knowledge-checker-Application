import React from 'react';
import pagenotfoundImage from  '../../Images/pageNotFound.jpg'

const PageNotFound = () => {
  return (
    <div>
         <div className="pageNotFound">

          <h1 style={{marginTop:"30px"}}>Oops..! 404 Page Not Found</h1>
          <p>Please type currect url.Thank you =):</p>
          <img src={pagenotfoundImage} height="500" width="500" alt="not found" />
          </div>
      
    </div>
  );
};

export default PageNotFound;