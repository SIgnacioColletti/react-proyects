import React from "react";
import { Card } from "../../common/card/Card";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="il-container ">
        {items.map(({ id, price, title, imageUrl, stock }) => (
          <Card
            key={id}
            id={id}
            title={title}
            stock={stock}
            price={price}
            image={imageUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
