// TreemapChartComponent.js
import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const TreemapChartComponent = () => {
  const data = {
    name: 'root',
    children: [
      { name: 'A', size: 100 },
      { name: 'B', size: 200 },
      { name: 'C', size: 300 },
      { name: 'D', size: 400 },
    ],
  };

  return (
    <ResponsiveContainer width="40%" height={400}>
      <Treemap
        width={400}
        height={200}
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#0976d8"
      />
    </ResponsiveContainer>
  );
}

export default TreemapChartComponent;
