import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Typography, Paper, TextField, MenuItem } from "@mui/material";

const InputDataBimbingan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const siswa = location.state?.siswa || {};

  // Daftar nama konselor
  const daftarKonselor = [
    "Lilik Nursilowati",
    "Kurniawan Dwi Angga Efendi",
    "Ainul Azizah",
    "M. Shodik Khairan",
  ];

  // State untuk menyimpan input data BK
  const [formData, setFormData] = useState({
    namaSiswa: siswa?.namaLengkap || "",
    nisSiswa: siswa?.nis || "",
    namaKonselor: "",
    tanggal: "",
    jenis: "",
    isi: "",
    tindakan: "",
  });

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simpan data dan navigasi ke halaman daftar BK
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/konselor/lihat-bimbingan", { state: { formData } });
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Input Data Bimbingan dan Konseling
      </Typography>

      <Paper elevation={3} className="p-4">
        <Form onSubmit={handleSubmit}>
          <TextField
            name="namaSiswa"
            label="Nama Siswa"
            value={formData.namaSiswa}
            fullWidth
            className="mb-3"
            onChange={handleChange}
          />
          <TextField
            name="nisSiswa"
            label="NIS Siswa"
            value={formData.nisSiswa}
            fullWidth
            className="mb-3"
            onChange={handleChange}
          />
          <TextField
            select
            name="namaKonselor"
            label="Nama Konselor"
            value={formData.namaKonselor}
            fullWidth
            className="mb-3"
            onChange={handleChange}
          >
            {daftarKonselor.map((konselor, index) => (
              <MenuItem key={index} value={konselor}>
                {konselor}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="tanggal"
            label="Tanggal"
            type="date"
            fullWidth
            className="mb-3"
            InputLabelProps={{
              shrink: true, // Mencegah label menimpa placeholder
            }}
            onChange={handleChange}
          />
          <TextField
            select
            name="jenis"
            label="Jenis"
            fullWidth
            className="mb-3"
            onChange={handleChange}
          >
            <MenuItem value="Pribadi">Pribadi</MenuItem>
            <MenuItem value="Penegakan Kedisplinan">
              Penegakan Kedisplinan
            </MenuItem>
            <MenuItem value="Sosial">Sosial</MenuItem>
            <MenuItem value="Belajar">Belajar</MenuItem>
            <MenuItem value="Karir">Karir</MenuItem>
          </TextField>
          <TextField
            name="isi"
            label="Isi"
            fullWidth
            multiline
            rows={3}
            className="mb-3"
            onChange={handleChange}
          />
          <TextField
            name="tindakan"
            label="Tindakan"
            fullWidth
            multiline
            rows={2}
            className="mb-3"
            onChange={handleChange}
          />
          <Button type="submit" variant="success">
            Simpan
          </Button>
        </Form>
      </Paper>
    </>
  );
};

export default InputDataBimbingan;
