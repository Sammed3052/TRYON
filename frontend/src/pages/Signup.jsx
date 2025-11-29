import { Form, Input, Button, Typography, message, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Signup() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // ✅ Save full name to Firebase user profile
      await updateProfile(userCredential.user, { displayName: values.name });

      message.success("Signup successful! Please login.");
      navigate("/login"); // ✅ Redirect to Login page
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
          "url('https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1650&q=80)",
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

      {/* Card */}
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
            ✨ Create Account
          </Title>
          <Text style={{ color: "#ddd" }}>
            Join the Virtual Try-On experience today
          </Text>
        </div>

        {/* Signup Form */}
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label={<span style={{ color: "white" }}>Full Name</span>}
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="John Doe"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={<span style={{ color: "white" }}>Email</span>}
            rules={[
              { required: true, type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="example@mail.com"
              style={{ borderRadius: "10px" }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span style={{ color: "white" }}>Password</span>}
            rules={[
              { required: true, min: 6, message: "Minimum 6 characters" },
            ]}
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
            🚀 Signup
          </Button>
        </Form>

        <p style={{ textAlign: "center", marginTop: 16, color: "white" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#40a9ff" }}>
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
