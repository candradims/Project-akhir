import React, { useState } from "react";
import { Table, Form, Pagination, Row, Col } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";

const HistoryBimbinganOrtu = () => {
  // Data riwayat bimbingan dan konseling
  const dataBK = [
    {
      nis: "0013814619",
      nama: "PUTRI SAPITRI",
      tanggal: "08-11-2016",
      jenis: "Pribadi",
      isi: "Layanan Konsultasi",
      tindakan: "Memberi bimbingan dan motivasi",
    },
    {
      nis: "0013814619",
      nama: "PUTRI SAPITRI",
      tanggal: "24-11-2016",
      jenis: "Kedisplinan",
      isi: "Layanan individual",
      tindakan: "Memberikan teguran dan pembinaan",
    },
    {
      nis: "0013814619",
      nama: "PUTRI SAPITRI",
      tanggal: "05-01-1970",
      jenis: "Karir",
      isi: "Layanan Peminatan",
      tindakan: "Memberikan arahan dan rekomendasi karir",
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
        Riwayat Bimbingan dan Konseling Anak
      </Typography>

      <Paper elevation={3} className="p-3">
        <Row className="mb-3 d-flex align-items-center justify-content-between">
          {/* Show Entries Dropdown */}
          <Col md={4}>
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2">Tampilkan</Form.Label>
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
              <span className="ms-2">entri</span>
            </Form.Group>
          </Col>

          {/* Pencarian */}
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari berdasarkan Nama, Jenis, atau Tindakan..."
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
              <th>Nama Anak</th>
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
                  Tidak ada data bimbingan ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <Row className="justify-content-between">
          <Col>
            {/* Informasi jumlah data yang ditampilkan */}
            <Typography variant="body2" className="text-muted mb-2">
              Menampilkan {startIndex} hingga {endIndex} dari{" "}
              {filteredData.length} entri
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

export default HistoryBimbinganOrtu;
