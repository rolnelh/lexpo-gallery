import React, { useState } from "react";
import { Check, Zap, ShieldCheck, CreditCard, ArrowRight } from "lucide-react";
import api from "../../api/axios";

const Subscriptions = () => {
    const [loadingPlan, setLoadingPlan] = useState(null);
    const [currentPlan, setCurrentPlan] = useState("free"); // "free" ou "pro"

    // Offres d'abonnement L'Expo
    const plans = [
        {
            id: "gratuit",
            name: "Artisan Découverte",
            price: 0,
            period: "Pour toujours",
            description: "Parfait pour débuter et exposer ses premières pièces.",
            features: [
                "Jusqu'à 3 pièces en vitrine",
                "Produits illimités au labo (Au chaud)",
                "Page vitrine personnalisée",
                "Support par email",
            ],
            current: currentPlan === "free",
            buttonText: "Plan Actuel",
            badge: null,
        },
        {
            id: "pro_mensuel",
            name: "Artisan Pro",
            price: 5000,
            period: "/ mois",
            description: "Pour les artisans souhaitant booster leur visibilité et leurs ventes.",
            features: [
                "Vitrine illimitée",
                "Mise en avant sur la page d'accueil",
                "Statut Artisan Vérifié (Badge Gold)",
                "Statistiques de visites avancées",
                "Support prioritaire WhatsApp",
            ],
            current: currentPlan === "pro",
            buttonText: "Passer au Pro (5 000 FCFA)",
            badge: "Recommandé",
        },
        {
            id: "pro_annuel",
            name: "Artisan Élite (Annuel)",
            price: 50000,
            period: "/ an",
            description: "Économisez 10 000 FCFA avec l'engagement annuel.",
            features: [
                "Tous les avantages du Plan Pro",
                "2 mois offerts",
                "Bannière personnalisée offerte",
                "Accès prioritaire aux événements L'Expo",
            ],
            current: false,
            buttonText: "Choisir l'Annuel (50 000 FCFA)",
            badge: "Meilleure Offre",
        },
    ];

    // Déclencher le paiement FedaPay pour l'abonnement
    const handleSubscribe = async (plan) => {
        if (plan.price === 0) return;

        setLoadingPlan(plan.id);
        try {
            const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

            const response = await api.post("/checkout", {
                amount: plan.price,
                description: `Abonnement : ${plan.name}`,
                firstname: storedUser.name ? storedUser.name.split(" ")[0] : "Artisan",
                lastname: storedUser.name ? storedUser.name.split(" ")[1] || "L'Expo" : "L'Expo",
                email: storedUser.email || "artisan@lexpo.bj",
                phone_number: "61000000",
            });

            if (response.data.success && response.data.payment_url) {
                window.location.href = response.data.payment_url;
            } else {
                alert("Impossible de générer le lien de paiement.");
            }
        } catch (error) {
            console.error("Erreur de souscription :", error);
            alert("Une erreur est survenue lors de l'initialisation du paiement.");
        } finally {
            setLoadingPlan(null);
        }
    };

    return (
        <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto p-4 md:p-6">
            {/* En-tête */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-[#EF9F27] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                     Boostez votre activité
                </div>
                <h1 className="font-syne text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    Choisissez le plan adapté à votre artisanat
                </h1>
                <p className="text-gray-500 text-sm md:text-base">
                    Mettez en valeur vos créations, touchez plus de clients et gérez votre boutique en toute simplicité.
                </p>
            </div>

            {/* Cartes des abonnements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${plan.badge
                                ? "bg-white border-2 border-[#EF9F27] shadow-2xl shadow-amber-500/10 scale-105"
                                : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl"
                            }`}
                    >
                        {/* Badge promotionnel */}
                        {plan.badge && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EF9F27] text-white text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md">
                                {plan.badge}
                            </span>
                        )}

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-syne text-xl font-bold text-gray-900">
                                    {plan.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{plan.description}</p>
                            </div>

                            {/* Prix */}
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-extrabold font-syne text-gray-900">
                                    {plan.price.toLocaleString()} FCFA
                                </span>
                                <span className="text-xs text-gray-400 font-medium">
                                    {plan.period}
                                </span>
                            </div>

                            <hr className="border-gray-100" />

                            {/* Liste des fonctionnalités */}
                            <ul className="space-y-3.5">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-xs text-gray-600">
                                        <div className="p-1 rounded-full bg-amber-50 text-[#EF9F27] shrink-0">
                                            <Check size={12} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bouton d'action */}
                        <div className="pt-8">
                            <button
                                onClick={() => handleSubscribe(plan)}
                                disabled={plan.current || loadingPlan === plan.id}
                                className={`w-full py-4 rounded-[20px] text-xs font-bold transition-all flex items-center justify-center gap-2 ${plan.current
                                        ? "bg-gray-100 text-gray-400 cursor-default"
                                        : plan.badge
                                            ? "bg-[#EF9F27] text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25 active:scale-95"
                                            : "bg-black text-white hover:bg-zinc-800 active:scale-95"
                                    }`}
                            >
                                {loadingPlan === plan.id ? (
                                    "Chargement FedaPay..."
                                ) : plan.current ? (
                                    "Plan Actuel"
                                ) : (
                                    <>
                                        <CreditCard size={16} /> {plan.buttonText}
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Garantie / Info Sécurité */}
            <div className="bg-gray-50 rounded-[28px] p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#EF9F27]">
                        <ShieldCheck size={28} />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm font-syne">
                            Paiement 100% Sécurisé via Mobile Money & Carte
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                            Réglez instantanément par MTN Mobile Money, Moov Money ou Carte Bancaire via FedaPay.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscriptions;