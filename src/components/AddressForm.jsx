import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AddressInput from "./AddressInput";
import { shippingData } from "../redux/actions/cart-actions";
import { paymentMethod } from "../redux/actions/payment";


export default function AddressForm({ nextStep }) {
    const dispatch = useDispatch();
    const methods = useForm();
    return (
        <>
            <Typography m={1} gutterBottom variant="h4" align="center">
                Datos de Recepción
            </Typography>
            <FormProvider  {...methods}>
                <form onSubmit={methods.handleSubmit(data => {
                    console.log(JSON.parse(localStorage.state).dataBaseStorage.cartItems);
                    return dispatch(paymentMethod({ cart: JSON.parse(localStorage.cart) }));
                })}>
                    <Grid mt={1} container spacing={3}>
                        <AddressInput required name="fullName" label="Nombre Completo" />
                        <AddressInput required name="store" label="Sucursal" />
                        <AddressInput required name="phone" label="Numero de contacto" />
                        <AddressInput required name="email" label="Correo Electrónico" />
                        <AddressInput required name="Cp" label="Código Postal" />
                        <AddressInput required name="address" label="Dirección" />
                        <AddressInput required name="city" label="Ciudad" />
                        <AddressInput required name="province" label="Provincia" />
                    </Grid>
                    <div style={{ display: "flex", justifyContent: "space-around", margin: "1rem" }}>
                        <Button component={Link} to="/shopping-cart" variant="contained">Volver al Carrito</Button>
                        <Button type="submit" variant="contained">Siguiente</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
};