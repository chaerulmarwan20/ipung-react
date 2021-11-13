import React, { Component } from "react";
import { Container, Form, Alert, Button } from "react-bootstrap";
import axios from "axios";
import qs from "query-string";

const api = "http://localhost:3001";

class EditComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id_mahasiswa: this.props.location.state.id_mahasiswa,
      nim: this.props.location.state.nim,
      nama: this.props.location.state.nama,
      jurusan: this.props.location.state.jurusan,
      response: "",
      display: "none",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateMahasiwa = (e, idMahasiswa) => {
    e.preventDefault();
    const data = qs.stringify({
      id_mahasiswa: idMahasiswa,
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    });
    axios.put(api + "/ubah", data).then((json) => {
      if (json.data.status === 200) {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      } else {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };

  render() {
    return (
      <Container className="mt-3">
        <h4>Form Tambah Data</h4>
        <Alert variant="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert>
        <Form>
          <Form.Group className="mb-3" controlId="nim">
            <Form.Label>NIM</Form.Label>
            <Form.Control
              type="text"
              name="nim"
              value={this.state.nim}
              onChange={this.handleChange}
              placeholder="Masukkan NIM"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              value={this.state.nama}
              onChange={this.handleChange}
              placeholder="Masukkan Nama"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jurusan">
            <Form.Label>Jurusan</Form.Label>
            <Form.Control
              type="text"
              name="jurusan"
              value={this.state.jurusan}
              onChange={this.handleChange}
              placeholder="Masukkan Jurusan"
            />
          </Form.Group>
          <Button
            variant="secondary"
            type="submit"
            onClick={(e) => this.updateMahasiwa(e, this.state.id_mahasiswa)}
          >
            Update
          </Button>
        </Form>
      </Container>
    );
  }
}

export default EditComp;
