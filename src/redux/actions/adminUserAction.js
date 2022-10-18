import axios from "axios";
import swal from 'sweetalert';



export const CHANGE_ADMIN = "CHANGE_ADMIN"
export const GET_USERS = "GET_USERS"

export function changeAdmin (id) {
    return async function (dispatch) {
        try {
            const user = await axios.put(`https://techstore123.herokuapp.com/users/update/${id}`)
            swal("Usuario cambiado correctamente", "", "success");
            //console.log(products.data.content)
            return dispatch({type: CHANGE_ADMIN, payload: user.data});
        } catch (error) {
            swal("Error", "No puedes cambiar al usuario administrador", "error");
            console.log(error);
        }
    }
};

export function getUsers (token) {
    return async function (dispatch) {
        try {
            
            const allUser = await axios.get(
                "https://techstore123.herokuapp.com/users/",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            //console.log(products.data.content)
            return dispatch({type: GET_USERS, payload: allUser.data.rows});
        } catch (error) {
            console.log(error);
        }
    }
};