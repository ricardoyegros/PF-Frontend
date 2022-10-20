import React from "react";
import { Box, IconButton } from "@mui/material"
import { Delete   } from "@mui/icons-material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useDispatch} from "react-redux";
import { handleReduce1, addToCart, deleteFromCart } from "../redux/actions/cart-actions";
import Typography from '@mui/material/Typography'
import { styled} from '@mui/material/styles';

const StyledBox = styled(Box)(({ }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-start",
    border:"2px solid rgba(8,8,8,0.10)",
   
}));
export default function Cart ({name, salePrice, image, stock, id, quantity}) {
    let dispatch = useDispatch();
    console.log(name ,"name del cart")
    function handleButton (e){
        if(quantity > 1)
        dispatch(handleReduce1(id))
    }
    function handleButton2 (e){
        dispatch(addToCart(name))
    }

    function handleButton4 (e){
        dispatch(deleteFromCart(id))
    }


    return (
        <>
        <StyledBox >
        <Box component={"img"}
        src={image}
        width={80}
        height={80}/>
        <Box  width="50%" display={"flex"} alignItems={"center"}>
        <Typography variant="h6" color="initial" m={5} fontWeight={700}>{name}</Typography>
        </Box>
        
        <Box m={3} flexGrow={1} display={"flex"} justifyContent={"space-evenly"}>
        <Typography>${salePrice}</Typography>
        <Typography>{quantity}</Typography>
        <Typography fontWeight={700}>${salePrice * quantity}</Typography>
        </Box>

        <Box >
        <IconButton onClick={handleButton2}> <AddCircleOutlineIcon/> </IconButton>
        <IconButton onClick={handleButton}> <RemoveCircleOutlineIcon /> </IconButton>
        <IconButton onClick={handleButton4}><Delete/></IconButton>
        </Box>
        
        </StyledBox>
    </>
    )
};