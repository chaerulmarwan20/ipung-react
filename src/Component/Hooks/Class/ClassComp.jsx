import React, { Component } from "react";
import { Container } from "react-bootstrap";

class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jumlah: 0,
    };
  }

  tambahProduk = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  render() {
    return (
      <Container>
        <div>
          <h1>{this.state.jumlah}</h1>
          <button onClick={this.tambahProduk}>Tambah Produk</button>
        </div>
      </Container>
    );
  }
}

export default ClassComp;
