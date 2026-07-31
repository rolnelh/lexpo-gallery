import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import api from "../api/axios";

const RegisterForm = () => {
  const navigate = useNavigate();

  // États pour les champs
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  // États feedback API
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handler Inscription Google
  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLoading(true);
      setErrorMessage("");
      try {
        const response = await api.post("/auth/google", {
          access_token: tokenResponse.access_token,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
      } catch (error) {
        console.error("Erreur Google Auth:", error);
        setErrorMessage(
          error.response?.data?.message || "Échec de la connexion avec Google."
        );
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => setErrorMessage("La connexion Google a été annulée ou a échoué."),
  });

  // Handler Inscription Formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    // Génération d'un email fictif si l'utilisateur ne fournit que son nom/prénom
    const generatedEmail = `${fullName.toLowerCase().replace(/\s+/g, ".")}_${Date.now()}@lexpo.app`;

    try {
      const response = await api.post("/register", {
        name: fullName,
        email: generatedEmail,
        password: password,
      });

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "Une erreur est survenue."
        );
      } else {
        setErrorMessage("Impossible de joindre le serveur backend.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen w-full flex items-center justify-center bg-white p-3 sm:p-6 overflow-hidden">
      <Helmet>
        <title>Inscription — Rejoignez nos artisans</title>
      </Helmet>

      <div
        className="flex w-full max-w-5xl items-center justify-between gap-8 rounded-[28px] md:rounded-[40px] bg-gray-50 p-4 sm:p-8 md:p-10 shadow-sm border border-gray-100 max-h-[92vh]"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >

        <div className="hidden md:flex w-1/2 flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div
              className="h-12 w-12 overflow-hidden rounded-xl bg-white p-2 shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/images/panier.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-1.5">
              <h2 className="font-syne text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Start your adventure!
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
                Rejoignez la plus grande vitrine de créateurs béninois. Quelques secondes suffisent pour créer votre espace.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[5, 6, 7, 8].map((i) => (
                <img
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                  src={`https://i.pravatar.cc/150?u=artisan${i}`}
                  alt="Artisan"
                />
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[8px] font-bold text-white shadow-sm">
                NEW
              </div>
            </div>
            <p className="text-[11px] font-medium text-gray-500 leading-tight">
              Rejoignez nos 15 derniers créateurs inscrits.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <form
            className="w-full max-w-md space-y-3 rounded-[24px] bg-white p-5 sm:p-7 border border-gray-100 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-2">
              <h3 className="font-syne text-xl font-bold text-gray-900">
                Créez votre compte
              </h3>
              <p className="text-[11px] text-[#EF9F27] font-semibold mt-0.5">
                Choisissez vos identifiants de boutique
              </p>
            </div>

            {/* Bannière d'erreur */}
            {errorMessage && (
              <div className="p-2 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-medium text-center">
                {errorMessage}
              </div>
            )}

            {/* Bouton Google OAuth */}
            <button
              type="button"
              onClick={() => handleGoogleAuth()}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white py-2 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continuer avec Google
            </button>

            <div className="relative flex items-center justify-center my-1">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-2 text-[10px] text-gray-400 uppercase font-medium">ou</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Champ Nom & Prénom */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-semibold text-gray-700 ml-1">
                Nom & Prénom
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Yélian Dossou"
                className="w-full rounded-full border border-gray-100 bg-gray-50/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-xs font-medium"
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-0.5">
              <label className="text-[11px] font-semibold text-gray-700 ml-1">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 8 caractères"
                className="w-full rounded-full border border-gray-100 bg-gray-50/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-xs"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button
              disabled={isLoading}
              className="w-full mt-2 rounded-full bg-black py-2.5 font-syne text-xs font-bold text-white shadow-md hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Création..." : "Rejoindre la communauté"}
            </button>

            {/* Lien de redirection */}
            <div className="text-center text-xs text-gray-500 pt-1 font-medium">
              Déjà membre ?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-black font-bold hover:underline cursor-pointer"
              >
                Se connecter
              </button>
            </div>

            <p className="text-[9px] text-center text-gray-400 leading-tight pt-1">
              En cliquant sur "Rejoindre", vous acceptez nos conditions.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default RegisterForm;