import axios from "axios";
import swal from 'sweetalert';

export const GET_REVIEWS = "GET_REVIEWS";
export const POST_REVIEW = "POST_REVIEW";

export const getReviews = (id) => async (dispatch) => {
    try {
        await axios.get(`https://techstore123.herokuapp.com/reviews?productId=${id}`)
            .then(r => dispatch({
                type: GET_REVIEWS,
                payload: r.data
            }))
    } catch (error) {
        console.log(error.message);
    };
};

export const postReview = (form) => async () => {
    const { stars, userId, productId, detail } = form;
    console.log(form);
    if (!stars || !userId || !productId || !detail) return alert('Faltan Datos en el Formulario!');
    try {
        await axios.post('https://techstore123.herokuapp.com/reviews', form).then(r => swal('Exito!', r.data, 'success'));
    } catch (error) {
        console.log(error.message);
        swal(error.message);
    }
};

export const updateReview = (form) => async () => {
    const { stars, id, detail } = form;
    if (!stars || !id || !detail) return alert('Faltan Datos en el formulario!');
    try {
        await axios.put(`https://techstore123.herokuapp.com/reviews/update`, form)
            .then(r => {
                return swal('EXITO!', r.data, 'success')
            })
    } catch (error) {
        console.log(error.message);
        return swal(error.message);
    };
};

export const deleteReview = (id) => async () => {
    if (!id) return alert('Debe introducir un ID!');
    try {
        await axios.put(`https://techstore123.herokuapp.com/reviews/delete?id=${id}`)
            .then(r => swal('Exito!', r.data, 'success'));
    } catch (error) {
        console.log(error.message);
        return swal('Fallo!', error.message, 'error');
    };
};