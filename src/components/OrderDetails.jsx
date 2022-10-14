import React from 'react'

export const OrderDetails = ({ id }) => {
    console.log(id)
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${id}`}>
                Detalles
            </button>


            <div className="modal fade" id={`staticBackdrop${id}`} data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id='staticBackdropLabel'>Orden Numero: {id}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
