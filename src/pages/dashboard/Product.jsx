import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";

export const Product = (props) => {
  const { id, productName, price, description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ProductContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
