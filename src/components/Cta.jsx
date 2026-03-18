import React from "react";
import { useNavigate } from "react-router-dom";

export default function Avis() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        padding: "80px 2%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        borderTop: "0.5px solid #eee",
      }}
    >
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "24px",
          maxWidth: "950px",
        }}
      >
        Donnez à votre talent la <br />
        <span style={{ color: "#EF9F27" }}>vitrine qu'il mérite</span>
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#666",
          lineHeight: 1.6,
          marginBottom: "40px",
          maxWidth: "600px",
        }}
      >
        Qu'il s'agisse de lin tissé, de bijoux artisanaux ou d'art recyclé,
        chaque pièce raconte une histoire. Rejoignez notre communauté et
        commencez à vendre vos créations dès aujourd'hui.
      </p>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        <button
          onClick={() => navigate("/publier")}
          style={{
            background: "#111",
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
            fontWeight: "normal",
            fontSize: "15px",
            padding: "18px 40px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
        >
          Ouvrir ma vitrine
        </button>

        <button
          onClick={() => navigate("/explorer")}
          style={{
            background: "#fff",
            color: "#111",
            fontFamily: "'Syne', sans-serif",
            fontWeight: "normal",
            fontSize: "15px",
            padding: "18px 40px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
          Explorer les créations
        </button>
      </div>
    </section>
  );
}
