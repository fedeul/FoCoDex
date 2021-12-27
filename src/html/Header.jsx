import { Link } from "react-router-dom";
// import { DarkModeToggle } from "react-dark-mode-toggle-2";
// import { useState } from "react";

const Header = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="bg-image">
      <div className="bg-image-overlay pt-5 py-md-5">
        <header className="container d-md-flex align-items-md-center justify-content-md-between py-4">
          <div className="text-center text-md-left py-2">
            <Link
              to="/"
              className="h5 text-white font-weight-bold d-flex align-items-center justify-content-center mb-0"
              href="#1"
            >
              <i className="fa far fa-compass text-light mr-2"></i> FoCoDex
            </Link>
          </div>

          <div className="text-center text-md-right py-2">
            {/* <DarkModeToggle
              className="toggle"
              onChange={setIsDarkMode}
              isDarkMode={isDarkMode}
              size={48}
            /> */}
            {/* USER BUTTON */}
            {/*<div className="dropdown">
              <button
                className="btn btn-link"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="avatar"
                  src="https://faces-img.xcdn.link/image-lorem-face-688.jpg"
                  alt="Admin Avatar"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-right font-size-sm"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#1">
                  Profile
                </a>
                <a className="dropdown-item" href="#1">
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#1">
                  Projects
                </a>
                <a className="dropdown-item" href="#1">
                  Tasks
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#1">
                  Log Out
                </a>
              </div>
            </div>*/}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
