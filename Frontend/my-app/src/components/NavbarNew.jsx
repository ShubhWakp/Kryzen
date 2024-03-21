import React from "react";
import { Link } from "react-router-dom";

export default function NavbarNew() {
  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
      <div class="page">
        <header class="navbar navbar-expand-sm navbar-light d-print-none">
          <div class="container-xl">
            <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              <Link to="/">
                <img
                  src="https://app.kryzen.com/packs/media/images/kryzen-logo2-3500bcbbdeb667df12ee3d574941ce09.png"
                  width="110"
                  height="32"
                  alt="Kryzen"
                  class="navbar-brand-image"
                />
              </Link>
            </h1>

            <div class="navbar-nav flex-row order-md-last">
              <div class="nav-item">
                <a
                  href="#"
                  class="nav-link d-flex lh-1 text-reset p-0"
                  style={{ paddingRight: `100px` }}
                >
                  <span
                    class="avatar avatar-sm"
                    style={{ backgroundImage: `url(...)` }}
                  ></span>
                  <div
                    class="d-none d-xl-block ps-2"
                    style={{ paddingRight: `50px` }}
                  >
                    <div>Test Account</div>
                    <div class="mt-1 small text-secondary">Test</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div class="page-header">
        <div class="row align-items-centre mw-100">
          <div class="col">
            <div class="mb-1">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}>🏠Home</strong>
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/pricewatcher" class="nav-link">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}>💹Pricewatcher</strong>
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/buyerconnect">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}>
                        {" "}
                        🙋Buyers Connect{" "}
                      </strong>
                    </a>
                  </a>
                </li>
                <li class="nav-item" style={{ paddingBottom: `10px` }}>
                  <a class="nav-link " href="/nurseries">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}> 🌱Nurseries </strong>
                    </a>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/farms">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}> 🪴Farms </strong>
                    </a>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/marketprices">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}>
                        {" "}
                        🎯Market Prices{" "}
                      </strong>
                    </a>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="/workforce">
                    <a class="btn btn-pill">
                      <strong style={{ color: "black" }}> 👩‍🌾Workforce </strong>
                    </a>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-auto">
            <div class="btn-list">
              <a href="#" class="btn d-none d-md-inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
                Contact Us
              </a>
              <a href="#" class="btn btn-primary">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
