import React, { useState } from 'react'
import { UpdateUserData } from './UpdateUserData';
import { UserProfile } from './UserProfile'

const gridCenter = {
    display: "grid",
    justifyContent: "center",
    alingItem: "center",
};

const arr = ['Procesando Pago', 'Preparando Envio', 'Enviado', 'Completado', 'Anulado'];


export const UserConfig = () => {
    const [state, setState] = useState(false);



    const handleClick = (e) => {
        if (state) return setState(false);
        return setState(true);
    };

    return (

        <>
            <button /* class="btn btn-primary" type="button" */ data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
            Perfil
            </button>

            <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title" id="offcanvasExampleLabel">Panel del Usuario</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div style={gridCenter}>
                        <h6>Nombre usuario: {localStorage.name}</h6>
                        <h6>Email: {localStorage.email} </h6>
                        <button type="button" className="btn btn-secundary" onClick={handleClick} >Modificar Informacion</button>
                        <br />
                        {
                            state ? <UpdateUserData close={setState} /> : null
                        }
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
