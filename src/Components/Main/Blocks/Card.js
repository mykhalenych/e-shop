import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Badge, ListGroup } from "react-bootstrap";

export const CardItem = ({
  card,
  onAddToBuscet,
  onDeleteFromBuscet,
  onAddToPinned,
  onDeleteFromPinned,
}) => {
  const [isFlipped, changeFlipped] = useState(false);
  const [btn, changeBtn] = useState("add");
  const [pinned, changePinnedBtn] = useState("pinned");

  const unpinnedBtn = () => {
    changePinnedBtn("unpinned");
    onAddToPinned(card);
  };
  const pinnedBtn = () => {
    changePinnedBtn("pinned");
    onDeleteFromPinned(card);
  };

  const deleteBtn = () => {
    changeBtn("delete");
    onAddToBuscet(card);
  };
  const addBtn = () => {
    changeBtn("add");
    onDeleteFromBuscet(card);
  };
  const onClickFlip = () => {
    changeFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card bg="secondary" className="mb-4 ">
        <Card.Img variant="top" src={card.image} onClick={onClickFlip} />
        <Badge variant={"danger"}>Price: {card.price}</Badge>
        <Card.Body
          className={"d-flex justify-content-between flex-column text-center"}
        >
          <Card.Title className="text-white">{card.name}</Card.Title>
          <div className="d-flex justify-content-between button_block">
            {pinned  === "pinned" (
              <Button className="btn btn-info" onClick={unpinnedBtn}>
                Add to pinned
              </Button>
            ) : (
              <Button className="btn btn-info" onClick={pinnedBtn}>
                Delete from pinned
              </Button>
            )}
            {btn === "add" ? (
              <Button variant="success" onClick={deleteBtn}>
                Buy
              </Button>
            ) : (
              <Button variant="danger" onClick={addBtn}>
                Delete
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <Card
        onClick={onClickFlip}
        text={"white"}
        bg={"secondary"}
        className={"mb-4 "}
      >
        <Card.Header>
          <h3>{card.name}</h3>
        </Card.Header>
        <ListGroup>
          <ListGroup.Item variant="light">
            Description: <strong>{card.desription}</strong>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </ReactCardFlip>
  );
};

export default CardItem;
