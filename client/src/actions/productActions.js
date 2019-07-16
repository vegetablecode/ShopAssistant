import axios from "axios";
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getProducts = () => async (dispatch, getState) => {
  // dispatch(setProductsLoading());
  await axios
    .get("api/products", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteProduct = (list_id, product_id) => async (
  dispatch,
  getState
) => {
  await axios
    .delete(`/api/products/${list_id}/${product_id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: product_id
      })
    )
    .catch(err => console.log(err));
};

export const addProduct = (list_id, item) => async (dispatch, getState) => {
  await axios
    .post(`/api/items/${list_id}`, item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
