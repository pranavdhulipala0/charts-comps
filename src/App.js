import Chart from "./Chart";
import DChart from "./DChart";
import AreaChartComponent from "./Recharts/AreaChartComponent";
import AreaLineChartComponent from "./Recharts/AreaLIneChartComponent";
import BarChartComponent from "./Recharts/BarChartComponent";
import FunnelChartComponent from "./Recharts/FunnelChartComponent";
import LineChartComponent from "./Recharts/LineChartComponent";
import PieChartComponent from "./Recharts/PieChartComponent";
import RadarChartComponent from "./Recharts/RadarChartComponent";
import ScatterChartComponent from "./Recharts/ScatterChartComponent";
import TreemapChartComponent from "./Recharts/TreemapChartComponent";

function App() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center">
      {/* <Chart /> */}
      {/* <RechartChart /> */}
      <LineChartComponent />
      <BarChartComponent />
      {/* <FunnelChartComponent /> */}
      <AreaChartComponent />
      <PieChartComponent />
      <RadarChartComponent />
      <ScatterChartComponent />
      <AreaLineChartComponent />
      {/* <TreemapChartComponent  /> */}
      {/* <DChart /> */}
    </div>
  );
}

export default App;
