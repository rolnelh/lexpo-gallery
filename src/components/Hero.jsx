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
          fontWeight: 500,
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
          margin: "0 auto 38px",
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

      <div className="mt-14 flex items-center justify-center gap-3.5 flex-wrap">

        <div className="flex -space-x-2.5 overflow-hidden p-0.5">
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <img
            className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-sm"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
            alt="Artisan"
          />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EF9F27] font-bold text-white text-xs ring-2 ring-white shadow-sm">
            +500
          </div>
        </div>

        {/* Texte */}
        <p className="text-sm font-medium text-neutral-600">
          <span className="font-bold text-neutral-900">
            +500 artisans africains
          </span>{" "}
          nous font déjà confiance.
        </p>
      </div>
    </section>
  );
}
