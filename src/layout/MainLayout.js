import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggle sidebar called, current state:", sidebarOpen);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="d-flex position-relative"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      {/* Sidebar - Always rendered, positioning handled inside component */}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className="flex-grow-1 d-flex flex-column d-none d-md-flex"
        style={{
          minHeight: "100vh",
          marginLeft: "300px", // Account for sidebar width on desktop
        }}
      >
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main
          className="flex-grow-1 p-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px 0 0 0",
            marginTop: "1px",
            minHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
        >
          <div
            className="container-fluid"
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              minHeight: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Content Area */}
      <div
        className="flex-grow-1 d-flex flex-column d-block d-md-none"
        style={{
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* Mobile Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Mobile Page Content */}
        <main
          className="flex-grow-1 p-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px 0 0 0",
            marginTop: "1px",
            minHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
        >
          <div
            className="container-fluid"
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              minHeight: "100%",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
