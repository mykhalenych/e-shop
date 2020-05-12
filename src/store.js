import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  productsReducer,
  pinnedReducer,
  orderReducer,
  filterReducer,
} from "./Redux/products.reducers";
const reducer = combineReducers({
  products: productsReducer,
  order: orderReducer,
  pinned: pinnedReducer,
  filter: filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
