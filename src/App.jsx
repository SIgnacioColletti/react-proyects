import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import NavBar from "./components/layout/navbar/NavBar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/common/Checkout/Checkout";
import { CartContextProvide } from "./context/CartContext";
import { Toaster } from "sonner";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster expand={false} position="bottom-right" richColors />
      <CartContextProvide>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>no se encontro pagina</h1>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvide>
    </BrowserRouter>
  );
};

export default App;
