import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Table,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Pagination,
  Alert,
} from "react-bootstrap";
import { Typography, Paper, TextField, MenuItem, Select } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const LihatDataBimbinganKonseling = () => {
  const location = useLocation();
  const siswa = location.state?.siswa;
  const formData = location.state?.formData;

  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("success");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteData, setDeleteData] = useState(null);

  // Simulasi Data BK
  const [dataBK, setDataBK] = useState([
    {
      nis: "0013814621",
      namaSiswa: "Siti Aisyah",
      namaKonselor: "Ainul Azizah",
      tanggal: "10-02-2025",
      jenis: "Pribadi",
      isi: "Layanan Konsultasi",
      tindakan: "Peningkatan Belajar",
    },
    {
      nis: "000072733",
      namaSiswa: "Putri Sapitri",
      namaKonselor: "M. Shodik Khairan",
      tanggal: "20-02-2025",
      jenis: "Kedisplinan",
      isi: "Layanan Individual",
      tindakan: "Memberikan teguran dan pembinaan",
    },
    {
      nis: "0012567890	",
      namaSiswa: "Dewi Pratiwi",
      namaKonselor: "Lilik Nursilowati ",
      tanggal: "22-02-2025",
      jenis: "Karir",
      isi: "Layanan Peminatan",
      tindakan: "Memberikan arahan dan rekomendasi karir",
    },
  ]);

  // Menambahkan data baru jika ada
  React.useEffect(() => {
    if (siswa && formData) {
      const newData = {
        nis: siswa.nis || formData.nisSiswa || "",
        namaSiswa: siswa.namaLengkap || formData.namaSiswa || "",
        namaKonselor: formData.namaKonselor || "Andaria",
        tanggal: formData.tanggal || "",
        jenis: formData.jenis || "",
        isi: formData.isi || "",
        tindakan: formData.tindakan || "",
      };

      setDataBK((prevData) => [...prevData, newData]);
    }
  }, [siswa, formData]);

  // Filter data berdasarkan search
  const filteredData = dataBK.filter(
    (bk) =>
      bk.namaSiswa.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bk.jenis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bk.isi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bk.tindakan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Modal Edit Data BK
  const handleEdit = (bk) => {
    setEditData({ ...bk });
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    // Di sini seharusnya update data di state
    setDataBK((prevData) =>
      prevData.map((item) => (item.nis === editData.nis ? editData : item))
    );

    setShowModal(false);
    setAlertVariant("success");
    setAlertMessage("Data berhasil diedit!");
    setShowAlert(true);

    // Sembunyikan alert setelah 5 detik
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  // Handle Delete Data
  const handleDelete = (bk) => {
    setDeleteData(bk);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    // Hapus data dari state
    setDataBK((prevData) =>
      prevData.filter((item) => item.nis !== deleteData.nis)
    );

    setShowDeleteModal(false);
    setAlertVariant("danger");
    setAlertMessage("Data berhasil dihapus!");
    setShowAlert(true);

    // Sembunyikan alert setelah 5 detik
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  // Handle perubahan pada form edit
  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Data Bimbingan dan Konseling
      </Typography>

      {/* Alert Notifikasi */}
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      <Paper elevation={3} className="p-4">
        {/* Search & Show Entries */}
        <Row className="mb-3 d-flex align-items-center justify-content-between">
          {/* Show Entries Dropdown */}
          <Col md={4}>
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2">Show</Form.Label>
              <Select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(parseInt(e.target.value));
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
              placeholder="Cari berdasarkan Nama, Jenis, atau Tindakan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
        </Row>
        <Table bordered striped responsive>
          <thead className="table-dark">
            <tr>
              <th>NIS</th>
              <th>Nama Siswa</th>
              <th>Nama Konselor</th>
              <th>Tanggal</th>
              <th>Jenis</th>
              <th>Isi</th>
              <th>Tindakan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((bk, index) => (
              <tr key={index}>
                <td>{bk.nis}</td>
                <td>{bk.namaSiswa}</td>
                <td>{bk.namaKonselor}</td>
                <td>{bk.tanggal}</td>
                <td>{bk.jenis}</td>
                <td>{bk.isi}</td>
                <td>{bk.tindakan}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(bk)}
                  >
                    <Edit />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(bk)}
                  >
                    <Delete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="justify-content-between">
          <Col>
            {/* Showing Entries */}
            <Typography variant="body2" className="text-muted mb-2">
              Showing {indexOfFirstEntry + 1} to{" "}
              {Math.min(indexOfLastEntry, filteredData.length)} of{" "}
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

      {/* Modal Edit Data BK */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data Bimbingan dan Konseling</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editData && (
            <Form>
              <TextField
                name="jenis"
                label="Jenis"
                value={editData.jenis}
                fullWidth
                className="mb-3"
                onChange={handleEditChange}
              />
              <TextField
                name="isi"
                label="Isi"
                value={editData.isi}
                fullWidth
                multiline
                rows={3}
                className="mb-3"
                onChange={handleEditChange}
              />
              <TextField
                name="tindakan"
                label="Tindakan"
                value={editData.tindakan}
                fullWidth
                multiline
                rows={2}
                className="mb-3"
                onChange={handleEditChange}
              />
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Konfirmasi Delete */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteData && (
            <p>
              Apakah Anda yakin ingin menghapus data bimbingan untuk siswa{" "}
              <strong>{deleteData.namaSiswa}</strong>?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Hapus Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LihatDataBimbinganKonseling;
