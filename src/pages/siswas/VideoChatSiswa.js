import React, { useState } from "react";
import { Table, Button, Row, Col, Form, Pagination } from "react-bootstrap";
import { Typography, Paper, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PanggilanMasuk from "../../components/DaftarPanggilanMasuk";

const VideoChatSiswa = () => {
  const navigate = useNavigate();

  // Data Konselor Online
  const konselorList = [
    { nama: "Lilik Nursilowati", status: "Online" },
    { nama: "Kurniawan Dwi Angga Efendi", status: "Offline" },
    { nama: "Ainul Azizah", status: "Online" },
    { nama: "M. Shodik Khairan", status: "Offline" },
  ];

  // State untuk pagination, pencarian, dan jumlah data per halaman
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan pencarian
  const filteredData = konselorList.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Daftar Konselor yang Online
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
              placeholder="Cari Konselor..."
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((konselor, index) => (
              <tr key={index}>
                <td>{konselor.nama}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={konselor.status !== "Online"}
                    onClick={() =>
                      navigate(`/siswa/videochat/${konselor.nama}`)
                    }
                  >
                    Call
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Informasi jumlah data yang ditampilkan */}
        {/* <Typography variant="body2" className="text-muted mb-2">
      Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
      {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
      {filteredData.length} entries
    </Typography> */}
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

      {/* Tabel Panggilan Masuk */}
      <PanggilanMasuk />
    </>
  );
};

export default VideoChatSiswa;
