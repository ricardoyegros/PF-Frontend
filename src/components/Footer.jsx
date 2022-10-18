import { Container, ThemeProvider } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { createTheme } from "@mui/material";

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
                                <Box borderBottom={1} color="red">
                                    Ayuda
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
                                <Box>
                                    <Link href="/preguntas" color="secondary" underline="none">
                                        Preguntas Frecuentes
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1} color="red">
                                    Cuenta
                                </Box>
                                <Box>
                                    <Link
                                        href="/users/register"
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
                                <Box borderBottom={1} color="red">
                                    Productos
                                </Box>
                                <Box>
                                    <Link href="/notebooks" color="secondary" underline="none">
                                        Notebooks
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/hardware" color="secondary" underline="none">
                                        Hardware
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/perifericos" color="secondary" underline="none">
                                        Perifericos
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/celulares" color="secondary"underline="none">
                                        Celulares
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box
                            color="black"
                            textAlign="center"
                            pt={{ xs: 5, sm: 10 }}
                            pb={{ xs: 5, sm: 0 }}
                        >
                            TechStore Copyright &reg; {new Date().getFullYear()}
                        </Box>
                    </Container>
                </Box>
            </footer>
        </ThemeProvider>
    );
}
