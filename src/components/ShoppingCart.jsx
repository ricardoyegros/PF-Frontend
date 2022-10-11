import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { loadState } from "../localStorage/localStorage";
import { clearCart, cartPost } from "../redux/actions/cart-actions";
import { paymentMethod } from "../redux/actions/payment";

export default function ShoppingCart() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cart = useSelector((state) => state.shoppingCartReducer.cart);
  let cartUser = useSelector((state) => state.allItemsCartReducer.cartItems);
  const data = loadState();
  // console.log(data.storage);
  function handleButton3(e) {
    dispatch(clearCart());
  }
  function handleButton5(e) {
    navigate("/");
  }
  function handleButtonShop(e) {
    dispatch(cartPost(data.storage.cart))
  navigate("/final-shopping");
}
console.log(cartUser, "dsc")
if(cartUser.length > 0) cart = [...cartUser]
let totalCarrito = 0;
for (let i = 0; i < cart.length; i++) {
  let subtotal = cart[i].quantity * cart[i].salePrice;
  totalCarrito = totalCarrito + subtotal;
}

console.log(cart, "soyCart")
return (
  <>
    <Typography variant={"h3"} m={2}>Carrito de Compras</Typography>
    <Box m={5} display={"flex"} flexDirection={"row"} justifyContent={"flex-start"}>
      <Box mr={3}>
        <Button onClick={handleButton3} color={"error"} variant={"contained"}>Limpiar carro</Button>
      </Box>
      <Button onClick={handleButton5} variant={"contained"}>Seguir comprando</Button>
    </Box>
    <Grid container alignItems={"center"} columns={4}>
      <Grid item xs={2.5}>
        <Typography variant={"h6"} ml={5}>Item</Typography>
      </Grid>
      <Grid item xs={0.3}>
        <Typography variant={"h6"}>Precio</Typography>
      </Grid>
      <Grid item xs={0.4}>
        <Typography variant={"h6"}>Cantidad</Typography>
      </Grid>
      <Grid item xs={0}>
        <Typography variant={"h6"}>Sub-Total</Typography>
      </Grid>
    </Grid>
    {cart.length ? (
      cart?.map((products, i) => (
        <Cart
          key={i}
          id={products.id}
          name={products.name}
          salePrice={products.salePrice}
          stock={products.stock}
          quantity={products.quantity}
          image={
            products.image ||
            products.images[0]?.url
          }
        />
      ))
    ) : <p>"Carrito Vacio"</p>
    }
    <Box m={5}>
      <Box display={"flex"} justifyContent={"flex-end"} width="87%" borderBottom="2px solid rgba(8,8,8,0.10)" >
        <Box mr={15}>
          <Typography variant={"h4"}>Total carrito</Typography>
        </Box>
        <Box>
          <Typography variant={"h4"}>${totalCarrito}</Typography>
        </Box>
      </Box>
      <Button variant={"contained"} color={"success"} onClick={handleButtonShop}>Continuar Compra</Button>
    </Box>
  </>
);
}
