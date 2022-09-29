export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

export function filterByCategory(category, products) { 
  return function(dispatch) {
    dispatch({ type: FILTER_BY_CATEGORY, payload: {category, products}})
  }
}
