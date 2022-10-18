import axios from "axios";
import swal from 'sweetalert';

export const deleteBranch =  (id) =>  () => {
    try {
        console.log(Number(id),"actions numero")
         axios.delete(`https://techstore123.herokuapp.com/geo/delete`, { data: { id }})   
            return swal('Borrado', "borrado" , 'error');
    } catch (error) {
        console.log(error.message);
        return swal('Fallo!', error.message, 'error');
    };
};

