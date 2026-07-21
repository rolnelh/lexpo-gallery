import React from "react";
import {
  Scissors,
  ShoppingBag,
  Hammer,
  Briefcase,
  Sparkles,
  Shirt,
  Gem,
  Palette,
  Globe,
  Crown,
  Recycle,
  PenLine,
} from "lucide-react";

const partners = [
  { name: "Tissage Kanvo", icon: Scissors },
  { name: "Yelian Handmade", icon: ShoppingBag },
  { name: "Forge d'Abomey", icon: Hammer },
  { name: "Maroquinerie d'Art", icon: Briefcase },
  { name: "Céramique de Sè", icon: Sparkles },
  { name: "Teinture Indigo", icon: Shirt },
  { name: "Bijouterie Bronze", icon: Gem },
  { name: "Sculpture sur Teck", icon: Palette },
  { name: "Bénin Digital", icon: Globe },
  { name: "Luxe Durable", icon: Crown },
  { name: "Upcycling BJ", icon: Recycle },
  { name: "Broderie Main", icon: PenLine },
];

export default function CreatorPage() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}
      </style>

      <div className="text-center mb-12 md:mb-16 px-4 max-w-3xl mx-auto">
        <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-4">
          Un écosystème de talents locaux
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
          Du tissage traditionnel de Kanvo à la maroquinerie moderne, nous
          célébrons l'excellence du fait-main béninois.
        </p>
      </div>

      <div className="group relative w-full overflow-hidden marquee-mask py-4">
        <div className="animate-marquee flex gap-4 md:gap-6 group-hover:[animation-play-state:paused]">
          {/* Doubler la liste pour créer une boucle sans coupure */}
          {[...partners, ...partners].map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3.5 bg-white border border-neutral-200/80 rounded-full shadow-sm hover:shadow-md hover:border-[#EF9F27]/50 transition-all duration-300 shrink-0 cursor-pointer select-none"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF9F6] text-[#EF9F27]">
                  <IconComponent size={18} strokeWidth={2} />
                </div>
                <span className="font-syne font-bold text-neutral-800 text-sm md:text-base whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
