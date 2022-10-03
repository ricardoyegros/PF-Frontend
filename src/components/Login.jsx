import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/index.js";
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

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({});

    //console.log(input);

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginUser(input));
        setInput({});
        navigate("/welcome");
    };

    return (
        <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Login
            </Typography>
            <Card
                style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Ingrese sus datos
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <TextField
                                    label="Email"
                                    placeholder="Please enter you Email..."
                                    variant="outlined"
                                    fullWidth
                                    required
                                    name="email"
                                    value={input.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField
                                    label="Password"
                                    placeholder="Password"
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
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
