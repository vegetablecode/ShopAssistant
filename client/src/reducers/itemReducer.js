import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Steak" },
    { id: uuid(), name: "Water" },
    { id: uuid(), name: "Apples" }
  ]
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
