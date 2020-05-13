import {
  PRODUCTS_LIST_RECIVED,
  ADD_TO_BUSCET,
  REMOVE_FROM_BUSCET,
  ADD_TO_PINNED,
  REMOVE_FROM_PINNED,
} from "./products.actions";
import getOrderData from "../Helpers/getOrderData";

const initialState = {
  productsList: [],
  orderList: [],
  pinnedList: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_RECIVED:
      return {
        ...state,
        productsList: action.payload.productsList,
      };
    default:
      return state;
  }
};
export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_BUSCET:
      return {
        ...state,
        orderList: getOrderData(state.orderList, payload, "add"),
      };

    case REMOVE_FROM_BUSCET:
      return {
        ...state,
        orderList: getOrderData(state.orderList, payload, "delete"),
      };
    default:
      return state;
  }
};

export const pinnedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_PINNED:
      return {
        ...state,
        pinnedList: getOrderData(state.pinnedList, payload, "add"),
      };
    case REMOVE_FROM_PINNED:
      return {
        ...state,
        pinnedList: getOrderData(state.pinnedList, payload, "delete"),
      };
    default:
      return state;
  }
};

