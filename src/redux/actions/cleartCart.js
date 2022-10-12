import axios from "axios";
import React from "react";

export default function cleartCart (email) {
    return function () {
        axios.post(`https://techstore123.herokuapp.com/carts?email=${email}`)
    }
}
