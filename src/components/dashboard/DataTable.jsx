import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/adminProductAction';
import { Category, Summarize } from '@mui/icons-material';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'products', headerName: 'Products', width: 280 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { 
    field:'category',
    headerName: 'Category',
    width: 130,
  },  
  {
    field: 'stock',
    headerName: 'Stock',
    default: 0,
    sortable: true,
    type: 'number',
    width: 90,
    
  },  
  {
    field: 'available',
    headerName: 'Available',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.row.stock > 0 ? 'Available' : 'Not available' }`,
  },
  {
    field:'purchasePrice',
    headerName: 'Purchase Price',
    type: 'number',
    width: 90,
  },
  {
    field:'salePrice',
    headerName: 'Sale Price',
    type: 'number',
    width: 90,
  }
];

export default function DataTable() {
  let rows = []
  const dispatch = useDispatch()
  const products = useSelector((state) => state.adminProductsReducer.products);
  //console.log(products);
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const showProducts = products.map(prod => ({
    id: prod.id,
    brand: prod.brand.name,
    products: prod.name,
    stock: prod.stock,
    category: prod.category.name,
    purchasePrice: prod.purchasePrice,
    salePrice: prod.salePrice,

  }))
  
  rows = [...showProducts]

  console.log(rows)
  return (
    <>
    <Sidebar/>
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div></>
    
  );
}