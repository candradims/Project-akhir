import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Pagination } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";

const DaftarPesanMasuk = () => {
  // Data contoh pesan masuk
  const dummyPesanMasuk = [
    { id: 1, nama: "Lilik Nursilowati" },
    { id: 2, nama: "Ainul Azizah" },
    { id: 3, nama: "Kurniawan Dwi Angga Efendi" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [pesanMasuk, setPesanMasuk] = useState(dummyPesanMasuk);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter pesan berdasarkan pencarian
  const filteredPesan = pesanMasuk.filter((pesan) =>
    pesan.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredPesan.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const displayedPesan = filteredPesan.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  return (
    <>
      {/* Header Tabel */}
      <Typography variant="h5" className="fw-bold text-primary mt-4 mb-3">
        Daftar Pesan Masuk yang Belum Dibaca
      </Typography>

      {/* Filter dan Control */}
      <Paper elevation={3} className="p-3 mb-3">
        <div className="d-flex justify-content-between mb-3">
          {/* Show Entries Dropdown */}
          <div>
            <label className="me-2">Show</label>
            <Select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(e.target.value)}
              size="small"
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
            </Select>
            <span className="ms-2">entries</span>
          </div>

          {/* Search Input */}
          <Form.Control
            type="text"
            placeholder="Search..."
            className="w-25"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tabel Pesan Masuk */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedPesan.length > 0 ? (
              displayedPesan.map((pesan, index) => (
                <tr key={index}>
                  <td>{pesan.nama}</td>
                  <td>
                    <Button variant="primary" size="sm">
                      Lihat
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

        <Row className="justify-content-between">
          <Col>
            {/* Informasi jumlah data yang ditampilkan */}
            <Typography variant="body2" className="text-muted mb-2">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + entriesPerPage, filteredPesan.length)} of{" "}
              {filteredPesan.length} entries
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

export default DaftarPesanMasuk;
