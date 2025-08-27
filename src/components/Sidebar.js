import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Close as CloseIcon,
  History,
  Chat,
  VideoCall,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Person,
  School,
  Assignment,
  Visibility,
  EventNote,
  People,
  Dashboard,
  Category,
  PersonAdd,
  Groups,
  SupervisorAccount,
  ListAlt,
  Score,
} from "@mui/icons-material";

const Sidebar = ({ isOpen = false, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.toLowerCase();
  let role = "konselor";

  if (path.startsWith("/siswa")) {
    role = "siswa";
  } else if (path.startsWith("/orangtua")) {
    role = "orangtua";
  } else if (path.startsWith("/admin")) {
    role = "admin";
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className="d-none d-md-block position-fixed h-100"
        style={{
          width: "300px",
          background: "linear-gradient(180deg, #007bff 0%, #0056b3 100%)",
          zIndex: 1000,
          overflowY: "auto",
          boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <SidebarContent role={role} navigate={navigate} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <>
          <div
            className="position-fixed w-100 h-100 d-md-none mobile-sidebar-overlay"
            style={{
              background: "rgba(0,0,0,0.5)",
              zIndex: 9998,
              top: 0,
              left: 0,
            }}
            onClick={onToggle}
          />
          <div
            className="position-fixed h-100 d-md-none mobile-sidebar"
            style={{
              width: "300px",
              background: "linear-gradient(180deg, #007bff 0%, #0056b3 100%)",
              zIndex: 9999,
              top: 0,
              left: 0,
              transform: "translateX(0)",
              transition: "transform 0.3s ease-in-out",
              overflowY: "auto",
              boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <div className="d-flex justify-content-end p-3">
              <button
                className="btn p-2"
                onClick={onToggle}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                <CloseIcon sx={{ color: "white" }} />
              </button>
            </div>
            <SidebarContent role={role} navigate={navigate} />
          </div>
        </>
      )}
    </>
  );
};

const SidebarContent = ({ role, navigate }) => {
  const [openMasterData, setOpenMasterData] = useState(true);
  const [openBimbingan, setOpenBimbingan] = useState(true);
  const [openKomunikasi, setOpenKomunikasi] = useState(true);
  const [openAkses, setOpenAkses] = useState(true);
  const [openAdminMasterData, setOpenAdminMasterData] = useState(true);
  const [openAdminBimbingan, setOpenAdminBimbingan] = useState(true);
  const [openKedisiplinan, setOpenKedisiplinan] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const MenuItem = ({ icon, text, onClick, active, level = 0 }) => (
    <div
      className={`sidebar-menu-item ${active ? "active" : ""}`}
      style={{
        paddingLeft: `${16 + level * 20}px`,
        paddingRight: "16px",
        paddingTop: "12px",
        paddingBottom: "12px",
        margin: "2px 8px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        background: active ? "rgba(255,255,255,0.15)" : "transparent",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.background = "rgba(255,255,255,0.1)";
          e.target.style.transform = "translateX(4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.background = "transparent";
          e.target.style.transform = "translateX(0)";
        }
      }}
    >
      <span className="me-3">{icon}</span>
      <span style={{ fontSize: "14px", fontWeight: active ? "600" : "400" }}>
        {text}
      </span>
    </div>
  );

  const SectionHeader = ({ title, isOpen, onToggle }) => (
    <div
      className="d-flex align-items-center justify-content-between px-3 py-2 mx-2 mt-4 mb-2"
      style={{
        cursor: "pointer",
        borderRadius: "8px",
        transition: "background 0.3s ease",
      }}
      onClick={onToggle}
      onMouseEnter={(e) => {
        e.target.style.background = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "transparent";
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          color: "#e5e7eb",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </span>
      <span style={{ color: "white", transition: "transform 0.3s ease" }}>
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </span>
    </div>
  );

  const CollapsibleSection = ({ isOpen, children }) => (
    <div
      style={{
        maxHeight: isOpen ? "1000px" : "0",
        overflow: "hidden",
        transition: "max-height 0.4s ease-in-out, opacity 0.3s ease",
        opacity: isOpen ? 1 : 0,
      }}
    >
      {children}
    </div>
  );

  return (
    <div style={{ height: "100%", color: "white", position: "relative" }}>
      {/* Logo Section */}
      <div
        className="text-center py-4 border-bottom"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <h5 className="mb-0 fw-bold">Sistem Informasi BK</h5>
        <small style={{ color: "#e5e7eb" }}>SMKN 1 Driyorejo</small>
      </div>

      {/* Scrollable Menu Content */}
      <div
        style={{
          height: "calc(100% - 200px)",
          overflowY: "auto",
          paddingBottom: "20px",
        }}
      >
        {/* Dashboard */}
        <div className="mt-3">
          <MenuItem
            icon={<Dashboard />}
            text="Dashboard"
            onClick={() => navigate(`/${role}/`)}
            active={isActive(`/${role}/`) || isActive(`/${role}`)}
          />
        </div>

        {/* Admin Sections */}
        {role === "admin" && (
          <>
            <SectionHeader
              title="Master Data"
              isOpen={openAdminMasterData}
              onToggle={() => setOpenAdminMasterData(!openAdminMasterData)}
            />
            <CollapsibleSection isOpen={openAdminMasterData}>
              <MenuItem
                icon={<PersonAdd />}
                text="Form Pengguna"
                onClick={() => navigate("/admin/form/pengguna")}
                active={isActive("/admin/form/pengguna")}
                level={1}
              />
              <MenuItem
                icon={<Groups />}
                text="Form Siswa"
                onClick={() => navigate("/admin/form/siswa")}
                active={isActive("/admin/form/siswa")}
                level={1}
              />
              <MenuItem
                icon={<SupervisorAccount />}
                text="Form Konselor"
                onClick={() => navigate("/admin/form/konselor")}
                active={isActive("/admin/form/konselor")}
                level={1}
              />
            </CollapsibleSection>

            <SectionHeader
              title="Bimbingan dan Konseling"
              isOpen={openAdminBimbingan}
              onToggle={() => setOpenAdminBimbingan(!openAdminBimbingan)}
            />
            <CollapsibleSection isOpen={openAdminBimbingan}>
              <MenuItem
                icon={<EventNote />}
                text="Laporan Periode"
                onClick={() => navigate("/admin/laporan/periode")}
                active={isActive("/admin/laporan/periode")}
                level={1}
              />
              <MenuItem
                icon={<People />}
                text="Laporan Siswa"
                onClick={() => navigate("/admin/laporan/siswa")}
                active={isActive("/admin/laporan/siswa")}
                level={1}
              />
              <MenuItem
                icon={<Category />}
                text="Laporan Jenis"
                onClick={() => navigate("/admin/laporan/jenis")}
                active={isActive("/admin/laporan/jenis")}
                level={1}
              />
            </CollapsibleSection>
          </>
        )}

        {/* Konselor Sections */}
        {role === "konselor" && (
          <>
            <SectionHeader
              title="Master Data"
              isOpen={openMasterData}
              onToggle={() => setOpenMasterData(!openMasterData)}
            />
            <CollapsibleSection isOpen={openMasterData}>
              <MenuItem
                icon={<Person />}
                text="Profil"
                onClick={() => navigate("/konselor/profil")}
                active={isActive("/konselor/profil")}
                level={1}
              />
              <MenuItem
                icon={<School />}
                text="Data Siswa"
                onClick={() => navigate("/konselor/data-siswa")}
                active={isActive("/konselor/data-siswa")}
                level={1}
              />
            </CollapsibleSection>

            <SectionHeader
              title="Kedisiplinan"
              isOpen={openKedisiplinan}
              onToggle={() => setOpenKedisiplinan(!openKedisiplinan)}
            />
            <CollapsibleSection isOpen={openKedisiplinan}>
              <MenuItem
                icon={<Score />}
                text="History Skor Siswa"
                onClick={() => navigate("/konselor/skorsiswa")}
                active={isActive("/konselor/skorsiswa")}
                level={1}
              />
              <MenuItem
                icon={<ListAlt />}
                text="Daftar Pelanggaran"
                onClick={() => navigate("/konselor/daftarpelanggran")}
                active={isActive("/konselor/daftarpelanggran")}
                level={1}
              />
            </CollapsibleSection>
          </>
        )}

        {/* Student Kedisiplinan */}
        {role === "siswa" && (
          <SectionHeader
            title="Kedisiplinan"
            isOpen={openKedisiplinan}
            onToggle={() => setOpenKedisiplinan(!openKedisiplinan)}
          />
        )}
        {role === "siswa" && (
          <CollapsibleSection isOpen={openKedisiplinan}>
            <MenuItem
              icon={<Score />}
              text="History Skor Siswa"
              onClick={() => navigate("/siswa/skor")}
              active={isActive("/siswa/skor")}
              level={1}
            />
          </CollapsibleSection>
        )}

        {/* Parent Kedisiplinan */}
        {role === "orangtua" && (
          <SectionHeader
            title="Kedisiplinan"
            isOpen={openKedisiplinan}
            onToggle={() => setOpenKedisiplinan(!openKedisiplinan)}
          />
        )}
        {role === "orangtua" && (
          <CollapsibleSection isOpen={openKedisiplinan}>
            <MenuItem
              icon={<Score />}
              text="History Skor Siswa"
              onClick={() => navigate("/orangtua/skor")}
              active={isActive("/orangtua/skor")}
              level={1}
            />
          </CollapsibleSection>
        )}

        {/* Bimbingan dan Konseling - Not for admin */}
        {role !== "admin" && (
          <>
            <SectionHeader
              title="Bimbingan dan Konseling"
              isOpen={openBimbingan}
              onToggle={() => setOpenBimbingan(!openBimbingan)}
            />
            <CollapsibleSection isOpen={openBimbingan}>
              {role === "konselor" && (
                <>
                  <MenuItem
                    icon={<Assignment />}
                    text="Input Data BK"
                    onClick={() => navigate("/konselor/data-bimbingan/input")}
                    active={isActive("/konselor/data-bimbingan/input")}
                    level={1}
                  />
                  <MenuItem
                    icon={<Visibility />}
                    text="Kelola Data BK"
                    onClick={() => navigate("/konselor/lihat-bimbingan")}
                    active={isActive("/konselor/lihat-bimbingan")}
                    level={1}
                  />
                </>
              )}
              <MenuItem
                icon={<History />}
                text="History BK"
                onClick={() => navigate(`/${role}/history`)}
                active={isActive(`/${role}/history`)}
                level={1}
              />
              {role === "konselor" && (
                <>
                  <MenuItem
                    icon={<EventNote />}
                    text="Laporan BK Periode"
                    onClick={() => navigate("/konselor/laporan/periode")}
                    active={isActive("/konselor/laporan/periode")}
                    level={1}
                  />
                  <MenuItem
                    icon={<People />}
                    text="Laporan BK Siswa"
                    onClick={() => navigate("/konselor/laporan/siswa")}
                    active={isActive("/konselor/laporan/siswa")}
                    level={1}
                  />
                  <MenuItem
                    icon={<Category />}
                    text="Laporan BK Jenis"
                    onClick={() => navigate("/konselor/laporan/jenis")}
                    active={isActive("/konselor/laporan/jenis")}
                    level={1}
                  />
                </>
              )}
            </CollapsibleSection>
          </>
        )}

        {/* Komunikasi - Only for siswa and konselor */}
        {role !== "orangtua" && role !== "admin" && (
          <>
            <SectionHeader
              title="Komunikasi"
              isOpen={openKomunikasi}
              onToggle={() => setOpenKomunikasi(!openKomunikasi)}
            />
            <CollapsibleSection isOpen={openKomunikasi}>
              <MenuItem
                icon={<Chat />}
                text="Web Chat (0)"
                onClick={() => navigate(`/${role}/webchat`)}
                active={isActive(`/${role}/webchat`)}
                level={1}
              />
              <MenuItem
                icon={<VideoCall />}
                text="Video Chat"
                onClick={() => navigate(`/${role}/videochat`)}
                active={isActive(`/${role}/videochat`)}
                level={1}
              />
            </CollapsibleSection>
          </>
        )}

        {/* Akses */}
        <SectionHeader
          title="Akses"
          isOpen={openAkses}
          onToggle={() => setOpenAkses(!openAkses)}
        />
        <CollapsibleSection isOpen={openAkses}>
          <MenuItem
            icon={<ExitToApp />}
            text="Logout"
            onClick={() => navigate("/")}
            level={1}
          />
        </CollapsibleSection>
      </div>

      {/* Footer */}
      <div
        className="position-absolute bottom-0 w-100 text-center py-3"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <small style={{ color: "#e5e7eb", fontSize: "11px" }}>
          © 2025 Sistem Informasi BK
          <br />
          SMKN 1 Driyorejo
        </small>
      </div>
    </div>
  );
};

export default Sidebar;
