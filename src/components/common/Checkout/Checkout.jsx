import { useContext, useState } from "react";
import "./checkOut.css";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Compra } from "./Compra";
const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    console.log("first");
    const total = getTotalAmount();
    const order = {
      buyer: userdata,
      items: cart,
      total,
    };

    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });
    let refCol = collection(db, "products");
    order.items.forEach((items) => {
      let refDoc = doc(refCol, items.id);

      updateDoc(refDoc, { stock: items.stock - items.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserdata({ ...userdata, [name]: value });
  };

  if (orderId) {
    return <Compra orderId={orderId} />;
  }

  return (
    <div className="form-container">
      <div className="formulario">
        <h1 className="login">Finaliza la compra</h1>
        <form className="form" onSubmit={funcionFormulario} method="post">
          <div className="username">
            <label> Nombre de usuario</label>
            <input
              type="text"
              name="name"
              placeholder="Escribe su nombre"
              onChange={capturarInfo}
            />
          </div>
          <div className="username">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Escribe su email"
              onChange={capturarInfo}
            />
          </div>
          <div className="username">
            <label>Numero de telefono</label>
            <input
              type="text"
              name="phone"
              placeholder="Escribe su número"
              onChange={capturarInfo}
            />
          </div>
          <button>Comprar</button>
        </form>
        <button type="button">Cancelar</button>
      </div>
    </div>
  );
};

export default Checkout;
