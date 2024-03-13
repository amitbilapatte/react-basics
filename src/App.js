import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import ProductsList from "./ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
