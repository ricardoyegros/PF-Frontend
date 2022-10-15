import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { preFilter } from '../../redux/actions';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Products', width: 130 },
  { field: 'marca', headerName: 'Marcas', width: 130 },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    allowNull: false,
    width: 90,
  },
  {
    field: 'disponible',
    headerName: 'Disponible',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.cantidad > 0 ? "disponible" : "no disponible" } `,
  },
  {
    field: 'add',
    headerName: 'Add Stock',
    type: 'number',
    width: 90, 
    valueGetter: (params) =>
      `${params.row.cantidad > 0 ? "disponible" : "no disponible" } `,
  },


];const rows = [/* 
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }, */
];

/* const rows = []; */

export default function DataTable() {
  let products = useSelector((state) => state.allProductsReducer.allProducts.content);
  const dispatch = useDispatch();
  
   useEffect(() => {
    dispatch(preFilter());
    rows.push(products)
  }, [dispatch]); 


    console.log(rows);
    console.log(products);
  return (
    <>
    
      <Sidebar/> 
      
    
    
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pcantidadSize={5}
        rowsPerPcantidadOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
