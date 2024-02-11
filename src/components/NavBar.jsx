import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/"> Dashboard </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/profile">
          <UserCircle size={32} />
        </Link>
      </div>
    </div>
  );
};
