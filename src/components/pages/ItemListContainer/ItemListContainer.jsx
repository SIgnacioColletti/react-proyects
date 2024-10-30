import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../Products";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setCargando(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const filteredProducts = name
        ? products.filter((product) => product.category === name)
        : products;
      setItems(filteredProducts);
      setCargando(false);
    };

    getProducts();
  }, [name]);

  return (
    <div>
      {cargando ? (
        <p className="load">Cargando...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
