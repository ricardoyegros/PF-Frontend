import {Typography , Box , Alert} from '@mui/material/';
import { getAllReviews } from '../../redux/actions/reviewsDash-actions';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { deleteReviewId } from '../../redux/actions/reviewsDash-actions';
import Sidebar from './Sidebar';


export function Review () {
let dispatch = useDispatch();

const [state, setState] = useState("")


let allReviews = useSelector((state)=> state.reviewsDashReducer.reviews)

 function handleDelete (e){
    e.preventDefault()
    dispatch(deleteReviewId(e.target.value))
    setState(`reviews ${[...allReviews]}`)
    }

useEffect(()=> {
    dispatch(getAllReviews())
},[dispatch]);

console.log(allReviews,"datos comentarios")

    return (
      <>
        <Sidebar />
<Typography variant={"h3"} m={5} align={"center"} >Comentarios</Typography>
<table class="table" style={{"marginBottom":"5rem"}}>
  <thead>
    <tr>
      <th scope="col">Usuario</th>
      <th scope="col">Producto</th>
      <th scope="col">Comentario</th>
      <th scope="col">Rating</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {allReviews.length ? (
        allReviews.map((review) => (
            <tr >
            <th scope="row">{review.user ? review.user.email : "null"}</th>
            <td>{review.product.name}</td>
            <td>{review.detail}</td>
            <td>{review.stars}</td>
            <td><button onClick={(e) => handleDelete(e)} value={review.id} type="button" class="btn btn-danger">Borrar</button></td>
            </tr>
              
        ))
    ) :  <Box display={"flex"} justifyContent={"center"} alignItems={"center"}><Alert severity="error">No se encontraron comentarios!</Alert></Box> }
  </tbody>
</table>
        </>
    )
}



