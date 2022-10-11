import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar2 = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" >
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand" ><span class="material-symbols-outlined">Home</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link to={'/'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-symbols-outlined">person</span>
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link to={'/'} className="dropdown-item" >Registrarse</Link></li>
                                    <li><Link to={'/'} className="dropdown-item" >Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit"><span class="material-symbols-outlined">search</span></button>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
