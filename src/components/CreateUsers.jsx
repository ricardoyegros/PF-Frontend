import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUsers } from "../redux/actions/index.js";
import MenuItem from "@mui/material/MenuItem";

import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

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

    const [input, setInput] = useState("");

    console.log(input);

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createUsers(input));
        setInput({});
        navigate("/welcome");
    }

    return (
        <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Register
            </Typography>
            <Card
                style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
            >
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
                                    value={input.name}
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
                                    value={input.lastName}
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
                                    label="identification"
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
                                    label="Contact"
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
                                    label="Address"
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
                                    label="Password"
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
                                <Button
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disable={!input.email || !input.password}
                                >
                                    Create !!
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
