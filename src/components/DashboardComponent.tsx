import React from "react";
import "./DashboardStyle.scss";
import { Logo } from "../assets/images";
import LogoUT from "../assets/images/LogoUT.png";

const DashboardComponent = () => {
  return (
    <>
      {/* sidebar */}
      <ul className="sidebar">
        <a className="link" href="#">
          <img src={LogoUT} className="img"></img>
          <h3>UT Admin</h3>
        </a>
        <li>
          <a className="link" href="#">Stock</a>
        </li>
        <li>
          <a className="link" href="#">Image</a>
        </li>
        <li>
          <a className="link" href="#">Pricing</a>
        </li>
        <li>
          <a className="link" href="#">Category</a>
        </li>
        <li>
          <a className="link" href="#">Actived</a>
        </li>
      </ul>

      {/* Main Content */}
	  <div></div>

    </>
  );
};
export default DashboardComponent;
