import { createSelector } from "reselect";

export const productsListSelector = (state) => state.products.productsList;
export const orderListSelector = (state) => state.order.orderList;
export const pinnedListSelector = (state) => state.pinned.pinnedList;
export const getSearchQuery = (state) => state.filter.searchQuery;

export const searchProduct = createSelector(
  [getSearchQuery, productsListSelector],
  (searchQuery, products) => {
    let resultData = searchQuery;
    if (products) {
      resultData = products.filter((item) => {
        return item.name.toLowerCase() === searchQuery.toLowerCase();
      });
    }
    return resultData;
  }
);
