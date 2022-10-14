import React from 'react'
import { OrderDetails } from './OrderDetails';

const maxWidth = {
    width: "100%"
};

export const OrderCard = ({ orderDate, status, id }) => {
    return (
        <>
            <div className="card w-150">
                <div className="card-body">
                    <h5 className="card-title">ID de Orden: {orderDate}</h5>
                    <p className="card-text">{status}</p>
                    <OrderDetails id={id} />
                </div>
            </div>

        </>
    )
}
