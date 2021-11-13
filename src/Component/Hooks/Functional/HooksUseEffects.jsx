import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import axios from "axios";

const api = "http://localhost:3001";

export default function HooksUseEffects() {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    axios.get(api + "/tampil").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);

  return (
    <Container className="mt-3">
      <h2>Data Mahasiswa</h2>
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
          {mahasiswa.map((mahasiswa) => {
            return (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Button variant="secondary">Edit</Button>
                  <span> </span>
                  <Button variant="danger">Hapus</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
