import React from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { Typography, Paper } from "@mui/material";

// Simulasi Data Siswa
const dataSiswa = [
  { nis: "000072733", namaLengkap: "Putri Sapitri", namaPanggilan: "Putri" },
  { nis: "0013456787", namaLengkap: "Rangga Permana", namaPanggilan: "Rangga" },
  {
    nis: "0013813458",
    namaLengkap: "Andremansyah Pratama",
    namaPanggilan: "Andre",
  },
];

const DataBimbinganKonseling = () => {
  const navigate = useNavigate();

  // Navigasi ke halaman input BK dengan membawa data siswa yang dipilih
  const handlePilihSiswa = (siswa) => {
    navigate("/konselor/data-bimbingan/input", { state: { siswa } });
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Data Siswa
      </Typography>

      {/* Tabel Data Siswa */}
      <Paper elevation={3} className="p-4">
        <Table bordered striped responsive>
          <thead className="table-dark">
            <tr>
              <th>NIS</th>
              <th>Nama Lengkap</th>
              <th>Nama Panggilan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataSiswa.map((siswa, index) => (
              <tr key={index}>
                <td>{siswa.nis}</td>
                <td>{siswa.namaLengkap}</td>
                <td>{siswa.namaPanggilan}</td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handlePilihSiswa(siswa)}
                  >
                    Pilih Siswa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Paper>
    </>
  );
};

export default DataBimbinganKonseling;
