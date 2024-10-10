import { GiShoppingCart } from "react-icons/gi";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <GiShoppingCart />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
