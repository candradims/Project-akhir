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
import logoBK from "../../assets/logo_konselor.jpg"; // Sesuaikan dengan path logo

const PengajuanLayanan = () => {
  const [selectedGuruBK, setSelectedGuruBK] = useState("");
  const [selectedLayanan, setSelectedLayanan] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [selectedJurusan, setSelectedJurusan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [tanggal, setTanggal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      guruBK: selectedGuruBK,
      layanan: selectedLayanan,
      kelas: selectedKelas,
      jurusan: selectedJurusan,
      keterangan,
      tanggal,
    });
    // Submit form or show confirmation
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
          <img src={logoBK} alt="Logo BK" style={{ height: "50px" }} />
        </Box>

        {/* Title */}
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          Layanan Pengajuan Bimbingan & Konseling
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Guru BK Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="guru-bk-label">Pilih Guru BK</InputLabel>
                <Select
                  labelId="guru-bk-label"
                  value={selectedGuruBK}
                  onChange={(e) => setSelectedGuruBK(e.target.value)}
                  label="Pilih Guru BK"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Guru BK --
                  </MenuItem>
                  <MenuItem value="Lilik Nursilowati, S.Pd.">
                    Lilik Nursilowati, S.Pd.
                  </MenuItem>
                  <MenuItem value="Kurniawan Dwi Angga Efendi, S.Pd.">
                    Kurniawan Dwi Angga Efendi, S.Pd.
                  </MenuItem>
                  <MenuItem value="Ainul Azizah, S.Pd.">
                    Ainul Azizah, S.Pd.
                  </MenuItem>
                  <MenuItem value="M. Shodik Khairan, S.Pd.">
                    M. Shodik Khairan, S.Pd.
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Date Selection - Added date field */}
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Tanggal
              </Typography>
              <TextField
                fullWidth
                type="date"
                variant="outlined"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            {/* Layanan Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="layanan-label">Pilih Layanan</InputLabel>
                <Select
                  labelId="layanan-label"
                  value={selectedLayanan}
                  onChange={(e) => setSelectedLayanan(e.target.value)}
                  label="Pilih Layanan"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Layanan --
                  </MenuItem>
                  <MenuItem value="Layanan Bimbingan Klasikal">
                    Layanan Bimbingan Klasikal
                  </MenuItem>
                  <MenuItem value="Layanan Bimbingan Kelas Besar">
                    Layanan Bimbingan Kelas Besar
                  </MenuItem>
                  <MenuItem value="Layanan Bimbingan Kelompok">
                    Layanan Bimbingan Kelompok
                  </MenuItem>
                  <MenuItem value="Layanan Konseling Individual">
                    Layanan Konseling Individual
                  </MenuItem>
                  <MenuItem value="Layanan Mediasi">Layanan Mediasi</MenuItem>
                  <MenuItem value="Layanan Konsultasi">
                    Layanan Konsultasi
                  </MenuItem>
                  <MenuItem value="Layanan Advokasi">Layanan Advokasi</MenuItem>
                  <MenuItem value="Layanan Peminatan dan Perencanaan Individual">
                    Layanan Peminatan dan Perencanaan Individual
                  </MenuItem>
                  <MenuItem value="Layanan Kunjungan Rumah">
                    Layanan Kunjungan Rumah
                  </MenuItem>
                  <MenuItem value="Layanan Reveral atau Tindak Lanjut">
                    Layanan Reveral atau Tindak Lanjut
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Kelas Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="kelas-label">Pilih Kelas</InputLabel>
                <Select
                  labelId="kelas-label"
                  value={selectedKelas}
                  onChange={(e) => setSelectedKelas(e.target.value)}
                  label="Pilih Kelas"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Kelas --
                  </MenuItem>
                  <MenuItem value="10">Kelas 10</MenuItem>
                  <MenuItem value="11">Kelas 11</MenuItem>
                  <MenuItem value="12">Kelas 12</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Jurusan Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="jurusan-label">Pilih Jurusan</InputLabel>
                <Select
                  labelId="jurusan-label"
                  value={selectedJurusan}
                  onChange={(e) => setSelectedJurusan(e.target.value)}
                  label="Pilih Jurusan"
                >
                  <MenuItem value="" disabled>
                    -- Pilih Jurusan --
                  </MenuItem>
                  <MenuItem value="TEI">TEI</MenuItem>
                  <MenuItem value="TPM">TPM</MenuItem>
                  <MenuItem value="TITL">TITL</MenuItem>
                  <MenuItem value="MM">MM</MenuItem>
                  <MenuItem value="APL">APL</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Keterangan */}
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Keterangan
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={3}
                placeholder="Isi keterangan..."
                variant="outlined"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
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
                Kirim
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default PengajuanLayanan;
