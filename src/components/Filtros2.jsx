import React from 'react'

export const Filtros2 = () => {
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                Filtros
            </button>

            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Seleccione sus filtros</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Categorias
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" href="#">Action</button></li>
                            <li><button className="dropdown-item" href="#">Another action</button></li>
                            <li><button className="dropdown-item" href="#">Something else here</button></li>
                        </ul>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Marcas
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" href="#">Action</button></li>
                            <li><button className="dropdown-item" href="#">Another action</button></li>
                            <li><button className="dropdown-item" href="#">Something else here</button></li>
                        </ul>
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Ordenar Por
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" href="#">Action</button></li>
                            <li><button className="dropdown-item" href="#">Another action</button></li>
                            <li><button className="dropdown-item" href="#">Something else here</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
