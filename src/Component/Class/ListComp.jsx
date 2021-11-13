import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container, NavLink, Alert } from "react-bootstrap";
import qs from "query-string";
import axios from "axios";

const api = "http://localhost:3001";

class ListComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  deleteMahasiswa = (idMahasiswa) => {
    const { mahasiswa } = this.state;
    const data = qs.stringify({
      id_mahasiswa: idMahasiswa,
    });
    axios
      .delete(api + "/hapus", {
        data: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
            mahasiswa: mahasiswa.filter(
              (mahasiswa) => mahasiswa.id_mahasiswa !== idMahasiswa
            ),
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
        <h2>Data Mahasiswa</h2>
        <Alert variant="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert>
        <NavLink href="/mahasiswa/tambah">
          <Button variant="success">Tambah Data</Button>
        </NavLink>
        <hr />
        <Table bordered hover>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.mahasiswa.map((mahasiswa) => {
              return (
                <tr key={mahasiswa.id_mahasiswa}>
                  <td>{mahasiswa.nim}</td>
                  <td>{mahasiswa.nama}</td>
                  <td>{mahasiswa.jurusan}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/mahasiswa/edit",
                        state: {
                          id_mahasiswa: mahasiswa.id_mahasiswa,
                          nim: mahasiswa.nim,
                          nama: mahasiswa.nama,
                          jurusan: mahasiswa.jurusan,
                        },
                      }}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="secondary">Edit</Button>
                    </Link>
                    <span> </span>
                    <Button
                      onClick={() =>
                        this.deleteMahasiswa(mahasiswa.id_mahasiswa)
                      }
                      variant="danger"
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ListComp;
