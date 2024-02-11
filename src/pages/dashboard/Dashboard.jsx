import "./dashboard.css";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title">
        <h1>Unik Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
