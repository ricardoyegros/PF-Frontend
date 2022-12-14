import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    IconButton,
    Container,
    Rating,
    Box,
    Checkbox,
} from '@mui/material';

import {
    ShoppingCart,
    FavoriteBorderOutlined,
    BookmarkBorder,
    Bookmark,
    FavoriteBorder,
    Favorite,
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addToCart } from "../redux/actions/cart-actions";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/actions/wishlistActions'
import { getFavorite } from "../redux/actions/wishlistActions"
// import swal from 'sweetalert';
import Swal from 'sweetalert2';


const cardGrid = {
    height: "100%"
}

const card = {
    height: "390px",
    border: "#5D6D7E 1px innert",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    boxShadow: "8px 8px 5px 3px rgba(81, 90, 90 , 0.5)",
    "&:hover": {
        cursor: "pointer",
        border: "#58D68D 2px solid",
        boxShadow: "8px 8px 5px 3px rgba(88, 214, 141, 0.5)",
    }
}

const cardContentImage = {
    display: "flex",
    flexDirection: "column",
    background: "#BFC9CA",
    paddingBottom: "5px",
    marginBottom: "0px",
    // background: "cyan",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const cardMedia = {
    objectFit: "contain",
    mixBlendMode: "multiply",
    width: "180px",
    height: "160px",
    marginTop: "10px",
}

const cardInfo = {
    width: "230px",
    height: "100px",
    flexGrow: 1,
}


const cardName = {
    textAlign: "center",
    fontSize: "16px",
}

const heartIcon = {
    // margin: "15px 5px 0px 0px",
    color: "red",
    "&:hover": {
        cursor: "pointer",
        border: "#F1948A  2px solid",
        background: "#F5B7B1",
        // borderRadius: "50%",
        padding: "7px"
    }
}

const cartIcon = {
    // margin: "15px 0px 0px 5px",
    color: "green",
    "&:hover": {
        cursor: "pointer",
        border: "#82E0AA 2px solid",
        background: "#ABEBC6",
        padding: "7px"
    }
}



export default function Card3({ nombre, imagen, precioVenta, id, favorite, rating, stock }) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    useEffect(() => {
        setChecked(favorite)
    }, [favorite])


    const [checked, setChecked] = useState(favorite);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (!checked) {

            dispatch(addFavorite(localStorage.id, event.target.id))
            Swal.fire({
                position: 'top-end',
                title: 'Agregado a favoritos!',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                backdrop: false,
                width: '250px',
                heightAuto: true

            })
        }
        if (checked) {
            console.log(event.target.id)
            console.log(localStorage.id)
            dispatch(removeFavorite(localStorage.id, event.target.id))
        }
    };


    const handleClickButton = (e) => { //dispatch cart
        dispatch(addToCart(nombre));
        console.log(nombre, "ETN")
        Swal.fire({
            position: 'top-end',
            title: 'Agregado al carrito!',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            backdrop: false,
            width: '250px',
            heightAuto: true
        })
    }


    return (
        <>
            {/* <div>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                    {...label}
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                />
            </div> */}


            <Container>
                <Grid container spacing={4} sx={cardGrid}>
                    <Grid item>
                        <Card sx={card}>
                            <CardContent sx={cardContentImage}>
                                <Box>
                                    {/* <IconButton
                                        size="medium"
                                        sx={heartIcon}
                                    >
                                        <FavoriteBorderOutlined />
                                    </IconButton> */}

                                    {/* <Checkbox 
                                        {...label} 
                                        // onChange={handleOnChange}
                                        icon={<FavoriteBorder />} 
                                        checkedIcon={<Favorite />} 
                                        id={id}
                                        // sx={heartIcon}
                                    /> */}


                                    {localStorage.token && <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        sx={heartIcon}
                                        color="error"
                                        inputProps={{ 'aria-label': 'controlled' }}
                                        id={id}
                                    />}

                                    {stock > 0 ?
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleClickButton}
                                            icon={<ShoppingCart />}
                                            checkedIcon={<ShoppingCart />}
                                            sx={cartIcon}
                                            color="success"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            id={id}
                                        />
                                        : <Checkbox
                                            disabled
                                            checked={checked}
                                            onChange={handleClickButton}
                                            icon={<ShoppingCart />}
                                            checkedIcon={<ShoppingCart />}
                                            sx={cartIcon}
                                            color="success"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                            id={id}
                                        />
                                    }


                                    {/* <IconButton
                                        sx={cartIcon}
                                        size='medium'
                                    >
                                        <ShoppingCart />
                                    </IconButton> */}
                                </Box>
                                <Link to={`/detalle/${id}`} underline="none">
                                    <CardMedia
                                        component="img"
                                        image={typeof imagen !== "string" ? imagen[0].url : imagen}
                                        sx={cardMedia}
                                    />
                                </Link>
                                <Rating sx={{ "padding": "5px" }} value={rating} readOnly />
                            </CardContent>
                            <CardContent sx={cardInfo}>
                                <Typography gutterBottom variant="h5">
                                    $ {precioVenta}
                                </Typography>
                                <Typography noWrap sx={cardName}>
                                    {nombre}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


        </>
    )
};