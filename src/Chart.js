import React from 'react';
import { VictoryChart, VictoryBar, VictoryPie, VictoryTheme, VictoryLine, VictoryScatter, VictoryZoomContainer, VictoryAnimation } from 'victory';

const MyVictoryCharts = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {/* Bar Chart */}
      <VictoryChart
        theme={VictoryTheme.material}
        width={300}
        height={200}
        domainPadding={20}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryBar
          data={[
            { x: "A", y: 2 },
            { x: "B", y: 3 },
            { x: "C", y: 5 },
            { x: "D", y: 4 },
            { x: "E", y: 7 }
          ]}
          style={{
            data: { fill: "#007bff" }
          }}
        />
      </VictoryChart>

      {/* Pie Chart */}
      <VictoryPie
        theme={VictoryTheme.material}
        width={200}
        height={200}
        colorScale={["#007bff", "#ffffff", "#000000"]}
        data={[
          { x: "A", y: 20 },
          { x: "B", y: 30 },
          { x: "C", y: 50 }
        ]}
        animate={{
          duration: 1000,
          onLoad: { duration: 1000 }
        }}
      />

      {/* Line Chart */}
      <VictoryChart
        theme={VictoryTheme.material}
        width={300}
        height={200}
        domainPadding={20}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryLine
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
          style={{
            data: { stroke: "#007bff" }
          }}
        />
      </VictoryChart>

      {/* Scatter Plot */}
      <VictoryChart
        theme={VictoryTheme.material}
        width={300}
        height={200}
        domainPadding={20}
        containerComponent={<VictoryZoomContainer />}
      >
        <VictoryScatter
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
          style={{
            data: { fill: "#ffffff", stroke: "#007bff", strokeWidth: 2 }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default MyVictoryCharts;
