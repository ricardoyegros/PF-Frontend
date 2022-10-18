import React from "react";
import { Card, CardContent, Grid, Typography, Container } from "@mui/material";

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

export default function CardCustomer({ fullName, contact, email, isAdmin }) {
    return (
        <Container>
            <Grid container spacing={4} sx={cardGrid}>
                <Grid item>
                    <Card sx={card}>
                        <CardContent>
                            <Typography
                                component="p"
                                variant="h3"
                                color={"black"}
                            >
                                {fullName}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                PHONE: {contact}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                EMAIL: {email}
                            </Typography>
                            <Typography
                                component="p"
                                variant="h6"
                                color={"black"}
                            >
                                ROL:{" "}
                                {isAdmin ? (
                                    <p>Administrador</p>
                                ) : (
                                    <p>Cliente</p>
                                )}{" "}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
