import React from "react";
import Card from "react-bootstrap/Card";

const PinnedItem = ({ pinnedList }) => {
  
  let pinned =  pinnedList.map((item) => {
    console.log(item)
    return (
      <Card key={item.pinnedList.id}>
        <Card.Body >
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
  return pinned
};

export default PinnedItem;
