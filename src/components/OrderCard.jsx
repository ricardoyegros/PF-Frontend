import React from 'react'

const maxWidth = {
    width: "100%"
};

export const OrderCard = ({orderDate, status}) => {
    return (
        <>
            <div className="card w-150">
                <div className="card-body">
                    <h5 className="card-title">{orderDate}</h5>
                    <p className="card-text">{status}</p>
                    <button className="btn btn-success">Detalles</button>
                </div>
            </div>

        </>
    )
}
