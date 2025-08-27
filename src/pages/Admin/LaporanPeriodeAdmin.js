import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Typography, Paper, TextField } from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";

const LaporanPeriodeAdmin = () => {
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
      tanggal: "2025-05-03",
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
      tanggal: "2025-05-08",
      jenis: "Pelanggaran",
      isi: "Merokok di Area Sekolah",
      tindakan: "Skorsing 3 Hari",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 3,
      nis: "0033456789",
      namaSiswa: "Andi Pratama",
      kelas: "X-MM-1",
      tanggal: "2025-05-15",
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
      tanggal: "2025-05-22",
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
      tanggal: "2025-05-28",
      jenis: "Pribadi",
      isi: "Masalah Keluarga dan Motivasi",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 6,
      nis: "0063456792",
      namaSiswa: "Dewi Lestari",
      kelas: "X-TKJ-1",
      tanggal: "2025-06-05",
      jenis: "Pelanggaran",
      isi: "Terlambat Berulang Kali",
      tindakan: "Teguran Tertulis",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 7,
      nis: "0073456793",
      namaSiswa: "Fahri Rahman",
      kelas: "XII-MM-1",
      tanggal: "2025-06-12",
      jenis: "Sosial",
      isi: "Kesulitan Bergaul dan Introvert",
      tindakan: "Terapi Kelompok",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 8,
      nis: "0083456794",
      namaSiswa: "Sari Indah",
      kelas: "XI-AKL-1",
      tanggal: "2025-06-19",
      jenis: "Karier",
      isi: "Minat dan Bakat Siswa",
      tindakan: "Tes Psikologi",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
    {
      id: 9,
      nis: "0093456795",
      namaSiswa: "Rizki Aditya",
      kelas: "X-RPL-1",
      tanggal: "2025-06-25",
      jenis: "Pribadi",
      isi: "Gangguan Kecemasan",
      tindakan: "Konseling Individual",
      konselor: "Dr. Ahmad Wijaya, S.Pd",
    },
    {
      id: 10,
      nis: "0103456796",
      namaSiswa: "Nia Ramadhani",
      kelas: "XII-TKJ-1",
      tanggal: "2025-07-02",
      jenis: "Pelanggaran",
      isi: "Tidak Mengerjakan Tugas",
      tindakan: "Konseling Akademik",
      konselor: "Dra. Siti Nurhaliza, M.Pd",
    },
  ];

  // Fungsi filter berdasarkan tanggal
  const handleSearch = () => {
    const filteredData = dataBK.filter(
      (bk) => bk.tanggal >= startDate && bk.tanggal <= endDate
    );
    setSearchResult(filteredData);
  };

  // Fungsi untuk mencetak laporan ke PDF
  const handlePrintPDF = () => {
    if (searchResult.length === 0) {
      alert("Silakan lakukan pencarian terlebih dahulu sebelum export PDF");
      return;
    }

    const doc = new jsPDF("landscape"); // Menggunakan landscape untuk tabel yang lebih lebar

    // Header dokumen
    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text("LAPORAN BIMBINGAN KONSELING BERDASARKAN PERIODE", 148, 15, {
      align: "center",
    });

    doc.setFontSize(12);
    doc.setFont(undefined, "normal");
    doc.text("SMK Negeri 1 Driyorejo", 148, 25, { align: "center" });
    doc.text(`Periode: ${startDate} - ${endDate}`, 148, 35, {
      align: "center",
    });
    doc.text(`Total Data: ${searchResult.length} siswa`, 148, 45, {
      align: "center",
    });

    // Tabel data
    doc.autoTable({
      startY: 55,
      head: [
        [
          "No",
          "NIS",
          "Nama Siswa",
          "Kelas",
          "Tanggal",
          "Jenis",
          "Isi",
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
        bk.jenis,
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
        fontSize: 8,
        cellPadding: 2,
      },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" }, // No
        1: { cellWidth: 25, halign: "center" }, // NIS
        2: { cellWidth: 35 }, // Nama Siswa
        3: { cellWidth: 20, halign: "center" }, // Kelas
        4: { cellWidth: 20, halign: "center" }, // Tanggal
        5: { cellWidth: 20, halign: "center" }, // Jenis
        6: { cellWidth: 40 }, // Isi
        7: { cellWidth: 35 }, // Tindakan
        8: { cellWidth: 40 }, // Konselor
      },
      margin: { top: 55, left: 10, right: 10 },
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
    doc.save(`Laporan-Periode-BK-${startDate}-${endDate}.pdf`);
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Cetak Berdasarkan Periode
      </Typography>

      <Paper elevation={3} className="p-4 mb-4">
        <Form>
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
                            : bk.jenis === "Karier"
                            ? "bg-warning"
                            : bk.jenis === "Pelanggaran"
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
                  <td colSpan="9" className="text-center">
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
                Menampilkan {searchResult.length} data dari {dataBK.length}{" "}
                total data
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

export default LaporanPeriodeAdmin;
