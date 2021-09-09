import React from "react";
import AreaChart from "./area_chart";
import PieChart from "./pie_chart";

// container for area and pie chart components
function ChartsContainer() {
  return (
    <div className="row">
      <AreaChart />
      <PieChart />
    </div>
  );
}

export default ChartsContainer;
