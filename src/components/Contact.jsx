import {Typography, Card, CardContent, Grid, TextField, Button} from "@mui/material";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default function Contact(){
    return(
        <>
            <Navbar/>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Contacto
            </Typography>
            <Card style={{maxWidth:450, margin: "0 auto", padding:"20px 5px"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        Contactate con nosotros
                    </Typography>
                    <Typography gutterBottom color="textSecondary" variant="body2" component="p">
                        Completa el formulario y dentro de las 24 horas te estaremos respondiendo todas tus dudas
                    </Typography>
                    <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Nombre" placeholder="Ingrese su nombre..." variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField label="Apellido" placeholder="Ingrese su apelido..." variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Correo" placeholder="Ingrese su correo electronico..." variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Telefono" placeholder="Ingrese su numero de telefono..." variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <TextField label="Mensaje" multiline rows={4} placeholder="Ingrese su mensaje..." variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                            <Button color="primary" type="submit" variant="contained" fullWidth>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
            </Card>
            <Footer/>
        </>
    )
};