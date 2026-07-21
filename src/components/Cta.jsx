import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Store, CheckCircle2 } from "lucide-react";

export default function Avis() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 md:p-16 border border-neutral-800 shadow-2xl">
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EF9F27]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#EF9F27]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-6">
              Donnez à votre talent la{" "}
              <span className="text-[#EF9F27]">vitrine qu'il mérite</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Qu'il s'agisse de lin tissé, de bijoux artisanaux ou d'art recyclé,
              chaque pièce raconte une histoire. Rejoignez notre communauté et
              commencez à vendre vos créations dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate("/publier")}
                className="group inline-flex items-center justify-center gap-3 bg-[#EF9F27] hover:bg-[#d98c1f] text-neutral-950 font-syne font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#EF9F27]/20 active:scale-[0.98]"
              >
                <Store size={18} />
                Ouvrir ma vitrine
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => navigate("/explorer")}
                className="inline-flex items-center justify-center bg-neutral-800/80 hover:bg-neutral-800 text-white border border-neutral-700/80 font-syne font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 active:scale-[0.98]"
              >
                Explorer les créations
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 mt-6 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-10">
            {[
              {
                title: "Création Rapide",
                desc: "Configurez votre espace en moins de 2 minutes.",
              },
              {
                title: "0 Commission Cachee",
                desc: "Un modèle transparent pensé pour favoriser l'artisan.",
              },
              {
                title: "Visibilité Directe",
                desc: "Présentez vos pièces à des acheteurs locaux et internationaux.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-neutral-800/40 border border-neutral-800"
              >
                <CheckCircle2 size={20} className="text-[#EF9F27] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-syne font-bold text-sm text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}