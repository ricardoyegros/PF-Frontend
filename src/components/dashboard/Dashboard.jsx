import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as Linkdom } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { Typography, CardContent, Grid, Button, createTheme } from '@mui/material';

import Sidebar from "./Sidebar"


export default function Dashboard() {

    const theme = createTheme({
        palette: {
            primary: {
                // aqui el color primario un gris suave para que el logo se pueda ver.
                main: '#cfcfcf',
                light: '#cfcfcf',
                dark: '#707070'
            },
            secondary: {
                // de secundario un azul suave para evitar que sea muy chocante
                main: '#4f83cc',
                light: '#4f83cc',
                dark: '#002f6c'
            }
        },
        //aqui aumente un poco el tamaño de todo
        typography: {
            fontSize: 18
        }
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.usersReducers.user);
    const token = useSelector((state) => state.usersReducers.token);
    
        return(
            <>
            <Typography gutterBottom variant="h3" align="center">
                TechStore - Admin Dashboard !!
            </Typography>
            <Sidebar/>
            </>
        )




}



