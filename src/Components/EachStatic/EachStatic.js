import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer,Cell } from 'recharts';

const EachStatic = ({data}) => {
  const {id,name,total}=data;
  console.log(total)
  const data02 = [
    { name: `${name}`, value: total},
  ];

  return (
      <div className="barChart">
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data02}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill='#0088FE'
              label
            />
    
            <Tooltip />
          </PieChart>
          <p style={{fontSize:"25px"}}><small>Figure: <span style={{backgroundColor:"black",color:"white",borderRadius:"10px",padding:"5px"}}>{name}</span></small></p>
    </div>
      
  );
};

export default EachStatic;