import React, { useState } from "react";
import { Table, Form, Pagination, Row, Col, Button } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";
// Import for navigation
import { useNavigate } from "react-router-dom";

const DaftarSkorSiswa = () => {
  // Add navigation hook
  const navigate = useNavigate();

  // Data skor siswa
  const dataSkor = [
    {
      nis: "0013814619",
      nama: "Intan Rachmalia",
      jenisPelanggaran: "Terlambat",
      point: 10,
      jumlahPelanggaran: 3,
      totalSkor: 45,
    },
    {
      nis: "0012765438",
      nama: "Ahmad Faisal",
      jenisPelanggaran: "Membully teman",
      point: 25,
      jumlahPelanggaran: 2,
      totalSkor: 35,
    },
    {
      nis: "0014532109",
      nama: "Siti Nurhaliza",
      jenisPelanggaran: "Terlambat",
      point: 10,
      jumlahPelanggaran: 1,
      totalSkor: 10,
    },
    {
      nis: "0013987654",
      nama: "Budi Santoso",
      jenisPelanggaran: "merokok di kawasan sekolah",
      point: 10,
      jumlahPelanggaran: 3,
      totalSkor: 45,
    },
    {
      nis: "0012567890",
      nama: "Dewi Pratiwi",
      jenisPelanggaran: "Membolos",
      point: 25,
      jumlahPelanggaran: 2,
      totalSkor: 35,
    },
    {
      nis: "0014321098",
      nama: "Reza Mahendra",
      jenisPelanggaran: "Berkelahi",
      point: 25,
      jumlahPelanggaran: 1,
      totalSkor: 25,
    },
  ];

  // State untuk pencarian dan pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data berdasarkan pencarian
  const filteredData = dataSkor.filter((item) =>
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
  const handleEdit = (nis) => {
    console.log(`Edit siswa dengan NIS: ${nis}`);
    alert(`Edit siswa dengan NIS: ${nis}`);
  };

  const handleDetail = (nis) => {
    console.log(`Lihat detail siswa dengan NIS: ${nis}`);
    alert(`Lihat detail siswa dengan NIS: ${nis}`);
  };

  const handleDelete = (nis) => {
    console.log(`Hapus siswa dengan NIS: ${nis}`);
    alert(`Hapus siswa dengan NIS: ${nis}`);
  };

  // Fungsi untuk navigasi ke halaman tambah skor
  const handleTambahSkor = () => {
    navigate("/Konselor/tambahskor");
  };

  return (
    <>
      {/* Judul Halaman */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Daftar Skor Siswa
      </Typography>

      <Paper elevation={3} className="p-3">
        <Row className="mb-3 d-flex align-items-center justify-content-between">
          {/* Show Entries Dropdown */}
          <Col md={3}>
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

          {/* Tambah Skor Button */}
          <Col md={3}>
            <Button
              variant="success"
              onClick={handleTambahSkor}
              className="w-100"
            >
              Tambah Skor Siswa
            </Button>
          </Col>

          {/* Pencarian */}
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari berdasarkan NIS, Nama, atau Jenis Pelanggaran..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        {/* Tabel Daftar Skor Siswa */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>NIS</th>
              <th>Nama Siswa</th>
              <th>Jenis Pelanggaran</th>
              <th>Point</th>
              <th>Jumlah Pelanggaran</th>
              <th>Total Skor</th>
              <th className="text-center" style={{ minWidth: "200px" }}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.nis}</td>
                  <td>{item.nama}</td>
                  <td>{item.jenisPelanggaran}</td>
                  <td>{item.point}</td>
                  <td>{item.jumlahPelanggaran}</td>
                  <td>{item.totalSkor}</td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(item.nis)}
                      >
                        Ubah
                      </Button>
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => handleDetail(item.nis)}
                      >
                        Detail
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(item.nis)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
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

export default DaftarSkorSiswa;
