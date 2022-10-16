import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions";
import { clearCart } from "../redux/actions/cart-actions";
import { removeCartDb } from "../redux/actions/cleartCart"
import sendCart from "../redux/actions/sendCart";




function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let email = localStorage.email;
    useEffect(() => {
        dispatch(removeCartDb(email))
        JSON.parse(localStorage.state).dataBaseStorage.cartItems.map(e => dispatch(sendCart(e.email || email , e.name, e.salePrice, e.image || e.images[0].url, e.quantity)));
        dispatch(clearCart())
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('id');
        dispatch(logoutUser());
        navigate('/');
    }, [dispatch]);
    
    return <div>Logout</div>;
}

export default Logout;