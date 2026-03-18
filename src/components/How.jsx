import React from "react";
import { useNavigate, Link } from "react-router-dom";

const etapes = [
  {
    num: "📸",
    title: "Photographiez votre œuvre",
    desc: "Mettez en valeur votre création sous une belle lumière naturelle. Une photo authentique inspire confiance et respect.",
    color: "#E1F5EE",
    textColor: "#0F6E56",
  },
  {
    num: "✍️",
    title: "Créez votre fiche",
    desc: "Décrivez les matériaux utilisés et votre savoir-faire. C'est l'histoire derrière l'objet qui fait sa valeur.",
    color: "#E6F1FB",
    textColor: "#185FA5",
  },
  {
    num: "🏛️",
    title: "Ouvrez votre vitrine",
    desc: "Votre création rejoint notre galerie exclusive et devient accessible à tous ceux qui cherchent l'exceptionnel.",
    color: "#FAEEDA",
    textColor: "#854F0B",
  },
  {
    num: "💬",
    title: "Échangez en direct",
    desc: "Discutez directement avec vos futurs clients. Personnalisez vos commandes selon leurs besoins spécifiques.",
    color: "#FAECE7",
    textColor: "#993C1D",
  },
  {
    num: "$",
    title: "Vivez de votre passion",
    desc: "Encaissez le fruit de votre travail en toute sécurité et continuez à créer des pièces uniques.",
    color: "#EAF3DE",
    textColor: "#3B6D11",
  },
];

export default function How() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        padding: "80px 5%",
        maxWidth: "1100px",
        margin: "0 auto",
        background: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#EF9F27", 
            marginBottom: 12,
          }}
        >
          Comment ça marche
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "36px",
            fontWeight: 400,
          }}
        >
          Propulsez votre savoir-faire
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: "1 1 500px",
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            position: "relative",
          }}
        >
          {etapes.map((s, index) => (
            <div
              key={s.num}
              style={{
                display: "flex",
                gap: "25px",
                paddingBottom: "35px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: s.color,
                    color: s.textColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    fontSize: "16px",
                    zIndex: 2,
                    border: "4px solid #fff",
                  }}
                >
                  {s.num}
                </div>
                {index !== etapes.length - 1 && (
                  <div
                    style={{
                      width: "2px",
                      flexGrow: 1,
                      background: "#eee",
                      margin: "8px 0",
                    }}
                  />
                )}
              </div>

              <div style={{ paddingTop: "6px" }}>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "#111",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    maxWidth: "400px",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/com.png"
              alt="Artisan créant une œuvre unique"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
