import axios from "axios";
export const DETAIL_ID_PRODUCT = "DETAIL_ID_PRODUCT";


export function getIdProduct(i) {
    return async function (dispatch) {
        try {
            let detailProduct = await axios.get(
                `https://techstore123.herokuapp.com/products/${i}`
            );
            return dispatch({
                type: DETAIL_ID_PRODUCT,
                payload: detailProduct.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};