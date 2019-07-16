import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";

export default combineReducers({
  item: itemReducer,
  products: productReducer,
  auth: authReducer,
  error: errorReducer
});
