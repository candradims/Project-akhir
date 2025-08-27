import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Typography, Paper, TextField } from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";

const ProfilKonselor = () => {
  // Data awal konselor (simulasi data dari backend)
  const [profileData, setProfileData] = useState({
    nip: "198609222011012015",
    nama: "Lilik Nursilowati ",
    alamat: "Perum Cerme Indah blok O/187 Gresik",
    telepon: "085743227868",
  });

  // State untuk mode edit dan validasi
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle perubahan input
  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  // Simpan perubahan
  const handleSave = () => {
    setError("");
    setSuccess("");

    // Validasi data sebelum menyimpan
    if (
      !editedData.nip ||
      !editedData.nama ||
      !editedData.alamat ||
      !editedData.telepon
    ) {
      setError("Semua field harus diisi!");
      return;
    }

    if (!/^\d+$/.test(editedData.nip)) {
      setError("NIP harus berupa angka!");
      return;
    }

    if (!/^\d+$/.test(editedData.telepon)) {
      setError("Nomor Telepon harus berupa angka!");
      return;
    }

    // Simulasi penyimpanan ke backend
    setProfileData(editedData);
    setIsEditing(false);
    setSuccess("Profil berhasil diperbarui!");
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Form Profil
      </Typography>

      <Paper elevation={3} className="p-4">
        {/* Notifikasi Error & Sukses */}
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {/* Form Profil */}
        <Form>
          <Form.Group className="mb-3">
            <TextField
              label="NIP"
              name="nip"
              value={isEditing ? editedData.nip : profileData.nip}
              onChange={handleInputChange}
              fullWidth
              disabled={!isEditing}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <TextField
              label="Nama"
              name="nama"
              value={isEditing ? editedData.nama : profileData.nama}
              onChange={handleInputChange}
              fullWidth
              disabled={!isEditing}
            />
          </Form.Group>

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

          <Form.Group className="mb-3">
            <TextField
              label="Telepon"
              name="telepon"
              value={isEditing ? editedData.telepon : profileData.telepon}
              onChange={handleInputChange}
              fullWidth
              disabled={!isEditing}
            />
          </Form.Group>

          {/* Tombol Edit/Simpan */}
          {isEditing ? (
            <>
              <Button variant="success" onClick={handleSave}>
                <Save /> Simpan
              </Button>
              <Button
                variant="secondary"
                className="ms-2"
                onClick={() => setIsEditing(false)}
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
      </Paper>
    </>
  );
};

export default ProfilKonselor;
