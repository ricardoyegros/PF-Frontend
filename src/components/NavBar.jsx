import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, createTheme, Link } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import logo from "../assets/images/geometric tech logo - Hecho con PosterMyWall.png";
import { useDispatch, useSelector } from "react-redux";
import { getItem, isInUse, preFilter } from "../redux/actions";
import { Link as Linkdom } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        [theme.breakpoints.up("md")]: {
            width: "100%",
        },
    },
}));

export default function Navbar() {
    const reduxState = useSelector((state) => state.categorysNameReducer);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const token = useSelector((state) => state.usersReducers.token);
    const [search, setSearch] = useState("");
    let dispatch = useDispatch();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    //aqui las funciones de busqueda , falta linkear con back
    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        dispatch(preFilter({ name: search }));
        dispatch(isInUse({ name: search }));
        setSearch("");
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            {!token 
            ?
            <div>
            <Linkdom to={"/register"} style={{"textDecoration":"none","color":"black"}}>
                    
                    <MenuItem onClick={handleMenuClose}>Registro</MenuItem>
                  
            </Linkdom>
            <Linkdom to={"/login"}  style={{"textDecoration":"none","color":"black"}}>
               
                <MenuItem onClick={handleMenuClose}>Iniciar sesión</MenuItem>
               
            </Linkdom>
            </div>
            :
            <div>
            <Linkdom to={"/welcome"} style={{"textDecoration":"none","color":"black"}}>
                
                <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
                
            </Linkdom>
            <Linkdom to={"/logout"} style={{"textDecoration":"none","color":"black"}}>
                
                <MenuItem onClick={handleMenuClose}>Cerrar sesión</MenuItem>
                
            </Linkdom>

            </div>
            }
            


        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "center",
                horizontal: "center",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        sx={{ paddingRight: 1 }}
                    >
                        <AccountCircle />
                        <p>Profile</p>
                    </IconButton>

                    <IconButton size="small" color="inherit">
                        <ShoppingCartOutlinedIcon />
                        <p>Shop Cart</p>
                    </IconButton>
                </Box>
            </MenuItem>
        </Menu>
    );

    const theme = createTheme({
        palette: {
            primary: {
                // aqui el color primario un gris suave para que el logo se pueda ver.
                main: "#cfcfcf",
                light: "#cfcfcf",
                dark: "#707070",
            },
            secondary: {
                // de secundario un azul suave para evitar que sea muy chocante
                main: "#4f83cc",
                light: "#4f83cc",
                dark: "#002f6c",
            },
        },
        //aqui aumente un poco el tamaño de todo
        typography: {
            fontSize: 18,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="relative" color="primary">
                    <Toolbar>
                        <Linkdom to={"/"}>
                            <Box
                                component={"img"}
                                sx={{ maxHeight: 130, maxWidth: 130 }}
                                src={logo}
                            />
                        </Linkdom>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button
                            href="/creacion"
                            color="secondary"
                            variant="outlined"
                        >
                            Cargar Producto
                        </Button>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            {/* aqui meti la funcion onsubmit para la busqueda, */}
                            <form onSubmit={handleSubmitSearch}>
                                <StyledInputBase
                                    inputProps={{ "aria-label": "search" }}
                                    onChange={handleSearchInput}
                                    value={search}
                                />
                            </form>
                        </Search>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <IconButton color="inherit">
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </ThemeProvider>
    );
}
