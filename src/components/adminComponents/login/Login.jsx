import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adminVerifyLogin } from "../../../api/adminApi";
import { adminLogin } from "../../../reduxStore/slice/adminSlice";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await adminVerifyLogin(values);
        if (res?.status === 200) {
          const { token, userName } = res.data;
          localStorage.setItem("adminToken", token);
          dispatch(adminLogin({ token, admin: userName }));
          navigate("/admin/dashboard");
        } else {
          console.error("Login failed:", res?.data?.message || "Unknown error");
        }
      } catch (error) {
        console.error("Login error:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="login-container login-bg-clr">
      <img src="/adminLogo.png" alt="Admin Logo" className="login-logo" />
      <div className="login-form-box">
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to sign in</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps("email")}
              className={
                formik.touched.email && formik.errors.email ? "error" : ""
              }
              autoComplete="username"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}
          </div>
          <div className="input-group">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...formik.getFieldProps("password")}
              className={
                formik.touched.password && formik.errors.password ? "error" : ""
              }
              autoComplete="current-password"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}
          </div>
          <button
            className="login-btn"
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
