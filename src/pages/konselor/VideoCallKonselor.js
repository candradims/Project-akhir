import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { Typography, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Webcam from "react-webcam";

const VideoCallKonselor = () => {
  const { siswa } = useParams();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [isCalling, setIsCalling] = useState(true);

  // Fungsi untuk mengakhiri panggilan
  const endCall = () => {
    setIsCalling(false);
    navigate("/konselor/videochat");
  };

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3">
        Anda Sedang Melakukan Panggilan dengan {siswa}
      </Typography>

      <Paper elevation={3} className="p-3 text-center">
        {isCalling ? (
          <>
            {/* Video Call Siswa */}
            <Webcam
              ref={webcamRef}
              mirrored={true}
              style={{
                width: "80%",
                height: "auto",
                aspectRatio: 16 / 9,
                borderRadius: "10px",
                border: "2px solid #007bff",
              }}
            />
            <p className="mt-3">Siswa Sedang Online...</p>

            {/* Tombol End Call */}
            <Button variant="danger" className="mt-3" onClick={endCall}>
              Tutup
            </Button>
          </>
        ) : (
          <Typography variant="body1" className="text-danger">
            Panggilan Berakhir
          </Typography>
        )}
      </Paper>
    </>
  );
};

export default VideoCallKonselor;
