import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


  


  export default function Grafic() {
    const data = [
      { name: "Developer", skills: 1000},
      { name: "JavaScript", skills: 200 },
      { name: "Html", skills: 150 },
      { name: "Css", skills: 100 },
      { name: "React", skills: 50},
    ];
    
    return (
      <div className="grafic">
      <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 80,
        bottom: 5,
      }}
      barSize={20}
    >
      <XAxis
        dataKey="name"
        scale="point"
        padding={{ left: 10, right: 10 }}
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="skills" fill="#33FF00" background={{ fill: "#eee" }} />
      </BarChart>
      
    </div>
      
    )
}

