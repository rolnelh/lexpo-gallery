import React from "react";
import { Helmet } from "react-helmet-async";
import TestimonialsBento from "../components/Djangoun/TestimonialsBento";
import ContactDjangoun from "../components/Djangoun/ContactDjangoun";
import {
  ShieldCheck,
  Recycle,
  Flame,
  Sparkles,
  ArrowUpRight,
  Quote,
  MapPin,
  ExternalLink,
} from "lucide-react";
import VitrineDjangoun from "../components/Djangoun/VitrineDjangoun";
import Celebrity from "../components/Djangoun/Celebrity";
import CollectionVeronique from "../components/Djangoun/CollectionVeronique";

const DjangounProfile = () => {
  const produitsRecycles = [
    {
      id: 1,
      nom: "Le Trône de Fer Récupéré",
      prix: "450.000",
      image:
        "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=400", // Image de métal/design
      description:
        "Fauteuil sculptural forgé à partir de pièces mécaniques de moteurs délaissés.",
    },
    {
      id: 2,
      nom: "Lampe 'Zinli' Solaire",
      prix: "85.000",
      image:
        "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=400",
      description: "Verre soufflé et socle en aluminium recyclé.",
    },
    {
      id: 3,
      nom: "Sac 'Gnon' en Caoutchouc",
      prix: "120.000",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400",
      description: "Texture cuir obtenue par la transformation de pneus usés.",
    },
  ];

  return (
    <div
      className="bg-[#FDFCFB] min-h-screen"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        color: "#111",
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <title>Président Djangoun | Maître de l'Upcycling au Bénin</title>
        <meta
          name="description"
          content="Découvrez l'univers du Président Djangoun, artiste visionnaire qui transforme les déchets en œuvres d'art exceptionnelles à Cotonou."
        />
      </Helmet>

      <section className="max-w-7xl mx-auto rounded-5xl relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] my-10">
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

        <div className="absolute right-0 top-0 w-full h-full lg:w-2/3">
          <img
            src="/images/presidentdjangou10.jpg"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Le Président Djangoun"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl px-6 md:px-20">
          <div className="overflow-hidden">
            <span className="inline-block text-[#EF9F27] font-black tracking-[0.5em] uppercase text-xs md:text-sm mb-4 animate-in slide-in-from-left duration-1000">
              L'Alchimiste du recyclage
            </span>
          </div>

          <div className="relative">
            <h2 className="absolute -top-16 left-0 text-[8rem] md:text-[15rem] font-black text-outline font-syne opacity-20 pointer-events-none select-none">
              DJANGOUN
            </h2>

            <h1 className="text-5xl md:text-[11rem] font-black text-white font-syne leading-[0.8] tracking-tighter">
              PRESIDENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EF9F27] to-white/50">
                DJANGOUN
              </span>
            </h1>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="relative">
              <p className="text-xl md:text-3xl text-stone-300 max-w-xl font-light leading-snug border-l-4 border-[#EF9F27] pl-8 py-2">
                "Rien ne se perd,{" "}
                <span className="text-white font-medium">
                  tout se transforme en lumière.
                </span>
                "
              </p>
              <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold ml-9">
                — Philosophie Zinli Roberto
              </span>
            </div>

            <div className="hidden md:flex w-24 h-24 rounded-full border border-white/10 flex-col items-center justify-center text-center animate-[float_6s_ease-in-out_infinite] backdrop-blur-sm">
              <span className="text-[8px] text-[#EF9F27] font-black uppercase tracking-tighter">
                Artisan
              </span>
              <span className="text-[10px] text-white font-bold uppercase tracking-tighter tracking-[0.2em]">
                Certifié
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-gradient-to-t from-white to-transparent"></div>
          <span className="text-[8px] uppercase tracking-widest text-white">
            Scroll
          </span>
        </div>
      </section>


      <section className="py-32 px-8 md:px-24 bg-white max-w-6xl mx-auto rounded-2xl max-w-7xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div className="relative pl-4">
            <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-stone-100"></div>

            <div className="space-y-24">
              {[
                {
                  num: "01",
                  title: "Sourcing",
                  desc: "Collecte éthique des métaux à travers le Bénin.Chaque débris est sélectionné pour son histoire, avant d'être purifié pour sa future renaissance sculpturale.",
                },
                {
                  num: "02",
                  title: "Transformation",
                  desc: "Le métal fusionne sous l'emprise du feu pour oublier sa rigidité originelle. C'est ici que la matière brute s'efface devant la fluidité du geste.",
                },
                {
                  num: "03",
                  title: "Finition",
                  desc: "Chaque détail est sublimé par un polissage méticuleux, révélant l'âme de la matière. La pièce quitte alors l'état d'objet pour devenir un héritage de lumière",
                },
              ].map((step, i) => (
                <div key={i} className="relative pl-12 group">

                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full border border-stone-100 bg-white flex items-center justify-center z-10 group-hover:border-[#EF9F27] transition-colors duration-500">
                    <span className="text-[10px] font-black text-stone-400 group-hover:text-[#EF9F27]">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-syne text-sm font-bold uppercase tracking-widest text-stone-900">
                      {step.title}
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed max-w-xs font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <h2 className="font-syne text-[10px] uppercase text-[#EF9F27] font-black">
                L'Alchimie du métal
              </h2>
              <h3 className="text-4xl md:text-6xl font-light text-stone-900 tracking-tighter leading-tight">
                De la <span className="text-stone-300">matière brute</span>{" "}
                <br />
                au produit fini.
              </h3>
            </div>

            <p className="text-stone-500 text-base md:text-lg leading-relaxed font-light max-w-md">
              Découvrez le processus de création de Djangoun : une métamorphose
              où le métal recyclé retrouve une seconde vie sous forme d'œuvre
              d'art. Chaque pièce est le fruit d'une patience infinie et d'un
              respect total de l'environnement.
            </p>

            <div className="pt-8">
              <button className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900 border-b border-stone-900 pb-2 hover:text-[#EF9F27] hover:border-[#EF9F27] transition-all">
                Voir la collection complète ↗
              </button>
            </div>
          </div>
        </div>
      </section>
      <VitrineDjangoun />

      {/* <CollectionVeronique /> */}

      <Celebrity />

      <TestimonialsBento />

      <ContactDjangoun />
    </div>
  );
};

export default DjangounProfile;
