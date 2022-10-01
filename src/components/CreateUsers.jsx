import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUsers } from "../redux/actions/index.js";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
//import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

//import clear from "../redux/actions/index";

//import { useHistory } from "react-router-dom";

import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function CreateUsers() {
    const dispatch = useDispatch();
    //const [state, setState] = useState({});
    const [typeIdent, setTypeIdent] = useState([]);
    const namesDNI = ["CC", "DNI", "PASSPORT", "GREENCARD", "OTRO"];

    const [input, setInput] = useState({
        name: "",
        lastName: "",
        typeIdentification: "",
        identification: "",
        contact: "",
        email: "",
        address: "",
        password: "",
    });

    //==========el change del select
    const handleChangeTypeIdent = (event) => {
        const {
            target: { value },
        } = event;
        setTypeIdent(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };
    console.log(typeIdent);

    //======>>>>>>> el change de los input's
    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }


    //======>>>>>>> el change del boton submit
    function handleSubmit(e) {
        e.preventDefault();

        dispatch(createUsers(input));
        setInput({
            name: "",
            lastName: "",
            typeIdentification: "",
            identification: "",
            contact: "",
            email: "",
            address: "",
            password: "",
        });
        // dispatch(clear(dispatch));
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
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
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
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-checkbox-label">
                                        Type Identification
                                    </InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        value={typeIdent}
                                        onChange={handleChangeTypeIdent}
                                        input={
                                            <OutlinedInput label="TypeIdent" />
                                        }
                                        renderValue={(selected) =>
                                            selected.join(", ")
                                        }
                                        MenuProps={MenuProps}
                                    >
                                        {namesDNI.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Identification"
                                    placeholder="Please enter you number of identification..."
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    required
                                    name="Identification"
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
                                    name="address"
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
