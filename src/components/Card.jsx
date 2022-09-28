import React from "react";
import { Card,CardHeader, CardMedia, CardContent, Typography } from "@mui/material";

 export default function CardProduct({ nombre, imagen, categoria, precio, rating }) {
    return (
    <Card sx={{ width: 345, height: 500 }} >
      <CardContent>
        <CardHeader 
          action={<Typography component="p" variant="h5">{nombre}</Typography>}
        />
      </CardContent>
      <CardMedia component="img"
        height="200"
        image={imagen}/>
      <CardContent>
        <Typography component="p" variant="h6">
          Categoria:{categoria}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p" variant="h6">
          Precio: ${precio}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography component="p" variant="h6">
          Marca:{rating}
        </Typography>
      </CardContent>
    </Card>
  );
}