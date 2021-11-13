import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function CardComp(props) {
  return (
    <Card>
      <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
      <Card.Body>
        <Card.Title>
          <h3>{props.judul}</h3>
        </Card.Title>
        <Card.Subtitle>{props.tanggal}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link
            to={{
              pathname: `/detail/${props.id}`,
              state: {
                judul: props.judul,
                tanggal: props.tanggal,
              },
            }}
            style={{ color: "white", textDecoration: "none" }}
          >
            Detail
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
