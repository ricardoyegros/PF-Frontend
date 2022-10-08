import axios from "axios";

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

export const postReview = (form) => async (dipsatch) => {
    const { stars, userId, productId, detail } = form;
    console.log(form);
    if (!stars || !userId || !productId || !detail) return alert('Faltan Datos en el Formulario!');
    try {
        axios.post('https://techstore123.herokuapp.com/reviews', form).then(r => alert(r.data));
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
};