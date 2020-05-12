import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardItem from "./Blocks/Card";
import Search from "./Search/Search";

const ProductList = ({
  products,
  addToBuscet,
  removeFromBuscet,
  addToPinned,
  removeFromPinned,
  pinned,
}) => {
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
        <Search products={products} />
      </Col>
      <Row xs={1} md={2} lg={3} xl={4}>
        {products.map((el) => renderCards(el))}
      </Row>
    </Container>
  );
};

export default ProductList;
