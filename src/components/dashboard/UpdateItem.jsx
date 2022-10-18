import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "./Sidebar";
import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
    Box,
} from "@mui/material";

import { updateItem } from "../../redux/actions/updateItem";
import { getDetailProduct } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

export default function UpdateItem() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    // console.log(state.name);

    useEffect(() => {
        dispatch(getDetailProduct(state.id));
    }, []);

    let detailProduct = useSelector(
        (state) => state.detailProductReducer.detailProduct
    );
    console.log(detailProduct);

    const [input, setInput] = useState({
        name: state.name,
        id: state.id,
        stock: state.stock,
        purchasePrice: state.purchasePrice,
        salePrice: state.salePrice,
    });

    console.log(input);
    function handleSubmit(e) {
        console.log(input);
        e.preventDefault();
        dispatch(updateItem(input));
        //setInput({});
        navigate("/admin/stock");
    }

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    return (
        <>
            {" "}
            <Typography gutterBottom variant="h3" align="center">
                Actualizar Producto
            </Typography>
            <Sidebar/>
            <Box display={"flex"} justifyContent={"center"}>
                <div
                /* style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }} */
                >
                    {detailProduct.images.length > 0 ? (
                        <img
                            src={detailProduct.images[0].url}
                            style={{
                                maxWidth: "20rem",
                                marginBottom: "0.5rem",
                                marginLeft: "2.5rem",
                            }}
                        />
                    ) : <h2>No hay imagen para este producto</h2>}
                </div>

                <Card
                    style={{
                        maxWidth: 450,
                        margin: "0 auto",
                        padding: "20px 5px",
                    }}
                >
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} item>
                                    <TextField
                                        label="Producto"
                                        placeholder="Please enter you name..."
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="text"
                                        name="name"
                                        value={input.name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid xs={12} item>
                                    <TextField
                                        /* select */
                                        label="Stock"
                                        placeholder="Please enter a type identification..."
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="number"
                                        name="stock"
                                        value={input.stock}
                                        onChange={handleChange}
                                    ></TextField>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        label="Precio de compra"
                                        placeholder="Please enter you number of identification..."
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="number"
                                        name="purchasePrice"
                                        value={input.purchasePrice}
                                        onChange={handleChange}
                                    ></TextField>
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField
                                        label="Precio de venta"
                                        placeholder="Please enter you number of phone..."
                                        variant="outlined"
                                        fullWidth
                                        required
                                        type="number"
                                        name="salePrice"
                                        value={input.salePrice}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid xs={12} item>
                                    <Button
                                        color="primary"
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                    >
                                        Actualizar Producto
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
