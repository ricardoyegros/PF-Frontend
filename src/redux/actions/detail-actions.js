export const CLEAR  = "CLEAR";


export function clearDetail (){
    return function(dispatch){
     return dispatch({type:CLEAR , payload: []})
    }
}