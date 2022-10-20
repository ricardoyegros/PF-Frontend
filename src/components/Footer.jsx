import { Container, ThemeProvider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { createTheme } from "@mui/material";
import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cfcfcf", // gris
    },
    secondary: {
      main: "#000", // negro
    },
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer>
        <Box bgcolor="#cfcfcf" p={10}>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  <Typography sx={{ fontWeight: "bold" }}>Ayuda</Typography>
                </Box>
                <Box>
                  <Link href="/contacto" color="secondary" underline="none">
                    Contacto
                  </Link>
                </Box>
                <Box>
                  <Link href="/nosotros" color="secondary" underline="none">
                    Sobre Nosotros
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>
                  <Typography sx={{ fontWeight: "bold" }}>Cuenta</Typography>
                </Box>
                <Box>
                  <Link
                    href="/login"
                    color="secondary"
                    underline="none"
                  >
                    Registro
                  </Link>
                </Box>
                <Box>
                  <Link href="/login" color="secondary" underline="none">
                    Ingresar
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box ml={13}>
                  <Typography sx={{fontWeight: "bold"}} variant="h6">Redes Sociales</Typography>
                </Box>
                <Box ml={3} mt={2}>
                  <Link
                    sx={{ cursor: "pointer" }}
                    m={3}
                    color="secondary"
                    underline="none"
                  >
                    <Facebook
                      onClick={() =>
                        window.open("https://www.facebook.com", "_blank")
                      }
                    />
                  </Link>
                  <Link
                    sx={{ cursor: "pointer" }}
                    m={3}
                    color="secondary"
                    underline="none"
                  >
                    <Instagram
                      onClick={() =>
                        window.open("https://www.instagram.com", "_blank")
                      }
                    />
                  </Link>
                  <Link
                    sx={{ cursor: "pointer" }}
                    m={3}
                    color="secondary"
                    underline="none"
                  >
                    <Twitter
                      onClick={() =>
                        window.open("https://www.twitter.com", "_blank")
                      }
                    />
                  </Link>
                  <Link
                    sx={{ cursor: "pointer" }}
                    m={3}
                    color="secondary"
                    underline="none"
                  >
                    <GitHub
                      onClick={() =>
                        window.open("https://www.github.com", "_blank")
                      }
                    />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              color="black"
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
              sx={{fontWeight: "bold"}}
            >
              TechStore Copyright &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </ThemeProvider>
  );
}
