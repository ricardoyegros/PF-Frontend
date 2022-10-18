import axios from "axios";
export const CREATE_BRANCH = "CREATE_BRANCH"

export function createBranch(input) {
    return  () => {
        try {
                axios.post(
                "https://techstore123.herokuapp.com/geo",
                input
            );
           
        } catch (error) {
            console.log(error);
        }
    };
}