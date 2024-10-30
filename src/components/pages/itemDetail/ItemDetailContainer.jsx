import ItemDetail from "./ItemDetail";
import { products } from "../../Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);

    setItem(productSelected);
  }, [id]);

  return (
    <div className="icontainer">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
