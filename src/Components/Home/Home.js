import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import picture from '../../Images/mcq.jpg'
import Subject from '../Subjects/Subject';
import Row from 'react-bootstrap/Row';
import './Home.css'


const  Home = ()=>{
  const datas=useLoaderData();
  const subjects=datas.data;
  return (
    <div className="container">
     
      <div className='flex1'>
            <Card.Img variant="top" src={picture} />
            <Card.Text className='text'>
                <Card.Title><h3>Knowledge Checker</h3></Card.Title>
                <li>Online MCQ Exam.</li>
                <li>You can check your Knowledge.</li>
                <li>Mark Checker.</li> 
                <li>You can write Blog.</li>
                <li>Also Result prograss by chart.</li>
            </Card.Text>
      </div>
      

      <div>
      <Row  xs={1} md={2} className="g-5">
        {
          subjects.map(data=><Subject key={data.id} subject={data}></Subject>)
        }
      </Row>
      </div>
    </div>

  );
}

export default Home;