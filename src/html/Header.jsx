import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [lightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "dark"
      ? "fa far fa-compass text-warning mr-2"
      : "fa far fa-compass text-black mr-2"
  );
  // ===Switch Theme===
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="bg-image">
      <div className="bg-image-overlay pt-5 py-md-5">
        <header className="container d-md-flex align-items-md-center justify-content-md-between py-4">
          <div className="text-center text-md-left py-2">
            <Link
              to="/"
              className="h5 text-primary font-weight-bold d-flex align-items-center justify-content-center mb-0"
              href="#1"
            >
              <i className={lightTheme}></i> FoCoDex
            </Link>
          </div>

          <div className="text-center text-md-right py-2">
            <input
              type="checkbox"
              id="demo1"
              className="togglebtn"
              autoComplete="off"
              defaultChecked={checked}
              onClick={() => toggleThemeChange()}
              onChange={() =>
                setLightTheme(
                  localStorage.getItem("theme") === "dark"
                    ? "fa far fa-compass text-warning mr-2"
                    : "fa far fa-compass text-black mr-2"
                )
              }
            />
            <label htmlFor="demo1" className="togglebtn">
              <span className="indicator text-primary">
                {localStorage.getItem("theme") === "dark" ? (
                  <i className="las la-power-off text-black"></i>
                ) : (
                  <i className="las la-plug text-white"></i>
                )}
              </span>
            </label>

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
