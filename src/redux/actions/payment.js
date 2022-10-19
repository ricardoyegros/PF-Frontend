import axios from "axios";
import swal from "sweetalert";

export const paymentMethod = (form) => async () => {
    try {
        console.log(form);

        axios.post('https://techstore123.herokuapp.com/payments/cart', form)
            .then(r => {
                swal('Exito!', "Seras enviado a MercadoPago", 'success');
                console.log(r.data.data.init_point);
                localStorage.removeItem('cart');
                return window.location.href = r.data.data.init_point
            })
    } catch (error) {
        console.log(error.message);
        swal('Fallo', error.message, 'error');
    };
};