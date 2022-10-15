import axios from "axios";
export const GET_GEOLOCATION = "GET_GEOLOCATION"

export function getGeolocation () {
    return async function (dispatch) {
        try {
            let geo = await axios.get(`http://localhost:3001/geo`)
            //console.log(geo.data)
            return dispatch({type: GET_GEOLOCATION, payload: geo.data});
        } catch (error) {
            console.log(error);
        }
    }
};