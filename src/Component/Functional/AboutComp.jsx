import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../../CartContext";
import CardComp from "./CardComp";

export default function HomePage() {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button className="btn btn-primary btn-lg">Learn more</button>
      </div>
      <Row className="mt-4 justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <CardComp id="1" judul="React" tanggal="20/06/2000" />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <CardComp id="2" judul="Vue" tanggal="20/06/2001" />
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <CardComp id="3" judul="Svelte" tanggal="20/06/2002" />
        </Col>
      </Row>
    </Container>
  );
}
