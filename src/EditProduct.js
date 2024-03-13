import React, { useEffect, useState } from "react";
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await editProduct(product);
    setIsSubmitting(false);
  };

  const getProduct = async () => {
    const allProducts = await axios.get(`http://localhost:8000/products`);
    const productId = await allProducts.data.filter((p) => p._id === id)[0]?.id;
    const res = await axios.get(`http://localhost:8000/products/${productId}`);
    res && setProduct(res?.data[0]);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const editProduct = async (product) => {
    try {
      const res = await axios.patch(`http://localhost:8000/products/${product.id}`, product);
      console.log(res);
      alert("Product Details updated Successfully!!!");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "auto",
        padding: 16,
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: 8,
      }}
    >
      <Typography variant="h5" style={{ marginBottom: 16 }}>
        Edit Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>ID</Typography>
          <TextField fullWidth name="id" type="number" variant="outlined" onChange={handleChange} value={product.id} />
        </Grid>
        <Grid item xs={6}>
          <Typography>Rating</Typography>
          <TextField
            fullWidth
            name="rating"
            type="number"
            variant="outlined"
            onChange={handleChange}
            value={product.rating}
            inputProps={{
              max: "5",
              min: "0",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Price*</Typography>
          <TextField
            fullWidth
            name="price"
            type="number"
            variant="outlined"
            onChange={handleChange}
            value={product.price}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Thumbnail*</Typography>
          <TextField
            fullWidth
            name="price"
            type="text"
            variant="outlined"
            onChange={handleChange}
            value={product.thumbnail}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Title*</Typography>
          <TextField fullWidth name="title" variant="outlined" onChange={handleChange} value={product.title} required />
        </Grid>
        <Grid item xs={6}>
          <Typography>Brand*</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Brand</InputLabel>
            <Select
              value={product.brand || ""}
              onChange={(e) => setProduct({ ...product, brand: e.target.value })}
              label="Brand"
              required
            >
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Nokia">Nokia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography>Category*</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              value={product.category || ""}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              label="Category"
              required
            >
              <MenuItem value="Smartphones">Smartphones</MenuItem>
              <MenuItem value="Laptops">Laptops</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} style={{ marginTop: 16 }}>
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default EditProduct;
