import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvide = ({ children }) => {
  const [cart, setCart] = useState([]);
  //funcion agregar al carrito

  const addToCart = (product) => {
    let isInCart = cart.some((el) => el.id === product.id);
    if (isInCart) {
      console.log("ya esta en el carrito");
      let nuevoArray = cart.map((el) => {
        if (el.quantity === product.quantity) {
          return { ...el, quantity: el.quantity + product.quantity };
        } else {
          return el;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
  };

  //eliminar del carrito
  const removeById = (id) => {
    let arrayFiltrado = cart.filter((element) => element.id !== id);
    setCart(arrayFiltrado);
  };

  // limpiar carrito

  //limpiar carrito
  const resetCart = () => {
    setCart([]);
  };
  // cantidad de productos
  const getTotalQuantity = (id) => {
    const product = cart.find((el) => el.id === id);
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  // total a pagar
  const getTotalAmount = () => {
    let total = cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
    return total;
  };
  // numero del carrito
  const getTotalInCart = () => {
    let TotalItemCart = cart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return TotalItemCart;
  };

  let DataValue = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalQuantity,
    getTotalAmount,
    getTotalInCart,
  };
  return (
    <CartContext.Provider value={DataValue}>{children}</CartContext.Provider>
  );
};
