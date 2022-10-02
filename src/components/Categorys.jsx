// import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Pagination, } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBrands, getCategoryNames, preFilter } from "../redux/actions";
import CardProduct from "./Card";
import { useState } from "react";
import { Box } from "@mui/system";

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
    let numPagination = reduxState2 ? reduxState.totalPage : 3;

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

    return (
        <>
            <Box justifyContent={'center'} alignItems='center' display={'grid'}
                sx={{
                    margin: '20px 0px',
                }}
            >
                <Grid alignSelf={'center'}>
                    <ButtonGroup style={{ marginLeft: '150px' }} variant="contained" aria-label="outlined primary button group">
                        {
                            reduxState && reduxState.map(e => <Button value={e.id} onClick={handleChange} >{e.name}</Button>)
                        }
                    </ButtonGroup>
                </Grid>

                <Grid alignSelf={'center'}>
                    <ButtonGroup style={{ marginLeft: '150px' }} variant="contained" aria-label="outlined primary button group">
                        {
                            reduxState3 && reduxState3.map(e => <Button value={e.id} onClick={handleSelect} >{e.name}</Button>)
                        }
                    </ButtonGroup>
                </Grid>


                {/* <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Marca</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={state.brandId}
                        name={"name"}
                        onChange={handleSelect}
                        input={<OutlinedInput label="Name" />}
                    >
                        {reduxState3 && reduxState3.map(e => (
                            <MenuItem
                                key={e.id}
                                value={e.id}
                                onClick={handleSelect}
                            >
                                {e.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
                <Button onClick={handleReset} value={{}} variant="contained" color="success">RESET FILTERS</Button>
                <Button onClick={handleSort} value={"ASC"} variant="contained" color="success">{"ASC"}</Button>
                <Button onClick={handleSort} value={"DESC"} variant="contained" color="success">{"DESC"}</Button>
                <Grid>
                    {
                        reduxState2 && reduxState2.content.map(e => <CardProduct
                            key={e.id}
                            nombre={e.name}
                            imagen={e.images[0].url}
                            categoria={e.category.name}
                            precio={e.salePrice}
                            marca={e.brand.name}
                        />)
                    }
                </Grid>
            </Box>

            <Box justifyContent={'center'} alignItems='center' display={'flex'}
                sx={{
                    margin: '20px 0px',
                }}
            >
                <Pagination
                    count={numPagination} color={'primary'} onChange={(e, p) => handlePage(e, p)}
                />
            </Box>
        </>
    );
}

