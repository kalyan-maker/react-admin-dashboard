import React from "react";

// progress bar inside the card component with color border on left side
function ProgressBar({ progress }) {
  console.log(progress);
  return (
    <div className="col">
      <div className="progress progress-sm mr-2">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
