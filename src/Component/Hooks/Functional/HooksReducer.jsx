import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { keranjangContext } from "../../../App";

export default function HooksReducer() {
  const countContext = useContext(keranjangContext);

  return (
    <Container>
      <br />
      <Row>
        <Col xs={6}>
          <Card>
            <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
          </Card>
        </Col>
        <Col xs={6}>
          <h3>Action Figure Naruto</h3>
          <p>Harga</p>
          <h3>Rp. {countContext.keranjangState.hargaTotal}</h3>
          <p>Jumlah</p>
          <Row>
            <Col>
              <Button
                onClick={() =>
                  countContext.keranjangDispatch({ type: "tambah" })
                }
                variant="danger"
              >
                +
              </Button>
            </Col>
            <Col>{countContext.keranjangState.jumlah}</Col>
            <Col>
              <Button
                onClick={() =>
                  countContext.keranjangDispatch({ type: "kurang" })
                }
                variant="secondary"
              >
                -
              </Button>
            </Col>
          </Row>
          <Button variant="success" className="mt-3" size="lg">
            Total Rp. {countContext.keranjangState.hargaTotal}
          </Button>
          <hr />
          <Link to="/tagihan">Tagihan Belanja</Link>
        </Col>
      </Row>
    </Container>
  );
}
