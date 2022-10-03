import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createUsers, getIdUsers } from "../redux/actions";

import MenuItem from "@mui/material/MenuItem";
import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Button,
} from "@mui/material";

export default function ActualizarData() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        (e) => {
            dispatch(getIdUsers(id));
        },
        [dispatch, id]
    );

    let detailUser = useSelector((state) => state.userIdReducer.userId);

    /* const namesDNI = [
        { value: "CC", label: "CC" },
        { value: "DNI", label: "DNI" },
        { value: "PASSPORT", label: "PASSPORT" },
        { value: "GREENCARD", label: "GREENCARD" },
        { value: "OTRO", label: "OTRO" },
    ]; */

    const [input, setInput] = useState({});

    console.log(input);

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createUsers(input));
        setInput({});
        navigate("/");
    }

    return (
        <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Update-Info
            </Typography>
            <Card
                style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Please read all the fields !
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Name
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.name}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You lastName
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.lastName}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Type Identification
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.typeIdentification}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Number of Identification
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.identification}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Number of Contact
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.contact}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Email
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.email}`}
                                </Typography>
                            </Grid>
                            <Grid xs={12} item>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 3 }}
                                >
                                    You Address
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    sx={{ marginRight: 5 }}
                                >
                                    {`${detailUser?.address}`}
                                </Typography>
                            </Grid>
                            {/* 
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
                            </Grid> */}
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
