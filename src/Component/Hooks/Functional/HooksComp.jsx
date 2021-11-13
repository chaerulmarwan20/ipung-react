import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TampilComp from "./TampilComp";

export default function HooksComp() {
  const [jumlah, tambahJumlah] = useState(0);

  const [dataLogin, setDataLogin] = useState({
    username: "chaerul",
    token: "123abcd",
    isLogin: false,
  });

  let tampil;

  if (dataLogin.isLogin) {
    tampil = (
      <TampilComp
        username={dataLogin.username}
        fungsi={tambahJumlah.bind(this)}
        jumlah={jumlah}
      />
    );
  } else {
    tampil = <TampilComp username="Maaf anda belum login" disabled={true} />;
  }

  return (
    <Container>
      <div>{tampil}</div>
    </Container>
  );
}
