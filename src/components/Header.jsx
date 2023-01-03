import React from "react";

const Header = () => {
  return (
    <nav className="d-flex justify-content-end navbar fixed-top navbar-expand-lg text-light p-2 border-bottom border-info">
      <div className="d-flex justify-content-around align-items-center">
        <div className="me-4">
          <li className="me-5">
            <a className="nav-link active" href="#about" aria-current="page">
              About
            </a>
          </li>
        </div>

        <div className="me-4 ">
          <li className="me-5">
            <a className="nav-link" href="#project">
              Projects
            </a>
          </li>
        </div>

        <div className="me-4">
          <li className="me-5">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
