import React from "react";

export const Product = (props) => {
  const { productName, description, price, productImage } = props.data;

  return (
    <div className="product">
      <img src={productImage} alt="product img" />
      <div>
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p> ${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
