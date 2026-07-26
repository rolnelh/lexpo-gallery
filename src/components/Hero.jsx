import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        textAlign: "center",
        padding: "70px 5% 80px",
        background: "#fff",
        borderBottom: "1px solid #f5f5f5",
        fontFamily: "'Quicksand', sans-serif",

      }}
    >

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#f4f4f5",
          padding: "10px 16px 10px 6px",
          borderRadius: "100px",
          marginBottom: 32,
        }}
      >
        {/* Groupe d'avatars superposés */}
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <img
            className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <img
            className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
        </div>

        {/* Texte du badge */}
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#3f3f46",
            letterSpacing: "-0.01em",
          }}
        >
          +500 artisans africains nous font confiance
        </span>
      </div>

      <h1
        style={{
          fontFamily: "'Quicksand', sans-serif",
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
          margin: "15px auto 38px",
          lineHeight: 1.6,
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
            // fontFamily: "'Syne', sans-serif",
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
          Rejoindre la communauté →
        </button>

        <button
          onClick={() => navigate("/explorer")}
          style={{
            background: "#fff",
            color: "#111",
            // fontFamily: "'Syne', sans-serif",
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
    </section>
  );
}
