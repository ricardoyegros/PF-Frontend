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
    const [page, setPage] = useState(0);
    useEffect(() => {
        dispatch(getCategoryNames());
        dispatch(getBrands());
    }, [dispatch, setState]);

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
    };

    const handleCategory = (e) => {
        setPage(1);
        setState({ ...state, categoryId: e.target.value, categoryName: e.target.name, page: '' });
        dispatch(preFilter({ ...state, categoryId: e.target.value, categoryName: e.target.name, page: '' }));
        dispatch(isInUse({ ...state, categoryId: e.target.value, categoryName: e.target.name }));
        setTimeout(onclick(e));
    };

    const handleBrand = async (e) => {
        setState({ ...state, brandId: e.target.value, brandName: e.target.name, page: '' });
        dispatch(preFilter({ ...state, brandId: e.target.value, brandName: e.target.name, page: '' }));
        dispatch(isInUse({ ...state, brandId: e.target.value, brandName: e.target.name }))
        setPage(1);
    };

    const handleSort = (e) => {
        setState({ ...state, sort: e.target.value, page: '' });
        dispatch(preFilter({ ...state, sort: e.target.value, page: '' }));
        dispatch(isInUse({ ...state, typeName: e.target.value }));
        setPage(1);
    };

    const handlePage = (e, p) => {
        setState({ ...state, page: (p) });
        dispatch(preFilter({ ...state, page: (p) }));
        setPage(p);
    };

    const handleType = (e) => {
        setState({ ...state, type: e.target.value });
        dispatch(preFilter({ ...state, type: e.target.value }));
        dispatch(isInUse({ ...state, typeName: e.target.name }));
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

      <Box justifyContent={"center"} alignItems="center" display={"grid"} marginBottom={8}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleReset} value={{}} color="success">
            Limpiar Filtros
          </Button>
          <Button onClick={handleType} value={"salePrice"} color="success">
            Precio
          </Button>
          <Button onClick={handleType} value={"id"} color="success">
            Creacion
          </Button>
          <Button onClick={handleSort} value={"ASC"} color="success">
            Ascendente
          </Button>
          <Button onClick={handleSort} value={"DESC"} color="success">
            Descendente
          </Button>
        </ButtonGroup>
      </Box>
      {Array.isArray(reduxState2?.content) && !reduxState2?.content[0] ? (
        <Alert severity="error">No se encontraron Productos!</Alert>
      ) : null}
      <Grid container gridColumn={3} spacing={4} justifyContent="center" alignItems={"center"}>
        {reduxState2 &&
          reduxState2.content.map((e) => (
            <Grid item mb={5}  sm={3.1}  key={e.id}>
              <CardProduct2
                id={e.id}
                key={e.id}
                nombre={e.name}
                imagen={
                  e.images[0]?.url ||
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"

           <Box justifyContent={"center"} alignItems="center" display={"grid"} marginBottom={8}>
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
                    count={pages !== 1 ? pages.totalPage : 1} page={page} onChange={(e, p) => handlePage(e, p)}
                />
            </Box>
        </>
    );
};
