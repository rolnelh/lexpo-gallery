import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { Sparkles, Gem, Smartphone, Handshake, Rocket } from "lucide-react";

const pointsForts = [
  {
    icon: Sparkles,
    title: "Vitrine en 30s",
    desc: "Prenez vos créations en photo, fixez votre prix et publiez. Votre catalogue pro est prêt en un clin d'œil.",
  },
  {
    icon: Gem,
    title: "Valorisation Totale",
    desc: "Mettez en avant l'histoire derrière chaque objet. Ici, on ne vend pas de l'occasion, on vend du talent.",
  },
  // {
  //   icon: Smartphone,
  //   title: "Bye bye WhatsApp",
  //   desc: "Fini les galeries photos encombrées. Partagez un lien unique et élégant vers tout votre catalogue.",
  // },
  {
    icon: Handshake,
    title: "Confiance Locale",
    desc: "Renforcez votre crédibilité auprès des clients de votre ville avec une présence en ligne soignée.",
  },
  {
    icon: Rocket,
    title: "Boostez vos ventes",
    desc: "Touchez une audience qui recherche spécifiquement l'originalité et le savoir-faire artisanal africain.",
  },
];

export default function Why() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: "80px 5%", background: "#fff" }}>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 24,
          fontWeight: 400,
          margin: "0 auto 40px",
          textAlign: "center",
        }}
      >
        Pourquoi exposer sur notre plateforme ?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 12,
        }}
      >
        {pointsForts.map((p) => {
          const IconComponent = p.icon;

          return (
            <div
              key={p.title}
              style={{
                background: "#fff",
                border: "0.5px solid #eee",
                borderRadius: 12,
                padding: "16px 18px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                  color: "#111", // Ajustez la couleur de l'icône selon votre thème
                }}
              >
                <IconComponent size={22} strokeWidth={1.8} />
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
