import CollapseHeader from "@/components/core/common/collapse-header/collapse-header";
import ImageWithBasePath from "@/components/core/common/imageWithBasePath";
import { all_routes } from "@/routes/all_routes";
import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Link } from "react-router-dom";

const Home = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Admin Dashboard</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.home}>
                    <i className="ti ti-smart-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">Dashboard</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Admin Dashboard
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="me-2 mb-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-file-export me-1" />
                  Export
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-3">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      <i className="ti ti-file-type-pdf me-1" />
                      Export as PDF
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      <i className="ti ti-file-type-xls me-1" />
                      Export as Excel{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-2">
              <div className="input-icon w-120 position-relative">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar text-gray-9" />
                </span>
                <Calendar
                  value={date}
                  onChange={(e: any) => setDate(e.value)}
                  view="year"
                  dateFormat="yy"
                  className="Calendar-form"
                />
              </div>
            </div>
            <div className="ms-2 head-icons">
              <CollapseHeader />
            </div>
          </div>
        </div>
        {/* Welcome Wrap */}
        <div className="card border-0">
          <div className="card-body d-flex align-items-center justify-content-between flex-wrap pb-1">
            <div className="d-flex align-items-center mb-3">
              <span className="avatar avatar-xl flex-shrink-0">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-31.jpg"
                  className="rounded-circle"
                  alt="img"
                />
              </span>
              <div className="ms-3">
                <h3 className="mb-2">
                  Welcome Back, Adrian{" "}
                  <Link to="#" className="edit-icon">
                    <i className="ti ti-edit fs-14" />
                  </Link>
                </h3>
                <p>
                  You have{" "}
                  <span className="text-primary text-decoration-underline">
                    21
                  </span>{" "}
                  Pending Approvals &amp;{" "}
                  <span className="text-primary text-decoration-underline">
                    14
                  </span>{" "}
                  Leave Requests
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center flex-wrap mb-1">
              <Link
                to="#"
                className="btn btn-secondary btn-md me-2 mb-2"
                data-bs-toggle="modal"
                data-inert={true}
                data-bs-target="#add_project"
              >
                <i className="ti ti-square-rounded-plus me-1" />
                Add Project
              </Link>
              <Link
                to="#"
                className="btn btn-primary btn-md mb-2"
                data-bs-toggle="modal"
                data-inert={true}
                data-bs-target="#add_leaves"
              >
                <i className="ti ti-square-rounded-plus me-1" />
                Add Requests
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Home;
