import { AppBar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';
// import Sidebar from './Sidebar';

export const OrderDashboard = () => {

    const handleChange = async (e) => {
        e.preventDefault();
        console.log(e.target.value)
        await axios.put('https://techstore123.herokuapp.com/orders', e.target.value)
            .then(r => swal('Exito',r.data, 'success'))
            .catch(e => alert(e));
    }


    const columns = [
        { field: "id", headerName: "Orden", width: 70 },
        { field: "name", headerName: "name", width: 280 },
// 
        {
            field: "status",
            headerName: "Estado 1",
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
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={'Estado'}
                            onChange={handleChange}
                        >
                            <MenuItem value={{ status: 'approved', id: cellValues.id }}>Aprobado</MenuItem>
                            <MenuItem value={{ status: 'Enviado', id: cellValues.id }}>Enviado</MenuItem>
                            <MenuItem value={{ status: 'Completado', id: cellValues.id }}>Finalizado</MenuItem>
                        </Select>
                    </FormControl >
                );
            },
        },
    ];


    const [state, setState] = useState(false);


    if (!state) axios.get('https://techstore123.herokuapp.com/orders/admin')
        .then(r => setState(r.data))
        .catch(e => console.log(e.message))

    let products = state && state.map(e => e.productsId);
    // let emailsUsers = products && products.map(e => JSON.parse(e).email);
    // let nameOfProducts = products && products.map(e => JSON.parse(e).cart.map(el => el.name));
    // let purchasePrices = products && products.map(e => JSON.parse(e).cart.map(el => el.purchasePrice));
    // let salesPrices = products && products.map(e => JSON.parse(e).cart.map(el => el.salePrice));
    // let idsOrdes = state && state.map(e => e.id);

    let rows = [];

    const parseador = (str) => {
        return JSON.parse(str)
    }


    const showProducts = state && state.map(e => ({
        id: e.id,
        email: e.email,
        salePrice: parseador(e.productsId).cart.map(el => el.salePrice),
        purchasePrice: parseador(e.productsId).cart.map(el => el.purchasePrice),
        name: parseador(e.productsId).cart.map(el => el.name),
        status: e.status
    }));

    rows = showProducts;

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography>
                    Ordenes
                </Typography>
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
    )
}