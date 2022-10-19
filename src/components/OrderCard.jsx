import React from 'react'
import { OrderDetails } from './OrderDetails';

export const OrderCard = ({ orderDate, status, id, productsId }) => {
    const cartForMap = JSON.parse(productsId).cart;
    return (
        <>
            <div className="card w-150">
                <div className="card-body">
                    <h5 className="card-title">ID de Orden: {orderDate}</h5>
                    <p className="card-text">{status}</p>
                    <OrderDetails id={id} toRender={cartForMap} />
                </div>
            </div>

        </>
    )
}
