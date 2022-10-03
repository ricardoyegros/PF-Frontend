import React from "react";
import {
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Link,
  createTheme,
} from "@mui/material";
import { styled} from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
    width:"100%",
    height:400,
    transition: "0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"}
}));

export default function CardProduct2({
  nombre,
  imagen,
  precio,
  id,
}) {
  const theme = createTheme({

    //aqui aumente un poco el tamaño de todo
    typography: {
      fontSize: 12,
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <Link href={`/detalle/${id}`} underline="none">
        <StyledBox>
          <CardMedia
            component="img"
            image={imagen}
            sx={{ width: 200, height: 200 }}
          />
          <Rating sx={{ mt: 2 }} Controlled />
          <CardContent sx={{ paddingTop: 2 }}>
            <Typography component="p" variant="h4" color={"black"}>
              ${precio}
            </Typography>
          </CardContent>
          <CardContent sx={{ padding: 0 }}>
            <CardHeader
              action={
                <Typography
                  component="p"
                  variant="h5"
                  color={"black"}
                  sx={{ maxWidth: 280, fontSize: 15 }}
                >
                  {nombre}
                </Typography>
              }
            />
          </CardContent>
        </StyledBox>
      </Link>
    </ThemeProvider>
  );
}
