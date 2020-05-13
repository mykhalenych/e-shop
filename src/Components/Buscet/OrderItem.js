import React from "react";
import Card from "react-bootstrap/Card";

const OrderItem = ({ order }) => {
  return order.map((item) => {
    return (
      <Card key={item.orderList.id}>
        <Card.Body >
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
};

export default OrderItem;
