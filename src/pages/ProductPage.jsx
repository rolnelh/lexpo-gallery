import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

function Stars({ rating }) {
  return (
    <span style={{ color: '#EF9F27', fontSize: 16 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ opacity: i <= Math.round(rating) ? 1 : 0.3 }}>★</span>
      ))}
    </span>
  );
}

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const similar = products.filter(p => p.category === product?.category && p.slug !== slug).slice(0, 4);

  if (!product) return (
    <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
      <p>Produit introuvable.</p>
      <button onClick={() => navigate('/explorer')} style={{ marginTop: 16, cursor: 'pointer' }}>← Retour</button>
    </div>
  );

  const categoryColors = {
    Formation: { bg: '#E1F5EE', text: '#0F6E56' },
    'E-book': { bg: '#E6F1FB', text: '#185FA5' },
    Template: { bg: '#FAEEDA', text: '#854F0B' },
  };
  const cat = categoryColors[product.category] || categoryColors['Formation'];

  return (
    <>
      <Helmet>
        <title>{product.title} — Chariow</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.title} par ${product.author.name}`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.title,
          "description": product.description,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "XOF",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "reviewCount": product.reviews
          },
          "author": {
            "@type": "Person",
            "name": product.author.name
          }
        })}</script>
      </Helmet>

      <div style={{ fontFamily: "'Quicksand', sans-serif", color: '#111', minHeight: '100vh', background: '#FAFAFA' }}>

        <nav style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '0 5%', height: 64,
          borderBottom: '0.5px solid #eee', background: '#fff',
          position: 'sticky', top: 0, zIndex: 100,
        }}>
          <button
            onClick={() => navigate('/explorer')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: '#666', padding: 0 }}
          >
            ← Explorer
          </button>
          <span style={{ color: '#ddd' }}>·</span>
          <span style={{ fontSize: 13, color: '#aaa', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {product.title}
          </span>
        </nav>

        <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 5% 60px' }}>

          {/* Header produit */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'start', marginBottom: 40 }}>
            <div>
              <span style={{
                display: 'inline-block', background: cat.bg, color: cat.text,
                fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 100, marginBottom: 16,
              }}>
                {product.category}
              </span>
              <h1 style={{
                fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 800, lineHeight: 1.2, marginBottom: 16,
              }}>
                {product.title}
              </h1>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: '#CECBF6', color: '#3C3489',
                  fontSize: 10, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {product.author.initials}
                </div>
                <span
                  onClick={() => navigate(`/createur/${product.author.name.toLowerCase().replace(' ', '-')}`)}
                  style={{ fontSize: 14, color: '#EF9F27', cursor: 'pointer', fontWeight: 500 }}
                >
                  {product.author.name}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <Stars rating={product.rating} />
                <span style={{ fontSize: 14, fontWeight: 700 }}>{product.rating.toFixed(1)}</span>
                <span style={{ fontSize: 13, color: '#999' }}>({product.reviews} avis · {product.students.toLocaleString()} étudiants)</span>
              </div>

              <p style={{ fontSize: 15, color: '#444', lineHeight: 1.75, margin: 0 }}>
                {product.description}
              </p>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 16 }}>
                {product.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: '4px 12px', borderRadius: 100,
                    border: '0.5px solid #ddd', color: '#666', background: '#fff',
                  }}>#{t}</span>
                ))}
              </div>
            </div>

            <div style={{
              background: '#fff', border: '1px solid #eee',
              borderRadius: 16, padding: '24px 20px', minWidth: 220,
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 28, fontWeight: 800,
                color: product.free ? '#1D9E75' : '#111',
                marginBottom: 16,
              }}>
                {product.free ? 'Gratuit' : `${product.price.toLocaleString()} FCFA`}
              </div>
              <button style={{
                width: '100%', background: '#EF9F27', color: '#412402',
                fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14,
                padding: '13px 0', borderRadius: 100, border: 'none', cursor: 'pointer',
                marginBottom: 12,
              }}>
                {product.free ? 'Télécharger' : 'Acheter maintenant'}
              </button>
              <p style={{ fontSize: 11, color: '#aaa', marginBottom: 12 }}>Paiement sécurisé via</p>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
                {product.payments.map(p => (
                  <span key={p} style={{
                    fontSize: 11, fontWeight: 600, padding: '4px 10px',
                    border: '0.5px solid #ddd', borderRadius: 6, color: '#555',
                  }}>{p}</span>
                ))}
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, marginBottom: 20 }}>
                Produits similaires
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 14,
              }}>
                {similar.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
