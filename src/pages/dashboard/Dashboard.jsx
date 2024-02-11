import React, { Component } from "react";
import { PRODUCTS } from "../../Products";
import { Product } from "./Product";
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard Page</h2>
        <div>
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    );
  }
}
