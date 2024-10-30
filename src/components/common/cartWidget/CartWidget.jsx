import { GiShoppingCart } from "react-icons/gi";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <GiShoppingCart />
      <span>0</span>
    </Link>
  );
};

export default CartWidget;
