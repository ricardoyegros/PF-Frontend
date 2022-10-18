import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { Link as Linkdom } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUsers, changeAdmin } from "../../redux/actions/adminUserAction";
import Sidebar from "./Sidebar";
import { DataGrid } from '@mui/x-data-grid';


function Customers() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const token = localStorage.token;

    const allUser = useSelector((state) => state.adminUsersReducer.users);
    //console.log(allUser)
    const handleclick = (e, value) => {
        console.log(value.row.id)
        navigate('/admin/userorden', { state: { id: value.row.id, name: value.row.name, lastname: value.row.lastname }})
        //dispatch(changeAdmin(value.row.id))
    }
    const handleAdmin = (e, value) => {
        console.log(value.row.id)
        dispatch(changeAdmin(value.row.id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Nombre', width: 130 },
        { field: 'lastname', headerName: 'Apellido', width: 130 },
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
            field: 'ordenes',
            headerName: 'Ordenes',
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
                        Órdenes
                    </Button>
                )
            }
        },
        {
            field: 'admin',
            headerName: 'Admin',
            sortable: false,
            width: 160,
            renderCell: (cellValues) => {
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                            handleAdmin(e, cellValues)
                        }}
                    >
                        Admin
                    </Button>
                )
            }
        },
    
    ];


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
            <div className="container">
                <div className="row">

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}

                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customers;
