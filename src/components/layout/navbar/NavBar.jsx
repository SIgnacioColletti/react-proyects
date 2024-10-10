import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <h3>NcChloes</h3>

      <ul>
        <button>
          <a href="/">pantalones</a>
        </button>
        <button>
          <a href="/">remeras</a>
        </button>
        <button>
          <a href="/">buzos</a>
        </button>
      </ul>

      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};
export default NavBar;
