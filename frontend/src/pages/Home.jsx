import { Button, Typography, Card, Row, Col, Carousel } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?utm_source=chatgpt.com')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <Title style={{ fontSize: "3.5rem", color: "white" }}>
          👗 Virtual Try-On Experience
        </Title>
        <Text style={{ fontSize: "1.4rem", color: "#f0f0f0", marginBottom: 40 }}>
          See how outfits look on you – instantly and effortlessly!
        </Text>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 20, marginBottom: 50 }}>
          <Link to="/tryon">
            <Button type="primary" size="large" style={{ borderRadius: "30px", padding: "0 30px" }}>
              🚀 Start Try-On
            </Button>
          </Link>
          <Link to="/login">
            <Button size="large" style={{ borderRadius: "30px", padding: "0 25px" }}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="large" style={{ borderRadius: "30px", padding: "0 25px" }}>
              Signup
            </Button>
          </Link>
        </div>

        {/* Outfit Preview Carousel */}
        <Carousel autoplay style={{ width: "80%", maxWidth: "900px" }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1520975968318-6cbb63e72f8f?auto=format&fit=crop&w=800&q=80"
              alt="Outfit 1"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
              alt="Outfit 2"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
              alt="Outfit 3"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </div>
        </Carousel>

        {/* Features Section */}
        <Row gutter={[24, 24]} style={{ marginTop: 60, maxWidth: "1000px" }}>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ textAlign: "center", borderRadius: "15px", background: "rgba(255,255,255,0.1)" }}
            >
              <Title level={4} style={{ color: "white" }}>✨ Realistic Fitting</Title>
              <Text style={{ color: "#ddd" }}>Try clothes virtually with AI-powered fitting technology.</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ textAlign: "center", borderRadius: "15px", background: "rgba(255,255,255,0.1)" }}
            >
              <Title level={4} style={{ color: "white" }}>👚 Wide Collection</Title>
              <Text style={{ color: "#ddd" }}>Browse a variety of styles, from casual wear to luxury fashion.</Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ textAlign: "center", borderRadius: "15px", background: "rgba(255,255,255,0.1)" }}
            >
              <Title level={4} style={{ color: "white" }}>⚡ Quick & Easy</Title>
              <Text style={{ color: "#ddd" }}>Upload your photo and start trying clothes instantly.</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
