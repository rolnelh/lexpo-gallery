import React from "react";
import { useNavigate } from "react-router-dom";

// Avatars flottants sur l'orbite décorative derrière le hero
const ORBIT_AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    angle: 25,
    radius: "clamp(150px, 33vw, 300px)",
    size: 58,
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&auto=format&fit=crop&q=80",
    angle: 100,
    radius: "clamp(95px, 21vw, 190px)",
    size: 42,
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&auto=format&fit=crop&q=80",
    angle: 165,
    radius: "clamp(150px, 33vw, 300px)",
    size: 52,
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    angle: 205,
    radius: "clamp(95px, 21vw, 190px)",
    size: 46,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    angle: 260,
    radius: "clamp(150px, 33vw, 300px)",
    size: 60,
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    angle: 335,
    radius: "clamp(95px, 21vw, 190px)",
    size: 44,
  },
];

function HeroOrbit() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "clamp(360px, 72vw, 640px)",
          height: "clamp(360px, 72vw, 640px)",
        }}
      >
        {/* Halo doux */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "42%",
            height: "42%",
            borderRadius: "50%",
            background: "#EF9F27",
            opacity: 0.12,
            filter: "blur(60px)",
          }}
        />

        {/* Anneaux */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid rgba(17,17,17,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "63%",
            height: "63%",
            borderRadius: "50%",
            border: "1px dashed rgba(239,159,39,0.35)",
          }}
        />

        {/* Piste rotative portant les avatars */}
        <div
          className="hero-orbit-track"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        >
          {ORBIT_AVATARS.map((a, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `rotate(${a.angle}deg) translate(${a.radius}) rotate(-${a.angle}deg)`,
              }}
            >
              <div
                className="hero-orbit-counter"
                style={{
                  width: a.size,
                  height: a.size,
                  marginLeft: -a.size / 2,
                  marginTop: -a.size / 2,
                }}
              >
                <img
                  src={a.src}
                  alt=""
                  className="h-full w-full rounded-full object-cover ring-2 ring-white shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "70px 5% 80px",
        background: "#fff",
        borderBottom: "1px solid #f5f5f5",
        fontFamily: "'General Sans', sans-serif",

      }}
    >
      <HeroOrbit />

      <div style={{ position: "relative", zIndex: 1 }}>
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
            fontFamily: "'Fredoka', sans-serif",
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
      </div>
    </section>
  );
}
