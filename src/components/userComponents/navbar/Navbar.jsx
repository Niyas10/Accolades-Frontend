import React from "react";
import "./NavbarUser.css";

function UserNavbar() {
  return (
    <div>
      <div className="container mt-3 user-nav-bgclr">
        <nav className="navbar user-navbar">
          <div className="logo">
            <img src="/adminLogo.png" alt="logo" className="logo-img" />
          </div>
          <div className="button-container">
            <button className="action-button">Let's talk</button>
          </div>
          <div className="icon" style={{ border: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default UserNavbar;
