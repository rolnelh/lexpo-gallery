import React, { useState } from "react";
import {
  Plus,
  Flame,
  Eye,
  Trash2,
  Heart,
  Star,
  ArrowUpRight,
  PencilLine,
  Info,
  Sparkles,
} from "lucide-react";

const BoutiqueView = () => {
  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: "Montre classique en cuir",
      desc: "Une montre élégante faite à la main avec un bracelet en cuir véritable et un cadran minimaliste.",
      prix: 299,
      prixAncien: 399,
      note: 4.9,
      avis: 128,
      expose: true,
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      nom: "Sac en cuir artisanal",
      desc: "Un sac à main en cuir de haute qualité, fabriqué à la main avec des matériaux durables et un design intemporel.",
      prix: 150,
      expose: false,
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400&auto=format&fit=crop",
    },
  ]);

  const toggleExpose = (id) => {
    setProduits(
      produits.map((p) => (p.id === id ? { ...p, expose: !p.expose } : p)),
    );
  };

  const deleteProduit = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      setProduits(produits.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-syne text-3xl font-bold text-gray-900 tracking-tight">
            Ma boutique
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Gérez vos créations et décidez de ce qui brille en vitrine.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[20px] text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg active:scale-95 w-full md:w-auto justify-center">
          <Plus size={18} /> Ajouter au labo
        </button>
      </div>

      <div className="bg-orange-50/50 border border-orange-100 p-5 rounded-[24px] flex gap-4 items-start">
        <div className="bg-white p-2 rounded-xl shadow-sm">
          <Info className="text-[#EF9F27]" size={20} />
        </div>
        <div className="space-y-1">
          <p className="font-bold text-gray-900 text-sm">
            Libre contrôle sur votre boutique
          </p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Vous pouvez ajouter vos produits dans votre boutique sans toutefois
            les exposer immédiatement. Préparez-les dans un coin de votre boutique,
            puis cliquez sur <strong>Exposer</strong> pour les rendre visibles à
            vos clients.
          </p>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#EF9F27]">
            <Eye size={20} />
            <h2 className="font-syne text-xl font-bold text-gray-900">
              Actuellement exposés
            </h2>
          </div>
          <span className="text-[11px] font-bold bg-orange-100 text-[#EF9F27] px-3 py-1 rounded-full uppercase tracking-wider">
            Public
          </span>
        </div>

        <div className="space-y-4">
          {produits.filter((p) => p.expose).length > 0 ? (
            produits
              .filter((p) => p.expose)
              .map((p) => (
                <div
                  key={p.id}
                  className="group bg-white border border-gray-100 rounded-[28px] p-4 flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500"
                >
                  <div className="w-full md:w-44 h-36 rounded-[22px] overflow-hidden bg-gray-50 shrink-0">
                    <img
                      src={p.image}
                      alt={p.nom}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex-1 space-y-2 text-center md:text-left">
                    <h3 className="font-bold text-gray-900 text-xl font-syne">
                      {p.nom}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mt-1">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-1.5">
                      <Star
                        size={14}
                        className="fill-[#EF9F27] text-[#EF9F27]"
                      />
                      <span className="text-sm font-bold text-gray-800">
                        {p.note}
                      </span>
                      <span className="text-sm text-gray-400">
                        ({p.avis} avis)
                      </span>
                    </div>
                  </div>

                  <div className="text-center px-6 border-x border-gray-50 hidden md:block">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.1em]">
                      Prix
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900 mt-1">
                      {p.prix} $
                    </p>
                    {p.prixAncien && (
                      <p className="text-sm text-gray-300 line-through font-medium">
                        {p.prixAncien} $
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-gray-50 hover:bg-black hover:text-white rounded-xl text-sm font-bold transition-all active:scale-95">
                      Ajouter au panier
                    </button>
                    <button className="p-3 border border-gray-100 rounded-xl text-gray-400 hover:text-red-500 transition-colors">
                      <Heart size={20} />
                    </button>
                    <button
                      onClick={() => toggleExpose(p.id)}
                      className="p-3 bg-orange-50 text-[#EF9F27] rounded-xl hover:bg-orange-100 transition-colors"
                      title="Remettre au chaud"
                    >
                      <Flame size={20} />
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className="py-12 text-center border-2 border-dashed border-gray-100 rounded-[28px]">
              <p className="text-gray-400 font-medium text-sm">
                Votre vitrine est vide.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="space-y-6 pt-10 border-t border-dashed border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <Flame size={20} />
            <h2 className="font-syne text-xl font-bold text-gray-800">
              Produits "Au chaud" 
            </h2>
          </div>
          <span className="text-[11px] font-bold bg-gray-100 text-gray-400 px-3 py-1 rounded-full uppercase tracking-wider">
            Privé
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {produits
            .filter((p) => !p.expose)
            .map((p) => (
              <div
                key={p.id}
                className="group bg-gray-50/50 border border-gray-100 rounded-[28px] p-5 transition-all hover:bg-white hover:shadow-xl"
              >
                <div className="relative aspect-square rounded-[22px] overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover"
                    alt={p.nom}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={() => deleteProduit(p.id)}
                      className="p-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-[#EF9F27] transition-colors">
                      <PencilLine size={18} />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-gray-800 truncate font-syne">
                    {p.nom}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {p.desc}
                  </p>
                  <p className="text-sm font-bold text-[#EF9F27]">{p.prix} $</p>
                </div>

                <button
                  onClick={() => toggleExpose(p.id)}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:bg-black hover:text-white transition-all shadow-sm"
                >
                  <Sparkles size={14} /> Exposer en vitrine
                </button>
              </div>
            ))}

          <button className="border-2 border-dashed border-gray-100 rounded-[28px] p-5 flex flex-col items-center justify-center gap-3 text-gray-300 hover:text-[#EF9F27] hover:border-[#EF9F27]/30 hover:bg-orange-50/30 transition-all min-h-[250px]">
            <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
              <Plus size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Nouveau produit
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default BoutiqueView;
