import axios from "axios";
import swal from 'sweetalert';


export const UP_DATE_ITEM = "UP_DATE_ITEM";

export function updateItem(input) {

    return async function (dispatch) {
        try {
            await axios
            .put(`https://techstore123.herokuapp.com/updateordelete/update`,input)
            .then(r => swal('Exito', r.data, 'success'))
            .catch(e => swal(e.message))
        } catch (error) {
            console.log(error);
            return swal('Error', error.message, 'error')
        }
    };
}
