import { useState } from "react";
import "./counter.css";

const Counter = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const suma = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const resta = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="count">
      <div className="controles">
        <button onClick={resta} className="btn-count">
          -
        </button>
        <h2 className="text-count"> {quantity}</h2>
        <button onClick={suma} className="btn-count">
          +
        </button>
      </div>
      <button
        className="btn-count-cart"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
