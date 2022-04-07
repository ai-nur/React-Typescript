import React from "react";
import "./TestStyling.scss";
import LogoUT from "../assets/images/LogoUT.png";

const Test = () => {
  return (
    <div className="container">
      <div className="sidebar">
        {/* sidebar */}
        <ul className="list">
          <a className="link" href="#">
            <img src={LogoUT} className="img"></img>
            <h3>UT Admin</h3>
          </a>
          <li>
            <a className="link" href="#">
              Stock
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Image
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Category
            </a>
          </li>
          <li>
            <a className="link" href="#">
              Actived
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Test;
