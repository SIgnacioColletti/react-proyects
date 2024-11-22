import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let totalEnElCart = getTotalAmount();

  return (
    <div className="cart-container">
      <h2>aca el carrito </h2>

      {cart.map((product) => {
        return (
          <div className="div-cart" key={product.id}>
            <h2 className="title-cart">{product.title}</h2>
            <img src={product.imageUrl} alt="" className="img-cart" />
            <h2 className="title-cart">cantidad:{product.quantity}</h2>

            <h3 className="price-cart">
              precio:${product.price * product.quantity}
            </h3>
            <button className="btn-cart" onClick={() => removeById(product.id)}>
              x
            </button>
          </div>
        );
      })}
      {cart.length > 0 && (
        <div className="btn-accions">
          <button onClick={resetCart}>limpiar carrito</button>
          <h2>total a pagar es: ${totalEnElCart} </h2>
          <Link to="/">
            <button>seguir comprando </button>
          </Link>
          <Link to="/Checkout">
            <button>finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};
