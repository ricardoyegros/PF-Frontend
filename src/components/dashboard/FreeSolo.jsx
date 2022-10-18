import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { isInUse, preFilter} from "../../redux/actions/index";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FreeSolo() {
    let rows = [];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.adminProductsReducer.products);
    const [search, setSearch] = useState("");

        const showProducts = products.map(prod => ({
            id: prod.id,
            brand: prod.brand.name,
            products: prod.name,
            stock: prod.stock,
            category: prod.category.name,
            purchasePrice: prod.purchasePrice,
            salePrice: prod.salePrice,    
        }))
      
      rows = [...showProducts]

    
  return (

    <>
    <Stack spacing={2} sx={{ width: 300 }}>        
    
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={rows.map((option) => option.products)}
        renderInput={(params) => <TextField {...params} label="Buscar por nombre" />}
      />
    </Stack>
            
    </>
  );
}

