import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  orderListSelector,
  pinnedListSelector,
} from "../../Redux/products.selectors";
import { connect } from "react-redux";

const Buscet = ({ order, pinned }) => {
  if (pinned.length > 1) {
    return (
      <div className="d-flex justify-content-center">
        Sorry, you can't add more then 1 pinned item
      </div>
    );
  } else {
    let pinnedItem = pinned.map((item) => {
      return (
        <Card style={{ width: "10rem", height: "1rem" }}>
          <Card.Body>
            <Card.Title>id: {item.pinnedList.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Title: {item.pinnedList.name}
            </Card.Subtitle>
            <Card.Text>Desription: {item.pinnedList.desription}</Card.Text>
            <Card.Text>Price: {item.pinnedList.price}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    let orders = order.map((item) => {
      return (
        <Card style={{ width: "10rem" }}>
          <Card.Body>
            <Card.Title>id: {item.orderList.id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Title: {item.orderList.name}
            </Card.Subtitle>
            <Card.Text>Desription: {item.orderList.desription}</Card.Text>
            <Card.Text>Price: {item.orderList.price}</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return (
      <div className="d-flex flex-column align-items-center">
        <h3>Pinned item:</h3>
        <div>{pinnedItem}</div>

        <h3>Your buscet</h3>
        <div>{orders}</div>
        <Link className="btn btn-outline-primary" to="/">
          Back to Catalog
        </Link>
      </div>
    );
  }
};
const mapState = (state) => {
  return {
    order: orderListSelector(state),
    pinned: pinnedListSelector(state),
  };
};
export default connect(mapState)(Buscet);
