import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../../../CartContext";

export default function RowProduct() {
  const { value, setValue } = useContext(CartContext);

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
        <Card.Body>
          <Card.Title>Lenovo</Card.Title>
          <Card.Subtitle>Rp. 12.000.000</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="secondary" onClick={() => setValue(value + 1)}>
            Tambah Keranjang
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
