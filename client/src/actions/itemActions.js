import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  DELETE_PRODUCT
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getItems = () => async (dispatch, getState) => {
  dispatch(setItemsLoading());
  await axios
    .get("/api/items", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = item => async (dispatch, getState) => {
  await axios
    .post("/api/items", item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => async (dispatch, getState) => {
  await axios
    .delete(`/api/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
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
        payload: [list_id, product_id]
      })
    )
    .catch(err => console.log(err));
};
