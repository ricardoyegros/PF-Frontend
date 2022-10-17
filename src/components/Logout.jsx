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
    function cargaCarro(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(dispatch(sendCart(arr[i].email || email, arr[i].name, arr[i].salePrice, arr[i].image || arr[i].images[0].url, arr[i].quantity)));
        }
        return newArr;
    };
    useEffect(async () => {
        cargaCarro(JSON.parse(localStorage.state).dataBaseStorage.cartItems);

        dispatch(removeCartDb(email))
        await Promise.all(cargaCarro(JSON.parse(localStorage.state).dataBaseStorage.cartItems))
        dispatch(clearCart())
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('id');
        dispatch(logoutUser());
        navigate('/');
    }, []);

    return <div>Logout</div>;
}

export default Logout;