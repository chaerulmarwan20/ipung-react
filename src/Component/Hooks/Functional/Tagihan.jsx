import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { keranjangContext } from "../../../App";

export default function Tagihan() {
  const countContext = useContext(keranjangContext);

  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4">Tagihan</h1>
        <p className="lead">
          ({countContext.keranjangState.jumlah}x) Action Figure Naruto.
        </p>
        <hr className="my-4" />
        <p>Harga Total Rp. {countContext.keranjangState.hargaTotal} .</p>
        <button className="btn btn-primary btn-lg">Lanjutkan Pembayaran</button>
      </div>
    </Container>
  );
}
