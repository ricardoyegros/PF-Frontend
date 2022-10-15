import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import swal from 'sweetalert';

export const UpdateUserData = ({ close }) => {

    const [state, setState] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state.envio || !state.email || !state.name) return swal('Error!', 'Faltan datos', 'error');
        swal('Exito!', `${state.envio}, ${state.email}, ${state.name}`, 'success');
        setState({});
        close(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{
                justifyContent: "center", alignItems:
                    "center", display: "grid"
            }}>
                <TextField onChange={handleChange} name="envio" id="standard-basic" label="Direccion de envio" />
                <TextField onChange={handleChange} name="email" id="standard-basic" label="Email@" />
                <TextField onChange={handleChange} name="name" id="standard-basic" label="Nombre de Usuario" />

                <Button type='submit' >Submit</Button>
            </form>
        </>
    )
}
