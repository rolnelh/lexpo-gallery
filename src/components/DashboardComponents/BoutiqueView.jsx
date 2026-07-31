import React, { useState } from "react";
import {
  Plus,
  Flame,
  Eye,
  Trash2,
  Heart,
  Star,
  PencilLine,
  Info,
  Sparkles,
  CreditCard,
  X,
  CheckCircle2,
} from "lucide-react";
// import api from "../api/axios";

const BoutiqueView = () => {
  // Produits artisanaux béninois / africains
  const [produits, setProduits] = useState([
    {
      id: 1,
      nom: "Vase en Terre Cuite Gravé",
      desc: "Vase traditionnel façonné à la main avec des motifs géométriques culturels et une finition cuite au feu de bois.",
      prix: 15000,
      prixAncien: 20000,
      note: 4.9,
      avis: 42,
      expose: true,
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      nom: "Tableau Masque en Bronze Fondu",
      desc: "Sculpture murale en bronze réalisée selon la technique ancestrale de la cire perdue.",
      prix: 45000,
      prixAncien: 55000,
      note: 5.0,
      avis: 18,
      expose: true,
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      nom: "Sac Tissé en Fibres de Raphia",
      desc: "Sac cabas durable fait à partir de fibres naturelles tressées à la main par nos artisanes.",
      prix: 8500,
      prixAncien: null,
      note: 4.7,
      avis: 29,
      expose: false,
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop",
    },
  ]);

  // États pour la modale d'ajout/édition
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    desc: "",
    prix: "",
    prixAncien: "",
    image: "",
  });

  // État de chargement pour les paiements
  const [loadingPayment, setLoadingPayment] = useState(false);

  // Basculer l'état "Exposé" / "Au chaud"
  const toggleExpose = (id) => {
    setProduits(
      produits.map((p) => (p.id === id ? { ...p, expose: !p.expose } : p))
    );
  };

  // Supprimer un produit
  const deleteProduit = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      setProduits(produits.filter((p) => p.id !== id));
    }
  };

  // Ouvrir la modale pour créer ou éditer
  const openModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        nom: product.nom,
        desc: product.desc,
        prix: product.prix,
        prixAncien: product.prixAncien || "",
        image: product.image,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        nom: "",
        desc: "",
        prix: "",
        prixAncien: "",
        image: "",
      });
    }
    setIsModalOpen(true);
  };

  // Enregistrer le produit (Ajout ou Édition)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProduits(
        produits.map((p) =>
          p.id === editingProduct.id
            ? {
              ...p,
              nom: formData.nom,
              desc: formData.desc,
              prix: Number(formData.prix),
              prixAncien: formData.prixAncien ? Number(formData.prixAncien) : null,
              image:
                formData.image ||
                "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
            }
            : p
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        nom: formData.nom,
        desc: formData.desc,
        prix: Number(formData.prix),
        prixAncien: formData.prixAncien ? Number(formData.prixAncien) : null,
        note: 5.0,
        avis: 0,
        expose: false, // Arrive au chaud par défaut
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
      };
      setProduits([...produits, newProduct]);
    }
    setIsModalOpen(false);
  };

  // Déclencher le paiement FedaPay pour booster / commander
  const handlePayment = async (produit) => {
    setLoadingPayment(true);
    try {
      const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

      const response = await api.post("/checkout", {
        amount: produit.prix,
        description: `Achat : ${produit.nom}`,
        firstname: storedUser.name ? storedUser.name.split(" ")[0] : "Artisan",
        lastname: storedUser.name ? storedUser.name.split(" ")[1] || "L'Expo" : "L'Expo",
        email: storedUser.email || "artisan@lexpo.bj",
        phone_number: "61000000",
      });

      if (response.data.success && response.data.payment_url) {
        window.location.href = response.data.payment_url;
      }
    } catch (error) {
      console.error("Erreur de paiement FedaPay :", error);
      alert("Erreur lors de l'initialisation du paiement FedaPay.");
    } finally {
      setLoadingPayment(false);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto p-4 md:p-6">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-syne text-3xl font-bold text-gray-900 tracking-tight">
            Ma boutique
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Gérez vos créations artisanales et décidez de ce qui brille en vitrine.
          </p>
        </div>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[20px] text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg active:scale-95 w-full md:w-auto justify-center"
        >
          <Plus size={18} /> Ajouter une création
        </button>
      </div>

      {/* Bannière explicative */}
      <div className="bg-amber-50/60 border border-amber-100 p-5 rounded-[24px] flex gap-4 items-start">
        <div className="bg-white p-2.5 rounded-xl shadow-sm">
          <Info className="text-[#EF9F27]" size={20} />
        </div>
        <div className="space-y-1">
          <p className="font-bold text-gray-900 text-sm">
            Libre contrôle sur votre vitrine d'artisan
          </p>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            Ajoutez vos pièces dans votre atelier ("Au chaud") pour préparer les
            descriptions et visuels. Une fois prêt, cliquez sur{" "}
            <strong>Exposer en vitrine</strong> pour ouvrir les commandes aux visiteurs.
          </p>
        </div>
      </div>

      {/* SECTION 1 : Produits actuellement exposés */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#EF9F27]">
            <Eye size={20} />
            <h2 className="font-syne text-xl font-bold text-gray-900">
              Actuellement exposés en vitrine
            </h2>
          </div>
          <span className="text-[11px] font-bold bg-amber-100 text-[#EF9F27] px-3 py-1 rounded-full uppercase tracking-wider">
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
                    <p className="text-gray-500 text-sm line-clamp-2">
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

                  <div className="text-center px-6 border-x border-gray-100 hidden md:block min-w-[140px]">
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.1em]">
                      Prix
                    </p>
                    <p className="text-xl font-extrabold text-gray-900 mt-1">
                      {p.prix.toLocaleString()} FCFA
                    </p>
                    {p.prixAncien && (
                      <p className="text-xs text-gray-400 line-through font-medium">
                        {p.prixAncien.toLocaleString()} FCFA
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                    <button
                      onClick={() => handlePayment(p)}
                      disabled={loadingPayment}
                      className="flex-1 md:flex-none px-5 py-3 bg-[#EF9F27] hover:bg-amber-600 text-white rounded-xl text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
                    >
                      <CreditCard size={16} /> Payer via FedaPay
                    </button>

                    <button
                      onClick={() => openModal(p)}
                      className="p-3 border border-gray-100 rounded-xl text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                      title="Modifier la création"
                    >
                      <PencilLine size={18} />
                    </button>

                    <button
                      onClick={() => toggleExpose(p.id)}
                      className="p-3 bg-amber-50 text-[#EF9F27] rounded-xl hover:bg-amber-100 transition-colors"
                      title="Ranger au chaud (Retirer de la vitrine)"
                    >
                      <Flame size={18} />
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <div className="py-12 text-center border-2 border-dashed border-gray-100 rounded-[28px]">
              <p className="text-gray-400 font-medium text-sm">
                Aucune création exposée pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2 : Produits au chaud (Atelier) */}
      <section className="space-y-6 pt-10 border-t border-dashed border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <Flame size={20} />
            <h2 className="font-syne text-xl font-bold text-gray-800">
              Créations au chaud (Atelier)
            </h2>
          </div>
          <span className="text-[11px] font-bold bg-gray-100 text-gray-400 px-3 py-1 rounded-full uppercase tracking-wider">
            Privé
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produits
            .filter((p) => !p.expose)
            .map((p) => (
              <div
                key={p.id}
                className="group bg-gray-50/50 border border-gray-100 rounded-[28px] p-5 transition-all hover:bg-white hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square rounded-[22px] overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img
                      src={p.image}
                      className="w-full h-full object-cover"
                      alt={p.nom}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        onClick={() => deleteProduit(p.id)}
                        className="p-2.5 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-red-500 transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                      <button
                        onClick={() => openModal(p)}
                        className="p-2.5 bg-white/20 backdrop-blur-md text-white rounded-xl hover:bg-[#EF9F27] transition-colors"
                        title="Éditer"
                      >
                        <PencilLine size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-gray-800 truncate font-syne text-lg">
                      {p.nom}
                    </h4>
                    <p className="text-gray-500 text-xs line-clamp-2">
                      {p.desc}
                    </p>
                    <p className="text-base font-extrabold text-[#EF9F27] pt-1">
                      {p.prix.toLocaleString()} FCFA
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleExpose(p.id)}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 rounded-xl text-xs font-bold hover:bg-black hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <Sparkles size={14} /> Exposer en vitrine
                </button>
              </div>
            ))}

          {/* Bouton Ajouter */}
          <button
            onClick={() => openModal()}
            className="border-2 border-dashed border-gray-200 rounded-[28px] p-5 flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-[#EF9F27] hover:border-[#EF9F27]/40 hover:bg-amber-50/20 transition-all min-h-[280px]"
          >
            <div className="p-3.5 bg-gray-100 rounded-full group-hover:bg-amber-100 transition-colors">
              <Plus size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Nouvelle création
            </span>
          </button>
        </div>
      </section>

      {/* MODALE D'AJOUT ET DE MODIFICATION */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] p-6 md:p-8 max-w-lg w-full space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-syne text-xl font-bold text-gray-900">
                {editingProduct ? "Modifier la création" : "Nouvelle création"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Nom du produit
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Vase sculpté en terre cuite"
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF9F27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  Description
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Histoire, matériaux utilisés, temps de confection..."
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({ ...formData, desc: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF9F27]"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                    Prix (FCFA)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="15000"
                    value={formData.prix}
                    onChange={(e) =>
                      setFormData({ ...formData, prix: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF9F27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                    Ancien Prix (Optionnel)
                  </label>
                  <input
                    type="number"
                    placeholder="20000"
                    value={formData.prixAncien}
                    onChange={(e) =>
                      setFormData({ ...formData, prixAncien: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF9F27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">
                  URL de l'image
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EF9F27]"
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 text-sm font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 text-sm font-bold text-white bg-black hover:bg-zinc-800 rounded-xl transition-colors shadow-md"
                >
                  {editingProduct ? "Enregistrer" : "Créer la pièce"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoutiqueView;