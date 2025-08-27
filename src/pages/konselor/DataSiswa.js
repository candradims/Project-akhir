import React, { useState } from "react";
import { Table, Form, Pagination, Row, Col, Button } from "react-bootstrap";
import { Typography, Paper, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DataSiswa = () => {
  const navigate = useNavigate();

  // Navigasi ke halaman Data Orang Tua dengan membawa data siswa yang dipilih
  const handleViewOrangTua = (siswa) => {
    navigate(`/konselor/data-siswa/${siswa.nis}/orangtua`, {
      state: { siswa },
    });
  };

  // Data Siswa
  const dataSiswa = [
    {
      nis: "0013814620",
      namaLengkap: "Rizky Maulana",
      namaPanggilan: "Rizky",
      tempatLahir: "Gresik",
      tanggalLahir: "12-05-2006",
      agama: "Islam",
      golonganDarah: "O",
      alamat: "Jl. Merdeka No. 10, Gresik",
      telepon: "081234567890",
      jurusan: "TEI",
      hobi: "Membaca",
      citaCita: "Teknisi",
    },
    {
      nis: "0013814621",
      namaLengkap: "Siti Aisyah",
      namaPanggilan: "Aisyah",
      tempatLahir: "Gresik",
      tanggalLahir: "22-08-2007",
      agama: "Islam",
      golonganDarah: "A",
      alamat: "Jl. Diponegoro No. 15, Gresik",
      telepon: "081298765432",
      jurusan: "APL",
      hobi: "Menulis",
      citaCita: "Analis",
    },
    {
      nis: "0013814622",
      namaLengkap: "Joshua Lawalata",
      namaPanggilan: "Joshua",
      tempatLahir: "Surabaya",
      tanggalLahir: "05-10-2007",
      agama: "Islam",
      golonganDarah: "B",
      alamat: "Jl. Pahlawan No. 20, Surabaya",
      telepon: "081345678901",
      jurusan: "TPM",
      hobi: "Mendaki",
      citaCita: "Mekanik",
    },
    {
      nis: "0013814623",
      namaLengkap: "Intan Rachmalia",
      namaPanggilan: "Intan",
      tempatLahir: "Surabaya",
      tanggalLahir: "18-02-2006",
      agama: "Islam",
      golonganDarah: "AB",
      alamat: "Jl. lidah wetan No. 5, Surabaya",
      telepon: "081212345678",
      jurusan: "Multimedia",
      hobi: "Melukis",
      citaCita: "Desain Grafis",
    },
    {
      nis: "0013814624",
      namaLengkap: "I kadek artha",
      namaPanggilan: "Kadek",
      tempatLahir: "Bali",
      tanggalLahir: "30-07-2005",
      agama: "Islam",
      golonganDarah: "O",
      alamat: "Jl. Gatot Subroto No. 7, Gresik",
      telepon: "081356789012",
      jurusan: "TITL",
      hobi: "Merakit komputer",
      citaCita: "Engginer",
    },
    {
      nis: "0013814625",
      namaLengkap: "Lina Kusuma",
      namaPanggilan: "Lina",
      tempatLahir: "Semarang",
      tanggalLahir: "09-04-2006",
      agama: "Buddha",
      golonganDarah: "A",
      alamat: "Jl. Sisingamangaraja No. 9, Semarang",
      telepon: "081278901234",
      jurusan: "Bahasa",
      hobi: "Menari",
      citaCita: "Penari Profesional",
    },
    {
      nis: "0013814626",
      namaLengkap: "Gilang Saputra",
      namaPanggilan: "Gilang",
      tempatLahir: "Palembang",
      tanggalLahir: "15-06-2005",
      agama: "Islam",
      golonganDarah: "B",
      alamat: "Jl. Sudirman No. 14, Palembang",
      telepon: "081389012345",
      jurusan: "IPA",
      hobi: "Bermain Gitar",
      citaCita: "Musisi",
    },
    {
      nis: "0013814627",
      namaLengkap: "Tania Wijaya",
      namaPanggilan: "Tania",
      tempatLahir: "Makassar",
      tanggalLahir: "25-09-2006",
      agama: "Kristen",
      golonganDarah: "AB",
      alamat: "Jl. Pettarani No. 11, Makassar",
      telepon: "081490123456",
      jurusan: "IPS",
      hobi: "Fotografi",
      citaCita: "Fotografer",
    },
    {
      nis: "0013814628",
      namaLengkap: "Rendy Kurniawan",
      namaPanggilan: "Rendy",
      tempatLahir: "Bali",
      tanggalLahir: "03-01-2005",
      agama: "Hindu",
      golonganDarah: "O",
      alamat: "Jl. Legian No. 8, Bali",
      telepon: "081501234567",
      jurusan: "Teknik",
      hobi: "Bermain Game",
      citaCita: "Game Developer",
    },
    {
      nis: "0013814629",
      namaLengkap: "Nadia Ramadhani",
      namaPanggilan: "Nadia",
      tempatLahir: "Pontianak",
      tanggalLahir: "19-11-2006",
      agama: "Islam",
      golonganDarah: "A",
      alamat: "Jl. Ahmad Yani No. 6, Pontianak",
      telepon: "081612345678",
      jurusan: "Bahasa",
      hobi: "Membaca Novel",
      citaCita: "Penulis",
    },
  ];

  // State untuk pencarian dan pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Filter data berdasarkan pencarian
  const filteredData = dataSiswa.filter((item) =>
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
        Data Siswa
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
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
              <span className="ms-2">entries</span>
            </Form.Group>
          </Col>

          {/* Pencarian */}
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Cari Siswa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>

        {/* Tabel History BK */}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th style={{ minWidth: "150px" }}>NIS</th>
              <th style={{ minWidth: "150px" }}>Nama Lengkap</th>
              <th style={{ minWidth: "150px" }}>Nama Panggilan</th>
              <th style={{ minWidth: "150px" }}>Tempat Lahir</th>
              <th style={{ minWidth: "150px" }}>Tanggal Lahir</th>
              <th style={{ minWidth: "150px" }}>Agama</th>
              <th style={{ minWidth: "150px" }}>Golongan Darah</th>
              <th style={{ minWidth: "150px" }}>Alamat</th>
              <th style={{ minWidth: "150px" }}>Telepon</th>
              <th style={{ minWidth: "150px" }}>Jurusan</th>
              <th style={{ minWidth: "150px" }}>Hobi</th>
              <th style={{ minWidth: "150px" }}>Cita-Cita</th>
              <th style={{ minWidth: "150px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.nis}</td>
                  <td>{item.namaLengkap}</td>
                  <td>{item.namaPanggilan}</td>
                  <td>{item.tempatLahir}</td>
                  <td>{item.tanggalLahir}</td>
                  <td>{item.agama}</td>
                  <td>{item.golonganDarah}</td>
                  <td>{item.alamat}</td>
                  <td>{item.telepon}</td>
                  <td>{item.jurusan}</td>
                  <td>{item.hobi}</td>
                  <td>{item.citaCita}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleViewOrangTua(item)}
                    >
                      Lihat Orang Tua
                    </Button>
                  </td>
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

export default DataSiswa;
