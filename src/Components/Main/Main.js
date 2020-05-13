import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import CardItem from "./Blocks/Card";
import {
  productsListSelector,
  orderListSelector,
  pinnedListSelector,
  searchProduct,
  getSearchQuery,
} from "../../Redux/products.selectors";
import * as actions from "../../Redux/products.actions";
import { connect } from "react-redux";

const Main = ({
  getProductsList,
  products,
  addToBuscet,
  removeFromBuscet,
  addToPinned,
  removeFromPinned,
  searchItem,
  searchQuery,
  data,
  order,
}) => {
  useEffect(() => {
    getProductsList();
  }, []);

  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    searchItem(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchItem(value);
  };

  const renderCards = (item) => (
    <Col key={item.id}>
      <CardItem
        card={item}
        onAddToBuscet={addToBuscet}
        onDeleteFromBuscet={removeFromBuscet}
        onAddToPinned={addToPinned}
        onDeleteFromPinned={removeFromPinned}
      />
    </Col>
  );
  return (
    <Container>
      <Col md={9} lg={10}>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="mb-1">
            <Col xs={12} md={6}>
              <div style={{ position: "relative", marginBottom: 10 }}>
                <Form.Control
                  placeholder="Enter the product name"
                  value={searchQuery}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Form.Row>
        </Form>
      </Col>
      <Row xs={1} sm={2} md={2} lg={3}>
        {data.length >= 1
          ? data.map((el) => renderCards(el))
          : products.map((el) => renderCards(el))}
      </Row>
    </Container>
  );
};

const mapDispatch = {
  getProductsList: actions.getProductsList,
  addToBuscet: actions.addToBuscet,
  removeFromBuscet: actions.removeFromBuscet,
  addToPinned: actions.addToPinned,
  removeFromPinned: actions.removeFromPinned,
  searchItem: actions.searchItem,
};
const mapState = (state) => {
  return {
    products: productsListSelector(state),
    order: orderListSelector(state),
    pinned: pinnedListSelector(state),
    searchQuery: getSearchQuery(state),
    data: searchProduct(state),
  };
};
export default connect(mapState, mapDispatch)(Main);
