import React from "react";

const testimonials = [
  {
    quote:
      "Le travail sur le métal recyclé dépasse l'artisanat. C'est une renaissance sculpturale.",
    author: "Adrien Houngbédji",
    role: "@adrien_h",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adrien",
  },
  {
    quote:
      "Chaque pièce raconte une histoire du Bénin industriel. Un minimalisme brut.",
    author: "Félicité M.",
    role: "@felicite_art",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felicite",
  },
  {
    quote: "L'œil du Président voit la beauté là où nous voyons des débris.",
    author: "Samuel K.",
    role: "@sam_design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel",
  },

  {
    quote:
      "Chaque pièce raconte une histoire du Bénin industriel. Un minimalisme brut.",
    author: "Félicité M.",
    role: "@felicite_art",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felicite",
  },
  {
    quote: "L'œil du Président voit la beauté là où nous voyons des débris.",
    author: "Samuel K.",
    role: "@sam_design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel",
  },
];

const TestimonialsBento = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-[9px]">
            Témoignages
          </span>
          <h2 className="font-syne text-3xl font-bold text-stone-950  tracking-tighter">
            Ce que pensent les admirateurs de Djangoun
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#FDFDFD] border border-stone-100 rounded-[24px] p-5 transition-all duration-500 hover:border-stone-900/10 group"
            >
              <div>
                <div className="text-stone-200 group-hover:text-orange-500/30 transition-colors mb-3">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 40 30"
                    fill="currentColor"
                  >
                    <path d="M0 15V0h15v15H7.5C7.5 22.5 12.5 25 15 25v5C5 30 0 25 0 15zm25 0V0h15v15H32.5C32.5 22.5 37.5 25 40 25v5C30 30 25 25 25 15z" />
                  </svg>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6 font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-50">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-8 h-8 rounded-full bg-stone-100 grayscale group-hover:grayscale-0 transition-all"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-stone-950 text-[10px] tracking-tight truncate">
                    {t.author}
                  </h4>
                  <p className="text-stone-400 text-[8px] font-bold uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-stone-950 px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-stone-950 hover:text-white transition-all">
            Rejoindre le cercle ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBento;
