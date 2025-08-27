import React, { useState } from "react";
import { Form, Button, Alert, Table } from "react-bootstrap";
import {
  Typography,
  Paper,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Save, Edit, Delete } from "@mui/icons-material";

const FormPengguna = () => {
  // State untuk form pengguna
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    status: "Admin", // Default status
  });

  // State untuk data pengguna
  const [users, setUsers] = useState([
    { id: 1, username: "897654", password: "****", status: "Admin" },
    { id: 2, username: "778091", password: "****", status: "Guru" },
    {
      id: 3,
      username: "774567",
      password: "****",
      status: "KepalaSekolah",
    },
    { id: 4, username: "556847", password: "****", status: "SIswa" },
  ]);

  // State untuk validasi dan notifikasi
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Handle perubahan input form
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle simpan pengguna
  const handleSave = () => {
    setError("");
    setSuccess("");

    // Validasi data
    if (!formData.username || !formData.password || !formData.status) {
      setError("Semua field harus diisi!");
      return;
    }

    if (formData.username.length < 5) {
      setError("Username minimal 5 karakter!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter!");
      return;
    }

    if (isEditing) {
      // Update user yang sudah ada
      const updatedUsers = users.map((user) =>
        user.id === editId ? { ...user, ...formData } : user
      );
      setUsers(updatedUsers);
      setSuccess("Data pengguna berhasil diperbarui!");
      resetForm();
    } else {
      // Tambah user baru
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
        ...formData,
      };
      setUsers([...users, newUser]);
      setSuccess("Data pengguna berhasil ditambahkan!");
      resetForm();
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      username: "",
      password: "",
      status: "Admin",
    });
    setIsEditing(false);
    setEditId(null);
  };

  // Handle edit pengguna
  const handleEdit = (user) => {
    setFormData({
      username: user.username,
      password: user.password,
      status: user.status,
    });
    setIsEditing(true);
    setEditId(user.id);
  };

  // Handle hapus pengguna
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setSuccess("Data pengguna berhasil dihapus!");
  };

  return (
    <>
      {/* Form Pengguna */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Form Pengguna
      </Typography>

      <Paper elevation={3} className="p-4 mb-4">
        {/* Notifikasi Error & Sukses */}
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {/* Form Input */}
        <Form>
          <Form.Group className="mb-3">
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              fullWidth
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <TextField
              select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              fullWidth
              required
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Guru">Guru BK</MenuItem>
              <MenuItem value="Kepalasekolah">Kepala Sekolah</MenuItem>
              <MenuItem value="Siswa">Siswa</MenuItem>
            </TextField>
          </Form.Group>

          {/* Tombol Simpan */}
          <Button variant="primary" onClick={handleSave}>
            <Save className="me-1" /> {isEditing ? "Update" : "Simpan"}
          </Button>

          {isEditing && (
            <Button variant="secondary" className="ms-2" onClick={resetForm}>
              Batal
            </Button>
          )}
        </Form>
      </Paper>

      {/* Tabel Data Pengguna */}
      <Typography variant="h5" className="fw-bold text-primary mb-3">
        Data Pengguna
      </Typography>

      <Paper elevation={3} className="p-4">
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr className="bg-primary text-white">
                <th>No</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.status}</td>
                  <td>
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={() => handleEdit(user)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Paper>
    </>
  );
};

export default FormPengguna;
