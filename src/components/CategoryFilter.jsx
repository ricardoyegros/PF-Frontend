import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../redux/actions/actionFilterByCategory';

export default function CategoryFilter({ productsPerPage, paginate }) {
  const products = useSelector(state => state.categoryFilterReducer.allProducts)
  console.log(products)
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByCategory(category, productsPerPage))
    paginate(1)
  }, [category])
  
  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value !== "Categoria") {
      setCategory(e.target.value)
    }
  }

  const handleOnClickButton = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <>
      <select onClick={handleOnClick}>
        <option disabled selected>Categoria</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      {category && <button onClick={handleOnClickButton}>{category}</button>}
    </>
  )
}



