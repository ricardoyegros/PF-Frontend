import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar.jsx';
import { useNavigate } from 'react-router-dom';


export default function SearchAppBar() {
  const navigate = useNavigate();
  let name = localStorage.name;


  function handleClickStock(e) {
    e.preventDefault();
    navigate('/admin/stock');
  }
  
  function handleClickShop(e) {
          e.preventDefault();
          navigate('/admin/sucursal');          
  }

  function handleClickSales(e){
          e.preventDefault();
          navigate('/admin/sales');          
  }
  
  function handleClickUsers(e){
    e.preventDefault();
    navigate('/admin/customers')
  }

  function handleClickOrdenes(e){
    e.preventDefault();
    navigate('/admin/ordenes')
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
        <Button color="inherit"><Sidebar color="inherit"/></Button>
        <Button onClick={handleClickShop} color="inherit">New Shop</Button>
        <Button onClick={handleClickSales} color="inherit">Sales</Button>
        <Button onClick={handleClickStock} color="inherit">Stock</Button>
        <Button onClick={handleClickUsers} color="inherit">Users</Button>
        <Button onClick={handleClickOrdenes} color="inherit">ordenes</Button>
                   
        </Toolbar>
      </AppBar>
    </Box>
          
  );
}
