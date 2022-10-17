import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, Grid, Typography, Container, Button } from "@mui/material";

import Sidebar from "./Sidebar";
import { getIdUsers } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useState } from "react";
import OnOff from './OnOff'


const cardGrid = {
    height: "100%",
};

const card = {
    height: "390px",
    width: "300px",
    border: "#5D6D7E 1px innert",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    boxShadow: "8px 8px 5px 3px rgba(81, 90, 90 , 0.5)",
    "&:hover": {
        cursor: "pointer",
        border: "#58D68D 2px solid",
        boxShadow: "8px 8px 5px 3px rgba(88, 214, 141, 0.5)",
    },
};

export default function CustomerDetail() {
    
    const dispatch = useDispatch();
    let token = localStorage.token;
    const {id} = useParams()   ;
    let user = useSelector((state) => state.userIdReducer.userId);
    

    useEffect(() => {
        dispatch(getIdUsers(id, token));
    }, [dispatch, token, id]);

    
    
    return (
        <Container>
            <Sidebar />
            <Grid container spacing={4} sx={cardGrid}>
                <Grid item>
                    <Card sx={card}>
                        <CardContent>
                            <Typography
                                component="p"
                                variant="h3"
                                color={"black"}
                            >
                                {user.fullName}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                PHONE: {user.contact}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                EMAIL: {user.email}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                ROL:{" "}
                                {user.isAdmin ? (
                                    <p>Administrador</p>
                                ) : (
                                    <p>Cliente</p>
                                )}{" "}
                            </Typography>
                             {/* <OnOff/>  */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}