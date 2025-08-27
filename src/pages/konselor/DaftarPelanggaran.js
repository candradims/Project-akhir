import React, { useState } from "react";
import { Table, Form, Pagination, Row, Col, Button } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";
// Import for navigation
import { useNavigate } from "react-router-dom";

const DaftarPelanggaran = () => {
  // Add navigation hook
  const navigate = useNavigate();

  // Data daftar pelanggaran
  const dataPelanggaran = [
    {
      kode: "P001",
      jenis: "Terlambat",
      point: 10,
      hukuman: "Menulis Refleksi diri",
    },
    {
      kode: "P002",
      jenis: "Membolos",
      point: 25,
      hukuman: "Surat Peringatan 1 dan panggilan BK",
    },
    {
      kode: "P003",
      jenis: "Membully Teman",
      point: 25,
      hukuman: "Surat Peringatan 1 dan panggilan BK",
    },
    {
      kode: "P004",
      jenis: "Merokok di lingkungan sekolah",
      point: 10,
      hukuman: "Menulis Refleksi diri",
    },
    {
      kode: "P005",
      jenis: "Berkelahi",
      point: 25,
      hukuman: "Surat Peringatan 1 dan panggilan BK",
    },
    {
      kode: "P006",
      jenis: "Mencuri",
      point: "50",
      hukuman: "Surat Peringtan 2 dan panggilan orang tua",
    },
  ];

  // State untuk pencarian dan pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data berdasarkan pencarian
  const filteredData = dataPelanggaran.filter((item) =>
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

  // Fungsi untuk penanganan aksi (placeholder)
  const handleEdit = (kode) => {
    console.log(`Edit pelanggaran dengan kode: ${kode}`);
    alert(`Edit pelanggaran dengan kode: ${kode}`);
  };

  const handleDetail = (kode) => {
    console.log(`Lihat detail pelanggaran dengan kode: ${kode}`);
    alert(`Lihat detail pelanggaran dengan kode: ${kode}`);
  };

  const handleDelete = (kode) => {
    console.log(`Hapus pelanggaran dengan kode: ${kode}`);
    alert(`Hapus pelanggaran dengan kode: ${kode}`);
  };

  // Fungsi untuk navigasi ke halaman tambah data pelanggaran
  const handleTambahData = () => {
    navigate("/konselor/tambahdata");
  };

  return (
    <>
      {/* Judul Halaman */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Daftar Pelanggaran
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
              placeholder="Cari berdasarkan Kode, Jenis, atau Hukuman..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        {/* Tombol Tambah Pelanggaran */}
        <div className="mb-3">
          <Button variant="primary" onClick={handleTambahData}>
            + Tambah Data Pelanggaran
          </Button>
        </div>

        {/* Tabel Daftar Pelanggaran */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>Kode Pelanggaran</th>
              <th>Jenis Pelanggaran</th>
              <th>Point</th>
              <th>Hukuman</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.kode}</td>
                  <td>{item.jenis}</td>
                  <td>{item.point}</td>
                  <td>{item.hukuman}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-1"
                      onClick={() => handleEdit(item.kode)}
                    >
                      Ubah
                    </Button>
                    <Button
                      variant="info"
                      size="sm"
                      className="me-1"
                      onClick={() => handleDetail(item.kode)}
                    >
                      Detail
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.kode)}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
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

export default DaftarPelanggaran;
