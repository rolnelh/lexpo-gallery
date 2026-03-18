import React from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Artisans inscrits", value: "1.2K+", icon: "⚒️" },
  { label: "Note créateurs", value: "4,9/5", icon: "⭐" },
  { label: "Ventes locales", value: "95%", icon: "🌍" },
  { label: "Paiement sécurisé", value: "Garantie", icon: "🛡️" },
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
    <section style={{ padding: "80px 5%", background: "#fff" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginBottom: "80px",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "30px",
              textAlign: "center",
              borderRadius: "20px",
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>
              {s.icon}
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: "800",
                marginBottom: "5px",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "14px", color: "#666" }}>{s.label}</div>
          </div>
        ))}
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
              fontFamily: "'Syne', sans-serif",
              fontSize: "36px",
              fontWeight: "400",
              marginBottom: "15px",
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
            <div style={{ color: "#EF9F27", fontSize: "20px" }}>★★★★★</div>
            <span style={{ fontWeight: "700" }}>4,9 sur 5</span>
            <span style={{ color: "#aaa" }}>(+1 200 témoignages)</span>
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
              <div
                style={{
                  fontSize: "40px",
                  color: "#ddd",
                  position: "absolute",
                  top: "10px",
                  left: "20px",
                  fontFamily: "serif",
                }}
              >
                “
              </div>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  position: "relative",
                  paddingLeft: "10px",
                }}
              >
                {a.texte}
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={a.avatar}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  alt={a.nom}
                />
                <div>
                  <div style={{ fontWeight: "700", fontSize: "14px" }}>
                    {a.nom}
                    {a.verifie && (
                      <span
                        style={{
                          color: "#854F0B",
                          fontSize: "10px",
                          marginLeft: "8px",
                          background: "#FAEEDA",
                          padding: "2px 8px",
                          borderRadius: "10px",
                        }}
                      >
                        ✓ Artisan vérifié
                      </span>
                    )}
                  </div>
                  <div style={{ color: "#EF9F27", fontSize: "10px" }}>
                    ★★★★★
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
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
