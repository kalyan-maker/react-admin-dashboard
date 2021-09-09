import React from "react";
import ChartsContainer from "../Components/charts_container";
import PageHeading from "../Components/pageheading";
import ColorBorderCardsContainer from "../Components/color_border";
import Sidebar from "../Components/sidebar";
import TopBar from "../Components/topbar";
import ProjectsContainer from "../Components/projects_container";
import Illustrations from "../Components/illustrations";
import Approach from "../Components/approach";
import Footer from "../Components/footer";
import LogoutModal from "../Components/logout_modal";

function Indexpage() {
  return (
    <div className="page-top">
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
              <PageHeading />

              <ColorBorderCardsContainer />

              <ChartsContainer />

              <div className="row">
                <ProjectsContainer />

                <div className="col-lg-6 mb-4">
                  <Illustrations />

                  <Approach />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <LogoutModal />
    </div>
  );
}

export default Indexpage;
