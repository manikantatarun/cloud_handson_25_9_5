import React from "react";
import "./App.css";

const APP_VERSION = process.env.REACT_APP_BUILD_VERSION || "dev";
const S3_BUCKET_URL = process.env.REACT_APP_S3_URL || "http://localhost:3000";
const DEPLOYED_BY = process.env.REACT_APP_DEPLOYED_BY || "DontNo";

function App() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f4f7fb", minHeight: "100vh" }}>
      <header style={{ 
        background: "linear-gradient(135deg, #2d6cdf, #1a4db3)", 
        color: "#fff", 
        padding: "10px 10px", 
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>🚀 React App on ECS</h1>
        <p style={{ fontSize: "1.3rem", opacity: 0.9 }}>
          Dockerized • Deployed on ECS • Assets served from S3
        </p>
      </header>

      <section style={{ maxWidth: "800px", margin: "40px auto", background: "#fff", borderRadius: "12px", padding: "30px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
        <h2 style={{ color: "#2d6cdf", marginBottom: "10px" }}>📦 Build Information</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8rem", fontSize: "1.1rem" }}>
          <li><strong>Version:</strong> {APP_VERSION}</li>
          <li><strong>S3 Bucket:</strong> {S3_BUCKET_URL}</li>
        </ul>
      </section>

      <section style={{ maxWidth: "1000px", margin: "10px auto", textAlign: "center" }}>
        <h2 style={{ marginBottom: "10px", color: "#2d6cdf" }}>🖼️ Assets Loaded from S3</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>

          <div style={{ border: "1px solid #e0e0e0", borderRadius: "12px", padding: "10px", width: "250px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <img src={`${S3_BUCKET_URL}/app_logo.png`} alt="Logo" style={{ width: "200px", height: "auto", marginBottom: "15px" }} />
            <p style={{ fontWeight: "600" }}>App Logo</p>
          </div>

          <div style={{ border: "1px solid #e0e0e0", borderRadius: "12px", padding: "10px", width: "250px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <img src={`${S3_BUCKET_URL}/profile.png`} alt="Profile" style={{ width: "200px", borderRadius: "50%", marginBottom: "15px" }} />
            <p style={{ fontWeight: "600" }}>Deployed By : {DEPLOYED_BY}</p>
          </div>

        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px", fontSize: "0.9rem", color: "#777" }}>
        © {new Date().getFullYear()} ECS Demo App
      </footer>
    </div>
  );
}

export default App;
