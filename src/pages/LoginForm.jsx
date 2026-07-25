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
    <section className="flex min-h-screen items-center justify-center bg-white p-4 md:p-10">
      <Helmet>
        <title>Connexion — Connectez vous à votre compte</title>
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

            <div className="space-y-3">
              <h2 className="font-syne text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                Content de vous revoir !
              </h2>
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-gray-500">
                Merci de continuer votre expérience avec nous et de toujours
                faire confiance au savoir-faire de nos artisans béninois.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="text-[13px] font-medium text-gray-700 ml-1">
                Notez votre expérience
              </p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`text-2xl transition-all duration-200 ${star <= (hover || rating)
                      ? "text-gray-900 scale-110"
                      : "text-gray-200"
                      }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-200 w-full" />

          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="h-12 w-12 rounded-full border-4 border-gray-50 object-cover ring-1 ring-gray-100"
                  src={`https://i.pravatar.cc/150?u=artisan${i}`}
                  alt="Membre"
                />
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-50 bg-gray-900 text-[10px] font-bold text-white">
                +15
              </div>
            </div>
            <p className="text-xs font-medium text-gray-500">
              Déjà plus de 15 créateurs gèrent leur boutique ici.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center md:w-1/2">
          {/* 3. Attachement du gestionnaire handleSubmit au formulaire */}
          <form
            className="w-full space-y-5 rounded-[30px] bg-white p-6 sm:p-10 border border-gray-100"
            onSubmit={handleSubmit}
          >
            <div className="space-y-1 text-center mb-6">
              <h3 className="font-syne text-2xl font-normal">
                Identifiez-vous
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                Accédez à votre tableau de bord d'artisan
              </p>
            </div>

            {/* Affichage des messages d'erreur du backend */}
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs font-medium text-center">
                {errorMessage}
              </div>
            )}

            <div className="space-y-1">
              <button
                type="button"
                onClick={() => googleLogin()}
                className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
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
              <label className="text-[13px] font-medium text-gray-700 ml-1">
                Entrez votre email
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Ex: artisan123@gmail.com"
                className="w-full rounded-full border border-gray-100 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all text-sm font-medium"
                required
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[13px] font-medium text-gray-700 ml-1">
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
                className="w-full rounded-full border border-gray-100 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all text-sm"
                required
              />
            </div>

            {/* Bouton avec état de chargement */}
            <button
              disabled={isLoading}
              className="w-full mt-4 rounded-full bg-black py-4 font-syne font-bold text-white shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion en cours..." : "Se connecter"}
            </button>

            <div className="text-center text-sm text-gray-500 pt-4 font-medium">
              Nouveau sur la plateforme ?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-black font-normal hover:underline"
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
