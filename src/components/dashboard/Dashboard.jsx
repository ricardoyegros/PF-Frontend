import { React, useEffect } from "react";
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
} from "@mui/material";

import Sidebar from "./Sidebar";

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

    return (
        <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Admin Dashboard !!
            </Typography>
            <Sidebar />
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
                                            height: 240,
                                        }}
                                    >
                                        mapa
                                    </Paper>
                                </Grid>
                                {/* Recent Deposits */}
                                <Grid item xs={12} md={4} lg={3}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            height: 240,
                                        }}
                                    >
                                        Ventas
                                    </Paper>
                                </Grid>
                                {/* Recent Orders */}
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        'Orden 1'
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        'Orden 2'
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        'Orden 3'
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
                                        Social-Media
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
