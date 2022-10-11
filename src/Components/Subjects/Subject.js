import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './subject.css'
const Subject = ({subject}) =>{
  const {logo,id,name,total}=subject;
  return (
    <div className='flex3'>
      <img src={logo} alt="" />
      <div style={{border:'1px solid lightblue',width:'300px', borderRadius:"20px",marginLeft:'5px',padding:"10px"}}>
        <h2>{name}</h2>
        <p><small>Id: {id}</small></p>
        <p>Total Question: {total}</p>
        <Button><Link to={`/quiz/${id}`} style={{color:"white"}}>Strat Practic</Link></Button>
      </div>
    </div>
  );
}
export default Subject;