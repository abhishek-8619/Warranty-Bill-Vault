import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useState } from "react";




function Login() {

  const navigate=useNavigate();
    const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [errors, setErrors] = useState({});

const [loginError, setLoginError] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};




const validateForm = () => {
  const newErrors = {};

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  const isValid = validateForm();

  if (!isValid) {
    return;
  }

  setLoginError("");

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      console.log("Login successful");
      navigate("/dashboard");
      return;
    }

    if (response.status === 401) {
      setLoginError("Invalid email or password");
      return;
    }

    setLoginError("Something went wrong. Please try again.");
  } catch (error) {
    console.error("Login request failed:", error);
    setLoginError("Unable to connect to server.");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">

        { loginError && (
            <p className="login-error">
            {loginError}
            </p>
        )}


        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Login to your Warranty & Bill Vault account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;