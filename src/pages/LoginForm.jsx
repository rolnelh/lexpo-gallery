import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

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
                    className={`text-2xl transition-all duration-200 ${star <= (hover || rating) ? "text-gray-900 scale-110" : "text-gray-200"}`}
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
          <form
            className="w-full space-y-5 rounded-[30px] bg-white p-6 sm:p-10 border border-gray-100"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Connexion avec :", identifier);
            }}
          >
            <div className="space-y-1 text-center mb-6">
              <h3 className="font-syne text-2xl font-normal">
                Identifiez-vous
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                Accédez à votre tableau de bord d'artisan
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-700 ml-1">
                Entrez votre pseudo ou email
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

            <button className="w-full mt-4 rounded-full bg-black py-4 font-syne font-bold text-white shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98]">
              Se connecter
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
