import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Products";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const getAll = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setProducts(res.data);
  };
  useEffect(() => {
    getAll();
  }, []);

  const handleDelete = async (id) => {
    const deleteProductId = products.filter((p) => p._id === id)[0]?.id;
    if (deleteProductId) {
      try {
        await axios.delete(`http://localhost:8000/products/${deleteProductId}`);
        setProducts(products.filter((p) => p._id !== id));
        alert("deleted product with id : ", deleteProductId);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    } else {
      alert("Id not found for Product to be deleted");
      console.error("Id not found for Product to be deleted");
    }
  };

  return (
    <div style={{ display: "flex", minWidth: "fit-Content", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <Product {...product} key={index} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProductsList;
