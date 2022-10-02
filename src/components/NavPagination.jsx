import { Box, Pagination } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions'


export const NavPagination = ({ inUse }) => {
  const dispatch = useDispatch()
  const reduxState = useSelector(state => state[inUse])
  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    e.preventDefault(e);
    setPage(p);
    dispatch(getAllProducts(page - 1));
  }
  return (
    <Box justifyContent={'center'} alignItems='center' display={'flex'}
      sx={{
        margin: '20px 0px',
      }}
    >
      <Pagination
        count={reduxState.totalPage} color={'primary'} onChange={(e, p) => handleChange(e, p)}
      />
    </Box>
  )
}
