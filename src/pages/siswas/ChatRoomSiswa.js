import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Typography, Paper, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";

const ChatRoomSiswa = () => {
  const { konselor } = useParams(); // Mendapatkan nama konselor dari URL
  const [chatMessages, setChatMessages] = useState([
    { sender: "Siswa", message: "Selamat Pagi Bu" },
    { sender: konselor, message: "Pagi Nak" },
    {
      sender: "Siswa",
      message: "Hari ini saya mau bimbingan terkait Pemetaan karir",
    },
    { sender: konselor, message: "Baik Nak" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        { sender: "Siswa", message: newMessage },
      ]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      <Typography variant="h5" className="fw-bold text-primary mb-3 mt-4">
        Anda Chatting Bersama: {konselor}
      </Typography>

      <Paper
        elevation={3}
        className="p-3 d-flex flex-column"
        style={{ flexGrow: 1 }}
      >
        {/* Chat Box */}
        <div
          ref={chatContainerRef}
          className="p-3 mb-3 flex-grow-1"
          style={{
            height: "450px",
            overflowY: "scroll",
            border: "1px solid #ddd",
            borderRadius: "5px",
            background: "#f8f9fa",
          }}
        >
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.sender === "Siswa" ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <Typography variant="caption" style={{ marginBottom: "5px" }}>
                <strong>{msg.sender}</strong>
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: msg.sender === "Siswa" ? "end" : "start",
                }}
              >
                {msg.sender !== "Siswa" && (
                  <Avatar style={{ marginRight: "10px" }}>S</Avatar>
                )}
                <div
                  style={{
                    maxWidth: "60%",
                    padding: "10px",
                    borderRadius: "10px",
                    background: msg.sender !== "Siswa" ? "#e0e0e0" : "#007bff",
                    color: msg.sender !== "Siswa" ? "black" : "white",
                  }}
                >
                  {msg.message}
                </div>
                {msg.sender === "Siswa" && (
                  <Avatar style={{ marginLeft: "10px" }}>K</Avatar>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Chat */}
        <Form
          className="d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <Form.Control
            type="text"
            placeholder="Tulis pesan..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="success" onClick={sendMessage} className="ms-2">
            Send
          </Button>
        </Form>
      </Paper>
    </>
  );
};

export default ChatRoomSiswa;
