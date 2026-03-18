import React from "react";
import { ArrowUpRight } from "lucide-react";

const vipPortraits = [
  {
    name: "Ayra Starr",
    collection: "Collection Véronique",
    image: "/images/ayrastarr.jpg",
    year: "2026",
  },
  {
    name: "IShowSpeed",
    collection: "Custom Steel Piece",
    image: "/images/ishowspeed2.jpg",
    year: "2026",
  },
  {
    name: "Excellence",
    collection: "Ambassadeur de France au Bénin",
    image: "/images/ambassadeur1.jpg",
    year: "2025",
  },
];

const Celebrity = () => {
  return (
    <section className="py-24 bg-white max-w-7xl mx-auto px-6">

      <div className="mb-16">
        <h2 className="font-syne text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-4">
          Rayonnement
        </h2>
        <h3 className="font-syne max-w-3xl text-3xl md:text-4xl font-medium text-stone-600 tracking-tight leading-snug">
         Des personnalités de renom arborant fièrement les créations de Djangoun
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vipPortraits.map((item, i) => (
          <div key={i} className="group cursor-pointer">

            <div className="aspect-[3/4] overflow-hidden rounded-[32px] bg-stone-50 border border-stone-100 mb-6">
              <img
                src={item.image}
                alt={`${item.name} portant Djangoun`}
                className="w-full h-full object-cover"
              />
            </div>


            <div className="flex justify-between items-end px-2">
              <div className="space-y-1">
                <h4 className="font-syne font-bold text-stone-900 text-sm uppercase tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[10px] text-stone-400 font-medium uppercase tracking-widest">
                  {item.collection} — {item.year}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Celebrity;
