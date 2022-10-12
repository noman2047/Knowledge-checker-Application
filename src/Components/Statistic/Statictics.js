import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachStatic from '../EachStatic/EachStatic';
import './barchart.css'


const Statictics = () => {
  const datas=useLoaderData();
  const eachdata=datas.data;

  return (
   <div>
      <div className='fewBarChart'>
      {
        eachdata.map(data=><EachStatic data={data}></EachStatic>)
      }
      </div>
   </div>
    
  );
};

export default Statictics;