import ItemListContainer from "./components/layout/ItemListContainer/ItemListContainer";
import NavBar from "./components/layout/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer props="NcClohes in coming..." />
    </div>
  );
}
export default App;
