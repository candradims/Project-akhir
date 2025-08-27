import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Typography, Paper, TextField, MenuItem } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const LaporanJenisAdmin = () => {
  const [jenisKonseling, setJenisKonseling] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Simulasi Data BK dengan data yang lebih lengkap
  const dataBK = [
    {
      id: 1,
      nis: "0013456787",
      namaSiswa: "Rangga Permana",
      kelas: "XII-RPL-1",
      tanggal: "2025-05-05",
      jenis: "Pribadi",
      isi: "Kesulitan Belajar Matematika",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 2,
      nis: "0023456788",
      namaSiswa: "Putri Sapitri",
      kelas: "XI-TKJ-2",
      tanggal: "2025-05-12",
      jenis: "Penegakan Kedisiplinan",
      isi: "Merokok di Area Sekolah",
      tindakan: "Skorsing 3 Hari",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 3,
      nis: "0033456789",
      namaSiswa: "Andi Pratama",
      kelas: "X-MM-1",
      tanggal: "2025-05-18",
      jenis: "Sosial",
      isi: "Konflik dengan Teman Sekelas",
      tindakan: "Mediasi Kelompok",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 4,
      nis: "0043456790",
      namaSiswa: "Maya Sari",
      kelas: "XII-AKL-1",
      tanggal: "2025-05-25",
      jenis: "Karier",
      isi: "Bimbingan Pemilihan Perguruan Tinggi",
      tindakan: "Konseling Karier",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 5,
      nis: "0053456791",
      namaSiswa: "Budi Santoso",
      kelas: "XI-RPL-2",
      tanggal: "2025-06-02",
      jenis: "Pribadi",
      isi: "Masalah Keluarga dan Motivasi",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 6,
      nis: "0063456792",
      namaSiswa: "Sari Dewi",
      kelas: "X-AKL-2",
      tanggal: "2025-06-08",
      jenis: "Pribadi",
      isi: "Gangguan Kecemasan",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 7,
      nis: "0073456793",
      namaSiswa: "Rudi Hermawan",
      kelas: "XI-TKJ-1",
      tanggal: "2025-06-15",
      jenis: "Penegakan Kedisiplinan",
      isi: "Terlambat Berulang Kali",
      tindakan: "Peringatan Tertulis",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 8,
      nis: "0083456794",
      namaSiswa: "Lisa Permata",
      kelas: "XII-MM-1",
      tanggal: "2025-06-22",
      jenis: "Sosial",
      isi: "Kesulitan Adaptasi Sosial",
      tindakan: "Group Therapy",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 9,
      nis: "0093456795",
      namaSiswa: "Fajar Ramadhan",
      kelas: "X-RPL-1",
      tanggal: "2025-07-01",
      jenis: "Belajar",
      isi: "Kesulitan Konsentrasi",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 10,
      nis: "0103456796",
      namaSiswa: "Nina Rahmawati",
      kelas: "XI-AKL-1",
      tanggal: "2025-07-08",
      jenis: "Karier",
      isi: "Bimbingan Minat Bakat",
      tindakan: "Konseling Karier",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
  ];

  // Fungsi filter berdasarkan Jenis Konseling dan tanggal
  const handleSearch = () => {
    if (!jenisKonseling) {
      alert("Silakan pilih jenis konseling");
      return;
    }
    const filteredData = dataBK.filter(
      (bk) =>
        bk.jenis.toLowerCase() === jenisKonseling.toLowerCase() &&
        bk.tanggal >= startDate &&
        bk.tanggal <= endDate
    );
    setSearchResult(filteredData);
  };

  const handlePrintPDF = () => {
    if (searchResult.length === 0) {
      alert("Silakan lakukan pencarian terlebih dahulu sebelum export PDF");
      return;
    }

    const doc = new jsPDF("landscape");

    // Header dokumen
    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text("LAPORAN BIMBINGAN KONSELING PER JENIS", 148, 15, {
      align: "center",
    });

    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.text("SMK Negeri 1 Driyorejo", 148, 25, { align: "center" });
    doc.text(`Jenis Konseling: ${jenisKonseling}`, 148, 35, {
      align: "center",
    });
    doc.text(`Periode: ${startDate} - ${endDate}`, 148, 45, {
      align: "center",
    });
    doc.text(`Total Layanan: ${searchResult.length} kasus`, 148, 55, {
      align: "center",
    });

    // Tabel data
    doc.autoTable({
      startY: 65,
      head: [
        [
          "No",
          "NIS",
          "Nama Siswa",
          "Kelas",
          "Tanggal",
          "Isi Permasalahan",
          "Tindakan",
          "Konselor",
        ],
      ],
      body: searchResult.map((bk, index) => [
        index + 1,
        bk.nis,
        bk.namaSiswa,
        bk.kelas,
        new Date(bk.tanggal).toLocaleDateString("id-ID"),
        bk.isi,
        bk.tindakan,
        bk.konselor,
      ]),
      theme: "grid",
      headStyles: {
        fillColor: [0, 123, 255],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        halign: "center",
      },
      bodyStyles: {
        fontSize: 9,
        cellPadding: 3,
      },
      columnStyles: {
        0: { cellWidth: 15, halign: "center" }, // No
        1: { cellWidth: 25, halign: "center" }, // NIS
        2: { cellWidth: 35 }, // Nama
        3: { cellWidth: 25, halign: "center" }, // Kelas
        4: { cellWidth: 25, halign: "center" }, // Tanggal
        5: { cellWidth: 65 }, // Isi
        6: { cellWidth: 50 }, // Tindakan
        7: { cellWidth: 45 }, // Konselor
      },
      margin: { top: 65, left: 10, right: 10 },
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Halaman ${i} dari ${pageCount}`, 280, 200, { align: "right" });
      doc.text(`Dicetak pada: ${new Date().toLocaleString("id-ID")}`, 20, 200);
    }

    // Simpan PDF
    doc.save(`Laporan-Jenis-${jenisKonseling.replace(/\s+/g, "-")}.pdf`);
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Cetak Berdasarkan Jenis Konseling
      </Typography>

      <Paper elevation={3} className="p-4 mb-4">
        <Form>
          <TextField
            select
            label="Jenis Konseling"
            fullWidth
            className="mb-3"
            value={jenisKonseling}
            onChange={(e) => setJenisKonseling(e.target.value)}
          >
            <MenuItem value="Pribadi">Pribadi</MenuItem>
            <MenuItem value="Sosial">Sosial</MenuItem>
            <MenuItem value="Belajar">Belajar</MenuItem>
            <MenuItem value="Karier">Karier</MenuItem>
            <MenuItem value="Penegakan Kedisiplinan">
              Penegakan Kedisiplinan
            </MenuItem>
          </TextField>
          <TextField
            label="Tanggal Mulai"
            type="date"
            fullWidth
            className="mb-3"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            label="Tanggal Akhir"
            type="date"
            fullWidth
            className="mb-3"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            Cari
          </Button>
        </Form>
      </Paper>

      <Paper elevation={3} className="p-4">
        <Typography variant="h6" className="fw-bold mb-3">
          Hasil Pencarian
        </Typography>
        <div className="table-responsive">
          <Table bordered striped>
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>NIS</th>
                <th>Nama Siswa</th>
                <th>Kelas</th>
                <th>Tanggal</th>
                <th>Jenis</th>
                <th>Isi</th>
                <th>Tindakan</th>
                <th>Konselor</th>
              </tr>
            </thead>
            <tbody>
              {searchResult.length > 0 ? (
                searchResult.map((bk, index) => (
                  <tr key={bk.id}>
                    <td>{index + 1}</td>
                    <td>{bk.nis}</td>
                    <td>{bk.namaSiswa}</td>
                    <td>{bk.kelas}</td>
                    <td>{new Date(bk.tanggal).toLocaleDateString("id-ID")}</td>
                    <td>
                      <span
                        className={`badge ${
                          bk.jenis === "Pribadi"
                            ? "bg-info"
                            : bk.jenis === "Sosial"
                            ? "bg-success"
                            : bk.jenis === "Belajar"
                            ? "bg-primary"
                            : bk.jenis === "Karier"
                            ? "bg-warning"
                            : bk.jenis === "Penegakan Kedisiplinan"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {bk.jenis}
                      </span>
                    </td>
                    <td>{bk.isi}</td>
                    <td>{bk.tindakan}</td>
                    <td>{bk.konselor}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    Tidak ada data
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        {/* Tombol Cetak PDF */}
        {searchResult.length > 0 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <small className="text-muted">
                Menampilkan {searchResult.length} layanan untuk jenis{" "}
                {jenisKonseling}
              </small>
            </div>
            <Button
              variant="success"
              onClick={handlePrintPDF}
              className="d-flex align-items-center"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                padding: "8px 16px",
              }}
            >
              <i className="fas fa-file-pdf me-2"></i>
              Export PDF
            </Button>
          </div>
        )}
      </Paper>
    </>
  );
};

export default LaporanJenisAdmin;
