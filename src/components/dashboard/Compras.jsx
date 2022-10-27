import React, { useState } from "react";
import axios from "axios";

function Compras() {
  const [state, setState] = useState(false);

  if (!state)
    axios
      .get("https://techstore123.herokuapp.com/orders/admin")
      .then((r) => setState(r.data))
      .catch((e) => console.log(e.message));
  let products = state && state.map((e) => e.productsId);
  //console.log("products ===>>", products);

  let nameOfProducts =
    products && products.map((e) => JSON.parse(e).cart.map((el) => el.name));
  console.log("products ===>>", nameOfProducts);

  let purchasePrices =
    products &&
    products.map((e) => JSON.parse(e).cart.map((el) => el.purchasePrice));
  console.log("compras ===>>", purchasePrices);

  let suma = purchasePrices.reducer((a, b) => a + b, 0);

  return (
    <>
      <div>las Compras del dia son :</div>
      <div>
        <div style={{ backgroundColor: "lightgray" }}>$ {suma}</div>
      </div>
    </>
  );
}

export default Compras;
