import React from "react";
import ProjectPercent from "./projects_percentage";
import projectsDetails from "./projects.data";
import CardHeading from "./card_heading";
import ColorCardsContainer from "./color_cards";

// container for project field percentage components
function ProjectsContainer() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <CardHeading title="Projects" />
        <div className="card-body">
          {projectsDetails.map((item, idx) => (
            <ProjectPercent id={idx} {...item} />
          ))}
        </div>
      </div>

      {/* <!-- Color System --> */}
      <ColorCardsContainer />
    </div>
  );
}

export default ProjectsContainer;
