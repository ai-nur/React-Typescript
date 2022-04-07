import React from "react";
import { Link } from "react-router-dom";
import "./StockStyle.scss";

const StockComponent = () => {
  return (
    <div className="container">
      Stock Component
      <Link to="/">Back</Link>
    </div>
  );
};

export default StockComponent;
