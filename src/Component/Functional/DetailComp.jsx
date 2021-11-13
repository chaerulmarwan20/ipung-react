import React from "react";
import { Container } from "react-bootstrap";

export default function DetailComp(props) {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4">{props.location.state.judul}</h1>
        <p className="lead">{props.location.state.tanggal}</p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <button className="btn btn-primary btn-lg">Learn more</button>
      </div>
    </Container>
  );
}
