import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Award } from "lucide-react";

const artistData = {
  name: "Président Djangoun",
  realName: "Zinli Roberto",
  slogan: "Le Styliste Fou : L'Upcycling en Haute Couture",
  description:
    "Créateur béninois autodidacte, Zinli Roberto insuffle une seconde vie radicale aux déchets. Découvrez sa 'Collection Véronique' où le métal recyclé devient une armure futuriste et théâtrale pour une mode durable et engagée. Il utilise des canettes de boissons, des éponges, des batteries, des capsules ou encore des chutes de tissus pour fabriquer ses vêtements.",
  callToAction: "Découvrir la Collection",
  profileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnJ4JEG1Q7YajxGYPppJR79kGMFnmzK9EwQ&s",
  works: [
    {
      title: "Robe 'Lumière d'Alu'",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr0_7f8gitc2lu3muvustRkNPiE47mXAABQ&s",
    },
    {
      title: "Plastron sculpté",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUqcGZJsBxNj0QmMDEU788gNMT9C6WX4ncw&s",
    },
    {
      title: "Détail : Languettes",
      image:
        "https://www.rdwa.fr/wp-content/uploads/2025/08/Capture-decran-2025-08-28-142451.png",
    },
    {
      title: "Coiffe de Guerrier Urbain",
      image:
        "https://oukoikan.com/wp-content/uploads/2026/02/President-Djangooun.jpg",
    },
  ],
};

export default function FeaturedArtist() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-6 py-12 md:py-18 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-xl shadow-neutral-100/50 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <div className="lg:col-span-5 flex flex-col items-start gap-5 order-2 lg:order-1">

          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-[#FAEEDA] text-[#854F0B] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Sparkles size={13} />
              Artiste à la Une
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#EF9F27] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Award size={13} />
              Collection Véronique
            </span>
          </div>

          <div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-4xl font-normal tracking-tight text-neutral-900 leading-none">
              {artistData.name}
            </h2>
            <span className="block text-xs sm:text-sm font-bold text-[#EF9F27] uppercase tracking-widest mt-2">
              {artistData.realName}
            </span>
          </div>

          <blockquote className="border-l-2 border-[#EF9F27] pl-4 italic text-neutral-600 text-sm sm:text-base font-medium">
            "{artistData.slogan}"
          </blockquote>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            {artistData.description}
          </p>

          <button
            onClick={() => navigate(`/president-djangoun`)}
            className="group mt-2 inline-flex items-center justify-center gap-3 bg-neutral-900 hover:bg-[#EF9F27] text-white font-syne text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
          >
            {artistData.callToAction}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 h-[380px] sm:h-[480px] md:h-[520px] order-1 lg:order-2">

          <div className="group relative col-span-1 sm:col-span-1 row-span-2 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm">
            <img
              src={artistData.profileImage}
              alt={artistData.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="group relative col-span-1 sm:col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm">
            <img
              src={artistData.works[0].image}
              alt={artistData.works[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="group relative col-span-1 sm:col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm">
            <img
              src={artistData.works[1].image}
              alt={artistData.works[1].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="group relative col-span-1 sm:col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm">
            <img
              src={artistData.works[2].image}
              alt={artistData.works[2].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="group relative col-span-2 sm:col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shadow-sm">
            <img
              src={artistData.works[3].image}
              alt={artistData.works[3].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
