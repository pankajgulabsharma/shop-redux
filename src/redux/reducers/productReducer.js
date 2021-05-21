import { ActionTypes } from "../constants/action-types.js";

const initialState = {
  products: [
    {
      id: 1,
      title: "Pankaj",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      break;

    case ActionTypes.SELECTED_PRODUCT:
      break;

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      break;

    default:
      return state;
  }
};
