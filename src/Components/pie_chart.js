import React from "react";
import DropDown from "./dropdown";
import sampleDropMenu from "./chartsDropdownData";
import CardHeading from "./card_heading";

// piechart component
function PieChart() {
  return (
    <div className="col-xl-4 col-lg-5">
      <div className="card shadow mb-4">
        <CardHeading
          title="Revenue Sources"
          menu={<DropDown dropMenu={sampleDropMenu} fromChart />}
        />

        <div className="card-body">
          <div className="chart-pie pt-4 pb-2">
            <canvas id="myPieChart"></canvas>
          </div>
          <div className="mt-4 text-center small">
            <span className="mr-2">
              <i className="fas fa-circle text-primary"></i> Direct
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-success"></i> Social
            </span>
            <span className="mr-2">
              <i className="fas fa-circle text-info"></i> Referral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
