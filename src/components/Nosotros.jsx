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
} from "@mui/material";

import {
  ShoppingCart,
  FavoriteBorderOutlined,
  BookmarkBorder,
  Bookmark,
  FavoriteBorder,
  Favorite,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../redux/actions/cart-actions";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/wishlistActions";
import { getFavorite } from "../redux/actions/wishlistActions";
import { Carrousel } from "./Carrousel";
import Ricardo from "../assets/images/Nosotros/fotocopia-removebg-preview.jpg"

const cardGrid = {
  height: "100%",
};

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
  },
};
const productBox = {
    display: "flex",
    flexDirection: "column",
    gridGap: "2rem",
    // border: "2px rgb(241, 207, 9) solid",
    flex: 1,
  };
const cardContentImage = {
  display: "flex",
  flexDirection: "column",
  background: "#BFC9CA",
  paddingBottom: "5px",
  marginBottom: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardMedia = {
  objectFit: "contain",
  mixBlendMode: "multiply",
  width: "180px",
  height: "160px",
  marginTop: "10px",
  borderRadius: "50%",
  border: "#000 1px solid"
};

const cardInfo = {
  width: "230px",
  height: "100px",
  flexGrow: 1,
};

const cardName = {
  textAlign: "center",
  fontSize: "16px",
};

const heartIcon = {
  // margin: "15px 5px 0px 0px",
  color: "red",
  "&:hover": {
    cursor: "pointer",
    border: "#F1948A  2px solid",
    background: "#F5B7B1",
    // borderRadius: "50%",
    padding: "7px",
  },
};

const cartIcon = {
  // margin: "15px 0px 0px 5px",
  color: "green",
  "&:hover": {
    cursor: "pointer",
    border: "#82E0AA 2px solid",
    background: "#ABEBC6",
    padding: "7px",
  },
};

let nosotros = [
  {
    name: "Billy Mendieta",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Ignacio Orellana",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Frontend Developer",
  },
  {
    name: "Jander Gomez",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Julian David Nuñez",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Backend Developer",
  },
  {
    name: "Mauricio Murdoch",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Frontend Developer",
  },
  {
    name: "Miqueas Ledesma",
    image: "",
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Fullstack Developer",
  },
  {
    name: "Ricardo Yegros",
    image: Ricardo,
    linkedin: "",
    github: "",
    teléfono: "",
    rol: "Frontend Developer",
  },
];
export default function Nosotros() {
  return (
    <>
      <Grid
        Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        padding="20px"
        sx={{"display":" grid",
            "justifyContent": "center",
            "gridTemplateRows": "1fr 1fr",
            "gridTemplateColumns": "1fr 1fr 1fr"}}
      >
          {nosotros.map((we) => (
            <Container >
              <Grid ml={20} container spacing={4} sx={cardGrid}>
                <Grid item>
                  <Card sx={card}>
                    <CardContent sx={cardContentImage}>
                      <Box>
                        <Checkbox
                          icon={<LinkedIn />}
                          checkedIcon={<LinkedIn />}
                        />
                        <Checkbox icon={<GitHub />} checkedIcon={<GitHub />} />
                      </Box>
                      <CardMedia
                        component="img"
                        image={we.image}
                        sx={cardMedia}
                      />
                    </CardContent>
                    <CardContent sx={cardInfo}>
                      <Typography gutterBottom variant="h5">
                        {we.name}
                      </Typography>
                      <Typography noWrap sx={cardName}>
                        {we.rol}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          ))}
      </Grid>
    </>
  );
}
