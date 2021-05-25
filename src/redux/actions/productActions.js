import { ActionTypes } from "../constants/action-types";
//1
export const setProducts = (products) => {
  //   console.log(products);
  return {
    type: ActionTypes.SET_PRODUCT_REQUESTED,
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
