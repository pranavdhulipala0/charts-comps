// FunnelChartComponent.js
import React from 'react';
import { FunnelChart, Funnel, Tooltip, ResponsiveContainer } from 'recharts';

const FunnelChartComponent = () => {
  const data = [
    { name: 'Visit', value: 1000 },
    { name: 'Register', value: 800 },
    { name: 'Paid', value: 600 },
    { name: 'Active', value: 400 },
  ];

  return (
    <ResponsiveContainer width="40%" height={400}>
      <FunnelChart>
        <Tooltip />
        <Funnel dataKey="value" data={data} />
      </FunnelChart>
    </ResponsiveContainer>
  );
}

export default FunnelChartComponent;
