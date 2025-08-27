import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import logoSekolah from "../../assets/logo_sekolah.jpg";
import logoPoint from "../../assets/logo_konselor.jpg";

const TambahDataPelanggaran = () => {
  const [formData, setFormData] = useState({
    kodePelanggaran: "",
    jenisPelanggaran: "",
    point: "",
    hukuman: "",
  });

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
    alert("Data pelanggaran berhasil disimpan!");
  };

  // Handle form cancellation
  const handleCancel = () => {
    // Reset form
    setFormData({
      kodePelanggaran: "",
      jenisPelanggaran: "",
      point: "",
      hukuman: "",
    });
    alert("Input dibatalkan");
  };

  // Auto-generate a code for new violations
  const generateKodePelanggaran = () => {
    // This is a simple example - you might want to implement a more robust system
    const randomNumber = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `P${randomNumber}`;
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
          Tambah Data Pelanggaran
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Kode Pelanggaran */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Kode Pelanggaran"
                variant="outlined"
                name="kodePelanggaran"
                value={formData.kodePelanggaran}
                onChange={handleInputChange}
                placeholder="Contoh: P009"
                helperText="Masukkan kode unik atau klik generate"
                InputProps={{
                  endAdornment: (
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          kodePelanggaran: generateKodePelanggaran(),
                        });
                      }}
                    >
                      Generate
                    </Button>
                  ),
                }}
              />
            </Grid>

            {/* Jenis Pelanggaran */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Jenis Pelanggaran"
                variant="outlined"
                name="jenisPelanggaran"
                value={formData.jenisPelanggaran}
                onChange={handleInputChange}
                required
                placeholder="Contoh: Menggunakan handphone saat pelajaran"
              />
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
                required
                InputProps={{
                  inputProps: { min: 1 },
                }}
                placeholder="Contoh: 10"
                helperText="Masukkan nilai point pelanggaran (angka positif)"
              />
            </Grid>

            {/* Hukuman */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hukuman"
                variant="outlined"
                name="hukuman"
                value={formData.hukuman}
                onChange={handleInputChange}
                multiline
                rows={3}
                placeholder="Contoh: Membersihkan halaman sekolah selama 3 hari"
                helperText="Deskripsikan konsekuensi atau hukuman untuk pelanggaran ini"
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

export default TambahDataPelanggaran;
