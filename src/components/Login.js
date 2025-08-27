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
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import logo from "../assets/logo_sekolah.jpg"; // Sesuaikan dengan path logo
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Admin");

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
              Login ke Sistem BK
            </Typography>
          </div>

          {/* Input Email */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your email"
            className="mb-3"
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
            type={showPassword ? "text" : "password"}
            variant="outlined"
            placeholder="Enter your password"
            className="mb-3"
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

          {/* Pilihan Role Login */}
          <FormControl fullWidth variant="outlined" className="mb-3">
            <InputLabel id="role-label">Masuk Sebagai</InputLabel>
            <Select
              labelId="role-label"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Masuk Sebagai"
            >
              <MenuItem value="Siswa">Siswa</MenuItem>
              <MenuItem value="Guru BK">Guru BK</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Orang Tua">Orang Tua</MenuItem>
            </Select>
          </FormControl>

          {/* Tombol Login */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="mb-3"
            onClick={() => {
              if (role === "Guru BK") {
                window.location.href = "/konselor";
              } else if (role === "Siswa") {
                window.location.href = "/siswa";
              } else if (role === "Orang Tua") {
                window.location.href = "/OrangTua";
              } else if (role === "Admin") {
                window.location.href = "/admin";
              }
            }}
          >
            Sign In
          </Button>

          {/* Link Lupa Password */}
          <Link to="/forgot-password" style={{ textDecoration: "none" }}>
            <Typography variant="body2" className="text-center text-primary">
              Lupa Password?
            </Typography>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
