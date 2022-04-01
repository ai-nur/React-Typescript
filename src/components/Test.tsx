import React from "react";
import "./TestStyling.scss";

const Test = () => {
  return (
    <div>
      <header className="page-header">
        <nav>
          <a href="#0" aria-label="forecastr logo" className="logo">
            <svg width="140" height="49">
              <use href="#logo"></use>
            </svg>
          </a>
          <button
            className="toggle-mob-menu"
            aria-expanded="false"
            aria-label="open menu"
          >
            <svg width="20" height="20" aria-hidden="true">
              <use href="#down"></use>
            </svg>
          </button>
          <ul className="admin-menu">
            <li className="menu-heading">
              <h3>Admin</h3>
            </li>
            <li>
              <a href="#0">
                <svg>
                  <use href="#pages"></use>
                </svg>
                <span>Pages</span>
              </a>
            </li>

            {/* <!-- more list items here --> */}

            <li>
              <div className="switch">
                <input type="checkbox" id="mode" checked />
                <label htmlFor="mode">
                  <span></span>
                  <span>Dark</span>
                </label>
              </div>
              <button
                className="collapse-btn"
                aria-expanded="true"
                aria-label="collapse menu"
              >
                <svg aria-hidden="true">
                  <use href="#collapse"></use>
                </svg>
                <span>Collapse</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Test;
