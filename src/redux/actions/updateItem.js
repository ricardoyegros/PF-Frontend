import axios from "axios";
import swal from 'sweetalert';


export const UP_DATE_ITEM = "UP_DATE_ITEM";

export function updateItem(input) {
    return async function (dispatch) {
        try {
            let itemUpdate = await axios.put(
                `https://techstore123.herokuapp.com/updateordelete/update`,
                input
            );
            swal("Producto Actualizado!", "success");
            return dispatch({ type: UP_DATE_ITEM, payload: itemUpdate.data });
        } catch (error) {
            console.log(error);
        }
    };
}
