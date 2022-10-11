import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateUser } from '../redux/actions/index.js';

import MenuItem from '@mui/material/MenuItem';

import { Typography, Card, CardContent, Grid, TextField, Button } from '@mui/material';

//import { useNavigate } from "react-router-dom";

export default function ActualizarData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.usersReducers.user);
    const token = useSelector((state) => state.usersReducers.token);
    //console.log(user);
    //console.log(token);

    const [userId, setUserId] = useState(user);
    //console.log(userId);

    const namesDNI = [
        { value: 'CC', label: 'CC' },
        { value: 'DNI', label: 'DNI' },
        { value: 'PASSPORT', label: 'PASSPORT' },
        { value: 'GREENCARD', label: 'GREENCARD' },
        { value: 'OTRO', label: 'OTRO' }
    ];

    function handleChange(e) {
        //setUserId(user)

        setUserId({ ...userId, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        console.log(userId);
        e.preventDefault();
        dispatch(updateUser(userId, token, userId.id));
        navigate('/welcome');
    }

    return (
        <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Update Profile !!
            </Typography>
            <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Create a New User!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label="Name..."
                                    placeholder="Please enter you name..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="name"
                                    value={userId.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="last name..."
                                    placeholder="Please enter you last name..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="lastName"
                                    value={userId.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    select
                                    label="Type Identification"
                                    placeholder="Please enter a type identification..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="typeIdentification"
                                    value={userId.typeIdentification}
                                    onChange={handleChange}
                                >
                                    {namesDNI.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="identification"
                                    placeholder="Please enter you number of identification..."
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    required
                                    name="identification"
                                    value={userId.identification}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Contact"
                                    placeholder="Please enter you number of phone..."
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    required
                                    name="contact"
                                    value={userId.contact}
                                    onChange={handleChange}
                                />
                            </Grid>
                            
                            <Grid xs={12} item>
                                <TextField
                                    label="Address"
                                    placeholder="Please enter you actual address..."
                                    variant="outlined"
                                    fullWidth
                                    name="address"
                                    value={userId.address}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid xs={12} item>
                                <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    // disable={!input.email || !input.password}
                                >
                                    Update !!
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
