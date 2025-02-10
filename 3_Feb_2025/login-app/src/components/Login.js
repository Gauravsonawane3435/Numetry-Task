import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email Validation Regex
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle Login Button Click
  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Email
    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate Password
    if (!password) {
      setPasswordError("Password cannot be empty.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // If Valid, Log Form Data
    if (isValid) {
      console.log("Login successful!");
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            {passwordError && <div className="invalid-feedback">{passwordError}</div>}
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-2">
            <a href="#" className="text-decoration-none">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
