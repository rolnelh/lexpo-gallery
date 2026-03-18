import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
                Commencez votre aventure !
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
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Inscription de :", username);
            }}
          >
            <div className="space-y-1 text-center mb-6">
              {/* <span className="text-[10px] bg-black text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Étape 1 sur 2
              </span> */}
              <h3 className="font-syne text-2xl font-normal pt-3">
                Créez votre compte
              </h3>
              <p className="text-xs text-[#EF9F27] font-medium">
                Choisissez un pseudo unique pour votre boutique
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-[13px] font-medium text-gray-700 ml-1">
                Choisissez un pseudo
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ex: yelian_art"
                className="w-full rounded-full border border-gray-100 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition-all text-sm font-medium"
                required
              />
            </div>

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

            <button className="w-full mt-4 rounded-full bg-black py-4 font-syne font-bold text-white shadow-lg hover:shadow-black/20 transition-all active:scale-[0.98]">
              Rejoindre la communauté
            </button>

            <div className="text-center text-sm text-gray-500 pt-4 font-medium">
              Déjà membre ?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-black font-normal hover:underline"
              >
                Se connecter
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-400 leading-tight">
              En cliquant sur "Rejoindre", vous acceptez nos conditions. Vous
              compléterez votre profil pro juste après.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
