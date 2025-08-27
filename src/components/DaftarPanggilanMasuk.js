import React, { useState } from "react";
import { Table, Button, Form, Row, Col, Pagination } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";

const PanggilanMasuk = () => {
  // Data contoh panggilan masuk
  const dummyPanggilanMasuk = [
    { id: 1, nama: "Lilik Nursilowati" },
    { id: 2, nama: "Ainul Azizah" },
    { id: 3, nama: "Kurniawan Dwi Angga Efendi" },
  ];

  // eslint-disable-next-line no-unused-vars
  const [panggilanMasuk, setPanggilanMasuk] = useState(dummyPanggilanMasuk);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter panggilan berdasarkan pencarian
  const filteredPanggilan = panggilanMasuk.filter((panggilan) =>
    panggilan.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hitung total halaman
  const totalPages = Math.ceil(filteredPanggilan.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const displayedPanggilan = filteredPanggilan.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  return (
    <>
      {/* Header Tabel */}
      <Typography variant="h5" className="fw-bold text-primary mt-4 mb-3">
        Daftar Panggilan Masuk
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

        {/* Tabel Panggilan Masuk */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Nama Penelpon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedPanggilan.length > 0 ? (
              displayedPanggilan.map((panggilan, index) => (
                <tr key={index}>
                  <td>{panggilan.nama}</td>
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
                  Tidak ada panggilan masuk.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* Pagination & Info Entries */}
        <Row className="justify-content-between">
          <Col>
            {/* Informasi jumlah data yang ditampilkan */}
            <Typography variant="body2" className="text-muted mb-2">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + entriesPerPage, filteredPanggilan.length)}{" "}
              of {filteredPanggilan.length} entries
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

export default PanggilanMasuk;
