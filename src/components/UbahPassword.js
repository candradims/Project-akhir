import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const UbahPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle OTP input change
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input
    if (value !== "" && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP submission
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  // Handle password reset
  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  // Handle new password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow">
              {/* Header */}
              <div className="card-header d-flex align-items-center border-bottom">
                <button className="btn btn-link text-muted p-0 me-2">
                  <ArrowBackIcon />
                </button>
                <h1 className="fs-5 fw-medium mb-0">Lupa Password</h1>
              </div>

              {/* Content */}
              <div className="card-body p-4">
                {step === 1 && (
                  <form onSubmit={handleSubmitEmail}>
                    <div className="mb-4 text-center">
                      <div className="d-flex justify-content-center mb-3">
                        <MailOutlineIcon
                          sx={{ fontSize: 48 }}
                          className="text-primary"
                        />
                      </div>
                      <h2 className="fs-4 fw-semibold mb-2">Reset Password</h2>
                      <p className="text-muted">
                        Masukkan alamat email yang terdaftar untuk menerima kode
                        verifikasi
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Masukkan email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn w-100 text-white ${
                        loading ? "btn-primary opacity-75" : "btn-primary"
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Mengirim..." : "Kirim Kode Verifikasi"}
                    </button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleVerifyOtp}>
                    <div className="mb-4 text-center">
                      <h2 className="fs-4 fw-semibold mb-2">
                        Verifikasi Kode OTP
                      </h2>
                      <p className="text-muted">
                        Masukkan kode verifikasi yang telah dikirim ke email{" "}
                        {email}
                      </p>
                    </div>

                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-3">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            className="form-control text-center fw-bold fs-4"
                            style={{ width: "60px", height: "60px" }}
                            value={digit}
                            onChange={(e) =>
                              handleOtpChange(e.target.value, index)
                            }
                          />
                        ))}
                      </div>
                      <p className="text-center text-muted small">
                        Tidak menerima kode?{" "}
                        <button
                          type="button"
                          className="btn btn-link p-0 text-primary fw-medium"
                        >
                          Kirim Ulang
                        </button>
                      </p>
                    </div>

                    <button
                      type="submit"
                      className={`btn w-100 text-white ${
                        loading ? "btn-primary opacity-75" : "btn-primary"
                      }`}
                      disabled={loading || otp.some((digit) => digit === "")}
                    >
                      {loading ? "Memverifikasi..." : "Verifikasi"}
                    </button>
                  </form>
                )}

                {step === 3 && (
                  <form onSubmit={handleResetPassword}>
                    <div className="mb-4 text-center">
                      <div className="d-flex justify-content-center mb-3">
                        <LockIcon
                          sx={{ fontSize: 48 }}
                          className="text-primary"
                        />
                      </div>
                      <h2 className="fs-4 fw-semibold mb-2">
                        Buat Password Baru
                      </h2>
                      <p className="text-muted">
                        Password baru Anda harus berbeda dari password yang
                        sebelumnya digunakan
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium">
                        Password Baru
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Masukkan password baru"
                        value={newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium">
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Masukkan ulang password baru"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      {confirmPassword && newPassword !== confirmPassword && (
                        <div className="text-danger small mt-1">
                          Password tidak sama
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className={`btn w-100 text-white ${
                        loading || newPassword !== confirmPassword
                          ? "btn-primary opacity-75"
                          : "btn-primary"
                      }`}
                      disabled={
                        loading ||
                        !newPassword ||
                        newPassword !== confirmPassword
                      }
                    >
                      {loading ? "Memproses..." : "Simpan Password Baru"}
                    </button>
                  </form>
                )}

                {step === 4 && (
                  <div className="text-center py-4">
                    <div className="d-flex justify-content-center mb-3">
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: 64 }}
                        className="text-primary"
                      />
                    </div>
                    <h2 className="fs-4 fw-semibold mb-2">
                      Password Berhasil Diubah
                    </h2>
                    <p className="text-muted mb-4">
                      Password Anda telah berhasil diubah. Silakan login dengan
                      password baru Anda.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary w-100 text-white"
                      onClick={() => (window.location.href = "/login")}
                    >
                      Kembali ke Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahPassword;
