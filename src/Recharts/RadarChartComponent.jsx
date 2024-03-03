// RadarChartComponent.js
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RadarChartComponent = () => {
  const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'English', A: 98, B: 130, fullMark: 150 },
    { subject: 'Science', A: 86, B: 130, fullMark: 150 },
    { subject: 'History', A: 99, B: 100, fullMark: 150 },
    { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
    { subject: 'Art', A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <ResponsiveContainer className="flex items-center mx-auto pt-4 p-3 m-2 mb-8 shadow-outline rounded-lg border shadow-md" width="100%" height={350}>
      <RadarChart outerRadius={120} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#0976d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#0976d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartComponent;
