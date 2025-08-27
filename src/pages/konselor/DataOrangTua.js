import React from "react";
import { Table } from "react-bootstrap";
import { Typography, Paper, Card, CardContent, Grid } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.jpg";

// Data Orang Tua
const dataOrangTua = {
  "0013814620": {
    namaAyah: "Budi Santoso",
    tempatLahirAyah: "Jakarta",
    tanggalLahirAyah: "15-04-1980",
    agamaAyah: "Islam",
    pekerjaanAyah: "Wiraswasta",

    namaIbu: "Siti Aminah",
    tempatLahirIbu: "Bandung",
    tanggalLahirIbu: "20-06-1982",
    agamaIbu: "Islam",
    pekerjaanIbu: "Ibu Rumah Tangga",

    alamat: "Jl. Merdeka No. 10, Jakarta",
    telepon: "081234567890",
    statusPernikahan: "Menikah",
  },
  "0013814621": {
    namaAyah: "Rizal Hidayat",
    tempatLahirAyah: "Surabaya",
    tanggalLahirAyah: "10-09-1978",
    agamaAyah: "Islam",
    pekerjaanAyah: "Pegawai Negeri",

    namaIbu: "Dewi Kartika",
    tempatLahirIbu: "Surabaya",
    tanggalLahirIbu: "05-12-1980",
    agamaIbu: "Islam",
    pekerjaanIbu: "Guru",

    alamat: "Jl. Diponegoro No. 15, Surabaya",
    telepon: "081298765432",
    statusPernikahan: "Menikah",
  },
  "0013814622": {
    namaAyah: "Andi Saputra",
    tempatLahirAyah: "Medan",
    tanggalLahirAyah: "02-07-1975",
    agamaAyah: "Kristen",
    pekerjaanAyah: "Dokter",

    namaIbu: "Maria Fransisca",
    tempatLahirIbu: "Medan",
    tanggalLahirIbu: "14-11-1977",
    agamaIbu: "Kristen",
    pekerjaanIbu: "Perawat",

    alamat: "Jl. Sudirman No. 20, Medan",
    telepon: "081345678901",
    statusPernikahan: "Menikah",
  },
  "0013814623": {
    namaAyah: "I Made Putra",
    tempatLahirAyah: "Bali",
    tanggalLahirAyah: "18-01-1981",
    agamaAyah: "Hindu",
    pekerjaanAyah: "Petani",

    namaIbu: "Ni Luh Ayu",
    tempatLahirIbu: "Bali",
    tanggalLahirIbu: "25-03-1983",
    agamaIbu: "Hindu",
    pekerjaanIbu: "Penjual",

    alamat: "Jl. Legian No. 8, Bali",
    telepon: "081389012345",
    statusPernikahan: "Menikah",
  },
  "0013814624": {
    namaAyah: "Sugeng Wijaya",
    tempatLahirAyah: "Semarang",
    tanggalLahirAyah: "30-08-1979",
    agamaAyah: "Hindu",
    pekerjaanAyah: "Pengusaha",

    namaIbu: "Lina Sutanto",
    tempatLahirIbu: "Semarang",
    tanggalLahirIbu: "10-10-1981",
    agamaIbu: "Hindu",
    pekerjaanIbu: "Ibu Rumah Tangga",

    alamat: "Jl. Sisingamangaraja No. 9, Semarang",
    telepon: "081278901234",
    statusPernikahan: "Menikah",
  },
  "0013814625": {
    namaAyah: "Ahmad Fauzi",
    tempatLahirAyah: "Yogyakarta",
    tanggalLahirAyah: "15-05-1976",
    agamaAyah: "Islam",
    pekerjaanAyah: "Dosen",

    namaIbu: "Fitri Wahyuni",
    tempatLahirIbu: "Yogyakarta",
    tanggalLahirIbu: "22-07-1978",
    agamaIbu: "Islam",
    pekerjaanIbu: "PNS",

    alamat: "Jl. Malioboro No. 5, Yogyakarta",
    telepon: "081501234567",
    statusPernikahan: "Menikah",
  },
  "0013814626": {
    namaAyah: "Hendrik Pranata",
    tempatLahirAyah: "Pontianak",
    tanggalLahirAyah: "05-03-1982",
    agamaAyah: "Kristen",
    pekerjaanAyah: "Kontraktor",

    namaIbu: "Elisabeth Sari",
    tempatLahirIbu: "Pontianak",
    tanggalLahirIbu: "19-06-1984",
    agamaIbu: "Kristen",
    pekerjaanIbu: "Pegawai Bank",

    alamat: "Jl. Ahmad Yani No. 6, Pontianak",
    telepon: "081612345678",
    statusPernikahan: "Menikah",
  },
  "0013814627": {
    namaAyah: "Samsul Bahri",
    tempatLahirAyah: "Makassar",
    tanggalLahirAyah: "20-11-1980",
    agamaAyah: "Islam",
    pekerjaanAyah: "Nelayan",

    namaIbu: "Rahmawati",
    tempatLahirIbu: "Makassar",
    tanggalLahirIbu: "08-08-1982",
    agamaIbu: "Islam",
    pekerjaanIbu: "Pedagang",

    alamat: "Jl. Pettarani No. 11, Makassar",
    telepon: "081490123456",
    statusPernikahan: "Menikah",
  },
  "0013814628": {
    namaAyah: "Sutrisno",
    tempatLahirAyah: "Palembang",
    tanggalLahirAyah: "12-09-1977",
    agamaAyah: "Islam",
    pekerjaanAyah: "Sopir",

    namaIbu: "Sri Wahyuni",
    tempatLahirIbu: "Palembang",
    tanggalLahirIbu: "03-04-1980",
    agamaIbu: "Islam",
    pekerjaanIbu: "Ibu Rumah Tangga",

    alamat: "Jl. Gatot Subroto No. 7, Palembang",
    telepon: "081356789012",
    statusPernikahan: "Menikah",
  },
  "0013814629": {
    namaAyah: "Roni Saputra",
    tempatLahirAyah: "Bandung",
    tanggalLahirAyah: "25-02-1979",
    agamaAyah: "Islam",
    pekerjaanAyah: "Pekerja Pabrik",

    namaIbu: "Lestari Dewi",
    tempatLahirIbu: "Bandung",
    tanggalLahirIbu: "17-09-1981",
    agamaIbu: "Islam",
    pekerjaanIbu: "Penjahit",

    alamat: "Jl. Asia Afrika No. 13, Bandung",
    telepon: "081234567899",
    statusPernikahan: "Menikah",
  },
};

const DataOrangTua = () => {
  const { nis } = useParams(); // Mendapatkan nama konselor dari URL

  const location = useLocation();
  const siswa = location.state?.siswa;

  const nisSiswa = siswa ? siswa.nis : nis;

  // Ambil data orang tua berdasarkan NIS siswa yang dipilih
  const orangTua = siswa ? dataOrangTua[nisSiswa] : null;

  return (
    <>
      {/* Judul Halaman */}
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Data Orang Tua
      </Typography>

      {/* Kartu Informasi Siswa */}
      <Paper elevation={3} className="p-4 mb-4">
        <Card className="p-3">
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <img
                src={siswa?.foto || defaultAvatar} // Gambar default jika tidak ada foto siswa
                alt="Foto Siswa"
                style={{
                  width: "110px",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "5px", // Agar tetap kotak dengan sudut sedikit melengkung
                  border: "1px solid #ddd",
                }}
              />
            </Grid>
            <Grid item xs>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", minWidth: "120px" }}
                      align="left"
                    >
                      NIS
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">: {siswa?.nis}</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", minWidth: "120px" }}
                      align="left"
                    >
                      Nama
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      : {siswa?.namaLengkap}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", minWidth: "120px" }}
                      align="left"
                    >
                      Tempat, Tanggal Lahir
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      : {siswa?.tempatLahir}, {siswa?.tanggalLahir}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", minWidth: "120px" }}
                      align="left"
                    >
                      Alamat
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">: {siswa?.alamat}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Paper>

      {/* Tabel Data Orang Tua */}
      <Paper elevation={3} className="p-4">
        <Typography variant="h6" className="fw-bold mb-3">
          Data Orang Tua
        </Typography>

        {orangTua ? (
          <Table bordered striped responsive>
            <thead className="table-dark">
              <tr>
                <th style={{ minWidth: "200px" }}>Nama Ayah</th>
                <th style={{ minWidth: "150px" }}>Tempat Lahir Ayah</th>
                <th style={{ minWidth: "150px" }}>Tanggal Lahir Ayah</th>
                <th style={{ minWidth: "150px" }}>Agama Ayah</th>
                <th style={{ minWidth: "150px" }}>Pekerjaan Ayah</th>
                <th style={{ minWidth: "200px" }}>Nama Ibu</th>
                <th style={{ minWidth: "150px" }}>Tempat Lahir Ibu</th>
                <th style={{ minWidth: "150px" }}>Tanggal Lahir Ibu</th>
                <th style={{ minWidth: "150px" }}>Agama Ibu</th>
                <th style={{ minWidth: "150px" }}>Pekerjaan Ibu</th>
                <th style={{ minWidth: "200px" }}>Alamat</th>
                <th style={{ minWidth: "150px" }}>Telepon</th>
                <th style={{ minWidth: "150px" }}>Status Pernikahan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ minWidth: "150px" }}>{orangTua.namaAyah}</td>
                <td>{orangTua.tempatLahirAyah}</td>
                <td>{orangTua.tanggalLahirAyah}</td>
                <td>{orangTua.agamaAyah}</td>
                <td>{orangTua.pekerjaanAyah}</td>
                <td>{orangTua.namaIbu}</td>
                <td>{orangTua.tempatLahirIbu}</td>
                <td>{orangTua.tanggalLahirIbu}</td>
                <td>{orangTua.agamaIbu}</td>
                <td>{orangTua.pekerjaanIbu}</td>
                <td>{orangTua.alamat}</td>
                <td>{orangTua.telepon}</td>
                <td>{orangTua.statusPernikahan}</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Typography variant="body1">
            Data orang tua tidak ditemukan.
          </Typography>
        )}
      </Paper>
    </>
  );
};

export default DataOrangTua;
