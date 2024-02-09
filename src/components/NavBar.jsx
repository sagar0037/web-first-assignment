import "./NavBar.css";
import { House, ShoppingCart, UserCircle } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <House size={32} color="black" />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} color="black" />
        </Link>
        <Link to="/account">
          <UserCircle size={32} color="black" />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
