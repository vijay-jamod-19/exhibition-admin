import ImageWithBasePath from "@/components/core/common/imageWithBasePath";
import { all_routes } from "@/routes/all_routes";
import {
  setMobileSidebar,
  toggleMiniSidebar,
} from "@/store/slice/sidebarSlice";
import { setDataLayout } from "@/store/slice/themeSettingSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const routes = all_routes;
  const dispatch = useDispatch();
  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const Location = useLocation();

  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };

  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );

  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  const handleToggleMiniSidebar = () => {
    if (dataLayout === "mini_layout") {
      dispatch(setDataLayout("default_layout"));
      localStorage.setItem("dataLayout", "default_layout");
    } else {
      dispatch(toggleMiniSidebar());
    }
  };

  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {});
        }
        setIsFullscreen(false);
      }
    }
  };
  return (
    <div className="header">
      <div className="main-header">
        <div className="header-left">
          <Link to={routes.home} className="logo">
            <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
          </Link>
          <Link to={routes.home} className="dark-logo">
            <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo" />
          </Link>
        </div>

        <Link
          id="mobile_btn"
          onClick={toggleMobileSidebar}
          className="mobile_btn"
          to="#sidebar"
        >
          <span className="bar-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Link>

        <div className="header-user">
          <div className="nav user-menu nav-list">
            <div
              className="me-auto d-flex align-items-center"
              id="header-search"
            >
              <Link
                id="toggle_btn"
                to="#"
                onClick={handleToggleMiniSidebar}
                className="btn btn-menubar me-1"
              >
                <i className="ti ti-arrow-bar-to-left"></i>
              </Link>
              <div className="input-group input-group-flat d-inline-flex me-1">
                <span className="input-icon-addon">
                  <i className="ti ti-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search in HRMS"
                />
                <span className="input-group-text">
                  <kbd>CTRL + / </kbd>
                </span>
              </div>
              {/* <div className="dropdown crm-dropdown">
                      <Link to="#" className="btn btn-menubar me-1" data-bs-toggle="dropdown">
                          <i className="ti ti-layout-grid"></i>
                      </Link>
                      <div className="dropdown-menu dropdown-lg dropdown-menu-start">
                          <div className="card mb-0 border-0 shadow-none">
                              <div className="card-header">
                                  <h4>CRM</h4>
                              </div>
                              <div className="card-body pb-1">		
                                  <div className="row">
                                      <div className="col-sm-6">							
                                          <Link to={"#"} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-user-shield text-default me-2"></i>Contacts
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>							
                                          <Link to={"#"} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-heart-handshake text-default me-2"></i>Deals
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>								
                                          <Link to={"#"} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-timeline-event-text text-default me-2"></i>Pipeline
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>		
                                      </div>
                                      <div className="col-sm-6">							
                                          <Link to={routes.companiesGrid} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-building text-default me-2"></i>Companies
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>								
                                          <Link to={routes.leadsGrid} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-user-check text-default me-2"></i>Leads
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>								
                                          <Link to={routes.activity} className="d-flex align-items-center justify-content-between p-2 crm-link mb-3">
                                              <span className="d-flex align-items-center me-3">
                                                  <i className="ti ti-activity text-default me-2"></i>Activities
                                              </span>
                                              <i className="ti ti-arrow-right"></i>
                                          </Link>		
                                      </div>
                                  </div>		
                              </div>
                          </div>
                      </div>
                  </div> */}
              {/* <Link to={routes.profilesettings} className="btn btn-menubar">
                      <i className="ti ti-settings-cog"></i>
                  </Link>	 */}
            </div>

            <div className="d-flex align-items-center">
              <div className="me-1">
                <Link
                  to="#"
                  onClick={toggleFullscreen}
                  className="btn btn-menubar btnFullscreen"
                >
                  <i className="ti ti-maximize"></i>
                </Link>
              </div>
              {/*  */}
              <div className="me-1">
                <Link to={"#"} className="btn btn-menubar position-relative">
                  <i className="ti ti-brand-hipchat"></i>
                  <span className="badge bg-info rounded-pill d-flex align-items-center justify-content-center header-badge">
                    5
                  </span>
                </Link>
              </div>
              <div className="me-1">
                <Link to={"#"} className="btn btn-menubar">
                  <i className="ti ti-mail"></i>
                </Link>
              </div>
              <div className="me-1 notification_item">
                <Link
                  to="#"
                  className="btn btn-menubar position-relative me-1"
                  id="notification_popup"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-bell"></i>
                  <span className="notification-status-dot"></span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end notification-dropdown p-4">
                  <div className="d-flex align-items-center justify-content-between border-bottom p-0 pb-3 mb-3">
                    <h4 className="notification-title">Notifications (2)</h4>
                    <div className="d-flex align-items-center">
                      <Link to="#" className="text-primary fs-15 me-3 lh-1">
                        Mark all as read
                      </Link>
                      <div className="dropdown">
                        <Link
                          to="#"
                          className="bg-white dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-calendar-due me-1"></i>Today
                        </Link>
                        <ul className="dropdown-menu mt-2 p-3">
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              This Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Week
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item rounded-1">
                              Last Month
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="noti-content">
                    <div className="d-flex flex-column">
                      <div className="border-bottom mb-3 pb-3">
                        <Link to={"#"}>
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-27.jpg"
                                alt="Profile"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-dark fw-semibold">
                                  Shawn
                                </span>
                                performance in Math is below the threshold.
                              </p>
                              <span>Just Now</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <Link to={"#"} className="pb-0">
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-23.jpg"
                                alt="Profile"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-dark fw-semibold">
                                  Sylvia
                                </span>{" "}
                                added appointment on 02:00 PM
                              </p>
                              <span>10 mins ago</span>
                              <div className="d-flex justify-content-start align-items-center mt-1">
                                <span className="btn btn-light btn-sm me-2">
                                  Deny
                                </span>
                                <span className="btn btn-primary btn-sm">
                                  Approve
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <Link to={"#"}>
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-25.jpg"
                                alt="Profile"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                New student record{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  George
                                </span>
                                is created by{" "}
                                <span className="text-dark fw-semibold">
                                  Teressa
                                </span>
                              </p>
                              <span>2 hrs ago</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="border-0 mb-3 pb-0">
                        <Link to={"#"}>
                          <div className="d-flex">
                            <span className="avatar avatar-lg me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="Profile"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                A new teacher record for{" "}
                                <span className="text-dark fw-semibold">
                                  Elisa
                                </span>{" "}
                              </p>
                              <span>09:45 AM</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex p-0">
                    <Link to="#" className="btn btn-light w-100 me-2">
                      Cancel
                    </Link>
                    <Link to={"#"} className="btn btn-primary w-100">
                      View All
                    </Link>
                  </div>
                </div>
              </div>
              <div className="dropdown profile-dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <span className="avatar avatar-sm online">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-12.jpg"
                      alt="Img"
                      className="img-fluid rounded-circle"
                    />
                  </span>
                </Link>
                <div className="dropdown-menu shadow-none">
                  <div className="card mb-0">
                    <div className="card-header">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg me-2 avatar-rounded">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-12.jpg"
                            alt="img"
                          />
                        </span>
                        <div>
                          <h5 className="mb-0">Kevin Larry</h5>
                          <p className="fs-12 fw-medium mb-0">
                            warren@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={routes.profile}
                      >
                        <i className="ti ti-user-circle me-1"></i>My Profile
                      </Link>
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={"#"}
                      >
                        <i className="ti ti-settings me-1"></i>Settings
                      </Link>
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={"#"}
                      >
                        <i className="ti ti-status-change me-1"></i>Status
                      </Link>
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={routes.profile}
                      >
                        <i className="ti ti-circle-arrow-up me-1"></i>My Account
                      </Link>
                    </div>
                    <div className="card-footer">
                      <Link
                        className="dropdown-item d-inline-flex align-items-center p-0 py-2"
                        to={"#"}
                      >
                        <i className="ti ti-login me-2"></i>Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown mobile-user-menu">
          <Link
            to="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to={routes.profile}>
              My Profile
            </Link>
            <Link className="dropdown-item" to={routes.profile}>
              Settings
            </Link>
            <Link className="dropdown-item" to={"#"}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
