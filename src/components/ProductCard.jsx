import React from "react";
import { useNavigate } from "react-router-dom";

const categoryColors = {
  "Art & Déco": { bg: "#FAEEDA", text: "#854F0B" },
  "Mode & Lin": { bg: "#E1F5EE", text: "#0F6E56" },
  Recyclage: { bg: "#E6F1FB", text: "#185FA5" },
  Bijoux: { bg: "#FDE2E2", text: "#A51818" },
  Mobilier: { bg: "#E8F5E9", text: "#2E7D32" },
  Illustration: { bg: "#F3E5F5", text: "#7B1FA2" },
  Maroquinerie: { bg: "#EFEBE9", text: "#5D4037" },
  Cosmétique: { bg: "#FCE4EC", text: "#C2185B" },
};

const thumbIcons = {
  "Art & Déco": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF9F27"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 15l5-5 11 11M14 12l2.5-2.5L21 14" />
    </svg>
  ),
  "Mode & Lin": (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF9F27"
      strokeWidth="2"
    >
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
    </svg>
  ),
  Recyclage: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF9F27"
      strokeWidth="2"
    >
      <path d="M7 11l5-5 5 5M12 6v12M7 17l5 5 5-5" />
    </svg>
  ),
  Bijoux: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EF9F27"
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),

  
};

function Stars({ rating }) {
  return (
    <span style={{ color: "#EF9F27", fontSize: 13, letterSpacing: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ opacity: i <= Math.round(rating) ? 1 : 0.3 }}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const cat = categoryColors[product.category] || categoryColors["Art & Déco"];

  return (
    <div
      onClick={() => navigate(`/produit/${product.slug}`)}
      style={{
        background: "#fff",
        border: "0.5px solid #e5e5e5",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.18s, box-shadow 0.18s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >

      <div
        style={{
          height: 180,
          background: "#F8F9FA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            {thumbIcons[product.category]}
          </div>
        )}

        <span
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: cat.bg,
            color: cat.text,
            fontSize: 10,
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 100,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          {product.category}
        </span>
      </div>

      <div
        style={{
          padding: "14px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#111",
            margin: 0,
          }}
        >
          {product.title}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#854F0B",
                color: "#fff",
                fontSize: 9,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {product.author.initials}
            </div>
            <span style={{ fontSize: 12, color: "#666" }}>
              {product.author.name}
            </span>
          </div>
          <span style={{ fontSize: 11, color: "#999", fontStyle: "italic" }}>
            {product.location.split(",")[0]}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "#111" }}>
            {product.rating.toFixed(1)}
          </span>
          <span style={{ fontSize: 11, color: "#999" }}>
            ({product.reviews})
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "0.5px solid #eee",
            paddingTop: 12,
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 400,
              color: "#111",
            }}
          >
            {product.price.toLocaleString()}{" "}
            <small style={{ fontSize: 10 }}>FCFA</small>
          </span>

          <div style={{ display: "flex", gap: 3 }}>
            {product.payments.slice(0, 2).map((p) => (
              <span
                key={p}
                style={{
                  fontSize: 8,
                  fontWeight: 600,
                  padding: "2px 5px",
                  borderRadius: 4,
                  background: "#f0f0f0",
                  color: "#666",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
