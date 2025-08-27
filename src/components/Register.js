import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
} from "@mui/icons-material";
import logo from "../assets/logo_sekolah.jpg"; // Sesuaikan dengan path logo

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("Siswa");
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data:", formData, "User type:", userType);
    // Redirect or show success message
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <Row className="w-100 justify-content-center">
        <Col md={4} className="shadow p-4 bg-white rounded">
          {/* Logo dan Judul */}
          <div className="text-center mb-3">
            <img src={logo} alt="Logo Sekolah" style={{ height: "70px" }} />
            <Typography variant="h5" className="fw-bold mt-2">
              Daftar ke Sistem BK
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            {" "}
            {/* Input Nama */}
            <TextField
              fullWidth
              name="nama"
              variant="outlined"
              placeholder="Masukkan Nama"
              className="mb-3"
              value={formData.nama}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            {/* Input Email */}
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              placeholder="Masukkan Email"
              className="mb-3"
              type="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            {/* Input Password */}
            <TextField
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              placeholder="Masukkan Password"
              className="mb-3"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Pilihan Daftar Sebagai */}
            <FormControl fullWidth variant="outlined" className="mb-3">
              <InputLabel id="user-type-label">Daftar Sebagai</InputLabel>
              <Select
                labelId="user-type-label"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                label="Daftar Sebagai"
              >
                <MenuItem value="Siswa">Siswa</MenuItem>
                <MenuItem value="Orang Tua">Orang Tua</MenuItem>
              </Select>
            </FormControl>
            {/* Tombol Daftar */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="mb-3"
              type="submit"
            >
              Daftar
            </Button>
          </form>

          {/* Link ke Halaman Login */}
          <Typography variant="body2" className="text-center">
            Sudah punya akun?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location.href = "/login")}
            >
              Login disini
            </span>
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
