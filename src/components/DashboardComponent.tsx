import React from "react";
import "./DashboardStyle.scss";
import LogoUT from "../assets/images/LogoUT.png";

const DashboardComponent = () => {
  return (
    <div className="wrapper">
      {/* sidebar */}
      <ul className="sidebar">
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

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div></div>
        {/* Table */}
        <div className="box">
          <h2>Product Information</h2>
          <button>Add Product</button>
          <table className="table-latitude">
            <thead>
              <tr>
                <th>ID</th>
                <th>Stock</th>
                <th>Image</th>
                <th>Pricing</th>
                <th>Category</th>
                <th>Actived</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>99</td>
                <td>
                  <img src={LogoUT} style={{height: '70px', width: '70px'}} />
                </td>
                <td>IDR 5.000</td>
                <td>Soap</td>
                <td>V</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="del">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>99</td>
                <td>
                  <img src={LogoUT} style={{height: '70px', width: '70px'}} />
                </td>
                <td>IDR 10.000</td>
                <td>Shampoo</td>
                <td>V</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="del">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DashboardComponent;
