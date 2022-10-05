import React, { useState } from 'react'
import { styled} from '@mui/material/styles';
import { Typography , Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)(({ }) => ({
    width:500,
    height:250,
    padding:40,
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-evenly",
    alignItems:"flex-start",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
}));


function ForgotPassword() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    function handleChange(e){
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setInput("")
        navigate("/")
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
        Ingrese su email
        </Typography>
        <TextField
        label={"Email"}
        required
        placeholder="Please enter you Email..."
        fullWidth
        value={input}
        onChange={handleChange}>
        </TextField>
        <Button 
        variant={"contained"}
        type={"submit"}
        disabled={!input}>
        Enviar
        </Button>
    </StyledBox>
    </form>
    </Box>
    </>
  )
}

export default ForgotPassword