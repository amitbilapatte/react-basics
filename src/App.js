import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
