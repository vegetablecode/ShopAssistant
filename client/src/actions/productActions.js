import axios from "axios";
import { GET_PRODUCTS } from "./types";
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
