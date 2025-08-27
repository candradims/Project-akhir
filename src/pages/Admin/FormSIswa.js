import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Alert,
  Table,
  Container,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";
import { Typography, Paper, TextField, Box, Tabs, Tab } from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";

// TabPanel component for handling tab content
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const FormSiswa = () => {
  // Tab state
  const [tabValue, setTabValue] = useState(0);

  // Data awal siswa (simulasi data dari backend)
  const [profileData, setProfileData] = useState({
    nis: "1234567890",
    namaLengkap: "Andi Santoso",
    namaPanggilan: "Andi",
    tempatLahir: "Gresik",
    tanggalLahir: "2006-05-15",
    alamat: "Jl. Pahlawan No. 15",
    telepon: "081234567890",
    agama: "Islam",
    email: "andi.santoso@email.com",
    golonganDarah: "O",
    jurusan: "Teknik Elektronika Industri",
    hobi: "Membaca, Travelling",
    citaCita: "Electrical Engineer",
  });

  // State untuk mode edit dan validasi
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Data untuk tabel siswa
  const [siswaList, setSiswaList] = useState([
    {
      nis: "000007323",
      namaLengkap: "PUTRI SAPUTRI",
      namaPanggilan: "PUTRI",
      tempatLahir: "Surabaya",
      tanggalLahir: "01-02-2007",
      agama: "ISLAM",
      golonganDarah: "A",
      alamat: "Jl. Merdeka No. 10",
      telepon: "082112345678",
      jurusan: "APL",
      hobi: "Menari",
      citaCita: "Quality Control",
    },
    {
      nis: "001349767",
      namaLengkap: "RANGGA PERMANA",
      namaPanggilan: "RANGGA",
      tempatLahir: "Gresik",
      tanggalLahir: "01-07-2006",
      agama: "ISLAM",
      golonganDarah: "A",
      alamat: "Jl. Sudirman No. 45",
      telepon: "081387654321",
      jurusan: "TPM",
      hobi: "Musik",
      citaCita: "Mekanik",
    },
    {
      nis: "001311425",
      namaLengkap: "ANDREANVAN PRATAMA",
      namaPanggilan: "ANDRE",
      tempatLahir: "Surabaya",
      tanggalLahir: "01-02-2006",
      agama: "ISLAM",
      golonganDarah: "AB",
      alamat: "Jl. Ahmad Yani No. 23",
      telepon: "085712345678",
      jurusan: "TEI",
      hobi: "Menulis",
      citaCita: "Teknisi",
    },
    {
      nis: "001374679",
      namaLengkap: "JESSIKA ALTIAR",
      namaPanggilan: "JESSIKA",
      tempatLahir: "Gresik",
      tanggalLahir: "15-08-2007",
      agama: "ISLAM",
      golonganDarah: "A",
      alamat: "Jl. Gatot Subroto No. 17",
      telepon: "089812345678",
      jurusan: "MM",
      hobi: "Membaca",
      citaCita: "Fotografer",
    },
    {
      nis: "000801423",
      namaLengkap: "ADITYA PRATAMA",
      namaPanggilan: "ADITYA",
      tempatLahir: "Surabaya",
      tanggalLahir: "11-12-2006",
      agama: "ISLAM",
      golonganDarah: "A",
      alamat: "Jl. Veteran No. 55",
      telepon: "081234567890",
      jurusan: "APL",
      hobi: "Membaca, Hiking",
      citaCita: "Analis",
    },
    {
      nis: "999865128",
      namaLengkap: "Yudi Permadias",
      namaPanggilan: "Yudi",
      tempatLahir: "Gresik",
      tanggalLahir: "04-12-2007",
      agama: "ISLAM",
      golonganDarah: "O",
      alamat: "Jl. Diponegoro No. 33",
      telepon: "087712345678",
      jurusan: "TITL",
      hobi: "Olahraga",
      citaCita: "Teknisi",
    },
  ]);

  // State untuk pencarian
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(siswaList);

  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Handle perubahan input di form profil
  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  // Simpan perubahan profil
  const handleSave = () => {
    setError("");
    setSuccess("");

    // Validasi data sebelum menyimpan
    if (
      !editedData.nis ||
      !editedData.namaLengkap ||
      !editedData.namaPanggilan ||
      !editedData.tempatLahir ||
      !editedData.tanggalLahir ||
      !editedData.alamat ||
      !editedData.telepon ||
      !editedData.agama ||
      !editedData.email ||
      !editedData.golonganDarah ||
      !editedData.jurusan ||
      !editedData.hobi ||
      !editedData.citaCita
    ) {
      setError("Semua field harus diisi!");
      return;
    }

    if (!/^\d+$/.test(editedData.nis)) {
      setError("NIS harus berupa angka!");
      return;
    }

    if (!/^\d+$/.test(editedData.telepon)) {
      setError("Nomor Telepon harus berupa angka!");
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editedData.email)) {
      setError("Format email tidak valid!");
      return;
    }

    // Validasi golongan darah
    const validBloodTypes = [
      "A",
      "B",
      "AB",
      "O",
      "A+",
      "A-",
      "B+",
      "B-",
      "AB+",
      "AB-",
      "O+",
      "O-",
    ];
    if (!validBloodTypes.includes(editedData.golonganDarah)) {
      setError("Golongan darah tidak valid!");
      return;
    }

    // Simulasi penyimpanan ke backend
    setProfileData(editedData);
    setIsEditing(false);
    setSuccess("Profil berhasil diperbarui!");
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = siswaList.filter(
      (siswa) =>
        siswa.nis.toLowerCase().includes(query.toLowerCase()) ||
        siswa.namaLengkap.toLowerCase().includes(query.toLowerCase()) ||
        siswa.namaPanggilan.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredList(filtered);
    setCurrentPage(1);
  };

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Effect to update filtered list when siswaList changes
  useEffect(() => {
    setFilteredList(siswaList);
  }, [siswaList]);

  // Function to render student data table
  const renderStudentTable = (data, isPaginated = false) => {
    const displayData = isPaginated ? currentItems : data;

    return (
      <>
        {isPaginated && (
          <div className="d-flex justify-content-between mb-3">
            <div>
              <span>Show </span>
              <select
                className="form-select form-select-sm d-inline-block w-auto"
                onChange={(e) => {
                  /* This would be implemented for dynamic items per page */
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
              </select>
              <span> entries</span>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-2">Search:</span>
              <input
                type="text"
                className="form-control form-control-sm"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        )}

        <div className="table-responsive">
          <Table bordered hover>
            <thead className="table-dark">
              <tr>
                <th>NIS</th>
                <th>Nama Lengkap</th>
                <th>Nama Panggilan</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Agama</th>
                <th>Golongan Darah</th>
                <th>Alamat</th>
                <th>Telepon</th>
                <th>Jurusan</th>
                <th>Hobi</th>
                <th>Cita-Cita</th>
              </tr>
            </thead>
            <tbody>
              {displayData.length > 0 ? (
                displayData.map((siswa, index) => (
                  <tr key={index}>
                    <td>{siswa.nis}</td>
                    <td>{siswa.namaLengkap}</td>
                    <td>{siswa.namaPanggilan}</td>
                    <td>{siswa.tempatLahir}</td>
                    <td>{siswa.tanggalLahir}</td>
                    <td>{siswa.agama}</td>
                    <td>{siswa.golonganDarah}</td>
                    <td>{siswa.alamat}</td>
                    <td>{siswa.telepon}</td>
                    <td>{siswa.jurusan}</td>
                    <td>{siswa.hobi}</td>
                    <td>{siswa.citaCita}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className="text-center">
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        {isPaginated && (
          <div className="d-flex justify-content-between align-items-center">
            <div>
              Showing {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, filteredList.length)} of{" "}
              {filteredList.length} entries
            </div>
            <Pagination>
              <Pagination.First
                onClick={() => paginate(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              />

              {Array.from({
                length: Math.ceil(filteredList.length / itemsPerPage),
              }).map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(filteredList.length / itemsPerPage)
                }
              />
              <Pagination.Last
                onClick={() =>
                  paginate(Math.ceil(filteredList.length / itemsPerPage))
                }
                disabled={
                  currentPage === Math.ceil(filteredList.length / itemsPerPage)
                }
              />
            </Pagination>
          </div>
        )}
      </>
    );
  };

  return (
    <Container fluid>
      <Paper elevation={3} className="p-4">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="siswa management tabs"
            >
              <Tab label="Profil Siswa" />
              <Tab label="Data Siswa" />
            </Tabs>
          </Box>

          {/* Tab Panel - Profil Siswa */}
          <TabPanel value={tabValue} index={0}>
            <Typography variant="h5" className="fw-bold text-primary mb-3">
              Form Profil Siswa
            </Typography>

            {/* Notifikasi Error & Sukses */}
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            {/* Form Profil */}
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="NIS"
                      name="nis"
                      value={isEditing ? editedData.nis : profileData.nis}
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Nama Lengkap"
                      name="namaLengkap"
                      value={
                        isEditing
                          ? editedData.namaLengkap
                          : profileData.namaLengkap
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Nama Panggilan"
                      name="namaPanggilan"
                      value={
                        isEditing
                          ? editedData.namaPanggilan
                          : profileData.namaPanggilan
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Tempat Lahir"
                      name="tempatLahir"
                      value={
                        isEditing
                          ? editedData.tempatLahir
                          : profileData.tempatLahir
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Tanggal Lahir"
                      name="tanggalLahir"
                      type="date"
                      value={
                        isEditing
                          ? editedData.tanggalLahir
                          : profileData.tanggalLahir
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Agama"
                      name="agama"
                      value={isEditing ? editedData.agama : profileData.agama}
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Golongan Darah"
                      name="golonganDarah"
                      value={
                        isEditing
                          ? editedData.golonganDarah
                          : profileData.golonganDarah
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                      helperText="Contoh: A, B, AB, O, A+, B-, dll."
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Alamat"
                      name="alamat"
                      value={isEditing ? editedData.alamat : profileData.alamat}
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Telepon"
                      name="telepon"
                      value={
                        isEditing ? editedData.telepon : profileData.telepon
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      value={isEditing ? editedData.email : profileData.email}
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Jurusan"
                      name="jurusan"
                      value={
                        isEditing ? editedData.jurusan : profileData.jurusan
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Hobi"
                      name="hobi"
                      value={isEditing ? editedData.hobi : profileData.hobi}
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                      multiline
                      rows={2}
                      helperText="Pisahkan beberapa hobi dengan koma"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <TextField
                      label="Cita-cita"
                      name="citaCita"
                      value={
                        isEditing ? editedData.citaCita : profileData.citaCita
                      }
                      onChange={handleInputChange}
                      fullWidth
                      disabled={!isEditing}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Tombol Edit/Simpan */}
              {isEditing ? (
                <>
                  <Button variant="success" onClick={handleSave}>
                    <Save /> Simpan
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => {
                      setIsEditing(false);
                      setEditedData(profileData);
                      setError("");
                    }}
                  >
                    <Cancel /> Batal
                  </Button>
                </>
              ) : (
                <Button variant="primary" onClick={() => setIsEditing(true)}>
                  <Edit /> Edit Profil
                </Button>
              )}
            </Form>

            {/* Data Siswa di bawah Form Profil */}
            <div className="mt-5">
              <Typography variant="h5" className="fw-bold text-primary mb-3">
                Data Siswa
              </Typography>
              {renderStudentTable(siswaList.slice(0, 5))}
            </div>
          </TabPanel>

          {/* Tab Panel - Data Siswa */}
          <TabPanel value={tabValue} index={1}>
            <Typography variant="h5" className="fw-bold text-primary mb-3">
              Data Siswa
            </Typography>
            {renderStudentTable(filteredList, true)}
          </TabPanel>
        </Box>
      </Paper>
    </Container>
  );
};

export default FormSiswa;
