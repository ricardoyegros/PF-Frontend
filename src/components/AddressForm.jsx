import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import {useForm, FormProvider} from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddressInput from "./AddressInput";
import { shippingData } from "../redux/actions/cart-actions";

export default function AddressForm ({nextStep}) {
    const dispatch = useDispatch();
    const methods = useForm();
    return (
        <>
            <Typography m={1} gutterBottom variant="h4" align="center">
                Datos de Recepción
            </Typography>
            <FormProvider  {...methods}>
                <form onSubmit={methods.handleSubmit(data => {
                    dispatch(shippingData(data))
                    nextStep()
                })}>
                    <Grid mt={1} container spacing={3}>
                        <AddressInput required name="firstName" label="Nombre"/>
                        <AddressInput required name="lastName" label="Apellido"/>
                        <AddressInput required name="phone" label="Numero de contacto"/>
                        <AddressInput required name="email" label="Correo Electrónico"/>
                        <AddressInput required name="Cp" label="Código Postal"/>
                        <AddressInput required name="address" label="Dirección"/>
                        <AddressInput required name="city" label="Ciudad"/>
                        <AddressInput required name="province" label="Provincia"/>
                    </Grid>
                    <div style={{display: "flex", justifyContent : "space-around", margin: "1rem"  }}>
                        <Button component={Link} to="/shopping-cart" variant="contained">Volver al Carrito</Button>
                        <Button type="submit" variant="contained">Siguiente</Button>
                    </div>
                </form> 
            </FormProvider>
        </>
    )
};