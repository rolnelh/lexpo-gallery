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
    <section className="flex min-h-screen items-center justify-center bg-white p-4 md:p-10">
      <Helmet>
        <title>Inscription — Rejoignez nos artisans</title>
      </Helmet>

      <div
        className="flex w-full max-w-6xl flex-col items-stretch gap-12 rounded-[30px] md:rounded-[60px] bg-gray-50 p-6 sm:p-10 md:flex-row lg:p-20 shadow-sm"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex w-full flex-col justify-center space-y-6 md:w-1/2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div
              className="h-16 w-16 overflow-hidden rounded-2xl bg-white p-2 shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/images/panier.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-syne text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                Start your adventure!
              </h2>
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-gray-500">
                Rejoignez la plus grande vitrine de créateurs béninois. Quelques
                secondes suffisent pour créer votre espace.
              </p>
            </div>
          </div>

          <hr className="border-gray-200 w-full" />

          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="flex -space-x-3">
              {[5, 6, 7, 8].map((i) => (
                <img
                  key={i}
                  className="h-12 w-12 rounded-full border-4 border-gray-50 object-cover ring-1 ring-gray-100"
                  src={`https://i.pravatar.cc/150?u=artisan${i}`}
                  alt="Artisan"
                />
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-50 bg-gray-900 text-[10px] font-bold text-white">
                NEW
              </div>
            </div>
            <p className="text-xs font-medium text-gray-500 text-center lg:text-left">
              Faites comme nos 15 derniers créateurs, inscrivez-vous en un clic.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center md:w-1/2">
          <form
            className="w-full space-y-5 rounded-[30px] bg-white p-6 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/50"
            onSubmit={handleSubmit}
          >
            <div className="space-y-1 text-center mb-6">
              <h3 className="font-syne text-2xl font-normal pt-3">
                Créez votre compte
              </h3>
              <p className="text-xs text-[#EF9F27] font-medium">
                Choisissez vos identifiants pour votre boutique
              </p>
            </div>

            {/* Bannière d'erreur */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-medium text-center">
                {errorMessage}
              </div>
            )}

            {/* Bouton Google OAuth */}
            <button
              type="button"
              onClick={() => handleGoogleAuth()}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continuer avec Google
            </button>

            <div className="relative flex items-center justify-center my-2">
              <hr className="w-full border-gray-200" />
              <span className="absolute bg-white px-3 text-xs text-gray-400 font-medium">
                ou
              </span>
            </div>

            {/* Champ Nom & Prénom */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-700 ml-1">
                Nom & Prénom
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Yélian Dossou"
                className="w-full rounded-full border border-gray-100 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all text-sm font-medium"
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-700 ml-1">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 caractères"
                className="w-full rounded-full border border-gray-100 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all text-sm"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button
              disabled={isLoading}
              className="w-full mt-4 rounded-full bg-black py-4 font-syne font-bold text-white shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? "Création du compte..." : "Rejoindre la communauté"}
            </button>

            <div className="text-center text-sm text-gray-500 pt-2 font-medium">
              Déjà membre ?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-black font-normal hover:underline cursor-pointer"
              >
                Se connecter
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-400 leading-tight">
              En cliquant sur "Rejoindre", vous acceptez nos conditions. Vous
              compléterez votre profil professionnel juste après.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;