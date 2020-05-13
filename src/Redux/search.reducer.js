import { SEARCH_ITEM } from "./products.actions";

const initialState = {
  searchQuery: "",
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };
    default:
      return state;
  }
};
