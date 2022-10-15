import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavorite } from "../redux/actions/wishlistActions"

function Wishlist() {
    //const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    const products = useSelector((state) => state.wishlistReducer.favorite);
    console.log(products)

    useEffect(() => {
        dispatch(getFavorite())
        //const test = useSelector((state) => state);

        //setProducts(useSelector((state) => state.whishlistReducer.favorite))
        //console.log(test)
        //setProducts(useS)
    }, [dispatch])

    return (
        <>
        {products &&
            products.map((product) => (<p>{product.name}</p>))
        }
        </>
    )
}

export default Wishlist