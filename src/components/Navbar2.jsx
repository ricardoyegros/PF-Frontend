import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { UserConfig } from "./UserConfig";
import logo from "../assets/images/geometric tech logo - Hecho con PosterMyWall2.png";
import { useDispatch, useSelector } from "react-redux";
import { isInUse, preFilter } from "../redux/actions";
import { Badge } from "@mui/material";

export const Navbar2 = () => {
    let dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const user = useSelector((state) => state.usersReducers.user);
    const cart = useSelector((state) => state.shoppingCartReducer.cart);
    
    const handleSubmitSearch = (event) => {
        event.preventDefault();
        dispatch(preFilter({ name: search }));
        dispatch(isInUse({ name: search }));
        setSearch("");
    };
    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    // console.log("cart", cart)
    const amountOfProducts = cart.reduce((acc, cur) => acc + cur.quantity, 0)
    // console.log(amountOfProducts)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand">
                        <img
                            src={logo}
                            style={{
                                width: "95px",
                                height: "50px",
                                borderRadius: "50%",
                            }}
                        />
                    </Link>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul
                            className="navbar-nav me-auto mb-2 mb-lg-0"
                            style={{ flexGrow: "1" }}
                        >
                            <li className="nav-item dropdown">
                                <Link
                                    to={"/"}
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span class="material-symbols-outlined">
                                        person
                                    </span>
                                </Link>
                                <ul className="dropdown-menu">
                                    {!window.localStorage.token ? (
                                        <li>
                                            <Link
                                                to={"/register"}
                                                className="dropdown-item"
                                            >
                                                Registrarse
                                            </Link>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                    {!window.localStorage.token ? (
                                        <li>
                                            <Link
                                                to={"/login"}
                                                className="dropdown-item"
                                            >
                                                Iniciar Sesion
                                            </Link>
                                        </li>
                                    ) : (
                                        <li>
                                            <Link
                                                to={"/logout"}
                                                className="dropdown-item"
                                            >
                                                Cerrar Sesion
                                            </Link>
                                        </li>
                                    )}
                                    {window.localStorage.token ? (
                                        <li>
                                            <Link
                                                to={"/dashboard"}
                                                className="dropdown-item"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    ) : (
                                        ""
                                    )}
                                </ul>
                            </li>
                        </ul>
                        <span
                            style={{
                                flexGrow: "1",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {user.name ? (
                                <h5>Bienvenido/a {user.name}</h5>
                            ) : (
                                <h5>Bienvenido/a Invitado</h5>
                            )}
                        </span>
                        {window.localStorage.token?                         <div>
                            <Link to={"/wishlist"}
                                className="navbar-brand">
                                <span class="material-symbols-outlined">
                                    favorite
                                </span>
                            </Link>
                        </div> : "" }
                        <div>
                            <Link
                                to={"/shopping-cart"}
                                className="navbar-brand"
                            >
                            <Badge badgeContent={amountOfProducts} color="success">
                                <span class="material-symbols-outlined">
                                    shopping_cart
                                </span>

                            </Badge>
                            </Link>
                        </div>
                        <form
                            className="d-flex"
                            role="search"
                            onSubmit={handleSubmitSearch}
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleSearchInput}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};
