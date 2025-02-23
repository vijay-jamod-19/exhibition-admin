import CollapseHeader from "@/components/core/common/collapse-header/collapse-header";
import ButtonComponent from "@/components/Shared/ButtonComponent";
import { developed_by, developed_by_url } from "@/environment";
import { all_routes } from "@/routes/all_routes";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import CopyRightTag from "../CopyRightTag";

type PageLayoutProps = {
  title?: string;
  rightSection?: any;
  breadcrumbs?: { label?: string; icon?: string; href?: string }[];
  collapseHeader?: boolean;
  children: ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({
  title,
  rightSection,
  breadcrumbs,
  collapseHeader,
  children,
}) => {
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-2">
          <div className="my-auto">
            {title && <h2 className="mb-1">{title}</h2>}
            {breadcrumbs && breadcrumbs?.length > 0 ? (
              <nav>
                <ol className="breadcrumb mb-0">
                  {breadcrumbs?.map((bread: any, index: number) => {
                    return (
                      <li
                        className={`breadcrumb-item ${
                          !bread?.href && "active"
                        }`}
                        key={index}
                      >
                        {bread?.href ? (
                          <Link to={bread?.href}>
                            {bread?.icon && <i className="ti ti-smart-home" />}
                            {bread?.label && bread?.label}
                          </Link>
                        ) : (
                          bread?.label
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            ) : null}
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            {/* <div className="me-2">
              <div className="d-flex align-items-center border bg-white rounded p-1 me-2 icon-list">
                <Link
                  to={all_routes.customerList}
                  className="btn btn-icon btn-sm active bg-primary text-white me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.customerList}
                  className="btn btn-icon btn-sm"
                >
                  <i className="ti ti-layout-grid" />
                </Link>
              </div>
            </div> */}
            <div className="me-2">
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
            {/* Right Section */}
            {rightSection}
            {/*  */}
            {collapseHeader && (
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            )}
          </div>
        </div>
        {/* Children */}
        {children}
      </div>
      {/* Layout Footer */}
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <CopyRightTag />
        <p>
          Designed &amp; Developed By{" "}
          <Link to={developed_by_url} className="text-primary">
            {developed_by}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageLayout;
