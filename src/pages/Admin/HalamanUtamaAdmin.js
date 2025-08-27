import React from "react";
import sekolahImg from "../../assets/profile-picture.jpeg";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import {
  PeopleAlt,
  EventNote,
  Assessment,
  AdminPanelSettings,
} from "@mui/icons-material";

const HalamanUtamaAdmin = () => {
  return (
    <Container maxWidth="lg">
      {/* Statistik Admin */}
      <Grid container spacing={3} className="mt-4">
        {/* Baris Pertama - 2 Kartu */}
        <Grid item xs={12} md={6}>
          {/* Kartu Statistik 1: Pengguna Sistem */}
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <PeopleAlt sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>10</span>{" "}
                  pengguna baru terdaftar{" "}
                  <a
                    href="/admin/pengguna"
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
                Total 245
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Pengguna Sistem
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Kartu Statistik 2: Aktivitas Sistem */}
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <EventNote sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini <span style={{ color: "black" }}>50</span> aktivitas
                  sistem tercatat{" "}
                  <a
                    href="/admin/aktivitas"
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
                Total 1,250
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Aktivitas Sistem
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Baris Kedua - 2 Kartu */}
        <Grid item xs={12} md={6}>
          {/* Kartu Statistik 3: Laporan */}
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Assessment sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Minggu ini <span style={{ color: "black" }}>12</span> laporan
                  dihasilkan{" "}
                  <a
                    href="/admin/laporan"
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
                Total 87
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Laporan Sistem
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Kartu Statistik 4: Manajemen Akses */}
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <AdminPanelSettings sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini <span style={{ color: "black" }}>2</span> permintaan
                  perubahan hak akses{" "}
                  <a
                    href="/admin/akses"
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
                Total 18
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Manajemen Akses
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

export default HalamanUtamaAdmin;
