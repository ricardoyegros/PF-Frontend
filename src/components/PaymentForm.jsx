import { Button } from "@mui/material";
import React from "react";
import {useSelector} from "react-redux"
export default function PaymentForm({prevStep}) {
const cart = useSelector(state => state.shoppingCartReducer)
console.log(cart)
    return (
        <>
            <h1>Payment Form</h1>
            <div style={{display: "flex", justifyContent : "space-around", margin: "1rem"  }}>
            <Button variant="contained" onClick={prevStep}>Regresar</Button>
            <Button variant="contained" > Finalizar Pago</Button>
            </div>
        </>
    )
};