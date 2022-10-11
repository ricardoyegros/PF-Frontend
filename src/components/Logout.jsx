import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions";
import sendCart from "../redux/actions/sendCart";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let email = localStorage.email;
    useEffect(() => {
        JSON.parse(localStorage.state).storage.cart.map(e => dispatch(sendCart(email, e.name, e.salePrice, e.images[0].url, e.quantity)));
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('id');
        dispatch(logoutUser());
        navigate("/");
    }, [dispatch]);

    return <div>Logout</div>;
}

export default Logout;
