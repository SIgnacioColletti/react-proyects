import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";
import { Cart } from "./components/pages/cart/Cart";
import NavBar from "./components/layout/navbar/NavBar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>no se encontro pagina</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
