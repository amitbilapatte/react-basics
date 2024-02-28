import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./Products";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const getAll = async () => {
    const res = await axios.get("http://localhost:8000/products");
    console.log(res);
    setProducts(res.data);
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div style={{ display: "flex", minWidth: "max-Content" }}>
      {products.map((product, index) => (
        <Product {...product} key={index} />
      ))}
    </div>
  );
}

export default ProductsList;
