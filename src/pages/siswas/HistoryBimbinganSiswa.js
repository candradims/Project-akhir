import React, { useState } from "react";
import { Table, Form, Pagination, Row, Col } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";

const HistoryBimbinganSiswa = () => {
  // Data riwayat bimbingan dan konseling
  const dataBK = [
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "15-01-2025",
      jenis: "Pribadi",
      isi: "Layanan Konsultasi",
      tindakan: "Memberikan bimbingan dan motivasi",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "17-01-2025",
      jenis: "Pribadi",
      isi: "Layanan Konsultasi",
      tindakan: "Memberikan bimbingan dan motivasi",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "20-01-2025",
      jenis: "Kedisiplinan",
      isi: "Layanan Individual",
      tindakan: "Memberikan teguran dan pembinaan",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "25-01-2025",
      jenis: "Kedisiplinan",
      isi: "Layanan Individual",
      tindakan: "Memberikan teguran dan pembinaan",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "01-02-2025",
      jenis: "Karir",
      isi: "Layanan Peminatan",
      tindakan: "Memberikan arahan dan rekomendasi karir",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "05-02-2025",
      jenis: "Karir",
      isi: "Layanan Peminatan",
      tindakan: "Memberikan arahan dan rekomendasi karir",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia",
      tanggal: "07-02-2025",
      jenis: "Pribadi",
      isi: "Layanan Individual",
      tindakan: "Memberikan bimbingan dan motivasi",
    },
    {
      nis: "0013814619",
      nama: "Intan Rachmalia ",
      tanggal: "10-02-2025",
      jenis: "Kedisplinan",
      isi: "Layanan Individual",
      tindakan: "Memberikan teguran dan pembinaan",
    },
  ];

  // State untuk pencarian dan pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data berdasarkan pencarian
  const filteredData = dataBK.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Menghitung indeks pertama dan terakhir dari data yang ditampilkan
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, filteredData.length);

  return (
    <>
      {/* Judul Halaman */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        History Bimbingan dan Konseling
      </Typography>

      <Paper elevation={3} className="p-3">
        <Row className="mb-3 d-flex align-items-center justify-content-between">
          {/* Show Entries Dropdown */}
          <Col md={4}>
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2">Show</Form.Label>
              <Select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(parseInt(e.target.value));
                  setCurrentPage(1); // Reset ke halaman pertama
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

          {/* Pencarian */}
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari berdasarkan Nama, Bimbingan, / Jenis Layanan....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        {/* Tabel History BK */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>NIS</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>Bidang Bimbingan</th>
              <th>Jenis Layanan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.nis}</td>
                  <td>{item.nama}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.jenis}</td>
                  <td>{item.isi}</td>
                  <td>{item.tindakan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <Row className="justify-content-between">
          <Col>
            {/* Informasi jumlah data yang ditampilkan */}
            <Typography variant="body2" className="text-muted mb-2">
              Showing {startIndex} to {endIndex} of {filteredData.length}{" "}
              entries
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

export default HistoryBimbinganSiswa;
