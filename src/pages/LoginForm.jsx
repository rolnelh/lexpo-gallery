import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // 1. Importation de notre instance Axios configurée
import { useGoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  // États pour le formulaire
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // États pour l'interaction API
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 2. Fonction de soumission reliée à Laravel
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      // Envoi de la requête POST vers Laravel (http://127.0.0.1:8000/api/login)
      const response = await api.post("/login", {
        email: identifier, // On envoie l'identifiant sous la clé 'email' attendue par AuthController
        password: password,
      });

      // Extraire le token et les infos de l'utilisateur renvoyés par Laravel
      const { token, user } = response.data;

      // Sauvegarder dans le localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Rediriger vers le tableau de bord ou la page souhaitée
      navigate("/dashboard"); // Modifie la route selon ton besoin
    } catch (error) {
      // Gestion propre des erreurs renvoyées par Laravel (ex: 401 Unauthorized)
      if (error.response && error.response.data) {
        setErrorMessage(
          error.response.data.message || "Email ou mot de passe incorrect.",
        );
      } else {
        setErrorMessage("Impossible de se connecter au serveur backend.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // On envoie l'access_token reçu de Google à notre backend Laravel
        const response = await api.post("/auth/google", {
          access_token: tokenResponse.access_token,
        });

        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
      } catch (error) {
        console.error("Erreur lors de la connexion Google :", error);
      }
    },
    onError: () => console.log("Échec de la connexion Google"),
  });

  return (
    <section className="h-screen w-full flex items-center justify-center bg-white p-3 sm:p-6 overflow-hidden">
      <Helmet>
        <title>Connexion — Connectez vous à votre compte</title>
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
                Content de vous revoir !
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
                Merci de continuer votre expérience avec nous et de soutenir le savoir-faire de nos artisans.
              </p>
            </div>

            {/* Notation étoiles */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`transition-all duration-150 ${star <= (hover || rating) ? "text-gray-900 scale-105" : "text-gray-300"
                      }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </button>
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-600">Notez votre expérience</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200/60 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm"
                  src={`https://i.pravatar.cc/150?u=artisan${i}`}
                  alt="Membre"
                />
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gray-900 text-[9px] font-bold text-white shadow-sm">
                +15
              </div>
            </div>
            <p className="text-[11px] font-medium text-gray-500 leading-tight">
              Plus de 15 créateurs gèrent leur boutique ici.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <form
            className="w-full max-w-md space-y-3.5 rounded-[24px] bg-white p-5 sm:p-8 border border-gray-100 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="text-center mb-3">
              <h3 className="font-syne text-xl font-bold text-gray-900">
                Identifiez-vous
              </h3>
              <p className="text-[11px] text-gray-400 font-medium mt-0.5">
                Accédez à votre tableau de bord d'artisan
              </p>
            </div>

            {/* Message d'erreur */}
            {errorMessage && (
              <div className="p-2.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-medium text-center">
                {errorMessage}
              </div>
            )}

            {/* Bouton Google */}
            <button
              type="button"
              onClick={() => googleLogin()}
              className="w-full flex items-center justify-center gap-2.5 rounded-full border border-gray-200 bg-white py-2.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Continuer avec Google
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-2 text-[10px] text-gray-400 uppercase font-medium">ou</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Champ Email */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-gray-700 ml-1">
                Email
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="artisan123@gmail.com"
                className="w-full rounded-full border border-gray-100 bg-gray-50/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-xs font-medium"
                required
              />
            </div>

            {/* Champ Mot de passe */}
            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[11px] font-semibold text-gray-700">
                  Mot de passe
                </label>
                <button
                  type="button"
                  className="text-[10px] font-bold text-orange-600 hover:underline"
                >
                  Oublié ?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-full border border-gray-100 bg-gray-50/80 px-4 py-2.5 outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-xs"
                required
              />
            </div>

            {/* Bouton de soumission */}
            <button
              disabled={isLoading}
              className="w-full mt-2 rounded-full bg-black py-3 font-syne text-xs font-bold text-white shadow-md hover:bg-zinc-800 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>

            {/* Inscription */}
            <div className="text-center text-xs text-gray-500 pt-1 font-medium">
              Nouveau ?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-black font-bold hover:underline"
              >
                Créer un compte
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
