import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../../Redux/products.actions";
import { getSearchQuery } from "../../../Redux/products.selectors";

const Search = (searchItem, searchQuery, products) => {
  const handleChange = (event) => {
    searchItem.searchItem(event.target.value);
  };
  console.log(products);
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Row className="mb-1">
        <Col xs={12} md={6}>
          <div style={{ position: "relative", marginBottom: 10 }}>
            <Form.Control
              placeholder="Enter the product name"
              value={searchItem.searchQuery}
              onChange={handleChange}
            />
            {searchItem.searchQuery && (
              <Button
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  bottom: 0,
                  color: "red",
                }}
                onClick={() => searchItem.searchItem("")}
                variant="link"
              ></Button>
            )}
          </div>
        </Col>
      </Form.Row>
    </Form>
  );
};
const mapDispatch = {
  searchItem: actions.searchItem,
};

const mapState = (state) => ({
  searchQuery: getSearchQuery(state),
});
export default connect(mapState, mapDispatch)(Search);
