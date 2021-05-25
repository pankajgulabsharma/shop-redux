import { ActionTypes } from "../constants/action-types.js";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

//3
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    case ActionTypes.SET_PRODUCTS_FAILD:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
