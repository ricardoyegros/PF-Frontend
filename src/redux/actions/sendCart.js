import React from "react";
import axios from "axios";

export default function sendCart (email, name, salePrice, images, quantity) {
        return async function (){
            let obj = {
                email,
                name,
                salePrice,
                image: images,
                quantity
            }
            try {
                let post = await axios.post("https://techstore123.herokuapp.com/carts", obj)
                console.log(post , "a postear")
            } catch (error) {
                console.log(error);
            }
        }
};