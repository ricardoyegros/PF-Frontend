import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
/* import InboxIcon from '@mui/icons-material/MoveToInbox';*/
import MailIcon from '@mui/icons-material/Mail';
import People from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link as Linkdom } from 'react-router-dom';

export default function Sidebar() {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    //let token = useSelector((state) => state.usersReducers.token);

    let token = localStorage.token

    const [state, setState] = React.useState({
        /* top: false, */
        left: false
        /*  bottom: false,
        right: false */
    });

    const handleCustomer = (event) => {
        event.preventDefault();
        dispatch(navigate('/admin/customers'));
    };

    const handleDashboard = (e) => {
        e.preventDefault();
        dispatch(navigate('/dashboard'));
    };

    const handleShoppingCar = (e) => {
        e.preventDefault();
        dispatch(navigate('/admin/orders'));
    };

    const handleCurrents = (e) => {
        e.preventDefault();
        dispatch(navigate('/admin/orders'));
    };

    const handleCreateProduct = (e) => {
        e.preventDefault();
        dispatch(navigate('/creacion'));
    };

    const handleCreateAdmin = (e) => {
        e.preventDefault();
        dispatch(navigate('/admin/newadmin'));
    };

    const handleMail = (e) => {
        e.preventDefault();
        dispatch(navigate('/admin/mail'));
    };

    const handleReports = (e) => {
        e.preventDefault();
        dispatch(navigate('/admin/reports'));
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            
        >
            <List>
                {['Customers', 'Dashboard'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {' '}
                                {index % 2 === 0 ? <People onClick={handleCustomer} /> : <DashboardIcon onClick={handleDashboard} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            
            <Divider />
            <List>
                {['Create Product', 'Create Admin'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {' '}
                                {index % 2 === 0 ? <BuildIcon onClick={handleCreateProduct} /> : <PersonIcon onClick={handleCreateAdmin} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Orders', 'Currents'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? (
                                    <ShoppingCartIcon onClick={handleShoppingCar} />
                                ) : (
                                    <AssignmentIcon onClick={handleCurrents} />
                                )}{' '}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Reports', 'Mails'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <BarChartIcon onClick={handleReports} /> : <MailIcon onClick={handleMail} />}{' '}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {token ? (
                <div>
                    {['Menu'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                                color="inherit"
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
