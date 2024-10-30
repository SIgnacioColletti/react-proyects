import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div className="card-p">
      <img src={image} alt="imagen producto" style={{ width: "100%" }} />
      <h2> {title}</h2>
      <h3>Precio:$ {price}</h3>
      <h4>Stock: {stock}</h4>
      <Link to={`/itemDetail/${id}`}>
        <button className="card-button">ver detalle</button>
      </Link>
    </div>
  );
};
