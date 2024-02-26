// import React, { useState } from "react";
// import { Combobox } from "@headlessui/react";
// import axios from "axios";

// function AddProduct() {
//   const [product, setProduct] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await addProduct(product);
//     setIsSubmitting(false);
//   };

//   const addProduct = async (product) => {
//     try {
//       const res = await axios.post("http://localhost:8000/products", product);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-md">
//       <h1 className="text-2xl font-bold mb-4">Add Product</h1>
//       <div className="mb-4">
//         <label htmlFor="id" className="block text-gray-700">
//           Id
//         </label>
//         <input
//           id="id"
//           name="id"
//           type="number"
//           placeholder="Id"
//           className="form-input mt-1 block w-full"
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-gray-700">
//           Title
//         </label>
//         <input
//           id="title"
//           name="title"
//           type="text"
//           placeholder="Title"
//           className="form-input mt-1 block w-full"
//           onChange={handleChange}
//         />
//       </div>
//       {/* Add other input fields similarly */}
//       <div className="mb-4">
//         <label htmlFor="brand" className="block text-gray-700">
//           Brand
//         </label>
//         <Combobox value={product.brand} onChange={(value) => setProduct({ ...product, brand: value })}>
//           <Combobox.Button className="form-select mt-1 block w-full">
//             {product.brand || "Select a Brand"}
//           </Combobox.Button>
//           <Combobox.Options className="bg-white shadow-md mt-1 w-full">
//             <Combobox.Option value="Apple">Apple</Combobox.Option>
//             <Combobox.Option value="Samsung">Samsung</Combobox.Option>
//             <Combobox.Option value="Nokia">Nokia</Combobox.Option>
//           </Combobox.Options>
//         </Combobox>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="category" className="block text-gray-700">
//           Category
//         </label>
//         <Combobox value={product.category} onChange={(value) => setProduct({ ...product, category: value })}>
//           <Combobox.Button className="form-select mt-1 block w-full">
//             {product.category || "Select a Category"}
//           </Combobox.Button>
//           <Combobox.Options className="bg-white shadow-md mt-1 w-full">
//             <Combobox.Option value="Smartphones">Smartphones</Combobox.Option>
//             <Combobox.Option value="Laptops">Laptops</Combobox.Option>
//             <Combobox.Option value="Other">Other</Combobox.Option>
//           </Combobox.Options>
//         </Combobox>
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-50"
//         onClick={handleSubmit}
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Submitting..." : "Submit"}
//       </button>
//     </form>
//   );
// }

// export default AddProduct;

//=============================================================

// import React, { useState } from "react";
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
// import axios from "axios";

// function AddProduct() {
//   const [product, setProduct] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await addProduct(product);
//     setIsSubmitting(false);
//   };

//   const addProduct = async (product) => {
//     try {
//       const res = await axios.post("http://localhost:8000/products", product);
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{
//         maxWidth: 400,
//         margin: "auto",
//         padding: 16,
//         backgroundColor: "#fff",
//         boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//         borderRadius: 8,
//       }}
//     >
//       <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 16 }}>Add Product</h1>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Id" name="id" type="number" variant="outlined" onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Title" name="title" variant="outlined" onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth variant="outlined">
//             <InputLabel>Brand</InputLabel>
//             <Select
//               value={product.brand || ""}
//               onChange={(e) => setProduct({ ...product, brand: e.target.value })}
//               label="Brand"
//             >
//               <MenuItem value="Apple">Apple</MenuItem>
//               <MenuItem value="Samsung">Samsung</MenuItem>
//               <MenuItem value="Nokia">Nokia</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth variant="outlined">
//             <InputLabel>Category</InputLabel>
//             <Select
//               value={product.category || ""}
//               onChange={(e) => setProduct({ ...product, category: e.target.value })}
//               label="Category"
//             >
//               <MenuItem value="Smartphones">Smartphones</MenuItem>
//               <MenuItem value="Laptops">Laptops</MenuItem>
//               <MenuItem value="Other">Other</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} style={{ marginTop: 16 }}>
//             {isSubmitting ? "Submitting..." : "Submit"}
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// export default AddProduct;

//=============================================================

import React, { useState } from "react";
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await addProduct(product);
    setIsSubmitting(false);
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
        Add Product
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>ID</Typography>
          <TextField fullWidth name="id" type="number" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Rating</Typography>
          <TextField fullWidth name="rating" type="number" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Price</Typography>
          <TextField fullWidth name="price" type="number" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Thumbnail</Typography>
          <TextField fullWidth name="price" type="text" variant="outlined" onChange={handleChange} required />
        </Grid>
        <Grid item xs={12}>
          <Typography>Title</Typography>
          <TextField fullWidth name="title" variant="outlined" onChange={handleChange} required />
        </Grid>
        <Grid item xs={12}>
          <Typography>Brand</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Brand</InputLabel>
            <Select
              value={product.brand || ""}
              onChange={(e) => setProduct({ ...product, brand: e.target.value })}
              label="Brand"
            >
              <MenuItem value="Apple">Apple</MenuItem>
              <MenuItem value="Samsung">Samsung</MenuItem>
              <MenuItem value="Nokia">Nokia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography>Category</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Category</InputLabel>
            <Select
              value={product.category || ""}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              label="Category"
            >
              <MenuItem value="Smartphones">Smartphones</MenuItem>
              <MenuItem value="Laptops">Laptops</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} style={{ marginTop: 16 }}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default AddProduct;
