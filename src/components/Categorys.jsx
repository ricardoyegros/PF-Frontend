import {
  Alert,
  Button,
  ButtonGroup,
  Grid,
  Pagination,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getBrands,
  getCategoryNames,
  isInUse,
  preFilter,
} from "../redux/actions";
import { useState } from "react";
import { Box } from "@mui/system";
import  Geo  from "./Geo"
import { Carrousel } from "./Carrousel";
import Card3 from "./Card3";
import { getFavorite } from "../redux/actions/wishlistActions"


const secondaryBox = {
  display: "flex",
  flex: 1,
};

const sideBox = {
  flexBasis: "230px",
};

const productBox = {
  display: "flex",
  flexDirection: "column",
  gridGap: "2rem",
  flex: 1,
};

export default function Categorys() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ sort: "DESC", type: "id" });
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCategoryNames());
    dispatch(getBrands());
    if(localStorage.id) {dispatch(getFavorite())}
  }, [dispatch, state]);

  
  const arrayFavorites = useSelector((state) => state.wishlistReducer.favorite);

  const reduxState = useSelector(
    (state) => state.categorysNameReducer.categorys
  );
  const reduxState2 = useSelector(
    (state) => state.categorysNameReducer.filtrado
  );
  const reduxState3 = useSelector((state) => state.categorysNameReducer.brands);
  const reduxState4 = useSelector((state) => state.categorysNameReducer);

  // console.log("productos ===>", reduxState2)

  if (!reduxState2) dispatch(preFilter({}));

  let pages = reduxState2 || 1;

  const handleReset = () => {
    setPage(1);
    setState({ sort: "DESC", type: "id", page: "" });
    dispatch(preFilter({ sort: "DESC", type: "id", page: "" }));
    dispatch(isInUse({ sort: "DESC", type: "id", page: "" }));
  };

  const handleCategory = (e) => {
    console.log(e.target.ondrop)
    setPage(1);
    if (state.categoryName === e.target.name) {
      setState({
        ...state,
        categoryId: "",
        categoryName: false,
        page: "",
        name: reduxState4.name,
      });
      dispatch(
        preFilter({
          ...state,
          categoryId: "",
          categoryName: false,
          page: "",
          name: reduxState4.name,
        })
      );
      dispatch(isInUse({ ...state, categoryId: "", categoryName: false }));
    } else {
      setState({
        ...state,
        categoryId: e.target.value,
        categoryName: e.target.name,
        page: "",
        name: reduxState4.name,
      });
      dispatch(
        preFilter({
          ...state,
          categoryId: e.target.value,
          categoryName: e.target.name,
          page: "",
          name: reduxState4.name,
        })
      );
      dispatch(
        isInUse({
          ...state,
          categoryId: e.target.value,
          categoryName: e.target.name,
          name: reduxState4.name,
        })
      );
    }
  };

  const handleBrand = (e) => {
    setPage(1);
    if (state.brandName === e.target.name) {
      console.log(reduxState4);
      setState({
        ...state,
        brandId: "",
        brandName: false,
        page: "",
        name: reduxState4.name,
      });
      dispatch(
        preFilter({
          ...state,
          brandId: "",
          brandName: false,
          page: "",
          name: reduxState4.name,
        })
      );
      dispatch(
        isInUse({
          ...state,
          brandId: "",
          brandName: false,
          name: reduxState4.name,
        })
      );
    } else {
      console.log(reduxState4);
      setState({
        ...state,
        brandId: e.target.value,
        brandName: e.target.name,
        page: "",
        name: reduxState4.name,
      });
      dispatch(
        preFilter({
          ...state,
          brandId: e.target.value,
          brandName: e.target.name,
          page: "",
          name: reduxState4.name,
        })
      );
      dispatch(
        isInUse({
          ...state,
          brandId: e.target.value,
          brandName: e.target.name,
          name: reduxState4.name,
        })
      );
    }
  };

  const handleSort = (e) => {
    setPage(1);
    setState({
      ...state,
      sort: e.target.value,
      page: "",
      name: reduxState4.name,
      sortName: e.target.value,
    });
    dispatch(
      preFilter({
        ...state,
        sort: e.target.value,
        page: "",
        name: reduxState4.name,
        sortName: e.target.value,
      })
    );
    dispatch(
      isInUse({
        ...state,
        typeName: e.target.value,
        name: reduxState4.name,
        sortName: e.target.value,
      })
    );
  };

  const handleType = (e) => {
    setPage(1);
    if (reduxState4.typeName === e.target.value) {
      setState({
        ...state,
        type: false,
        page: "",
        name: reduxState4.name,
        typeName: false,
      });
      dispatch(
        preFilter({
          ...state,
          type: false,
          page: "",
          name: reduxState4.name,
          typeName: false,
        })
      );
      dispatch(
        isInUse({
          ...state,
          type: false,
          page: "",
          name: e.target.value,
          typeName: false,
        })
      );
    } else {
      setState({
        ...state,
        type: e.target.value,
        page: "",
        name: reduxState4.name,
        typeName: e.target.value,
      });
      dispatch(
        preFilter({
          ...state,
          type: e.target.value,
          page: "",
          name: reduxState4.name,
          typeName: e.target.value,
        })
      );
      dispatch(
        isInUse({
          ...state,
          typeName: e.target.name,
          page: "",
          name: reduxState4.name,
          typeName: e.target.value,
        })
      );
    }
  };

  const handleName = (e) => {
    dispatch(
      preFilter({
        ...state,
        name: "",
      })
    );
  };

  const handlePage = (e, p) => {
    setState({ ...state, page: p, name: reduxState4.name });
    dispatch(preFilter({ ...state, page: p, name: reduxState4.name }));
    setPage(p);
  };

  return (

    <>
      <Carrousel />
      <Box
        justifyContent={"center"}
        alignItems="center"
        display={"grid"}
      >
        <ButtonGroup // estos son botones de ordenamiento, no llevan mapeado, estan escritos a mano cada uno segun que necesitemos
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleReset} value={{}} >
            Limpiar Filtros
          </Button>
          <Button
            variant={state.type === "salePrice" ? "outlined" : "contained"}
            onClick={handleType}
            value={"salePrice"}
          >
            Precio
          </Button>
          <Button
            variant={state.type === "id" ? "outlined" : "contained"}
            onClick={handleType}
            value={"id"}
          >
            Mas Reciente
          </Button>
          <Button
            variant={state.sort === "ASC" ? "outlined" : "contained"}
            onClick={handleSort}
            value={"ASC"}
          >
            Ascendente
          </Button>
          <Button
            variant={state.sort === "DESC" ? "outlined" : "contained"}
            onClick={handleSort}
            value={"DESC"}
          >
            Descendente
          </Button>
        </ButtonGroup>
        <Box
          justifyContent={"center"}
          alignItems="center"
          display={"grid"}
          marginBottom={8}
          value={reduxState4.name}
          onClick={handleName}
        >
          {reduxState4 && reduxState4.name ?
            <Button color="secondary">{reduxState4.name}</Button>
            : null}
        </Box>
      </Box>
      <div style={secondaryBox}>
        <div style={sideBox}>
          <Box
            mt={1}
            justifyContent={"center"}
            alignItems="center"
            display={"grid"}
          >

            <Box display={"flex"} justifyContent={'center'}>

              <h3>CATEGORIAS</h3>

            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              {reduxState &&
                reduxState.map((e) => (

                  <Button
                    value={e.id}
                    name={e.name}
                    variant={
                      reduxState4?.categoryName === e.name
                        ? "contained"
                        : "outlined"
                    }
                    onClick={handleCategory}
                  >
                    {e.name}
                  </Button>
                ))}
            </Box>




          </Box>
          <Box justifyContent={"center"} alignItems="center" display={"grid"}>

          <Box display={"flex"} justifyContent={'center'}>

            <h3>MARCAS</h3>

            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              {reduxState3 &&
                reduxState3.map((e) => (

                  <Button
                    value={e.id}
                    name={e.name}
                    variant={
                      reduxState4?.brandName === e.name
                        ? "contained"
                        : "outlined"
                    }
                    onClick={handleBrand}
                  >
                    {e.name}
                  </Button>

                ))}
            </Box>



          </Box>
        </div>
        <div style={productBox}>
          {Array.isArray(reduxState2?.content) && !reduxState2?.content[0] ? (
            <Alert severity="error">No se encontraron Productos!</Alert>
          ) : null}
          <Grid
            Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 3, sm: 8, md: 12 }} padding="20px"
          >
            {reduxState2 &&
              reduxState2.content.map((e) => (
                <Grid item xs={12} sm={6} md={3} key={e.id}>
                  {/* <CardProduct2
                    id={e.id}
                    key={e.id}
                    nombre={e.name}
                    imagen={
                      e.images[0]?.url ||
                      "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                    }
                    categoria={e.category.name}
                    precio={e.salePrice}
                    marca={e.brand.name}
                  /> */}
                  <Card3
                    id={e.id}
                    nombre={e.name}
                    key={e.id}
                    imagen={
                      e.images.length > 0 ? e.images :
                      "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                    }
                    precioVenta={e.salePrice}
                    rating={e.rating}
                    favorite={arrayFavorites.includes(e.id) ? true : false}
                    stock={e.stock}
                  />
                </Grid>
              ))}
          </Grid>
          <Box
            justifyContent={"center"}
            alignItems="center"
            display={"flex"}
            sx={{
              margin: "20px 0px",
            }}
          ></Box>
        </div>
      </div>
      <Box
       display={"flex"} justifyContent={"center"} alignItems={"center"}
      >
        <Pagination
          size="large"
          color={"primary"}
          count={pages !== 4 ? pages.totalPage : 4}
          page={page}
          onChange={(e, p) => handlePage(e, p)}
        />
      </Box>
        <Geo/>
    </>
  );
}

// .secondary-box, .sideBar-box, .products-box {
//   overflow: auto;
// }