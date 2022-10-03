import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {logoutUser} from "../redux/actions"
function Logout() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    //const estado = useSelector(state=>state.usersReducers)
    useEffect(() => {
      dispatch(logoutUser())
      //console.log(estado)
      navigate("/")
    }, [])
    
  return (
    <div>Logout</div>
  )
}

export default Logout