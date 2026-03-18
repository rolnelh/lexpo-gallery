import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 5% 80px",
        background: "#fff",
        borderBottom: "1px solid #f5f5f5",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "#FAEEDA",
          color: "#854F0B",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "6px 20px",
          borderRadius: 100,
          marginBottom: 32,
        }}
      >
        Artisans, créateurs, stylistes ...
      </span>

      <h1
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
          fontWeight: 600,
          lineHeight: 1.05,
          marginBottom: 24,
          maxWidth: 900,
          margin: "0 auto 24px",
          letterSpacing: "-1px",
        }}
      >
        Offrez à votre <span style={{ color: "#EF9F27" }}>savoir-faire</span> la
        vitrine qu'il mérite.
      </h1>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          fontWeight: "normal",
          maxWidth: 620,
          margin: "0 auto 48px",
          lineHeight: 1.6,
          // fontFamily: "'Syne', sans-serif",
        }}
      >
        Ne vous cachez plus derrière WhatsApp. Créez votre catalogue
        professionnel en 2 minutes et présentez vos créations au monde entier.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => navigate("/register")}
          style={{
            background: "#111",
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            padding: "12px 35px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-3px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          Rejoindre la communanuté →
        </button>

        <button
          onClick={() => navigate("/explorer")}
          style={{
            background: "#fff",
            color: "#111",
            fontFamily: "'Syne', sans-serif",
            fontWeight: "normal",
            fontSize: 14,
            padding: "12px 35px",
            borderRadius: "100px",
            border: "2px solid #111",
            cursor: "pointer",
          }}
        >
          Découvrir les talents
        </button>
      </div>

      <div style={{ marginTop: "60px", fontSize: "14px", color: "#aaa" }}>
        Déjà +500 artisans africains nous font confiance
      </div>
    </section>
  );
}
