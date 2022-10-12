import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UpdateUserData } from './UpdateUserData';
import { UserProfile } from './UserProfile'

const gridCenter = {
    display: "grid",
    justifyContent: "center",
    alingItem: "center",
}


export const UserConfig = () => {
    const navigate = useNavigate()
    const [state, setState] = useState(false);

    const handleClick = () => {
        if (state) return setState(false);
        return setState(true);
    }

    return (

        <>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span class="material-symbols-outlined">
                    settings
                </span>
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
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
                            state ? <UpdateUserData /> : null
                        }
                    </div>
                    <br />
                    <div style={gridCenter}>
                        <button onClick={() => navigate('/shopping-cart')} type="button" className="btn btn-secundary">Mis Pedidos!</button>
                    </div>
                    <div style={gridCenter}>
                        <br />
                        <UserProfile />
                    </div>
                </div>
            </div>
        </>
    )
}
