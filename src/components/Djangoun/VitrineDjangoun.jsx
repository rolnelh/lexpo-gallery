import React from "react";
import { ArrowUpRight } from "lucide-react";

const creations = [
  {
    id: 1,
    nom: "Boucles d'Oreilles",
    categorie: "Collection Véronique",
    image: "/images/presidentdjangou1.jpg",
    size: "md:col-span-2 md:row-span-2", 
  },
  {
    id: 2,
    nom: "Masque Industriel No. 4",
    categorie: "Art Mural",
    image: "/images/presidentdjangou18.jpg",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    nom: "Ishowspeed",
    categorie: "Ishowspeed au Bénin",
    image: "/images/presidentdjangou14.jpg",
    size: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    nom: "L'Unité Béninoise",
    categorie: "Édition Limitée",
    image: "/images/presidentdjangou4.jpg",
    size: "md:col-span-1 md:row-span-1",
  },
];

const VitrineDjangoun = () => {
  return (
    <section className="py-24 px-6 bg-white mt-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-[9px]">
              Collection Permanente
            </span>
            <h2 className="font-syne text-4xl md:text-5xl font-normal text-stone-950 leading-tight uppercase tracking-tighter">
              Quelques Œuvres de <br /> la{" "}
              <span className="text-[#EF9F27]">Collection Véronique</span> de
              Djangoun
            </h2>
          </div>
          <p className="text-stone-400 text-xs max-w-xs leading-relaxed border-l border-stone-100 pl-6">
            "Transformer l'oublié en éternel, le déchet en dialogue." —
            Porto-Novo, 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {creations.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-[32px] bg-[#F9F8F6] border border-stone-50 ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.nom}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-medium">
                    {item.categorie}
                  </span>
                  <h3 className="text-white font-syne text-xl font-bold mt-1 flex items-center gap-2">
                    {item.nom} <ArrowUpRight size={16} />
                  </h3>
                </div>
              </div>

              <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full border border-white/20 group-hover:opacity-0 transition-opacity">
                <span className="text-[9px] font-black uppercase tracking-widest text-stone-900">
                  {item.categorie}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 border border-stone-900 px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all duration-500">
            Explorer l'Archive Complète ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default VitrineDjangoun;
