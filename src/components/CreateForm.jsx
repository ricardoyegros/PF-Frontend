import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts, createProduct } from "../redux/actions/index.js";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar"
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const categories = [
  { value: "Mother Board", label: "Mother Board" },
  { value: "Memory", label: "Memory" },
  { value: "Processor", label: "Processor" },
  { value: "Disk", label: "Disk" },
  { value: "Case", label: "Case" },
  { value: "Graphics card GPU", label: "Graphics card GPU" },
  { value: "Monitor", label: "Monitor" },
  { value: "Keyboard", label: "Keyboard" },
  { value: "Cooler", label: "Cooler" },
];

const brands = [
  { value: "Intel", label: "Intel" },
  { value: "AMD", label: "AMD" },
  { value: "Asus", label: "Asus" },
  { value: "MSI", label: "MSI" },
  { value: "Gigabyte", label: "Gigabyte" },
  { value: "Kingstone", label: "Kingstone" },
  { value: "Cougar", label: "Cougar" },
  { value: "HyperX", label: "HyperX" },
  { value: "LG", label: "LG" },
  { value: "Adata", label: "Adata" },
];

export default function CreateForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [file, setFile] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleChangeFile(e) {
    setFile({ ...file, [e.target.name]: e.target.files[0] });
  }
  function handleSubmit(e) {
    let image = file.image;
    let name = state.name;
    let description = state.description;
    let purchasePrice = state.purchasePrice;
    let salePrice = state.salePrice;
    let stock = state.stock;
    let brand = state.brand;
    let category = state.category;
    let formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("purchasePrice", purchasePrice);
    formData.append("salePrice", salePrice);
    formData.append("stock", stock);
    formData.append("brand", brand);
    formData.append("category", category);
    e.preventDefault();
    dispatch(createProduct(formData));
    dispatch(getAllProducts());
    alert("New product has been created");
    navigate("/");
  }

  return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        TechStore - Create Product
      </Typography>
      <Sidebar/>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Upload a New Product!
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Name Product"
                  placeholder="Please enter the name product..."
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Description"
                  multiline
                  rows={4}
                  placeholder="Please enter description product..."
                  variant="outlined"
                  fullWidth
                  required
                  name="description"
                  value={state.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Purchase Price"
                  placeholder="Please enter a purchase price..."
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                  name="purchasePrice"
                  value={state.purchasePrice}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Sales Price"
                  placeholder="Please enter a sales price..."
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                  name="salePrice"
                  value={state.salePrice}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Stock"
                  placeholder="Please enter a product stock..."
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                  name="stock"
                  value={state.stock}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  select
                  label="Brand"
                  placeholder="Please enter a brand name..."
                  variant="outlined"
                  fullWidth
                  required
                  name="brand"
                  value={state.brand}
                  onChange={handleChange}
                >
                  {brands.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  select
                  label="Category"
                  placeholder="Please enter a category name..."
                  variant="outlined"
                  fullWidth
                  required
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} item>
                <Button variant="contained" component="label" name="image">
                  Upload your images
                  <input
                    name="image"
                    value={state.image}
                    hidden
                    accept="image/*"
                    muiltiple
                    type="file"
                    onChange={handleChangeFile}
                  />
                </Button>
              </Grid>
              <Grid xs={12} item>
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

