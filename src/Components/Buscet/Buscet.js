import React from "react";
import { Button, Container, Jumbotron, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <ul key={item.pinnedList.id}>
          <li>{item.pinnedList.name}</li>
          <li>{item.pinnedList.desription}</li>
          <li>{item.pinnedList.price}</li>
        </ul>
      );
    });
    let orders = order.map((item) => {
      return (
        <ul key={item.orderList.id}>
          <li>{item.orderList.name}</li>
          <li>{item.orderList.desription}</li>
          <li>{item.orderList.price}</li>
        </ul>
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
export default Buscet;
