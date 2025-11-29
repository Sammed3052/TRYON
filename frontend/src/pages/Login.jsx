import { useEffect, useState } from "react";
import { Form, Input, Button, Typography, message, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [resetEmail, setResetEmail] = useState("");

  const onFinish = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      message.success("Login successful!");
    } catch (error) {
      message.error(error.message);
    }
  };

  // ✅ Redirect once user becomes available
  useEffect(() => {
    if (user) {
      navigate("/tryon");
    }
  }, [user, navigate]);

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      message.error("Please enter your email to reset password");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      message.success("Password reset email sent!");
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1650&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Glassmorphic Card */}
      <Card
        style={{
          width: 400,
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.3)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <Title level={2} style={{ color: "white" }}>
            🔑 Welcome Back
          </Title>
          <Text style={{ color: "#ddd" }}>
            Login to continue your virtual fashion journey
          </Text>
        </div>

        {/* Login Form */}
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label={<span style={{ color: "white" }}>Email</span>}
            rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="example@mail.com"
              style={{ borderRadius: "10px" }}
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span style={{ color: "white" }}>Password</span>}
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter password"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              borderRadius: "30px",
              height: "45px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            🚀 Login
          </Button>
        </Form>

        {/* Forgot Password */}
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button type="link" onClick={handleForgotPassword} style={{ color: "#40a9ff" }}>
            Forgot Password?
          </Button>
        </div>

        <p style={{ textAlign: "center", marginTop: 16, color: "white" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#40a9ff" }}>
            Signup
          </Link>
        </p>
      </Card>
    </div>
  );
}
