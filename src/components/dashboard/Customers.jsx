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
    const navigate = useNavigate();

    //const [users, setUsers] = useState(allUser);

    useEffect(() => {
        dispatch(getUsers(token));
    }, [dispatch, token]);

    console.log(allUser);
    console.log(token);

    return (
        <>
            <Sidebar />

            <Grid container spacing={6} justifyContent="center">
                {allUser &&
                    allUser.rows.map((c) => (
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
                    ))}
            </Grid>
        </>
    );
}

export default Customers;
