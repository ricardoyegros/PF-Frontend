import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/actions";
import { clearCart } from "../redux/actions/cart-actions";
import sendCart from "../redux/actions/sendCart";





function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let email = localStorage.email;
    // function cargaCarro(arr) {
    //     let newArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         newArr.push(dispatch(sendCart(arr[i].email || email, arr[i].name, arr[i].salePrice, arr[i].image || arr[i].images[0].url, arr[i].quantity)));
    //     }
    //     return newArr;

    // };
    useEffect(() => {
        //cargaCarro(JSON.parse(localStorage.getItem("cart")));
        //await Promise.all(cargaCarro(JSON.parse(localStorage.getItem("cart"))))
        axios.delete(`https://techstore123.herokuapp.com/carts?email=${email}`).then((r)=>{console.log("terminado")}).catch(error => console.log(error))
        if(localStorage.getItem("cart")) JSON.parse(localStorage.getItem("cart"))?.map(p => dispatch(sendCart(p.email || email, p.name, p.salePrice, p.image || p.images[0].url, p.quantity)));
        dispatch(clearCart())
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('id');
        dispatch(logoutUser());
        // navigate('/');
    }, []);

    return <div>Logout</div>;
}

export default Logout;