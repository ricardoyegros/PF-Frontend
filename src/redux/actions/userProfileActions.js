import axios from "axios"
import swal from "sweetalert";

export const GET_ORDERS_ONWAY = "GET_ORDERS_ONWAY";
export const GET_ORDERS_PENDING = "GET_ORDERS_PENDING";
export const GET_ORDERS_FINISH = "GET_ORDERS_FINISH";


export const getOrdersOnWay = (id, state) => async (dispatch) => {
    try {
        await axios.get(`https://techstore123.herokuapp.com/orders?id=${id}&state=${state}`)
            .then(r => dispatch({
                type: GET_ORDERS_ONWAY,
                payload: r.data
            }))
    } catch (error) {
        console.log(error.message);
        return swal('Fallo', error.message, 'error');
    }
}

export const getOrdersOnPending = (id, state) => async (dispatch) => {
    try {
        await axios.get(`https://techstore123.herokuapp.com/orders?id=${id}&state=${state}`)
            .then(r => dispatch({
                type: GET_ORDERS_PENDING,
                payload: r.data
            }));
    } catch (error) {
        console.log(error.message);
        return swal('Fallo', error.message, 'error');
    }
}

export const getOrdersFinish = (id, state) => async (dispatch) => {
    try {
        await axios.get(`https://techstore123.herokuapp.com/orders?id=${id}&state=${state}`)
            .then(r => dispatch({
                type: GET_ORDERS_FINISH,
                payload: r.data
            }));
    } catch (error) {
        console.log(error.message);
        return swal('Fallo', error.message, 'error');
    }
}