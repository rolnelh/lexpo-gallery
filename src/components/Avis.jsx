import React from "react";
import  navigate, { useNavigate } from "react-router-dom";

import { Hammer, Star, Globe, ShieldCheck, Quote, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Artisans inscrits", value: "1.2K+", icon: Hammer },
  { label: "Note créateurs", value: "4,9/5", icon: Star },
  { label: "Ventes locales", value: "95%", icon: Globe },
  { label: "Paiement sécurisé", value: "Garantie", icon: ShieldCheck },
];

const avisClients = [
  {
    nom: "Koffi A.",
    texte:
      "Grâce à ma vitrine, j'ai pu présenter mes meubles en bois massif à des clients qui ne me connaissaient pas. Mon carnet de commandes est plein pour 3 mois !",
    verifie: true,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rC-9wuwRsmCiueR8DVeZN9GgB9FtqpPJsQ&s",
  },
  {
    nom: "Sika B.",
    texte:
      "Enfin une plateforme qui respecte le travail artisanal. Mes sacs en cuir sont mis en valeur et je traite directement avec mes clients sur la plateforme.",
    verifie: true,
    avatar: "https://beninrevele.bj/upload/images/articles//749260037086001657115161.jpg",
  },
  {
    nom: "Yasmine L.",
    texte:
      "L'interface est intuitive et très pro. Mes poteries ont trouvé leur public en un temps record !",
    verifie: true,
    avatar:
      "https://www.goafricaonline.com/media/cache/resolve/w1200/uploads/media/cover_category/0002/100/62ecd68834abb-artisans.jpg",
  },
];

export default function Avis() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: "80px 5%", background: "#fff", maxWidth: "1280px", margin: "0 auto" }}>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "80px",
        }}
      >
        {stats.map((s, i) => {
          const IconComponent = s.icon;

          return (
            <div
              key={i}
              style={{
                padding: "28px 20px",
                textAlign: "center",
                borderRadius: "20px",
                border: "1px solid #f0f0f0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#FAF9F6",
                  color: "#EF9F27",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                }}
              >
                <IconComponent size={22} strokeWidth={2} />
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "500",
                  // fontFamily: "'Syne', sans-serif",
                  marginBottom: "4px",
                  color: "#111",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "14px", color: "#666", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "50px",
          alignItems: "flex-start",
        }}
      >

        <div style={{ flex: "1 1 450px" }}>
          <h2
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "36px",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#111",
            }}
          >
            Le succès de nos créateurs
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "flex", gap: "2px", color: "#EF9F27" }}>
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="#EF9F27" stroke="none" />
              ))}
            </div>
            <span style={{ fontWeight: "700", color: "#111" }}>4,9 sur 5</span>
            <span style={{ color: "#888", fontSize: "14px" }}>(+1 200 témoignages)</span>
          </div>

          {avisClients.map((a, i) => (
            <div
              key={i}
              style={{
                padding: "25px",
                background: "#F9F9F9",
                borderRadius: "20px",
                marginBottom: "20px",
                position: "relative",
              }}
            >
              <Quote
                size={32}
                color="#E5E5E5"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  transform: "rotate(180deg)",
                }}
              />
              <p
                style={{
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                  fontStyle: "italic",
                }}
              >
                « {a.texte} »
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={a.avatar}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt={a.nom}
                />
                <div>
                  <div
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {a.nom}
                    {a.verifie && (
                      <span
                        style={{
                          color: "#854F0B",
                          fontSize: "11px",
                          fontWeight: 600,
                          background: "#FAEEDA",
                          padding: "3px 8px",
                          borderRadius: "100px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <CheckCircle2 size={12} color="#854F0B" /> Artisan vérifié
                      </span>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: "2px", color: "#EF9F27", marginTop: "3px" }}>
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={12} fill="#EF9F27" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: "1 1 350px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <img
              src="https://oukoikan.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-12-41-46-1-1080x600.jpg"
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
              alt="Artisan bois"
            />
            <img
              src="https://ledoux.store/cdn/shop/files/Banniere_Ilewa.png?v=1706140195&width=1500"
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "150px",
                objectFit: "cover",
              }}
              alt="Poterie"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              paddingTop: "30px",
            }}
          >
            <img
              src="https://universcultureletartistique.wordpress.com/wp-content/uploads/2020/08/fb_img_1598042143369.jpg?w=720"
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
              alt="Textile"
            />
            <img
              src="https://images.coinafrique.com/4879447_uploaded_image1_1722927206.jpg"
              style={{
                borderRadius: "20px",
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              alt="Artisanat"
            />
          </div>
        </div>
      </div>
    </section>
 
  );
}
