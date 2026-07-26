import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import Header from "../components/Header";

const CATEGORIES = [
  "Tous",
  "Art & Déco",
  "Mode & Lin",
  "Recyclage",
  "Bijoux",
  "Mobilier",
];

const SORTS = [
  { label: "Nouveautés", value: "recent" },
  { label: "Prix croissant", value: "price_asc" },
  { label: "Prix décroissant", value: "price_desc" },
];

export default function ExplorerPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [sort, setSort] = useState("recent");

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "Tous") list = list.filter((p) => p.category === category);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.nom.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.lieu.toLowerCase().includes(q) ||
          (p.tags && p.tags.some((t) => t.toLowerCase().includes(q))),
      );
    }

    if (sort === "price_asc") list.sort((a, b) => a.prix - b.prix);
    else if (sort === "price_desc") list.sort((a, b) => b.prix - a.prix);
    else if (sort === "recent") list.sort((a, b) => (b.id || 0) - (a.id || 0));

    return list;
  }, [search, category, sort]);

  return (
    <>
      <Helmet>
        <title>Explorer les créations — Chariow Artisan</title>
        <meta
          name="description"
          content="Découvrez des œuvres uniques et des produits faits main par nos artisans locaux. Art, mode éthique et objets recyclés."
        />
        <link rel="icon" href="/images/boutique.png" />
      </Helmet>

      <div
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: "#111",
          minHeight: "100vh",
        }}
      >
        <Header />

        <section
          style={{
            background: "#fff",
            borderBottom: "0.5px solid #eee",
            padding: "44px 5% 32px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            Le meilleur du savoir-faire artisanal
          </h1>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 28 }}>
            Tableaux, vêtements en lin, bijoux et objets transformés ·
            Directement de l'atelier
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              maxWidth: 540,
              margin: "0 auto 28px",
              border: "1.5px solid #111",
              borderRadius: 100,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Chercher un tableau, un bracelet, du lin..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "13px 20px",
                fontSize: 14,
                background: "transparent",
                fontFamily: "'Syne', sans-serif",
              }}
            />
            <button
              style={{
                background: "#EF9F27",
                color: "#fff",
                border: "none",
                padding: "13px 22px",
                cursor: "pointer",
                borderRadius: "0 100px 100px 0",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 12, color: "#aaa" }}>Inspirations :</span>
            {["Recyclage", "Lin", "Tableau", "Perles", "Bois"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearch(tag)}
                style={{
                  fontSize: 12,
                  padding: "4px 12px",
                  borderRadius: 100,
                  border: "0.5px solid #ddd",
                  background: "#fff",
                  color: "#555",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 5%",
            background: "#fff",
            borderBottom: "0.5px solid #eee",
            flexWrap: "wrap",
            gap: 12,
            position: "sticky",
            top: 64,
            zIndex: 90,
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  fontSize: 13,
                  fontWeight: category === cat ? 700 : 400,
                  padding: "7px 18px",
                  borderRadius: 100,
                  border: `1.5px solid ${category === cat ? "#854F0B" : "#ddd"}`,
                  background: category === cat ? "#854F0B" : "#fff",
                  color: category === cat ? "#fff" : "#555",
                  cursor: "pointer",
                  fontFamily: "'Syne', sans-serif",
                  transition: "all 0.15s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              fontSize: 13,
              padding: "7px 14px",
              borderRadius: 100,
              border: "0.5px solid #ddd",
              background: "#fff",
              color: "#555",
              cursor: "pointer",
              outline: "none",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <main
          style={{ padding: "28px 5% 60px", maxWidth: 1200, margin: "0 auto" }}
        >
          <p style={{ fontSize: 13, color: "#aaa", marginBottom: 20 }}>
            {filtered.length} création{filtered.length > 1 ? "s" : ""} trouvée
            {filtered.length > 1 ? "s" : ""}
          </p>

          {filtered.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "60px 0", color: "#aaa" }}
            >
              <p style={{ fontSize: 15 }}>
                Aucune création ne correspond à vos critères.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("Tous");
                }}
                style={{
                  marginTop: 16,
                  fontSize: 13,
                  padding: "8px 20px",
                  border: "0.5px solid #ddd",
                  borderRadius: 100,
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
