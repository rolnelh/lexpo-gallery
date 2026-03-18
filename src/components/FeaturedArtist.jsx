import React from "react";
import { useNavigate } from "react-router-dom";

const artistData = {
  name: "Président Djangoun",
  realName: "Zinli Roberto",
  slogan: "Le Styliste Fou : L'Upcycling en Haute Couture",
  description:
    "Créateur béninois autodidacte, Zinli Roberto insuffle une seconde vie radicale aux déchets. Découvrez sa 'Collection Véronique' où le métal recyclé devient une armure futuriste et théâtrale pour une mode durable et engagée.  Il utilise des canettes de boissons, des éponges, des batteries, des capsules ou encore des chutes de tissus pour fabriquer ses vêtements.",
  callToAction: "Découvrir la Collection →",
  profileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnJ4JEG1Q7YajxGYPppJR79kGMFnmzK9EwQ&s",
  works: [
    {
      title: "Robe 'Lumière d'Alu'",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr0_7f8gitc2lu3muvustRkNPiE47mXAABQ&s",
    },
    {
      title: "Plastron sculpté",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUqcGZJsBxNj0QmMDEU788gNMT9C6WX4ncw&s",
    },
    {
      title: "Détail : Languettes",
      image:
        "https://www.rdwa.fr/wp-content/uploads/2025/08/Capture-decran-2025-08-28-142451.png",
    },
    {
      title: "Coiffe de Guerrier Urbain",
      image:
        "https://oukoikan.com/wp-content/uploads/2026/02/President-Djangooun.jpg",
    },
  ],
};

export default function FeaturedArtistBlock() {
  const navigate = useNavigate();

  const badgeStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "10px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    padding: "4px 10px",
    borderRadius: "100px",
  };

  return (
    <section
      style={{ padding: "40px 5%", maxWidth: "1400px", margin: "0 auto" }}
    >
      <style>
        {`
      @media (max-width: 992px) {
        .responsive-grid { 
          grid-template-columns: 1fr !important; 
          padding: 24px !important;
        }
        .text-container { 
          grid-column: span 1 !important; 
          order: 2; 
        }
        .image-gallery { 
          grid-column: span 1 !important; 
          height: 400px !important; 
          order: 1;
        }
      }
    `}
      </style>

      <div
        className="responsive-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "32px",
          background: "#FFFFFF",
          padding: "60px",
          borderRadius: "32px",
          border: "1px solid #f0f0f0",
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
          alignItems: "center",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* TEXTE */}
        <div
          className="text-container"
          style={{
            gridColumn: "span 5",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "100px",
                padding: "6px 14px",
                background: "#FAEEDA",
                color: "#854F0B",
              }}
            >
              Artiste à la Une
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderRadius: "100px",
                padding: "6px 14px",
                background: "#EF9F27",
                color: "#fff",
              }}
            >
              Collection Véronique
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 600,
              lineHeight: 1,
              color: "#111",
              margin: 0,
            }}
          >
            {artistData.name} <br />
            <small
              style={{
                fontSize: "0.4em",
                color: "#EF9F27",
                fontWeight: 600,
                textTransform: "uppercase",
                tracking: "0.2em",
              }}
            >
              {artistData.realName}
            </small>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: 1.6,
              margin: 0,
              fontStyle: "italic",
              borderLeft: "2px solid #EF9F27",
              paddingLeft: "15px",
            }}
          >
            "{artistData.slogan}"
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.6,
              marginBottom: "10px",
            }}
          >
            {artistData.description}
          </p>

          <button
            onClick={() => navigate(`/president-djangoun`)}
            style={{
              alignSelf: "flex-start",
              background: "#111",
              color: "#fff",
              fontFamily: "'Syne', sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "18px 40px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#EF9F27")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
          >
            {artistData.callToAction}
          </button>
        </div>

        <div
          className="image-gallery"
          style={{
            gridColumn: "span 7",
            display: "grid",
            gridTemplateColumns: "repeat(10, 1fr)",
            gridTemplateRows: "repeat(10, 1fr)",
            gap: "12px",
            height: "550px",
          }}
        >
          <div
            style={{
              gridColumn: "span 4",
              gridRow: "span 6",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={artistData.profileImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>

          <div
            style={{
              gridColumn: "span 3",
              gridRow: "span 5",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={artistData.works[0].image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>

          <div
            style={{
              gridColumn: "span 3",
              gridRow: "span 3",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={artistData.works[1].image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>

          <div
            style={{
              gridColumn: "span 4",
              gridRow: "span 4",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={artistData.works[2].image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>

          <div
            style={{
              gridColumn: "span 6",
              gridRow: "span 7",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={artistData.works[3].image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
