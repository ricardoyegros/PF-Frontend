import React from 'react'
import { useNavigate } from 'react-router-dom';

import { UserProfile } from './UserProfile'

const gridCenter = {
    display: "grid",
    justifyContent: "center",
    alingItem: "center",
};

const arr = ['Procesando Pago', 'Preparando Envio', 'Enviado', 'Completado', 'Anulado'];


export const UserConfig = () => {
    
    const navigate = useNavigate()


    const handleClick = (e) => {
        navigate('/updateprofile');
    };

    return (

        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
            Perfil
            </button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h6 className="offcanvas-title" id="offcanvasExampleLabel">Panel del Usuario</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">

                    <div style={gridCenter}>
                        <h6>Nombre usuario: {localStorage.name}</h6>
                        <h6>Email: {localStorage.email} </h6>
                        <button type="button" className="btn btn-danger" onClick={handleClick} >Modificar Informacion</button>
                        <br />
                    </div>
                    <br />
                    <div style={gridCenter}>
                        <br />
                        <UserProfile />
                    </div>
                </div>
            </div>
        </>
    )
}
