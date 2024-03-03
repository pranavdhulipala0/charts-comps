import React from 'react';
import crossfilter from 'crossfilter'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function RechartChart() {
  // Generating random data for demonstration
  const data = [
    { name: 'January', priceUsd: Math.random() * 1000 },
    { name: 'February', priceUsd: Math.random() * 1000 },
    { name: 'March', priceUsd: Math.random() * 1000 },
    { name: 'April', priceUsd: Math.random() * 1000 },
    { name: 'May', priceUsd: Math.random() * 1000 },
    { name: 'June', priceUsd: Math.random() * 1000 },
    { name: 'July', priceUsd: Math.random() * 1000 },
    { name: 'August', priceUsd: Math.random() * 1000 },
    { name: 'September', priceUsd: Math.random() * 1000 },
    { name: 'October', priceUsd: Math.random() * 1000 },
    { name: 'November', priceUsd: Math.random() * 1000 },
    { name: 'December', priceUsd: Math.random() * 1000 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="priceUsd" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
