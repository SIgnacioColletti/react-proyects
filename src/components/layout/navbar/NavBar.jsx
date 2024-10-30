import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <h1 className="logo"> Club 6</h1>
      </Link>

      <ul>
        <button className="btn-products">
          <Link to="/category/pantalones">Pantalones</Link>
        </button>
        <button className="btn-products">
          <Link to="/category/remeras">Remeras</Link>
        </button>
        <button className="btn-products">
          <Link to="/category/buzos">Buzos</Link>
        </button>
      </ul>

      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
