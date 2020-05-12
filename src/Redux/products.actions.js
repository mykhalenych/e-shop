import { fetchProductsList } from "../Gate-ways/gateWays";

export const PRODUCTS_LIST_RECIVED = "PRODUCTS_LIST_RECIVED";
export const ADD_TO_BUSCET = "ADD_TO_BUSCET";
export const REMOVE_FROM_BUSCET = "REMOVE_FROM_BUSCET";
export const ADD_TO_PINNED = "ADD_TO_PINNED";
export const REMOVE_FROM_PINNED = "REMOVE_FROM_PINNED";
export const SEARCH_ITEM = "SEARCH_ITEM";

export const productsListRecived = (productsList) => {
  const action = {
    type: PRODUCTS_LIST_RECIVED,
    payload: {
      productsList,
    },
  };
  return action;
};
export const addToBuscet = (orderList) => {
  const action = {
    type: ADD_TO_BUSCET,
    payload: {
      orderList,
    },
  };
  return action;
};

export const removeFromBuscet = (orderList) => {
  const action = {
    type: REMOVE_FROM_BUSCET,
    payload: {
      orderList,
    },
  };
  return action;
};
export const addToPinned = (pinnedList) => {
  const action = {
    type: ADD_TO_PINNED,
    payload: {
      pinnedList,
    },
  };
  return action;
};
export const removeFromPinned = (pinnedList) => {
  const action = {
    type: REMOVE_FROM_PINNED,
    payload: {
      pinnedList,
    },
  };
  return action;
};
// export const searchItem = (searchQuery) => {
//   const action = {
//     type: SEARCH_ITEM,
//     payload: {
//       searchQuery,
//     },
//   };
//   return action;
// };

export const searchItem = (searchQuery) => {
  const action = {
    type: SEARCH_ITEM,
    payload: {
      searchQuery,
    },
  };
  return action;
};

export const getProductsList = () => {
  const thunkAction = function (dispatch) {
    fetchProductsList().then((productsList) =>
      dispatch(productsListRecived(productsList))
    );
  };
  return thunkAction;
};
