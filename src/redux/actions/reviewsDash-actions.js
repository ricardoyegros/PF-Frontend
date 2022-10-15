import axios from "axios";
import swal from 'sweetalert';

export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const DELETE_REVIEW = "DELETE_REVIEWS";

export function getAllReviews() {
    return async function (dispatch) {
        try {
            let allReviews = await axios.get(`https://techstore123.herokuapp.com/reviews/all`);
            return dispatch({
                type: GET_ALL_REVIEWS,
                payload: allReviews.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}


export const deleteReviewId =  (id) => async (dispatch) => {
    try {
        console.log(id,"reducer")
           await axios.put(`https://techstore123.herokuapp.com/reviews/delete?id=${id}`)
            .then(r => dispatch({
                type:DELETE_REVIEW,
                payload: id
            }) 
                
            );

    } catch (error) {
        console.log(error.message);
        return swal('Fallo!', error.message, 'error');
    };
};