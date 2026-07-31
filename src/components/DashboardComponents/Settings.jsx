import React, { useState } from "react";
import {
    User,
    Trash2,
    CreditCard,
    Headphones,
    MessageSquare,
    History,
    AlertTriangle,
    ShieldCheck,
    ExternalLink,
    ChevronRight,
    LogOut
} from "lucide-react";
import api from "../../api/axios";

const Settings = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [confirmText, setConfirmText] = useState("");
    const [loading, setLoading] = useState(false);

    // Exemple d'historique d'activité
    const activityLogs = [
        { id: 1, action: "Connexion réussie", date: "31 Juillet 2026 - 17:45", type: "info" },
        { id: 2, action: "Mise à jour du profil artisan", date: "29 Juillet 2026 - 14:20", type: "info" },
        { id: 3, action: "Paiement abonnement Pro (5 000 FCFA)", date: "15 Juillet 2026 - 10:11", type: "success" },
    ];

    // Action : Supprimer le compte
    const handleDeleteAccount = async () => {
        if (confirmText !== "SUPPRIMER") return;

        setLoading(true);
        try {
            await api.delete("/user/account");
            localStorage.clear();
            window.location.href = "/login";
        } catch (error) {
            console.error("Erreur de suppression :", error);
            alert("Une erreur est survenue lors de la suppression de votre compte.");
        } finally {
            setLoading(false);
        }
    };

    // Action : Annuler l'abonnement
    const handleCancelSubscription = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir annuler votre abonnement Pro à la fin de la période en cours ?")) {
            try {
                await api.post("/subscription/cancel");
                alert("Votre demande d'annulation a été prise en compte.");
            } catch (error) {
                console.error("Erreur d'annulation :", error);
                alert("Impossible d'annuler l'abonnement pour le moment.");
            }
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto p-4 md:p-6 pb-20">
            {/* En-tête */}
            <div>
                <h1 className="font-syne text-2xl md:text-3xl font-bold text-gray-900">
                    Paramètres du compte
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                    Gérez la sécurité de votre compte, votre abonnement et vos préférences.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6">

                {/* SECTION 1 : Abonnement & Facturation */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-amber-50 text-[#EF9F27] rounded-2xl">
                            <CreditCard size={20} />
                        </div>
                        <div>
                            <h3 className="font-syne font-bold text-gray-900 text-base">Gestion de l'abonnement</h3>
                            <p className="text-xs text-gray-500">Consultez votre offre active ou résiliez à tout moment</p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-100">
                        <div>
                            <span className="inline-block bg-amber-100 text-[#EF9F27] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
                                Plan Pro Actif
                            </span>
                            <p className="text-xs text-gray-600">Renouvellement automatique le 15 Août 2026</p>
                        </div>
                        <button
                            onClick={handleCancelSubscription}
                            className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline transition-all"
                        >
                            Annuler mon abonnement
                        </button>
                    </div>
                </div>

                {/* SECTION 2 : Support & Assistant Chat */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl">
                            <Headphones size={20} />
                        </div>
                        <div>
                            <h3 className="font-syne font-bold text-gray-900 text-base">Assistance & Support</h3>
                            <p className="text-xs text-gray-500">Un problème ou une question ? Notre équipe est là</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {/* Discuter avec le chat AI / Support instantané */}
                        <a
                            href="https://wa.me/22900000000" // Lien WhatsApp ou route interne chat
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100 group"
                        >
                            <div className="flex items-center gap-3">
                                <MessageSquare size={18} className="text-gray-700 group-hover:text-black" />
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Discuter avec l'assistant Chat</p>
                                    <p className="text-[11px] text-gray-500">Réponses instantanées 24/7</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Contacter le support email */}
                        <a
                            href="mailto:support@lexpo.bj"
                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-all border border-gray-100 group"
                        >
                            <div className="flex items-center gap-3">
                                <Headphones size={18} className="text-gray-700 group-hover:text-black" />
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Contacter l'équipe Support</p>
                                    <p className="text-[11px] text-gray-500">Par email sous 24h</p>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* SECTION 3 : Historique des activités */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-purple-50 text-purple-600 rounded-2xl">
                            <History size={20} />
                        </div>
                        <div>
                            <h3 className="font-syne font-bold text-gray-900 text-base">Historique d'activité</h3>
                            <p className="text-xs text-gray-500">Journal des dernières actions effectuées sur votre profil</p>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100 pt-2">
                        {activityLogs.map((log) => (
                            <div key={log.id} className="py-3 flex items-center justify-between text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EF9F27]"></div>
                                    <span className="font-medium text-gray-800">{log.action}</span>
                                </div>
                                <span className="text-gray-400 text-[11px]">{log.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 4 : Zone Dangereuse (Suppression du compte) */}
                <div className="bg-red-50/50 rounded-3xl p-6 border border-red-100 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-red-100 text-red-600 rounded-2xl">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h3 className="font-syne font-bold text-red-900 text-base">Zone Dangereuse</h3>
                            <p className="text-xs text-red-600/70">La suppression de votre compte est définitive et irréversible</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-2xl transition-all shadow-md shadow-red-500/10 flex items-center gap-2"
                        >
                            <Trash2 size={16} /> Supprimer définitivement mon compte
                        </button>
                    </div>
                </div>

            </div>

            {/* MODAL DE CONFIRMATION DE SUPPRESSION */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-[32px] max-w-md w-full p-6 space-y-6 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="space-y-2 text-center">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="font-syne text-xl font-bold text-gray-900">
                                Supprimer votre compte ?
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Toutes vos œuvres en vitrine, votre historique et vos informations d'artisan seront définitivement effacés.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center">
                                Tapez <span className="text-red-600">SUPPRIMER</span> pour confirmer
                            </label>
                            <input
                                type="text"
                                value={confirmText}
                                onChange={(e) => setConfirmText(e.target.value)}
                                placeholder="SUPPRIMER"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-center text-sm font-bold tracking-widest focus:ring-2 focus:ring-red-500 focus:outline-none"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setConfirmText("");
                                }}
                                className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-2xl transition-all"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                disabled={confirmText !== "SUPPRIMER" || loading}
                                className="flex-1 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-bold rounded-2xl transition-all shadow-lg shadow-red-500/20"
                            >
                                {loading ? "Suppression..." : "Confirmer"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Settings;