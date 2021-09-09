import React from "react";

// this component displays the percentage values in the project field
function ProjectPercent({ title, percent, color }) {
  return (
    <>
      <h4 className="small font-weight-bold">
        {title}
        <span className="float-right">
          {percent !== 100 ? `${percent}%` : "completed!"}
        </span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
}

export default ProjectPercent;
