import { Alert, Button, ButtonGroup, Grid, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands, getCategoryNames, isInUse, preFilter } from "../redux/actions";
import { useState } from "react";
import { Box } from "@mui/system";
import CardProduct2 from "./Card2";

export default function Categorys() {

    const dispatch = useDispatch();
    const [state, setState] = useState({});
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(getCategoryNames());
        dispatch(getBrands());
    }, [dispatch, state]);

    const reduxState = useSelector(state => state.categorysNameReducer.categorys);
    const reduxState2 = useSelector(state => state.categorysNameReducer.filtrado);
    const reduxState3 = useSelector(state => state.categorysNameReducer.brands);
    const reduxState4 = useSelector(state => state.categorysNameReducer);

    if (!reduxState2) dispatch(preFilter({}));

    let pages = reduxState2 || 1

    const handleReset = () => {
        setState({});
        dispatch(preFilter({}));
        dispatch(isInUse({}));
    }

    const handleNull = () => {
        if (Array.isArray(reduxState2.content) && !reduxState2.content[0]) {
            setState({});
            setTimeout(alert('no se encontro ningun producto!'), 1000)
            setTimeout(handleReset(), 1000);
        };
    };

    const handleCategory = (e) => {
        e.preventDefault();
        setState({ ...state, categoryId: e.target.value, categoryName: e.target.name });
        dispatch(preFilter({ ...state, categoryId: e.target.value, categoryName: e.target.name }));
        dispatch(isInUse({ ...state, categoryId: e.target.value, categoryName: e.target.name }))
        setTimeout(handleNull(), 1000);
        setPage(1);

    };

    const handleBrand = (e) => {
        e.preventDefault();
        setState({ ...state, brandId: e.target.value, brandName: e.target.name });
        dispatch(preFilter({ ...state, brandId: e.target.value, brandName: e.target.name }));
        dispatch(isInUse({ ...state, brandId: e.target.value, brandName: e.target.name }))
        setTimeout(handleNull(), 1000);
        setPage(1);
    };

    const handleSort = (e) => {
        e.preventDefault();
        setState({ ...state, sort: e.target.value });
        dispatch(preFilter({ ...state, sort: e.target.value }));
        dispatch(isInUse({ ...state, typeName: e.target.value }));
        setTimeout(handleNull(), 1000);
        setPage(1);
    };

    const handlePage = (e, p) => {
        e.preventDefault();
        setState({ ...state, page: (p - 1) });
        dispatch(preFilter({ ...state, page: (p - 1) }));
        setTimeout(handleNull(), 1000);
        setPage(p);
    };

    const handleType = (e) => {
        e.preventDefault();
        setState({ ...state, type: e.target.value });
        dispatch(preFilter({ ...state, type: e.target.value }));
        dispatch(isInUse({ ...state, typeName: e.target.name }));
        setTimeout(handleNull(), 1000);
        setPage(1);
    };


    return (
        <>
            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {
                        reduxState && reduxState.map(e => <Button value={e.id} name={e.name}
                            variant={reduxState4?.categoryName === e.name ? 'outlined' : 'contained'} style={{ marginTop: '5px' }}
                            onClick={handleCategory} >{e.name}</Button>)
                    }
                </ButtonGroup>
            </Box>

            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {
                        reduxState3 && reduxState3.map(e => <Button value={e.id} name={e.name}
                            variant={reduxState4?.brandName === e.name ? 'outlined' : 'contained'} onClick={handleBrand}>{e.name}</Button>)
                    }
                </ButtonGroup>
            </Box>

            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleReset} value={{}} color="success">Limpiar Filtros</Button>
                    <Button onClick={handleType} 
                        value={"salePrice"} color="success">Precio</Button>
                    <Button onClick={handleType}
                        value={"id"} color="success">Creacion</Button>
                    <Button onClick={handleSort}
                        value={"ASC"} color="success">Ascendente</Button>
                    <Button onClick={handleSort}
                        value={"DESC"} color="success">Descendente</Button>
                </ButtonGroup>
            </Box>
            {
                (Array.isArray(reduxState2?.content) && !reduxState2?.content[0])
                    ? <Alert severity="error">No se encontraron Productos!</Alert>
                    : null
            }
            <Grid container spacing={0.5}>
                {
                    reduxState2 && reduxState2.content.map(e =>
                        <Grid item xs={2} sm={4} md={4} key={e.id}>
                            <CardProduct2
                                id={e.id}
                                key={e.id}
                                nombre={e.name}
                                imagen={e.images[0]?.url || 'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'}
                                categoria={e.category.name}
                                precio={e.salePrice}
                                marca={e.brand.name}
                            />
                        </Grid>
                    )
                }
            </Grid>

            <Box justifyContent={'center'} alignItems='center' display={'flex'}
                sx={{
                    margin: '20px 0px',
                }}
            >
                <Pagination size="large" color={'primary'}
                    count={pages !== 4 ? pages.totalPage : 4} page={page} onChange={(e, p) => handlePage(e, p)}
                />
            </Box>
        </>
    );
};