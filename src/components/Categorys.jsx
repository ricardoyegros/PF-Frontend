import { Button, ButtonGroup, Grid, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands, getCategoryNames, preFilter } from "../redux/actions";
import { useState } from "react";
import { Box } from "@mui/system";
import CardProduct2 from "./Card2";

export default function Categorys() {

    const dispatch = useDispatch()
    const [state, setState] = useState({});
    useEffect(() => {
        dispatch(getCategoryNames());
        dispatch(getBrands());
    }, [dispatch, state]);


    const reduxState = useSelector(state => state.categorysNameReducer.categorys);
    const reduxState2 = useSelector(state => state.categorysNameReducer.filtrado);
    const reduxState3 = useSelector(state => state.categorysNameReducer.brands);

    let pages = reduxState2 || 1

    const handleReset = () => {
        setState({});
        dispatch(preFilter({}));
    }

    const handleNull = () => {
        if (Array.isArray(reduxState2.content) && !reduxState2.content[0]) {
            setState({});
            setTimeout(alert('No se encontraron Productos'), 2000)
            setTimeout(handleReset(), 2000);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, categoryId: e.target.value });
        dispatch(preFilter({ ...state, categoryId: e.target.value }));
        setTimeout(handleNull(), 2000);

    };

    const handleSelect = (e) => {
        e.preventDefault();
        setState({ ...state, brandId: e.target.value })
        dispatch(preFilter({ ...state, brandId: e.target.value }));
        setTimeout(handleNull(), 2000);
    }

    const handleSort = (e) => {
        e.preventDefault();
        setState({ ...state, sort: e.target.value });
        dispatch(preFilter({ ...state, sort: e.target.value }));
        setTimeout(handleNull(), 2000);
    }

    const handlePage = (e, p) => {
        e.preventDefault();
        setState({ ...state, page: (p - 1) })
        dispatch(preFilter({ ...state, page: (p - 1) }));
        setTimeout(handleNull(), 2000);
    };

    const handleType = (e) => {
        e.preventDefault();
        setState({ ...state, type: e.target.value });
        dispatch(preFilter({ ...state, type: e.target.value }))
        setTimeout(handleNull(), 2000);
    }

    return (
        <>
            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {
                        reduxState && reduxState.map(e => <Button value={e.id} onClick={handleChange} >{e.name}</Button>)
                    }
                </ButtonGroup>
            </Box>
            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {
                        reduxState3 && reduxState3.map(e => <Button value={e.id} onClick={handleSelect} >{e.name}</Button>)
                    }
                </ButtonGroup>
            </Box>

            <Box justifyContent={'center'} alignItems='center' display={'grid'}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleReset} value={{}} color="success">RESET FILTERS</Button>
                    <Button onClick={handleType} value={"salePrice"} color="success">{"Precio"}</Button>
                    <Button onClick={handleType} value={"id"} color="success">{"Creacion"}</Button>
                    <Button onClick={handleSort} value={"ASC"} color="success">{"ASC"}</Button>
                    <Button onClick={handleSort} value={"DESC"} color="success">{"DESC"}</Button>
                </ButtonGroup>
            </Box>
            <Grid container spacing={0.5}>
                {
                    reduxState2 && reduxState2.content.map(e =>
                        <Grid item xs={2} sm={4} md={4} key={e.id}>
                            <CardProduct2
                                id={e.id}
                                key={e.id}
                                nombre={e.name}
                                imagen={e.images[0].url}
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
                <Pagination
                    count={pages !== 4 ? pages.totalPage : 4} color={'primary'} onChange={(e, p) => handlePage(e, p)}
                />
            </Box>
        </>
    );
}

