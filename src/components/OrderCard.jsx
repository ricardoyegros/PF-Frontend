import React from 'react'

const maxWidth = {
    width: "100%"
};

export const OrderCard = ({content}) => {
    return (
        <>
            <div className="card w-150">
                <div className="card-body">
                    <h5 className="card-title">{content}</h5>
                    <p className="card-text">Aca supongo que voy a poner las fechas ?</p>
                    <button className="btn btn-success">Detalles</button>
                </div>
            </div>

        </>
    )
}
