import React, { useState, useEffect } from "react";
import InputField from "../Components/InputFeild";
import CheckboxField from "../Components/CheckBoxFeild";
import Button from "../Components/Button";
import "../App.css";
import cyber from "../assets/cyber.png"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);

  const validate = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
  
    // ✅ Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
  
    // ✅ Password Regex: Min 6 chars, at least 1 letter and 1 number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 6 characters long and include letters and numbers.");
      valid = false;
    }
  
    return valid;
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError("");

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
      localStorage.setItem("rememberedPassword", password);
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
    }

    // Simulate login
    setTimeout(() => {
      if (email === "user@example.com" && password === "pass123") {
        alert("Login successful");
      } else {
        setError("Invalid credentials.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-wrapper cyber-theme">
      <form className="login-card" onSubmit={handleLogin}>
        <div className="login-header">
          <img src={cyber} alt="Company Logo" className="logo" />
          <h1>Login</h1>
          <p>Enter your credentials to proceed</p>
        </div>

        <InputField
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          required
        />

        <InputField
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          required
        />

        <div className="login-options">
          <CheckboxField
            id="rememberMe"
            checked={rememberMe}
            onChange={setRememberMe}
            label="Remember Me"
          />
          <a href="/forgot-password" className="link">Forgot Password?</a>
        </div>

        {error && <p className="error-text center">{error}</p>}

        <Button loading={loading}>Login</Button>

        <p className="signup-link">
          Don't have an account? <a href="/sign-up" className="link">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
