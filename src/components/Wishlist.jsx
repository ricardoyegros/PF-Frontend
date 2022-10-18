import { useEffect, useState } from "react"
import { getFavoriteProducts, removeFavorite } from "../redux/actions/wishlistActions"
import { Box, IconButton, Alert, Checkbox, } from "@mui/material"
import {
    ShoppingCart,
    FavoriteBorder,
    Favorite,
} from '@mui/icons-material';

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/actions/cart-actions";
import { useNavigate } from "react-router-dom";

const heartIcon = {
    // margin: "15px 5px 0px 0px",
    color: "red",
    "&:hover": {
        cursor: "pointer",
        border: "#F1948A  2px solid",
        background: "#F5B7B1",
        // borderRadius: "50%",
        padding: "7px"
    }
}

const cartIcon = {
    // margin: "15px 0px 0px 5px",
    color: "green",
    "&:hover": {
        cursor: "pointer",
        border: "#82E0AA 2px solid",
        background: "#ABEBC6",
        padding: "7px"
    }
}


export default function Wishlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true)
    const prod = useSelector((state) => state.wishlistReducer.products);
    const [products, setproducts] = useState({})
    console.log(products)

    useEffect(() => {
        dispatch(getFavoriteProducts())
    }, [dispatch])
    useEffect(() => {
        setproducts(prod)
    }, [prod])


    const handleCart = (id) => {
        console.log(id)
        dispatch(addToCart(id));
        navigate("/shopping-cart");
    }
    const handleRemove = (id) => {
        //console.log(id)

        dispatch(removeFavorite(localStorage.id, id))
        //dispatch(getFavoriteProducts())

    }

    console.log(products)

    return (
        <>
            <div className="container">
                <div className="row">

                    <h1 style={{ "textAlign": "center" }}>Lista de Favoritos</h1>

                    <table className="table align-middle" style={{ "margin": "6rem 0 6rem 0", }}>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Quitar</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length ? (products.map((e) => (

                                <tr  >
                                    <th scope="row"><img src={e.images[0].url} alt="" width="150px" /></th>
                                    <td style={{ "textAlign": "center" }}>{e.name}</td>
                                    <td style={{ "textAlign": "center", "minWidth": "250px" }} className="overflow-hidden">{e.description}</td>
                                    <td style={{ "textAlign": "center" }}>${e.salePrice}</td>
                                    <td >
                                        <Checkbox
                                            checked={checked}
                                            onChange={() => handleRemove(e.id)}
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            sx={heartIcon}
                                            color="error"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            id={e.id}
                                        />
                                    </td>
                                    <td >
                                        <Checkbox
                                            checked={false}
                                            onChange={() => handleCart(e.id)}
                                            icon={<ShoppingCart />}
                                            checkedIcon={<ShoppingCart />}
                                            sx={cartIcon}
                                            color="success"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            id={e.id}
                                        />
                                    </td>
                                </tr>

                            ))
                            ) : <Box display={"flex"} justifyContent={"center"} alignItems={"center"} marginTop={16} marginBottom={32}><Alert severity="error">No tienes ningún producto agregado a favoritos</Alert></Box>
                            }
                        </tbody>

                    </table>
                </div>
            </div>







        </>
    )
};





/* function Wishlist() {

    const dispatch = useDispatch()
    
    return (
        <>
        {products &&
            products.map((product) => (<p>{product}</p>))
        }
        </>
    )
} */

