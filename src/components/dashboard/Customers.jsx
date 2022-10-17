import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Link, Button } from "@mui/material";
import { Link as Linkdom } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../redux/actions";
import Sidebar from "./Sidebar";
import { DataGrid } from '@mui/x-data-grid';


const handleclick = (e,value) => {
    console.log(value.row.id)
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'lastname', headerName: 'Lastname', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'isAdmin',
        headerName: 'IsAdmin',
        width: 90,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 160,
        renderCell: (cellValues) => {
            return (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                        handleclick(e, cellValues)
                    }}
                >
                    Edit
                </Button>
            )
        }

    },
    
];




function Customers() {
    const dispatch = useDispatch();
    let token = localStorage.token;

    let allUser = useSelector((state) => state.allUserReducer.users);
    let rows = []

    // const navigate = useNavigate();

    //const [users, setUsers] = useState(allUser);

    useEffect(() => {
        dispatch(getUsers(token));
    }, [dispatch]);

    const users = allUser.map(user => ({
        id: user.id,
        name: user.name,
        lastname: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
    }))
    rows = [...users]
    
    

    return (
        <>
            <Sidebar />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection

                />
            </div>
        </>
    );
}

export default Customers;

{/* <Grid container spacing={6} justifyContent="center">
    {allUser.length > 0 ? (
        allUser.map((c) => (
            <Grid item mb={5} key={c.id}>
                <Linkdom to={`/admin/customers/customer/${c.id}`}>
                    <CardCustomer
                        fullName={c.fullName}
                        contact={c.contact}
                        email={c.email}
                        isAdmin={c.isAdmin}
                        id={c.id}
                    />
                </Linkdom>
            </Grid>
        ))
    ) : (
        <h1>Cargando</h1>
    )}
    { setTimeout(() => {
                        
                    // }, timeout)
                    // <Box display={"flex"} justifyContent={"center"} alignItems={"center"} m={50}>
                    //     <Loading />
                    // </Box>} 
</Grid> */}