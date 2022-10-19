import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AddressInput from "./AddressInput";
import { paymentMethod } from "../redux/actions/payment";
import axios from "axios";
import swal from "sweetalert";


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
                    let info = {
                        total: 1,
                        discount: 1,
                        subTotal: 1,
                        status: 'Preparando',
                        userId: localStorage.id,
                        sucursalId: 1,
                        quantity: 1,
                        productsId: {
                            cart: JSON.parse(localStorage.cart),
                            email: localStorage.email
                        }
                    };
                    console.log(info);

                    axios.post(`https://techstore123.herokuapp.com/orders`, info)
                        .then(r => {
                            swal('Exito', r.data, 'success');
                            if (r.data === 'Orden Creada!') return dispatch(paymentMethod({ cart: JSON.parse(localStorage.cart), userId: localStorage.id }))
                        })
                        .catch(e => swal('Error!', e.message, 'error'));
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