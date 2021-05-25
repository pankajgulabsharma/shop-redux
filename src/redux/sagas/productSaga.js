import { call, put, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "../constants/action-types";

//2

const apiUrl = "https://fakestoreapi.com/products";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProducts(action) {
  //generator function
  try {
    const products = yield call(getApi);
    yield put({ type: ActionTypes.SET_PRODUCTS_SUCCESS, payload: products }); //it is work like dispatch
  } catch (e) {
    yield put({ type: ActionTypes.SET_PRODUCTS_FAILD, payload: e.message });
  }
}

function* productSaga() {
  yield takeEvery("SET_PRODUCT_REQUESTED", fetchProducts);
}

export default productSaga;
