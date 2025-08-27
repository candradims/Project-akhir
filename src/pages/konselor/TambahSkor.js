import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Paper,
} from "@mui/material";
import logoSekolah from "../../assets/logo_sekolah.jpg";
import logoPoint from "../../assets/logo_konselor.jpg"; // Sesuaikan dengan path logo

const TambahSkorSiswa = () => {
  const [formData, setFormData] = useState({
    nis: "",
    namaSiswa: "",
    jenisPelanggaran: "",
    point: "",
    jumlahPelanggaran: "",
    totalSkor: "",
  });

  // Opsi untuk dropdown jenis pelanggaran
  const jenisOptions = [
    { kode: "P001", jenis: "Terlambat", point: 5 },
    { kode: "P002", jenis: "Tidak mengerjakan PR", point: 10 },
    { kode: "P003", jenis: "Membolos", point: 15 },
    { kode: "P004", jenis: "Berpakaian tidak rapi", point: 5 },
    { kode: "P005", jenis: "Gaduh di kelas", point: 8 },
    { kode: "P006", jenis: "Merokok di lingkungan sekolah", point: 25 },
    { kode: "P007", jenis: "Berkelahi", point: 20 },
    { kode: "P008", jenis: "Merusak fasilitas sekolah", point: 15 },
  ];

  // Simulasi data siswa untuk dropdown
  const siswaOptions = [
    { nis: "0013814619", nama: "Intan Rachmalia" },
    { nis: "0012765438", nama: "Ahmad Faisal" },
    { nis: "0014532109", nama: "Siti Nurhaliza" },
    { nis: "0013987654", nama: "Budi Santoso" },
    { nis: "0012567890", nama: "Dewi Pratiwi" },
    { nis: "0014321098", nama: "Reza Mahendra" },
    { nis: "0013654321", nama: "Anisa Putri" },
    { nis: "0012109876", nama: "Dimas Pratama" },
  ];

  // Handle saat siswa dipilih dari dropdown
  const handleSiswaChange = (event) => {
    const nis = event.target.value;
    const siswa = siswaOptions.find((s) => s.nis === nis);

    setFormData({
      ...formData,
      nis: nis,
      namaSiswa: siswa ? siswa.nama : "",
    });
  };

  // Handle saat jenis pelanggaran dipilih
  const handlePelanggaranChange = (event) => {
    const kode = event.target.value;
    const pelanggaran = jenisOptions.find((p) => p.kode === kode);

    if (pelanggaran) {
      // Auto-fill point value
      setFormData({
        ...formData,
        jenisPelanggaran: kode,
        point: pelanggaran.point,
      });
    }
  };

  // Handle input jumlah pelanggaran
  const handleJumlahChange = (event) => {
    const jumlah = parseInt(event.target.value) || 0;
    const pointValue = parseInt(formData.point) || 0;

    // Calculate total score
    setFormData({
      ...formData,
      jumlahPelanggaran: jumlah,
      totalSkor: jumlah * pointValue,
    });
  };

  // Handle general form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
    alert("Data berhasil disimpan!");
  };

  // Handle form cancellation
  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      nis: "",
      namaSiswa: "",
      jenisPelanggaran: "",
      point: "",
      jumlahPelanggaran: "",
      totalSkor: "",
    });
    alert("Input dibatalkan");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Header with logos */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <img
            src={logoSekolah}
            alt="Logo Sekolah"
            style={{ height: "50px" }}
          />
          <img src={logoPoint} alt="Logo Point" style={{ height: "50px" }} />
        </Box>

        {/* Title */}
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Tambah Data Skor Point Siswa
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* NIS dan Nama Siswa */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="siswa-label">Pilih Siswa</InputLabel>
                <Select
                  labelId="siswa-label"
                  value={formData.nis}
                  onChange={handleSiswaChange}
                  label="Pilih Siswa"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Siswa --
                  </MenuItem>
                  {siswaOptions.map((siswa) => (
                    <MenuItem key={siswa.nis} value={siswa.nis}>
                      {siswa.nis} - {siswa.nama}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nama Siswa"
                variant="outlined"
                name="namaSiswa"
                value={formData.namaSiswa}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            {/* Jenis Pelanggaran */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="pelanggaran-label">
                  Jenis Pelanggaran
                </InputLabel>
                <Select
                  labelId="pelanggaran-label"
                  value={formData.jenisPelanggaran}
                  onChange={handlePelanggaranChange}
                  label="Jenis Pelanggaran"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Jenis Pelanggaran --
                  </MenuItem>
                  {jenisOptions.map((option) => (
                    <MenuItem key={option.kode} value={option.kode}>
                      {option.jenis} ({option.point} point)
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Point */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Point"
                variant="outlined"
                type="number"
                name="point"
                value={formData.point}
                onChange={handleInputChange}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            {/* Jumlah Pelanggaran */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jumlah Pelanggaran"
                variant="outlined"
                type="number"
                name="jumlahPelanggaran"
                value={formData.jumlahPelanggaran}
                onChange={handleJumlahChange}
              />
            </Grid>

            {/* Total Skor */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Total Skor"
                variant="outlined"
                type="number"
                name="totalSkor"
                value={formData.totalSkor}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            {/* Buttons */}
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "#009688",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#00796b",
                  },
                }}
              >
                Simpan
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                variant="outlined"
                fullWidth
                onClick={handleCancel}
                sx={{
                  mt: 2,
                  borderColor: "#f44336",
                  color: "#f44336",
                  "&:hover": {
                    borderColor: "#d32f2f",
                    backgroundColor: "rgba(244, 67, 54, 0.04)",
                  },
                }}
              >
                Batalkan
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default TambahSkorSiswa;
