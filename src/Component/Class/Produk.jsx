import React, { Component } from "react";

import "./CSS/Produk.css";

export class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonBeli = () => {
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img
          src="https://media.dinomarket.com/docs/imgTD/2020-11/pic_macbook_m1_Grey1_121120221128_ll.jpg_xl.jpg"
          alt=""
        />
        <p>
          <b>Rp. {this.props.harga}</b>
        </p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.ButtonBeli}
          disabled={this.state.disabled}
        >
          Beli
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;
