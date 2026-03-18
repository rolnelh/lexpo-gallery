import React from "react";

const partners = [
  { name: "Tissage Kanvo", icon: "🧵" },
  { name: "Yelian Handmade", icon: "👜" },
  { name: "Forge d'Abomey", icon: "🔨" },
  { name: "Maroquinerie d'Art", icon: "💼" },
  { name: "Céramique de Sè", icon: "🏺" },
  { name: "Teinture Indigo", icon: "🌿" },
  { name: "Bijouterie Bronze", icon: "✨" },
  { name: "Sculpture sur Teck", icon: "🪑" },
  { name: "Bénin Digital", icon: "🇧🇯" },
  { name: "Luxe Durable", icon: "💎" },
  { name: "Upcycling BJ", icon: "♻️" },
  { name: "Broderie Main", icon: "🪡" },
];

export default function CreatorPage() {
  return (
    <section
      style={{ padding: "80px 0", backgroundColor: "#fff", overflow: "hidden" }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "60px", padding: "0 20px" }}
      >
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 600,
            color: "#111",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}
        >
          Un écosystème de talents locaux
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Du tissage traditionnel de Kanvo à la maroquinerie moderne, nous
          célébrons l'excellence du fait-main béninois.
        </p>
      </div>

      <div
        className="marquee-container"
        style={{
          display: "flex",
          position: "relative",
          width: "90%",
          overflow: "hidden",
        }}
      >
        <div
          className="marquee-content"
          style={{
            display: "flex",
            gap: "24px",
            animation: "scroll 40s linear infinite",
            padding: "10px 0",
          }}
        >

          {[...partners, ...partners, ...partners].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 28px",
                background: "#FFFFFF",
                border: "1px solid #F3F4F6",
                borderRadius: "100px",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 15px rgba(0,0,0,0.04)",
                transition: "transform 0.3s ease",
              }}
            >
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span
                style={{
                  fontWeight: 700,
                  color: "#1F2937",
                  fontSize: "15px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          
          .marquee-container::before, .marquee-container::after {
            content: "";
            position: absolute;
            top: 0; width: 250px; height: 100%;
            z-index: 2;
            pointer-events: none;
          }
          
          .marquee-container::before {
            left: 0; background: linear-gradient(to right, white, transparent);
          }
          
          .marquee-container::after {
            right: 0; background: linear-gradient(to left, white, transparent);
          }

          /* Petite astuce : on ralentit au survol pour laisser lire */
          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
