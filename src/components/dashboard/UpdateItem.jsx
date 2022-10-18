import React, { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/adminProductAction';

export default function UpdateItem(){
  const dispatch = useDispatch();
  const { state } = useLocation(); 
  console.log(state.id); 
  console.log(state.name); 
  console.log(state.brand); 
  console.log(state.stock); 
  console.log(state.category); 
  console.log(state.purchasePrice);
  console.log(state.salePrice);


  
/* 
  console.log(value.row.id)
  console.log(value.row.products)
  console.log(value.row.brand)
  console.log(value.row.stock)
  console.log(value.row.category)
  console.log(value.row.purchasePrice)
  console.log(value.row.salePrice) */

  return (
    <>
    <h3>Hola</h3>
    </>

  )
  
}

