import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({});
  //   const [product, setProduct] = useState({
  //     title: "",
  //     price: "",
  //     rating: "",
  //     discountPercentage: "",
  //     brand: "",
  //     category: "",
  //   });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    // try {
    //   const res = await axios.post("http://localhost:8000/products/create", product);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    addProduct(product);
    console.log("responce");
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post("http://localhost:8000/products", product);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add Product</legend>
        <div className="form-group">
          <label htmlFor="id" className="block">
            Id
          </label>
          <input
            id="id"
            name="id"
            type="number"
            placeholder="id"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="thumbnail" className="block">
            Thumbnail
          </label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            placeholder="thumbnail.jpeg"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating" className="block">
            Rating
          </label>
          <input
            id="rating"
            name="rating"
            type="number"
            placeholder="5"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discountPercentage" className="block">
            Discount
          </label>
          <input
            id="discountPercentage"
            name="discountPercentage"
            type="number"
            placeholder="discountPercentage"
            className="form-control input-md"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand" className="block">
            Brand
          </label>
          <Combobox value={product.brand} onChange={(value) => setProduct({ ...product, brand: value })}>
            <Combobox.Button>{product.brand || "Select a Brand"}</Combobox.Button>
            <Combobox.Options>
              <Combobox.Option value="Apple">Apple</Combobox.Option>
              <Combobox.Option value="Samsung">Samsung</Combobox.Option>
              <Combobox.Option value="Nokia">Nokia</Combobox.Option>
            </Combobox.Options>
          </Combobox>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="block">
            Category
          </label>
          <Combobox value={product.category} onChange={(value) => setProduct({ ...product, category: value })}>
            <Combobox.Button>{product.category || "Select a Category"}</Combobox.Button>
            <Combobox.Options>
              <Combobox.Option value="Smartphones">Smartphones</Combobox.Option>
              <Combobox.Option value="Laptops">Laptops</Combobox.Option>
              <Combobox.Option value="Other">Other</Combobox.Option>
            </Combobox.Options>
          </Combobox>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default AddProduct;
