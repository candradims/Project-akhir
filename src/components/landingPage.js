import React from "react";
import { Container, AppBar, Toolbar } from "@mui/material";
import {
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SupportIcon from "@mui/icons-material/Support";
import SchoolIcon from "@mui/icons-material/School";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssessmentIcon from "@mui/icons-material/Assessment";
import logoSekolah from "../assets/logo_sekolah.jpg";
import logoKonselor from "../assets/logo_konselor.jpg";
import dashboardPreview from "../assets/chat.png";
import overviewPreview from "../assets/overview.png";

const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#f0f0f0", padding: "10px 0" }}
      >
        <Toolbar>
          {/* Logo Sekolah & BK */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logoSekolah}
              alt="Logo Sekolah"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <img src={logoKonselor} alt="Logo BK" style={{ height: "50px" }} />
          </Box>

          {/* Menu */}
          <Button
            color="inherit"
            sx={{ color: "black", marginRight: 2 }}
            href="#about"
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ color: "black", marginRight: 2 }}
            href="#services"
          >
            Services
          </Button>

          {/* Tombol Register */}
          <Button
            variant="outlined"
            sx={{
              fontSize: "0.75rem", // Diperkecil dari 0.85rem
              px: 2,
              py: 1,
              marginRight: 2,
              borderColor: "#007bff",
              color: "#007bff",
              "& .MuiButton-endIcon": {
                marginLeft: "4px", // Mengurangi jarak antara teks dan icon
                "& > svg": {
                  fontSize: "16px", // Memperkecil ukuran icon
                },
              },
            }}
            endIcon={<PersonAddIcon />}
            href="/register"
          >
            Register
          </Button>

          {/* Tombol Login */}
          <Button
            variant="contained"
            sx={{
              fontSize: "0.85rem",
              px: 2,
              py: 1,
              backgroundColor: "#007bff",
              color: "white",
            }}
            endIcon={<LoginIcon />}
            href="/login"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Konten */}
      <Container
        maxWidth="xl"
        className="p-3 min-vh-100 d-flex flex-column justify-content-center overflow-hidden"
        sx={{ marginTop: "20px" }}
      >
        {/* Hero Section */}
        <Grid container alignItems="center" className="flex-grow-1">
          <Grid item xs={12} md={6} className="text-md-start text-center">
            <Typography
              variant="h4"
              className="fw-bold"
              sx={{ fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" } }}
            >
              Sistem Informasi BK dan <br /> layanan Bimbingan Peserta Didik{" "}
              <br />
              <span className="text-primary">SMKN 1 Drioyorejo</span> 👋
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            className="text-center d-flex justify-content-center mt-4 mt-md-0"
          >
            <Box
              sx={{
                display: "inline-block",
                width: { xs: "100%", sm: "600px", md: "700px" },
                maxWidth: "800px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={dashboardPreview}
                alt="Dashboard Preview"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* About Section */}
        <Box id="about" sx={{ py: 8, mt: 4, scrollMarginTop: "80px" }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 5,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                backgroundColor: "#007bff",
              },
            }}
          >
            About
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "600", color: "#007bff" }}
              >
                Sistem Informasi BK dan layanan Bimbingan Peserta Didik
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Sistem Informasi BK SMKN 1 Driyorejo adalah platform digital
                terpadu yang dirancang untuk meningkatkan kualitas layanan
                bimbingan dan konseling bagi seluruh peserta didik.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Sistem ini memungkinkan peserta didik untuk berkomunikasi
                langsung dengan guru BK, menjadwalkan sesi konseling, mengakses
                materi bimbingan, serta mendapatkan informasi penting terkait
                pengembangan karir dan akademik.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ textAlign: "justify" }}
              >
                Dengan pendekatan digital, kami berupaya menghilangkan hambatan
                komunikasi dan membuat layanan BK lebih mudah diakses oleh
                seluruh peserta didik kapanpun dan dimanapun.
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                Setiap peserta didik memiliki akun pribadi yang terhubung dengan
                database sekolah, sehingga guru BK dapat memberikan bimbingan
                yang lebih personal dan terarah sesuai dengan kebutuhan
                masing-masing individu.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} className="d-flex justify-content-center">
              <Box
                sx={{
                  display: "inline-block",
                  width: { xs: "100%", sm: "500px" },
                  maxWidth: "600px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  src={overviewPreview}
                  alt="Sistem Informasi BK"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Services Section */}
        <Box
          id="services"
          sx={{
            py: 8,
            scrollMarginTop: "80px",
            backgroundColor: "#f8f9fa",
            borderRadius: "16px",
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 5,
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                backgroundColor: "#007bff",
              },
            }}
          >
            Services
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              color: "#555",
              textAlign: "justify",
            }}
          >
            Kami menyediakan berbagai layanan untuk mendukung perkembangan
            akademik, sosial, dan karir peserta didik
          </Typography>

          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 4,
              fontWeight: "bold",
              color: "#007bff",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Fitur Unggulan
          </Typography>

          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <PsychologyIcon sx={{ fontSize: 30, color: "#007bff" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Konseling Web Chat
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Layanan konseling online melalui chat yang dapat diakses
                    kapan saja dan di mana saja oleh siswa untuk berkonsultasi
                    dengan konselor.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <SupportIcon sx={{ fontSize: 30, color: "#007bff" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Konseling Video Chat
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Konseling tatap muka virtual yang memungkinkan interaksi
                    langsung antara siswa dan konselor untuk penanganan masalah
                    yang lebih intensif.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <SchoolIcon sx={{ fontSize: 30, color: "#007bff" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Sistem Pengembangan Peserta Didik
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Platform untuk pemantauan dan pengembangan kompetensi siswa
                    dalam berbagai aspek, termasuk akademik, sosial, dan karir.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 4 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <FamilyRestroomIcon
                      sx={{ fontSize: 30, color: "#007bff" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Konsultasi Orang Tua
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Fitur konsultasi daring bagi orang tua yang ingin berdiskusi
                    dengan konselor tentang perkembangan dan kebutuhan anak
                    mereka di sekolah.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 5 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarMonthIcon
                      sx={{ fontSize: 30, color: "#007bff" }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Penjadwalan Konseling
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Fitur penjadwalan yang memudahkan siswa untuk membuat janji
                    konseling sesuai dengan ketersediaan waktu konselor dan
                    preferensi siswa.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Card 6 */}
            <Grid item xs={12} md={6} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "12px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.15)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      backgroundColor: "rgba(0,123,255,0.1)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      justifyContent: "center",
                    }}
                  >
                    <AssessmentIcon sx={{ fontSize: 30, color: "#007bff" }} />
                  </Box>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ mb: 2, fontWeight: "600" }}
                  >
                    Laporan Perkembangan
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#666", textAlign: "justify" }}
                  >
                    Sistem pelaporan yang memberikan insight tentang
                    perkembangan siswa dan efektivitas program bimbingan yang
                    telah dijalankan.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Call To Action */}
        <Box sx={{ textAlign: "center", my: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Butuh Bantuan? Hubungi Konselor Sekarang
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/login"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "8px",
              boxShadow: "0 4px 14px rgba(0,123,255,0.4)",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0,123,255,0.5)",
              },
            }}
          >
            Mulai Konsultasi
          </Button>
        </Box>
      </Container>
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold">
                SMKN 1 Driyorejo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jl. Mirah Delima, Kec. Driyorejo, Kabupaten Gresik
                <br />
                Jawa Timur, Indonesia 63411
                <br />
                Telp: (031) 7580088
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 3, md: 0 },
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Jam Layanan BK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Senin - Jumat: 07.30 - 15.00
                <br />
                Sabtu: 08.00 - 12.00
                <br />
                Email: bk@smkn1driyorejo.sch.id
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={3.5}
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 3, md: 0 },
              }}
            >
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Link Cepat
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  href="#about"
                  sx={{
                    px: 0,
                    py: 0.5,
                    color: "#007bff",
                    textDecoration: "underline",
                    textTransform: "none",
                    minWidth: "auto",
                  }}
                >
                  ABOUT
                </Button>
                <Button
                  href="#services"
                  sx={{
                    px: 0,
                    py: 0.5,
                    color: "#007bff",
                    textDecoration: "underline",
                    textTransform: "none",
                    minWidth: "auto",
                  }}
                >
                  SERVICES
                </Button>
                <Button
                  href="/login"
                  sx={{
                    px: 0,
                    py: 0.5,
                    color: "#007bff",
                    textDecoration: "underline",
                    textTransform: "none",
                    minWidth: "auto",
                  }}
                >
                  LOGIN
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              pt: 2,
              textAlign: "center",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2025 Dashboard - Created By Dimas Candra Febrian
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
