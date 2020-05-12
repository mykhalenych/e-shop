import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./Components/ProductList/ProductList";
import { Container } from "react-bootstrap";
import Menu from "./Components/Menu/Menu";
import {
  productsListSelector,
  orderListSelector,
  pinnedListSelector,
  searchProduct,
} from "./Redux/products.selectors";
import * as actions from "./Redux/products.actions";
import { connect } from "react-redux";
import Buscet from "./Components/Buscet/Buscet";

const App = ({
  getProductsList,
  products,
  order,
  pinned,
  addToBuscet,
  removeFromBuscet,
  addToPinned,
  removeFromPinned,
}) => {
  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <Router>
      <Container fluid className="px-0 bg-light">
        <Menu />
        <Switch>
          <Route path="/" exact>
            <ProductList
              products={products}
              addToBuscet={addToBuscet}
              removeFromBuscet={removeFromBuscet}
              addToPinned={addToPinned}
              removeFromPinned={removeFromPinned}
              pinned={pinned}
            />
          </Route>
          <Route path="/buscet">
            <Buscet order={order} pinned={pinned} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

const mapDispatch = {
  getProductsList: actions.getProductsList,
  addToBuscet: actions.addToBuscet,
  removeFromBuscet: actions.removeFromBuscet,
  addToPinned: actions.addToPinned,
  removeFromPinned: actions.removeFromPinned,
};
const mapState = (state) => {
  return {
    products: productsListSelector(state),
    order: orderListSelector(state),
    pinned: pinnedListSelector(state),
  };
};
export default connect(mapState, mapDispatch)(App);
