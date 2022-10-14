import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Link } from "@mui/material";
import { Link as Linkdom } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../redux/actions";

import Sidebar from "./Sidebar";
import CarCustomer from "./CardCustomer";

function Customers() {
    let allUser = useSelector((state) => state.allUserReducer.users);

    let token = localStorage.token;

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    //const [users, setUsers] = useState(allUser);

    useEffect(() => {
        dispatch(getUsers(token));
    }, [dispatch]);


    return (
        <>
            <Sidebar />
            <Grid container spacing={6} justifyContent="center">
                {allUser.length > 0 ?
                    allUser.map((c) => (
                        <Grid item mb={5} key={c.id}>
                            <Linkdom to={`/admin/customers/customer/${c.id}`}>
                                <CarCustomer
                                    fullName={c.fullName}
                                    contact={c.contact}
                                    email={c.email}
                                    isAdmin={c.isAdmin}
                                />
                            </Linkdom>
                        </Grid>
                    )) : <h1>Cargando</h1> }
                    {/* setTimeout(() => {
                        
                    // }, timeout)
                    // <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={50}>
                    //     <Loading />
                    // </Box>} */}
            </Grid>
        </>
    );
}

export default Customers;
