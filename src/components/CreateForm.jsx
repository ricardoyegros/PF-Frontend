import {React, useState} from "react";
import {useDispatch} from "react-redux";
import {getAllProducts, createProduct} from "../redux/actions/index.js"
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button
} from "@mui/material";


export default function CreateForm() {
    const dispatch = useDispatch();
    const [state, setState] = useState({});

    function handleChange(e){
        setState({...state, [e.target.name]: e.target.value})
    }
    console.log(state)

    function handleSubmit (){
        dispatch(getAllProducts());
        dispatch(createProduct(state));
    }
    
    return (
    <>
      <Typography gutterBottom variant="h3" align="center">
        TechStore - Create Product
      </Typography>
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
                  label="Brand"
                  placeholder="Please enter a brand name..."
                  variant="outlined"
                  fullWidth
                  required
                  name="brand"
                  value={state.brand}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Category"
                  placeholder="Please enter a category name..."
                  variant="outlined"
                  fullWidth
                  required
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                />
              </Grid>
              <Grid xs={12} item>
                <Button variant="contained" component="label" name="image">
                  Upload your images
                  <input name="image" value={state.image} hidden accept="image/*" muiltiple type="file" onChange={handleChange}  />
                </Button>
                <p>{state.image}</p>
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

// <Grid xs={12} item>
//   <TextField
//     type="image"
//     label="Select your Images"
//     placeholder="Please enter images..."
//     fullWidth
//     required
//   />
// </Grid>
