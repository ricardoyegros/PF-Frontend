import { styled} from '@mui/material/styles';
import { Typography, Box , IconButton  } from '@mui/material';
import { Delete   } from "@mui/icons-material";

const StyledBox = styled(Box)(({ }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-start",
    border:"2px solid rgba(8,8,8,0.10)",
   
}));

export function Review () {

    return (
        <>
         
        <Typography variant={"h3"} m={5} align={"center"} >Comentarios</Typography>
        <StyledBox> 
        <Box  width="10%" display={"flex"} alignItems={"center"}>
        <Typography variant="h6" color="initial" m={5} fontWeight={700}>{"comentario"}</Typography>
        </Box>
        
        <Box m={3} display={"flex"} justifyContent={"space-evenly"} flexGrow={1}>
        <Typography>{"producto"}</Typography>
        <Typography>{"usuario"}</Typography>
        </Box>

        <Box >
        <IconButton><Delete/></IconButton>
        </Box>
        </StyledBox>
        </>
    )
}