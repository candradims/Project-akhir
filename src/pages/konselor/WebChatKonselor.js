import React, { useState } from "react";
import { Table, Button, Row, Col, Form, Pagination } from "react-bootstrap";
import { Typography, Paper, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WebChatKonselor = () => {
  const navigate = useNavigate();

  // Data Konselor Online
  const siswaList = [
    { nama: "PUTRI SAPITRI", status: "Online" },
    { nama: "SUJARI", status: "Offline" },
  ];

  // State untuk pagination, pencarian, dan jumlah data per halaman
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filteredData = siswaList.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pesanMasuk = [{ nama: "PUTRI SAPITRI" }];

  return (
    <>
      {/* Tabel Daftar Pesan Masuk */}
      <Typography variant="h5" className="fw-bold text-primary mt-4 mb-3">
        Daftar Pesan Masuk yang Belum Dibaca
      </Typography>

      <Paper elevation={3} className="p-3">
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pesanMasuk.length > 0 ? (
              pesanMasuk.map((pesan, index) => (
                <tr key={index}>
                  <td>{pesan.nama}</td>
                  <td>
                    <Button variant="primary" size="sm">
                      Lihat Pesan
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  Tidak ada pesan masuk.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Paper>

      {/* Tabel Siswa Online */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Daftar Siswa yang Online
      </Typography>
      <Paper elevation={3} className="p-3">
        {/* Fitur Show Entries dan Pencarian */}
        <Row className="mb-3 justify-content-between">
          <Col md={6}>
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2">Show</Form.Label>
              <Select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                size="small"
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
              </Select>
              <span className="ms-2">entries</span>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Cari Siswa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        {/* Tabel Konselor Online */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nama</th>
              <th>Status Online</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((siswa, index) => (
              <tr key={index}>
                <td>{siswa.nama}</td>
                <td>
                  <span
                    style={{
                      color: siswa.status === "Online" ? "red" : "gray",
                    }}
                  >
                    {siswa.status}
                  </span>
                </td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={siswa.status !== "Online"}
                    onClick={() => navigate(`/konselor/webchat/${siswa.nama}`)}
                  >
                    Chat
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="justify-content-between">
          <Col>
            {/* Informasi jumlah data yang ditampilkan */}
            <Typography variant="body2" className="text-muted mb-2">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} entries
            </Typography>
          </Col>

          <Col>
            {/* Pagination */}
            <Pagination className="justify-content-end">
              <Pagination.Prev
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      </Paper>
    </>
  );
};

export default WebChatKonselor;
