import React from "react";

function CollapseMenuItem() {
  return (
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="/#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i className="fas fa-fw fa-wrench"></i>
        <span>Utilities</span>
      </a>
      <div
        id="collapseUtilities"
        className="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      ></div>
    </li>
  );
}

export default CollapseMenuItem;
