import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { getDetailProduct } from "../redux/actions";

export default function Detail () {
    //falta poner el link con el id en el map de las cards que se podran hacer click
    const { id } = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetailProduct(id));
    },[dispatch,id])
    //let detailProduct = useSelector(state => )

    return (
        <Box sx={{
         display: "grid",
         border: "solid orange",
         gridTemplateColumns: "repeat(2, 1fr)",
         gridTemplateRows: "1fr"}}>
          <Box sx={{
         border: "solid black",
         height:"80vh",
         display:"flex",
         justifyContent:"center"
         }}>

          </Box>
          <Box  sx={{
            border: "solid yellow",
            height:"80vh"}}>
          </Box>

        </Box>
         
        
    )
};