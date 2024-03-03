// ScatterChartComponent.js
import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ScatterChartComponent = () => {
  const data = [
    { x: 10, y: 30 },
    { x: 20, y: 50 },
    { x: 30, y: 80 },
    { x: 40, y: 40 },
    { x: 50, y: 60 },
    { x: 60, y: 90 },
  ];

  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="x" />
        <YAxis type="number" dataKey="y" name="y" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="A scatter" data={data} fill="#0976d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default ScatterChartComponent;
