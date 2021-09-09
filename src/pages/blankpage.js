import React from "react";
import PageHeading from "../components/pageheading/pageheading.component";
import Sidebar from "../components/sidebar/sidebar.component";
import TopBar from "../components/topbar/topbar.component";
import Footer from "../components/footer/footer.component";
import LogoutModal from "../components/logout_modal/logout_modal.component";

function BlankPage() {
  return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />

            <div className="container-fluid">
              <PageHeading />
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

export default BlankPage;
