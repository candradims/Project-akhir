import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Assignment as AssignmentIcon,
  Help as HelpIcon,
  ExpandMore as ExpandMoreIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Navbar = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [pageTitle, setPageTitle] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const profileMenuRef = useRef(null);

  const path = location.pathname.toLowerCase();
  let userRole = "admin";

  if (path.startsWith("/siswa")) {
    userRole = "siswa";
  } else if (path.startsWith("/orangtua")) {
    userRole = "orangtua";
  } else if (path.startsWith("/kepalasekolah")) {
    userRole = "kepalasekolah";
  } else if (path.startsWith("/konselor")) {
    userRole = "konselor";
  }

  // Update page title based on current route
  useEffect(() => {
    const routeTitles = {
      [`/${userRole}/`]: "Dashboard",
      [`/${userRole}`]: "Dashboard",
      [`/${userRole}/profil`]: "Profil",
      [`/${userRole}/data-siswa`]: "Data Siswa",
      [`/${userRole}/history`]: "History BK",
      [`/${userRole}/webchat`]: "Web Chat",
      [`/${userRole}/videochat`]: "Video Chat",
      [`/${userRole}/layanan`]: "Form Layanan",
      [`/${userRole}/bantuan`]: "Bantuan",
      [`/${userRole}/skor`]: "History Skor Siswa",
      "/admin/form/pengguna": "Form Pengguna",
      "/admin/form/siswa": "Form Siswa",
      "/admin/form/konselor": "Form Konselor",
      "/admin/laporan/periode": "Laporan Periode",
      "/admin/laporan/siswa": "Laporan Siswa",
      "/admin/laporan/jenis": "Laporan Jenis",
    };

    setPageTitle(routeTitles[location.pathname] || "Dashboard");
  }, [location.pathname, userRole]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setShowNotifications(false);
    setShowProfileMenu(false);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(!showNotifications);
    setShowSearch(false);
    setShowProfileMenu(false);
  };

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowSearch(false);
    setShowNotifications(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery);
    setShowSearch(false);
  };

  const handleFormLayanan = () => {
    if (userRole === "siswa") {
      navigate("/siswa/layanan");
    } else if (userRole === "konselor") {
      navigate("/konselor/layanan");
    }
  };

  const handleBantuan = () => {
    navigate(`/${userRole}/bantuan`);
  };

  const showFormLayanan = userRole === "siswa" || userRole === "konselor";

  const notifications = [
    { id: 1, title: "Update Baru tersedia", time: "2 hours ago", read: false },
    { id: 2, title: "Laporan anda sudah siap", time: "1 day ago", read: false },
    {
      id: 3,
      title: "Jadwal konseling minggu depan",
      time: "3 days ago",
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 w-100"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center w-100">
            {/* Left side - Hamburger button for mobile */}
            <div className="d-block d-md-none">
              <button
                className="btn p-2"
                onClick={() => {
                  console.log(
                    "Hamburger clicked, onToggleSidebar:",
                    onToggleSidebar
                  );
                  if (onToggleSidebar) {
                    onToggleSidebar();
                  }
                }}
                style={{
                  background: "rgba(0, 123, 255, 0.1)",
                  border: "1px solid rgba(0, 123, 255, 0.2)",
                  borderRadius: "10px",
                  color: "#007bff",
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(0, 123, 255, 0.15)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(0, 123, 255, 0.1)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <MenuIcon sx={{ fontSize: "20px" }} />
              </button>
            </div>

            {/* Center/Right side - Actions */}
            <div className="d-flex align-items-center justify-content-end flex-grow-1">
              {/* Current Page Title */}
              <div className="me-4 d-none d-lg-block">
                <span
                  className="badge px-3 py-2"
                  style={{
                    background: "linear-gradient(135deg, #007bff, #0056b3)",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: "20px",
                  }}
                >
                  {pageTitle}
                </span>
              </div>

              {/* Desktop Search */}
              <div
                className="position-relative me-3 d-none d-md-block"
                ref={searchRef}
              >
                <form onSubmit={handleSearchSubmit}>
                  <div className="input-group" style={{ minWidth: "250px" }}>
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        background: "rgba(0, 123, 255, 0.1)",
                        borderRadius: "25px 0 0 25px",
                        fontSize: "14px",
                        paddingLeft: "20px",
                      }}
                    />
                    <button
                      className="btn border-0"
                      type="submit"
                      style={{
                        background: "rgba(0, 123, 255, 0.1)",
                        borderRadius: "0 25px 25px 0",
                        color: "#007bff",
                      }}
                    >
                      <SearchIcon fontSize="small" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Mobile Search Button */}
              <button
                className="btn btn-outline-primary me-2 d-block d-md-none"
                onClick={handleSearchClick}
                style={{ borderRadius: "12px", padding: "8px 12px" }}
              >
                <SearchIcon fontSize="small" />
              </button>

              {/* Form Layanan / Bantuan Button */}
              {showFormLayanan ? (
                <button
                  className="btn btn-primary me-3 d-none d-sm-flex align-items-center"
                  onClick={handleFormLayanan}
                  style={{
                    borderRadius: "12px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 25px rgba(16, 185, 129, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <AssignmentIcon fontSize="small" className="me-2" />
                  Form Layanan
                </button>
              ) : (
                <button
                  className="btn btn-primary me-3 d-none d-sm-flex align-items-center"
                  onClick={handleBantuan}
                  style={{
                    borderRadius: "12px",
                    padding: "8px 16px",
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 25px rgba(245, 158, 11, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <HelpIcon fontSize="small" className="me-2" />
                  Bantuan
                </button>
              )}

              {/* Mobile Action Button */}
              <button
                className="btn btn-outline-primary me-2 d-block d-sm-none"
                onClick={showFormLayanan ? handleFormLayanan : handleBantuan}
                style={{ borderRadius: "12px", padding: "8px 12px" }}
              >
                {showFormLayanan ? (
                  <AssignmentIcon fontSize="small" />
                ) : (
                  <HelpIcon fontSize="small" />
                )}
              </button>

              {/* Notifications */}
              <div className="position-relative me-3" ref={notificationsRef}>
                <button
                  className="btn btn-outline-primary position-relative"
                  onClick={handleNotificationsClick}
                  style={{
                    borderRadius: "12px",
                    padding: "8px 12px",
                    border: "2px solid rgba(0, 123, 255, 0.2)",
                  }}
                >
                  <NotificationsIcon fontSize="small" />
                  {unreadCount > 0 && (
                    <span
                      className="position-absolute translate-middle badge rounded-pill bg-danger"
                      style={{ top: "0", left: "100%", fontSize: "10px" }}
                    >
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div
                    className="position-absolute bg-white rounded shadow-lg border-0"
                    style={{
                      top: "calc(100% + 10px)",
                      right: "0",
                      width: "350px",
                      zIndex: 1100,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="px-4 py-3 border-bottom"
                      style={{
                        background: "linear-gradient(135deg, #007bff, #0056b3)",
                      }}
                    >
                      <h6 className="mb-0 text-white fw-bold">Notifications</h6>
                    </div>
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="px-4 py-3 border-bottom"
                          style={{
                            background: notification.read
                              ? "transparent"
                              : "rgba(0, 123, 255, 0.05)",
                            cursor: "pointer",
                            transition: "background 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background =
                              "rgba(0, 123, 255, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = notification.read
                              ? "transparent"
                              : "rgba(0, 123, 255, 0.05)";
                          }}
                        >
                          <p
                            className="mb-1 fw-medium"
                            style={{ fontSize: "14px" }}
                          >
                            {notification.title}
                          </p>
                          <small className="text-muted">
                            {notification.time}
                          </small>
                          {!notification.read && (
                            <span
                              className="badge bg-primary ms-2"
                              style={{ fontSize: "10px" }}
                            >
                              New
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="text-center py-2">
                      <button className="btn btn-link text-primary fw-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="position-relative" ref={profileMenuRef}>
                <button
                  className="btn btn-outline-primary d-flex align-items-center"
                  onClick={handleProfileClick}
                  style={{
                    borderRadius: "12px",
                    padding: "6px 12px",
                    border: "2px solid rgba(0, 123, 255, 0.2)",
                  }}
                >
                  <AccountCircleIcon className="me-2" />
                  <span className="d-none d-md-inline">Profile</span>
                  <ExpandMoreIcon fontSize="small" className="ms-1" />
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div
                    className="position-absolute bg-white rounded shadow-lg border-0"
                    style={{
                      top: "calc(100% + 10px)",
                      right: "0",
                      width: "250px",
                      zIndex: 1100,
                      boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="px-4 py-3 border-bottom"
                      style={{
                        background: "linear-gradient(135deg, #007bff, #0056b3)",
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <div
                          className="rounded-circle me-3"
                          style={{
                            width: "40px",
                            height: "40px",
                            background: "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <AccountCircleIcon style={{ color: "white" }} />
                        </div>
                        <div>
                          <p className="mb-0 text-white fw-bold">User Name</p>
                          <small className="text-white opacity-75">
                            {userRole.charAt(0).toUpperCase() +
                              userRole.slice(1)}
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      {userRole === "konselor" && (
                        <>
                          <button
                            className="btn btn-link w-100 text-start px-4 py-2 text-dark"
                            onClick={() => navigate(`/${userRole}/profil`)}
                            style={{ textDecoration: "none" }}
                          >
                            Profil
                          </button>
                          <hr className="my-1" />
                        </>
                      )}
                      <button
                        className="btn btn-link w-100 text-start px-4 py-2 text-danger"
                        onClick={() => navigate("/")}
                        style={{ textDecoration: "none" }}
                      >
                        Keluar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {showSearch && (
        <div
          className="position-fixed w-100 bg-white shadow-sm p-3 d-md-none"
          style={{ top: "70px", zIndex: 1050 }}
          ref={searchRef}
        >
          <form onSubmit={handleSearchSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  border: "2px solid rgba(0, 123, 255, 0.2)",
                  borderRadius: "12px 0 0 12px",
                }}
              />
              <button
                className="btn btn-primary"
                type="submit"
                style={{
                  borderRadius: "0 12px 12px 0",
                  background: "linear-gradient(135deg, #007bff, #0056b3)",
                  border: "none",
                }}
              >
                <SearchIcon fontSize="small" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Navbar;
