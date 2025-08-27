import React from "react";
import sekolahImg from "../../assets/profile-picture.jpeg";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import {
  Psychology,
  Groups,
  PersonSearch,
  School,
  RecordVoiceOver,
} from "@mui/icons-material";

const HalamanUtamaKonselor = () => {
  return (
    <Container maxWidth="lg">
      {/* Statistik Layanan BK */}
      <Grid container spacing={3} className="mt-4">
        {/* Kartu Statistik 1: Konseling Individual */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Psychology sx={{ fontSize: 40, color: "#5D4037" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>2</span> sesi
                  konseling individual{" "}
                  <a
                    href="/konselor/konseling/individual"
                    style={{
                      color: "#0277BD",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Lihat Detail
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "#00796B", fontWeight: "bold", mt: 1 }}
              >
                Total 24
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Konseling Individual
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Kartu Statistik 2: Konseling Kelompok */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Groups sx={{ fontSize: 40, color: "#5D4037" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>1</span> sesi
                  konseling kelompok{" "}
                  <a
                    href="/konselor/konseling/kelompok"
                    style={{
                      color: "#0277BD",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Lihat Detail
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "#00796B", fontWeight: "bold", mt: 1 }}
              >
                Total 15
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Konseling Kelompok
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Kartu Statistik 3: Bimbingan Karir */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <PersonSearch sx={{ fontSize: 40, color: "#5D4037" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>0</span> sesi
                  bimbingan karir{" "}
                  <a
                    href="/konselor/bimbingan/karir"
                    style={{
                      color: "#0277BD",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Lihat Detail
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "#00796B", fontWeight: "bold", mt: 1 }}
              >
                Total 8
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bimbingan Karir
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Kartu Statistik 4: Bimbingan Akademik */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <School sx={{ fontSize: 40, color: "#5D4037" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Minggu ini ada <span style={{ color: "black" }}>5</span> kasus
                  akademik terlaporkan{" "}
                  <a
                    href="/konselor/bimbingan/akademik"
                    style={{
                      color: "#0277BD",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Lihat Detail
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "#00796B", fontWeight: "bold", mt: 1 }}
              >
                Total 32
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bimbingan Akademik
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Kartu Statistik 5: Konseling Orang Tua */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <RecordVoiceOver sx={{ fontSize: 40, color: "#5D4037" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Bulan ini ada <span style={{ color: "black" }}>3</span>{" "}
                  pertemuan dengan orang tua{" "}
                  <a
                    href="/konselor/konseling/orangtua"
                    style={{
                      color: "#0277BD",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    Lihat Detail
                  </a>
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ color: "#00796B", fontWeight: "bold", mt: 1 }}
              >
                Total 12
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Konseling Orang Tua
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Gambar Sekolah */}
      <Box className="mt-3">
        <img
          src={sekolahImg}
          alt="Gambar Sekolah"
          className="img-fluid shadow-lg rounded"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default HalamanUtamaKonselor;
