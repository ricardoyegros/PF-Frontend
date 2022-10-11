import React from "react";
import axios from "axios";

export default function sendCart (email, name, salePrice, images, quantity) {
        return function (){
            let obj = {
                email,
                name,
                salePrice,
                image: images,
                quantity
            }
            try {
                console.log(email, name, salePrice, images, quantity)
                axios.post("https://techstore123.herokuapp.com/carts", obj)
            } catch (error) {
                console.log(error);
            }
        }
};