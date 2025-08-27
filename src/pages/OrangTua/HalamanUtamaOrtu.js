import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { Notifications, FamilyRestroom } from "@mui/icons-material";

// Data layanan BK
const layananBK = [
  {
    title: "Layanan Bimbingan Klasikal",
    description:
      "Layanan bantuan yang diberikan kepada siswa dalam kelompok besar (30-40 orang) melalui kegiatan klasikal yang bersifat preventif dan sistematis.",
  },
  {
    title: "Layanan Bimbingan Kelas Besar",
    description:
      "Kegiatan bimbingan yang diberikan kepada kelompok besar dalam kelas dengan materi pengembangan diri, sosial, dan akademik.",
  },
  {
    title: "Layanan Bimbingan Kelompok",
    description:
      "Layanan bimbingan yang dilakukan dalam kelompok kecil (5-10 orang) untuk membahas permasalahan bersama dengan pendekatan diskusi.",
  },
  {
    title: "Layanan Konseling Individual",
    description:
      "Konseling yang diberikan secara tatap muka antara konselor dan siswa untuk membahas permasalahan pribadi secara lebih mendalam.",
  },
  {
    title: "Layanan Mediasi",
    description:
      "Proses bimbingan yang membantu penyelesaian konflik antara siswa dengan teman, guru, atau pihak lain melalui pihak ketiga yang netral.",
  },
  {
    title: "Layanan Konsultasi",
    description:
      "Layanan yang memungkinkan siswa dan orang tua berkonsultasi dengan konselor mengenai perkembangan akademik dan sosial siswa.",
  },
  {
    title: "Layanan Advokasi",
    description:
      "Dukungan yang diberikan kepada siswa dalam menyuarakan hak mereka untuk mendapatkan lingkungan belajar yang nyaman dan kondusif.",
  },
  {
    title: "Layanan Peminatan & Perencanaan Individual",
    description:
      "Bimbingan yang diberikan kepada siswa dalam menentukan pilihan jurusan, karir, dan rencana masa depan sesuai dengan minat dan bakat mereka.",
  },
  {
    title: "Layanan Kunjungan Rumah",
    description:
      "Layanan di mana konselor mengunjungi rumah siswa untuk mengetahui kondisi keluarga yang dapat mempengaruhi perkembangan akademik dan sosialnya.",
  },
  {
    title: "Layanan Reveral (Tindak Lanjut)",
    description:
      "Tindakan lanjutan yang dilakukan oleh konselor jika siswa membutuhkan bantuan lebih lanjut dari pihak eksternal seperti psikolog atau ahli lainnya.",
  },
];

const HalamanUtamaOrtu = () => {
  return (
    <Container maxWidth="lg">
      {/* Statistik Layanan */}
      <Grid container spacing={3} className="mt-4">
        {/* Kartu Statistik 1: Notifikasi Sekolah */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <Notifications sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>0</span>{" "}
                  notifikasi baru dari sekolah{" "}
                  <a
                    href="/orangtua/notifikasi"
                    style={{
                      color: "#007bff",
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
                Total 0
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Notifikasi Sekolah
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Kartu Statistik 2: Kehadiran Siswa */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 2, boxShadow: 3, borderRadius: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <FamilyRestroom sx={{ fontSize: 40, color: "#555" }} />
                <Typography
                  variant="body1"
                  sx={{ color: "red", fontWeight: "bold" }}
                >
                  Hari ini ada <span style={{ color: "black" }}>1</span>{" "}
                  bimbingan yang di lakukan oleh anak anda{" "}
                  <a
                    href="/orangtua/kehadiran"
                    style={{
                      color: "#007bff",
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
                Total 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Bimbingan Peserta Didik
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Judul untuk Layanan BK */}
      <Box mt={4} mb={2}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#00796B" }}>
          Layanan Bimbingan Konseling
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Berikut adalah layanan BK yang tersedia untuk peserta didik
        </Typography>
      </Box>

      {/* Daftar Layanan BK */}
      <Grid container spacing={3} className="mt-2">
        {layananBK.map((layanan, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 2, boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#00796B" }}
                >
                  {layanan.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {layanan.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HalamanUtamaOrtu;
