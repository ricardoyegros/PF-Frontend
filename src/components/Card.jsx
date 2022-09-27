import React from "react";
import styles from "../components/Styles/card.css"

export default function Card ({nombre, imagen, categoria, precio, rating}) {
    return (
        <div className="product-card">
            <h2>{nombre}</h2>
            <img src={imagen} />
            <h4>Categoria: {categoria}</h4>
            <h4>Precio : {precio}</h4>
            <h4>Rating: {rating}</h4>
        </div>
    )
};