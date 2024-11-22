import { GiShoppingCart } from "react-icons/gi";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
  const { cart, getTotalInCart } = useContext(CartContext);
  let totalItems = getTotalInCart();
  return (
    <Link to="/cart">
      <GiShoppingCart />
      <span>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
