// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import halaman-halaman Siswa
import HalamanUtamaSiswa from "./pages/siswas/HalamanUtamaSiswa";
import HistoryBimbinganSiswa from "./pages/siswas/HistoryBimbinganSiswa";
import WebChatSiswa from "./pages/siswas/WebChatSiswa";
import ChatRoomSiswa from "./pages/siswas/ChatRoomSiswa";
import VideoChatSiswa from "./pages/siswas/VideoChatSiswa";
import Layanan from "./pages/siswas/Layanan";
import DaftarSkorSiswa from "./pages/siswas/HistorySkor";

// Import halaman-halaman Konselor
import HalamanUtamaKonselor from "./pages/konselor/HalamanUtamaKonselor";
import ProfilKonselor from "./pages/konselor/ProfilKonselor";
import DataSiswa from "./pages/konselor/DataSiswa";
import DataBimbinganKonseling from "./pages/konselor/DataBimbinganKonseling";
import LihatDataBimbinganKonseling from "./pages/konselor/LihatDataBimbinganKonseling";
import HistoryBimbinganKonselor from "./pages/konselor/HistoryBimbinganKonselor";
import WebChatKonselor from "./pages/konselor/WebChatKonselor";
import VideoChatKonselor from "./pages/konselor/VideoChatKonselor";
import LaporanPeriode from "./pages/konselor/LaporanPeriode";
import LaporanSiswa from "./pages/konselor/LaporanSiswa";
import LaporanJenis from "./pages/konselor/LaporanJenis";
import LayananKonselor from "./pages/konselor/Layanan";
import SkorSiswa from "./pages/konselor/SkorSiswa";
import TambahSkor from "./pages/konselor/TambahSkor";
import DaftarPelanggaran from "./pages/konselor/DaftarPelanggaran";
import TambahDataPelanggaran from "./pages/konselor/TambahData";

import LandingPage from "./components/landingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import VideoCallSiswa from "./pages/siswas/VideoCallSiswa";
import UbahPassword from "./components/UbahPassword";

import ChatRoomKonselor from "./pages/konselor/ChatRoomKonselor";
import VideoCallKonselor from "./pages/konselor/VideoCallKonselor";
import MainLayout from "./layout/MainLayout";
import Layout from "./layout/Layout";
import DataOrangTua from "./pages/konselor/DataOrangTua";
import InputDataBimbingan from "./pages/konselor/InputDataBimbingan";

// Import halaman-halaman orang tua
import HalamanUtamaOrtu from "./pages/OrangTua/HalamanUtamaOrtu";
import HistoryBimbinganOrtu from "./pages/OrangTua/HistoryBimbinganOrtu";
import DaftarSkorSiswas from "./pages/OrangTua/HistorySkor";

// Import halaman-halaman admin
import HalamanUtamaAdmin from "./pages/Admin/HalamanUtamaAdmin";
import FormPengguna from "./pages/Admin/FormPengguna";
import FormKonselor from "./pages/Admin/FormKonselor";
import FormSiswa from "./pages/Admin/FormSIswa";
import LaporanJenisAdmin from "./pages/Admin/LaporanJenisAdmin";
import LaporanPeriodeAdmin from "./pages/Admin/LaporanPeriodeAdmin";
import LaporanSiswaAdmin from "./pages/Admin/LaporanSiswaAdmin";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route element={<MainLayout />}>
          {/* Rute untuk Siswa */}
          <Route path="/siswa" element={<HalamanUtamaSiswa />} />
          <Route path="/siswa/history" element={<HistoryBimbinganSiswa />} />
          <Route path="/siswa/webchat" element={<WebChatSiswa />} />
          <Route path="/siswa/webchat/:konselor" element={<ChatRoomSiswa />} />
          <Route path="/siswa/videochat" element={<VideoChatSiswa />} />
          <Route
            path="/siswa/videochat/:konselor"
            element={<VideoCallSiswa />}
          />

          <Route path="/siswa/layanan" element={<Layanan />} />
          <Route path="/siswa/skor" element={<DaftarSkorSiswa />} />

          {/* Rute untuk Konselor */}
          <Route path="/konselor" element={<HalamanUtamaKonselor />} />
          <Route path="/konselor/profil" element={<ProfilKonselor />} />
          <Route path="/konselor/data-siswa" element={<DataSiswa />} />
          <Route
            path="/konselor/data-siswa/:nis/orangtua"
            element={<DataOrangTua />}
          />
          <Route
            path="/konselor/data-bimbingan"
            element={<DataBimbinganKonseling />}
          />
          <Route
            path="/konselor/data-bimbingan/input"
            element={<InputDataBimbingan />}
          />
          <Route
            path="/konselor/lihat-bimbingan"
            element={<LihatDataBimbinganKonseling />}
          />
          <Route
            path="/konselor/history"
            element={<HistoryBimbinganKonselor />}
          />
          <Route path="konselor/skorsiswa" element={<SkorSiswa />} />
          <Route path="Konselor/tambahskor" element={<TambahSkor />} />
          <Route
            path="konselor/daftarpelanggran"
            element={<DaftarPelanggaran />}
          />
          <Route
            path="konselor/tambahdata"
            element={<TambahDataPelanggaran />}
          />
          <Route path="/konselor/webchat" element={<WebChatKonselor />} />
          <Route
            path="/konselor/webchat/:siswa"
            element={<ChatRoomKonselor />}
          />
          <Route path="/konselor/videochat" element={<VideoChatKonselor />} />
          <Route
            path="/konselor/videochat/:siswa"
            element={<VideoCallKonselor />}
          />
          <Route path="/konselor/layanan" element={<LayananKonselor />} />
          <Route
            path="/konselor/laporan/periode"
            element={<LaporanPeriode />}
          />
          <Route path="/konselor/laporan/siswa" element={<LaporanSiswa />} />
          <Route path="/konselor/laporan/jenis" element={<LaporanJenis />} />
          {/* Rute untuk Orang tua */}
          <Route path="/orangtua" element={<HalamanUtamaOrtu />} />
          <Route path="/orangtua/history" element={<HistoryBimbinganOrtu />} />
          <Route path="orangtua/skor" element={<DaftarSkorSiswas />} />

          {/* Rute untuk Admin */}
          <Route path="/admin" element={<HalamanUtamaAdmin />} />
          <Route path="/admin/form/konselor" element={<FormKonselor />} />
          <Route path="/admin/form/pengguna" element={<FormPengguna />} />
          <Route path="/admin/form/siswa" element={<FormSiswa />} />
          <Route
            path="/admin/laporan/periode"
            element={<LaporanPeriodeAdmin />}
          />
          <Route path="/admin/laporan/siswa" element={<LaporanSiswaAdmin />} />
          <Route path="/admin/laporan/jenis" element={<LaporanJenisAdmin />} />
        </Route>

        <Route element={<Layout />}>
          {/* Rute default */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot-password" element={<UbahPassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
