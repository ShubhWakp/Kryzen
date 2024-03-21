import React from "react";

export default function Originalnavbar() {
  return (
    <div>
      <div className="page">
        <header className="navbar navbar-expand-sm navbar-light d-print-none">
          <div className="container-xl">
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <a href="#">
                <img
                  src="..."
                  width="110"
                  height="32"
                  alt="Kryzen"
                  className="navbar-brand-image"
                />
              </a>
            </h1>

            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item">
                <a href="#" className="nav-link d-flex lh-1 text-reset p-0">
                  <span
                    className="avatar avatar-sm"
                    style={{ backgroundImage: "url(...)" }}
                  ></span>
                  <div className="d-none d-xl-block ps-2">
                    <div>Paweł Kuna</div>
                    <div className="mt-1 small text-secondary">UI Designer</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="page-body">
            <div className="container-xl">
              <div className="row row-deck row-cards">
                <div className="col-4">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ height: "10rem" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ height: "10rem" }}
                    ></div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ height: "10rem" }}
                    ></div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div
                      className="card-body"
                      style={{ height: "10rem" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <a href="#" className="btn btn-outline-primary">
        Primary
      </a>
      <a href="#" className="btn btn-outline-secondary">
        Secondary
      </a>
      <a href="#" className="btn btn-outline-success">
        Success
      </a>
      <a href="#" className="btn btn-outline-warning">
        Warning
      </a>
      <a href="#" className="btn btn-outline-danger">
        Danger
      </a>
      <a href="#" className="btn btn-outline-info">
        Info
      </a>
      <a href="#" className="btn btn-outline-dark">
        Dark
      </a>
      <a href="#" className="btn btn-outline-light">
        Light
      </a>
    </div>
  );
}
