import { useState } from "react";
import "./counter.css";
import { Link } from "react-router-dom";

const Counter = ({ stock, onAdd, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const suma = () => {
    stock - totalInCart > contador
      ? setContador(contador + 1)
      : alert("stock maximo");
  };

  const resta = () => {
    contador > 1 && setContador(contador - 1);
  };
  return (
    <div className="count">
      <div className="controles">
        <button onClick={resta} className="btn-count">
          -
        </button>
        <h2 className="text-count">{contador} </h2>
        <button onClick={suma} className="btn-count">
          +
        </button>
      </div>
      <div className="div-btn">
        <Link to="/">
          <button className="btn-count-cart">
            volver a lista de productos
          </button>
        </Link>
        <button className="btn-count-cart" onClick={() => onAdd(contador)}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Counter;
