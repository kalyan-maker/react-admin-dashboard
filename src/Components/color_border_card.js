import React from "react";
import ProgressBar from "./progress_bar";

// card component with color border on left side
const ColorBorderCard = ({ title, content, icon, color, progress }) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div class="row no-gutters align-items-center">
                <div class="col-auto">
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {content}
                  </div>
                </div>
                {progress ? <ProgressBar progress={progress} /> : null}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorBorderCard;
