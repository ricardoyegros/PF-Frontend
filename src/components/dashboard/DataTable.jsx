import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/adminProductAction";
import { Category, Summarize } from "@mui/icons-material";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { useNavigate } from "react-router-dom";

export default function DataTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "products", headerName: "Products", width: 280 },
    { field: "brand", headerName: "Brand", width: 130 },
    {
      field: "category",
      headerName: "Category",
      width: 130,
    },
    {
      field: "stock",
      headerName: "Stock",
      default: 0,
      sortable: true,
      type: "number",
      width: 90,
    },
    {
      field: "available",
      headerName: "Available",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 90,
      valueGetter: (params) =>
        `${params.row.stock > 0 ? "Available" : "Not available"}`,
    },
    {
      field: "purchasePrice",
      headerName: "Purchase Price",
      type: "number",
      width: 90,
    },
    {
      field: "salePrice",
      headerName: "Sale Price",
      type: "number",
      width: 90,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 90,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleclickCell(e, cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  let rows = [];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.adminProductsReducer.products);
  //console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //console.log(rows)

  const showProducts = products.map((prod) => ({
    id: prod.id,
    brand: prod.brand.name,
    products: prod.name,
    stock: prod.stock,
    category: prod.category.name,
    purchasePrice: prod.purchasePrice,
    salePrice: prod.salePrice,
  }));

  rows = [...showProducts];

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(navigate("/creacion"));
  };

  const handleclickCell = (e, value) => {
    navigate("/updateitem", {
      state: {
        id: value.row.id,
        name: value.row.products,
        stock: value.row.stock,
        purchasePrice: value.row.purchasePrice,
        salePrice: value.row.salePrice,
      },
    });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Button color="inherit">
              <Sidebar color="inherit" />
            </Button>
            <Button onClick={handleClick} color="inherit">
              Crear Producto
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}
