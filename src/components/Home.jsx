import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/index.js";
import CardProduct from "./Card";
import { Grid, Typography, Link } from "@mui/material";
import FilterCategories from "./FilterCategories.jsx";
import {getCategories} from "../redux/actions/index.js"

export default function Home() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.allProductsReducer.allProducts);
  const item = useSelector((state) => state.searchReducer.productItem);
  let filterCategory = useSelector(
    (state) => state.filterCategoriesReducer.categoryProduct
  );

  if (typeof filterCategory === "object" && !filterCategory.length) {
    alert("No hay coincidencias, seras redireccionado al Home");
    filterCategory = undefined;
  }

  if (typeof filterCategory === "object") {
    products = filterCategory;
  }

  console.log(filterCategory);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Typography m={2} variant="h3" align="center">
        Productos
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        <Grid item>
          <FilterCategories />
        </Grid>
        {!item.length
          ? products.map((el, i) => (
              <Grid item mb={5} key={el.id}>
                <Link href={`/detalle/${el.id}`}>
                  <CardProduct
                    nombre={el.name}
                    imagen={
                      el.images.length > 0
                        ? el.images[0].url
                        : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                    }
                    categoria={el.category.name}
                    precio={el.salePrice}
                    marca={el.brand.name}
                  />
                </Link>
              </Grid>
            ))
          : item.map((el, i) => (
              <Grid item mb={5} key={el.id}>
                <Link href={`/detalle/${el.id}`}>
                  <CardProduct
                    nombre={el.name}
                    imagen={
                      el.images.length > 0
                        ? el.images[0].url
                        : "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
                    }
                    categoria={el.category.name}
                    precio={el.salePrice}
                    marca={el.brand.name}
                  />
                </Link>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
