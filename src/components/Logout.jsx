import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions";
import sendCart from "../redux/actions/sendCart";
import  removeCartDb  from "../redux/actions/cleartCart";
import { clearCart} from "../redux/actions/cart-actions"


function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let email = localStorage.email;
    useEffect(() => {
        dispatch(removeCartDb(email))
        console.log(JSON.parse(localStorage.state).dataBaseStorage.cartItems)
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