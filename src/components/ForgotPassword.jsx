import axios from 'axios';
import swal from 'sweetalert';
import { styled} from '@mui/material/styles';
import { Typography , Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

    async function handleSubmit(e){
        e.preventDefault()
        try {
            const user = await axios.post("https://techstore123.herokuapp.com/users/forgot",{email:input})
            console.log(user.data)
            swal("Formulario enviado", "Revisa tu correo por favor", "success");
        } catch (error) {
            swal("Error", "No existe ningún usuario con ese correo", "error");
            console.log(error)
        }
        setInput("")
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
        Ingrese su email
        </Typography>
        <TextField
        label={"Email"}
        required
        placeholder="Ingrese su Email..."
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