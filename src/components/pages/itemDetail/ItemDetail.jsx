import Counter from "../../common/count/Counter";
import "./itemlistd.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="product">
      <h2>{item.title}</h2>
      <img src={item.imageUrl} alt="imagen producto" className="img-producto" />
      <h2>{item.description}</h2>
      <p>${item.price}</p>
      <p> nos quedan: {item.stock} unidades de este producto</p>
      <Counter
        initial={1}
        stock={item.stock}
        onAdd={(quantity) => console.log("CANTIDAD AGREGADA:", quantity)}
      />
    </div>
  );
};

export default ItemDetail;
