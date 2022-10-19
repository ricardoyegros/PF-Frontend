import axios from 'axios';
import swal from 'sweetalert';
import { styled } from '@mui/material/styles';
import { Typography, Box, IconButton, Button, FormControl, InputLabel, Input, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, } from 'react';

const StyledBox = styled(Box)(({ }) => ({
    width: 500,
    height: 250,
    padding: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
}));


export default function ChangePassword() {

    const [values, setValues] = useState({
        password: '',
        reapetPassword: '',
        showPassword: false,
        reapetShowPassword: false,
    })

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChangeReapet = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleClickShowPasswordReapet = () => {
        setValues({
            ...values,
            reapetShowPassword: !values.reapetShowPassword,
        });
    };

    const [search, setSearch] = useSearchParams();
    const token = search.get("token")
    //console.log(token)

    const navigate = useNavigate()



    async function handleSubmit(e) {
        e.preventDefault()
        if (values.password !== values.reapetPassword) swal("Error", "Las contraseñas deben ser iguales", "error")
        else {
            console.log(values.password)
            try {

                const user = await axios.put("https://techstore123.herokuapp.com/users/change-password", { password: values.password }, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                console.log(user.data)
                swal("Contraseña Cambiada Correctamente", "", "success");
                navigate("/login")
            } catch (error) {
                swal("Error", "Ha sucedido un error", "error");
                console.log(error)
            }

        }
        //setInput("")
        //navigate("/")
    }
    //falta validacion de email

    return (
        <>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <form onSubmit={handleSubmit}>
                    <StyledBox
                        m={15}>
                        <Typography variant="h5">
                            Cambiar de Password
                        </Typography>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="password">Contraseña</InputLabel>
                            <Input
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}

                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="repetir-password">Repetir Contraseña</InputLabel>
                            <Input
                                id="repetir-password"
                                type={values.reapetShowPassword ? 'text' : 'password'}
                                value={values.reapetPassword}
                                onChange={handleChangeReapet}
                                name="reapetPassword"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPasswordReapet}

                                        >
                                            {values.reapetShowPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <Button
                            variant={"contained"}
                            type={"submit"}
                            /* disabled={!input} */>
                            Cambiar
                        </Button>
                    </StyledBox>
                </form>
            </Box>
        </>
    )
}

