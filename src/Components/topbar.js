import React from "react";
import undraw_profile from "../Components/img/undraw_profile.svg";
import SearchBar from "./searchbar";
import XsSearch from "./xs_searchbar";
import AlertDropDown from "./alertDropdown";
import MessageDropDown from "./message_dropdown";

function TopBar() {
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <SearchBar />

        <ul className="navbar-nav ml-auto">
          <XsSearch />

          <AlertDropDown />

          {/* <!-- Nav Item - Messages --> */}
          <MessageDropDown />
          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#top"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
              <img
                alt=""
                className="img-profile rounded-circle"
                src={undraw_profile}
              />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#top">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#top">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#top">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#top"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
}

export default TopBar;
