import React from "react";
import CardHeading from "./card_heading";
import DropDown from "./dropdown";
import sampleDropMenu from "./chartsDropdownData";

// areachart component?
function AreaChart() {
  return (
    <div className="col-xl-8 col-lg-7">
      <div className="card shadow mb-4">
        <CardHeading
          title="Earnings Overview"
          menu={<DropDown dropMenu={sampleDropMenu} fromChart />}
        />

        <div className="card-body">
          <div className="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaChart;
