import React from 'react';
import {
    CardHeader,
    /*  CardMedia, */
    CardContent,
    Typography,
    Rating,
    Link,
    createTheme,
    Grid,
    Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: 400,
    transition: '0.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
        boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)'
    }
}));

export default function CarCustomer(name) {
    const theme = createTheme({
        //aqui aumente un poco el tamaño de todo
        typography: {
            fontSize: 12
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} md={4} lg={3}>
                <StyledBox>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 240
                        }}
                    >
                        <Typography component="p" variant="h4" color={'black'}>
                            CLIENTE : {name}
                        </Typography>
                    </Paper>
                </StyledBox>
            </Grid>
        </ThemeProvider>
    );
}
