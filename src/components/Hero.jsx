import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";

// Portraits d'artisans flottants autour du hero (desktop uniquement)
const FLOATING_ARTISANS = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&auto=format&fit=crop&q=80",
];

export default function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      query.trim() ? `/explorer?q=${encodeURIComponent(query.trim())}` : "/explorer",
    );
  };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        padding: "80px 5% 120px",
        background: "#FBF6EC",
        fontFamily: "'General Sans', sans-serif",
      }}
    >
      {/* Halo décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "#EF9F27" }}
      />

      {/* Portraits d'artisans flottants (desktop) */}
      <div
        className="hidden lg:block absolute overflow-hidden rounded-full ring-4 ring-white shadow-xl"
        style={{
          top: "8%",
          right: "9%",
          width: 120,
          height: 120,
          transform: "rotate(-4deg)",
        }}
      >
        <img
          src={FLOATING_ARTISANS[0]}
          alt="Artisan"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="hidden lg:flex absolute items-center justify-center rounded-full bg-neutral-900 text-center text-[11px] font-bold leading-tight text-white shadow-lg"
        style={{
          top: "2%",
          right: "27%",
          width: 60,
          height: 60,
          transform: "rotate(-6deg)",
        }}
      >
        +500
        <br />
        artisans
      </div>

      <div
        className="hidden lg:block absolute overflow-hidden rounded-full ring-4 ring-white shadow-xl"
        style={{
          top: "52%",
          right: "3%",
          width: 96,
          height: 96,
          transform: "rotate(4deg)",
        }}
      >
        <img
          src={FLOATING_ARTISANS[1]}
          alt="Artisan"
          className="h-full w-full object-cover"
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#fff",
            padding: "10px 16px 10px 6px",
            borderRadius: "100px",
            marginBottom: 32,
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
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
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 760,
            margin: "0 auto 24px",
            letterSpacing: "-1px",
          }}
        >
          Offrez à votre savoir-faire{" "}
          <span style={{ color: "#EF9F27" }}>la vitrine</span> qu'il mérite.
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            fontWeight: "normal",
            maxWidth: 560,
            margin: "15px auto 32px",
            lineHeight: 1.6,
          }}
        >
          Ne vous cachez plus derrière WhatsApp. Créez votre catalogue
          professionnel en 2 minutes et présentez vos créations au monde entier.
        </p>

        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            maxWidth: 480,
            margin: "0 auto 20px",
            border: "1.5px solid #111",
            borderRadius: 100,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chercher un tableau, un bijou, du lin..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "14px 22px",
              fontSize: 14,
              background: "transparent",
              fontFamily: "'General Sans', sans-serif",
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            aria-label="Rechercher"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#EF9F27",
              color: "#fff",
              border: "none",
              width: 46,
              height: 46,
              margin: 3,
              borderRadius: "50%",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <Search size={17} />
          </button>
        </form>

        <button
          onClick={() => navigate("/register")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#111",
            color: "#fff",
            fontWeight: "normal",
            fontSize: 14,
            padding: "12px 30px",
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
          Rejoindre la communauté
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
