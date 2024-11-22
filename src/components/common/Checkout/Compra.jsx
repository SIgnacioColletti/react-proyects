import React from "react";
import "./Compra.css";

export const Compra = ({ orderId }) => {
  return (
    <div className="compra-contenedor">
      <h2 className="compra-titulo">gracias por su compra </h2>
      <p className="compra-id"> su numero de pedido es: {orderId}</p>
    </div>
  );
};
