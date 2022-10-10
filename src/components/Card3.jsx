import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    IconButton,
    Container,
    Rating,
    Box
} from '@mui/material';
import { ShoppingCart, FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
    margin: "15px 5px 0px 0px",
    color: "red",
    "&:hover": {
        cursor: "pointer",
        border: "#F1948A  2px solid",
        background: "#F5B7B1"
    }
}

const cartIcon = {
    margin: "15px 0px 0px 5px",
    color: "green",
    "&:hover": {
        cursor: "pointer",
        border: "#82E0AA 2px solid",
        background: "#ABEBC6"
    }
}

export default function Card3({ nombre, imagen, precioVenta, id }) {
    return (

            <Container>
                <Grid container spacing={4} sx={cardGrid}>
                    <Grid item>
                        <Card sx={card}>
                            <CardContent sx={cardContentImage}>
                                <Box>
                                    <IconButton
                                        size="medium"
                                        sx={heartIcon}
                                    >
                                        <FavoriteBorderOutlined />
                                    </IconButton>
                                    <IconButton
                                        sx={cartIcon}
                                        size='medium'
                                    >
                                        <ShoppingCart />
                                    </IconButton>
                                </Box>
                                <Link to={`/detalle/${id}`} underline="none">
                                <CardMedia
                                    component="img"
                                    image={imagen}
                                    sx={cardMedia}
                                />
                                </Link>
                                <Rating sx={{ "padding": "5px" }} Controlled />
                            </CardContent>
                            <CardContent sx={cardInfo}>
                                <Typography gutterBottom variant="h5">
                                    ${precioVenta}
                                </Typography>
                                <Typography sx={cardName}>
                                    {nombre}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
    )
};