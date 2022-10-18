import axios from "axios";


export default function removeCartDb (email) {
    return function () {
        axios.delete(`https://techstore123.herokuapp.com/carts?email=${email}`)
    }
}