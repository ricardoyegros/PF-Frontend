import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart";
import { loadState } from "../localStorage/localStorage";
import { clearCart, cartPost } from "../redux/actions/cart-actions";

export default function ShoppingCart() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let cart = useSelector((state) => state.shoppingCartReducer.cart);
  const data = loadState();
  console.log(data.storage);
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
  console.log(data.storage.cart)
  return (
    <>
      <h1>Carrito de Compras</h1>
      <button onClick={handleButton3}>Limpiar todo</button>
      <button onClick={handleButton5}>Seguir comprando</button>
      {data.storage.cart.length ? (
        data.storage.cart?.map((products, i) => (
          <Cart
            key={i}
            id={products.id}
            name={products.name}
            salePrice={products.salePrice}
            stock={products.stock}
            quantity={products.quantity}
            image={
              products.images[0]?.url ||
              "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
            }
          />
        ))
      ) : (
        <p> Cargando Carrito...</p>
      )}
      <hr></hr>
      <button onClick={handleButtonShop}>Continuar Compra</button>
    </>
  );
}
