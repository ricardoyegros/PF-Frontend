import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from '../../redux/actions/index';
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';
import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
    Box
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';


const StyledBox = styled(Box)(({ }) => ({
    margin:"40px",
    padding:"40px",
    display: "flex",
    width: "600px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
  }));

export default function CreateUsers() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const namesDNI = [
        { value: "CC", label: "CC" },
        { value: "DNI", label: "DNI" },
        { value: "PASSPORT", label: "PASSPORT" },
        { value: "GREENCARD", label: "GREENCARD" },
        { value: "OTRO", label: "OTRO" },
    ];

    const adminIs = [
        {value: true, label: "TRUE"},
        {value: false, label: "FALSE"}
    ];

    const [input, setInput] = useState("");
    
    let token = localStorage.token;
    

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(updateUser(input, token));
        setInput({});
        //navigate("/welcome");
    }
    
    return (
        <>
        <Box
        display={"flex"}
        justifyContent={"center"}>

                <Sidebar/>

        <StyledBox>
            <Typography gutterBottom variant="h3" align="center">
                Registrar Admin 
            </Typography>

            <Card
                style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
            >
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label="Nombre..."
                                    placeholder="Please enter you name..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="name"
                                    value={input.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Apellido..."
                                    placeholder="Please enter you last name..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="lastName"
                                    value={input.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    select
                                    label="Tipo de identificacion"
                                    placeholder="Please enter a type identification..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="typeIdentification"
                                    value={input.typeIdentification}
                                    onChange={handleChange}
                                >
                                    {namesDNI.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Nmero de identificacion"
                                    placeholder="Please enter you number of identification..."
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    required
                                    name="identification"
                                    value={input.identification}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Numero de contacto"
                                    placeholder="Please enter you number of phone..."
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    required
                                    name="contact"
                                    value={input.contact}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Email"
                                    placeholder="Please enter a email..."
                                    variant="outlined"
                                    type="email"
                                    fullWidth
                                    required
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Direccion (calle y numero)"
                                    placeholder="Please enter you actual address..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="address"
                                    value={input.address}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <TextField
                                    label="Constraseña"
                                    placeholder="Please create a password..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type="password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    select
                                    label="Is Admin"
                                    placeholder="Please enter a type identification..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="isAdmin"
                                    value={input.isAdmin}
                                    onChange={handleChange}
                                >
                                    {adminIs.map((option) => (
                                        <MenuItem
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} item>                                
                                <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disable={!input.email || !input.password}
                                >
                                    Crear Usuario
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
     </StyledBox> 
     </Box>  
        </>
    );
};