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

  const handleDelete = (id) => {
    console.log("deleted : ", id);
  };

  return (
    <div style={{ display: "flex", minWidth: "max-Content" }}>
      {products.map((product, index) => (
        <Product {...product} key={index} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProductsList;
