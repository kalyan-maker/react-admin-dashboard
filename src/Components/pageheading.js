import React from "react";
import { Link } from "react-router-dom";
// page heading component
function PageHeading() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <a
        as={Link}
        to="#"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
      </a>
    </div>
  );
}

export default PageHeading;
