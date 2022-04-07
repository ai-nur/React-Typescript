import React, { useState } from "react";
import "./DashboardStyle.scss";
import {Logo} from "../../assets";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const DashboardComponent = () => {
  const [modalShown, setModalShown] = useState(false);
  const [dataTabel, setDataTabel] = useState([
    {
      name: "Lifebuoy",
      stock: "999",
      imageURL:
        "https://www.lifebuoy.co.id/content/dam/brands/lifebuoy/id_id/products/1000001.png",
      price: "5.000",
      category: "Soap",
      actived: true,
    },
    {
      name: "Sunsilk",
      stock: "999",
      imageURL:
        "https://image.femaledaily.com/dyn/500/images/prod-pics/product_1615542034_Hair_Fall__800x800.jpg",
      price: "10.000",
      category: "Shampoo",
      actived: false,
    },
  ]);

  const ShowModal = () => {
    const [formData, setFormData] = useState({
      no: "",
      name: "",
      stock: "",
      imageURL: "",
      price: "",
      category: "",
      actived: false,
    });

    function handleChange(event: any) {
      event.preventDefault();
      let data = { ...formData };
      data[event.target.name] = event.target.value;
      setFormData(data);
    }

    function handleCheckedChange(event: any) {
      event.preventDefault();
      let data = { ...formData };
      data[event.target.name] = event.target.checked;
      setFormData(data);
    }

    const handleSubmit = (event: any) => {
      console.log("submit");
      event.preventDefault();
      let data = [...dataTabel];

      console.log(dataTabel.map)
      let newData = {
        name: formData.name,
        stock: formData.stock,
        imageURL: formData.imageURL,
        price: formData.price,
        category: formData.category,
        actived: formData.actived,
      }
      data.push(newData)

      setFormData({
        no: "",
        name: "",
        stock: "",
        imageURL: "",
        price: "",
        category: "",
        actived: false,  
      })

      setDataTabel(data)
      setModalShown(false)
    };

    console.log(formData.actived);
    return (
      <Modal
        isOpen={modalShown === true}
        // onRequestClose={modalShown === false}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={"modal-wrapper"}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3>Add New Product</h3>
            <span className="close" onClick={() => setModalShown(false)}>
              x
            </span>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="form">
              <div>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  onChange={handleChange}
                  // value={inputValues?.name || ""}
                  value={formData.name}
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="stock">Stock</label>
                <br />
                <input
                  onChange={handleChange}
                  // value={inputValues?.stock || ""}
                  value={formData.stock}
                  className="input"
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="Stock"
                />
              </div>
              <div>
                <label htmlFor="imageURL">Image URL</label>
                <br />
                <input
                  onChange={handleChange}
                  // value={inputValues?.imageURL || ""}
                  value={formData.imageURL}
                  className="input"
                  type="text"
                  id="imageURL"
                  name="imageURL"
                  placeholder="Image URL"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <br />
                <input
                  onChange={handleChange}
                  // value={inputValues?.price || ""}
                  value={formData.price}
                  className="input"
                  type="text"
                  id="price"
                  name="price"
                  placeholder="Price"
                />
              </div>
              <div className="roww">
                <div className="columns">
                  <label htmlFor="category">Category</label>
                  <br />
                  <select
                    onChange={handleChange}
                    // value={inputValues?.category || ""}
                    value={formData.category}
                    className="input"
                    id="category"
                    name="category"
                  >
                    <option aria-readonly>Choose</option>
                    <option value="Soap">Soap</option>
                    <option value="Shampoo">Shampoo</option>
                  </select>
                </div>
                <div className="columns">
                  <label htmlFor="actived">Actived</label>
                  <br />
                  <input
                    className="check"
                    type="checkbox"
                    id="actived"
                    name="actived"
                    onChange={handleCheckedChange}
                    checked={formData.actived}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={handleSubmit} className="button-save">
              Save
            </button>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div className="wrapper">
      {/* {modalShown === true ? <Modal /> : null} */}

      {/* sidebar */}
      <ul className="sidebar">
        <Link className="link" to="/login">
          <img src={Logo} className="img"></img>
          <h3>UT Admin</h3>
        </Link>
        <li>
          <Link className="link" to="/stock">
            Stock
          </Link>
        </li>
        <li>
          <Link className="link" to="/stock">
            Image
          </Link>
        </li>
        <li>
          <Link className="link" to="/stock">
            Pricing
          </Link>
        </li>
        <li>
          <Link className="link" to="/stock">
            Category
          </Link>
        </li>
        <li>
          <Link className="link" to="/stock">
            Actived
          </Link>
        </li>
      </ul>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <img className="img-profil" src={Logo} />
          <Link className="link-profil" to="/login" >Login</Link>
        </div>
        {/* Table */}
        <div className="box">
          <h2>Product Information</h2>
          <button className="button" onClick={() => setModalShown(true)}>
            Add Product
          </button>
          {modalShown === true ? <ShowModal /> : null}
          <table className="table-latitude">
            <thead>
              <tr>
                {/* <th style={{ width: "35px" }}>ID</th> */}
                <th style={{ width: "100px" }}>Nama</th>
                <th style={{ width: "80px" }}>Stock</th>
                <th style={{ width: "120px" }}>Image</th>
                <th style={{ width: "150px" }}>Pricing</th>
                <th style={{ width: "80px" }}>Category</th>
                <th style={{ width: "170px" }}>Actived</th>
                <th style={{ width: "150px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataTabel.map((data, index) => (
                <tr key={index}>
                  {/* <td>{data.no}</td> */}
                  <td>{data.name}</td>
                  <td>{data.stock}</td>
                  <td>
                    <img
                      src={data.imageURL}
                      style={{ height: "70px", width: "70px" }}
                    />
                  </td>
                  <td>{data.price}</td>
                  <td>{data.category}</td>
                  <td>{data.actived === true ? "Active" : "Inactive"}</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button className="del">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DashboardComponent;
