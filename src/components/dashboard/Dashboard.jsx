import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as Linkdom } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import { ThemeProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import {
  Typography,
  CardContent,
  Grid,
  Button,
  createTheme,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Sidebar from "./Sidebar";
import SearchAppBar from "./SearchAppBar";
import { Sucursales } from "./Sucursales";
import { Map } from "./Map";
import SpanningTable from "./SpanningTable";
import StoreIcon from "@mui/icons-material/Store";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { MapDashboard } from "./MapDashboard";
import axios from "axios";
import { OrderDashboard } from "./OrderDashboard";
import Sales from "./Sales";
import Compras from "./Compras";

export default function Dashboard() {
  const theme = createTheme({
    palette: {
      primary: {
        // aqui el color primario un gris suave para que el logo se pueda ver.
        main: "#cfcfcf",
        light: "#cfcfcf",
        dark: "#707070",
      },
      secondary: {
        // de secundario un azul suave para evitar que sea muy chocante
        main: "#4f83cc",
        light: "#4f83cc",
        dark: "#002f6c",
      },
    },
    //aqui aumente un poco el tamaño de todo
    typography: {
      fontSize: 18,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.usersReducers.user);
  //const token = useSelector((state) => state.usersReducers.token);
  let token = localStorage.token;
  //console.log(token)

  return (
    <>
      <SearchAppBar />

      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              overflow: "auto",
            }}
          >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "380px",
                    }}
                  >
                    Nuestras tiendas!!
                    <MapDashboard />
                  </Paper>
                </Grid>
                <Divider />
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: "380px",
                    }}
                  >
                    Ventas
                    <PointOfSaleIcon />
                    {/* <Sales /> */}
                  </Paper>
                </Grid>
                {/* Recent Orders */}
                <OrderDashboard />
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    Social-Media
                    <Diversity1Icon />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    Stock
                    <StoreIcon />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    Compras
                    <PointOfSaleIcon />
                    {/* <Compras /> */}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    Ganancias
                    <MonetizationOnIcon />
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
