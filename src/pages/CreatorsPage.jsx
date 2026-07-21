import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Search,
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Store,
} from "lucide-react";

import Header from "../components/Header";
import { Link } from "react-router-dom";

const CreatorsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Tous",
    "Maroquinerie",
    "Poterie",
    "Tissage",
    "Sculpture",
    "Bijouterie",
  ];

  const artisans = [
    {
      id: 1,
      nom: "Dieudonné Houndagnon",
      specialite: "Maroquinier",
      categorie: "Maroquinerie",
      ville: "Cotonou",
      note: 4.9,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png",
      experience: "10 ans",
      verifie: true,
    },
    {
      id: 2,
      nom: "Afiwa Mensah",
      specialite: "Potière d'art",
      categorie: "Poterie",
      ville: "Porto-Novo",
      note: 4.8,
      image: "https://cdn-icons-png.flaticon.com/512/4086/4086679.png",
      experience: "15 ans",
      verifie: true,
    },

    {
      id: 3,
      nom: "Zinli Roberto",
      specialite: "Artiste & créateur de mode",
      categorie: "créateur de mode",
      ville: "Parakou",
      note: 5.0,
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b9/ff/3f/b9ff3f88-9051-ef32-cf37-bcd3918dd714/0.jpg/1200x630cw.png",
      experience: "15 ans",
      verifie: true,
    },

    {
      id: 4,
      nom: "TOSSA Afiavi Honorine",
      specialite: "Artisan spécialisée",
      categorie: "créateur de mode",
      ville: "Cotonou",
      note: 5.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzQ8TV_kD_mJ27rUIDEn-_178m_yNP8G6AA&s",
      experience: "15 ans",
      verifie: true,
    },

    {
      id: 5,
      nom: "Fathnelle Djihouessi",
      specialite: "Sac artisanal pour Dames",
      categorie: "créateur de mode",
      ville: "Cotonou",
      note: 5.0,
      image:
        "https://ledoux.store/cdn/shop/files/236058342_1189026198284095_7602376038491626361_n.jpg?v=1706141977&width=750",
      experience: "15 ans",
      verifie: true,
    },

    {
      id: 6,
      nom: "Koffi Mensah",
      specialite: "Sculpture sur Bois d'ébène",
      categorie: "Décoration d'intérieur",
      ville: "Abomey",
      note: 4.9,
      image:
        "https://www.proantic.com/galerie/beggi-antichita/img/953681-main-62961ed44418d.jpg",
      experience: "22 ans",
      verifie: true,
    },

    {
      id: 7,
      nom: "Zinsou Sossa",
      specialite: "Bijoux en Bronze & Argent",
      categorie: "Bijoutier Artisanal",
      ville: "Ouidah",
      note: 4.8,
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop",
      experience: "8 ans",
      verifie: false,
    },

    {
      id: 8,
      nom: "Sika Gnonlonfoun",
      specialite: "Poterie & Céramique Rouge",
      categorie: "Art de la table",
      ville: "Sè",
      note: 4.7,
      image:
        "https://lesbellesterres.fr/cdn/shop/files/Bolinetceramiquerouge_2.jpg?v=1722951153&width=2048",
      experience: "12 ans",
      verifie: true,
    },
    {
      id: 9,
      nom: "Modeste Akpo",
      specialite: "Tissage de Kanvo (Pagne Tissé)",
      categorie: "créateur de mode",
      ville: "Abomey",
      note: 5.0,
      image:
        "https://s.rfi.fr/media/display/81a3fd86-6fd2-11ef-9c98-005056bf30b7/w:1024/327554854_479890447686051_1654796282457945259_n.jpg",
      experience: "30 ans",
      verifie: true,
    },
    {
      id: 10,
      nom: "Awaou Lawani",
      specialite: "Beurre de Karité & Huiles",
      categorie: "Cosmétique naturelle",
      ville: "Natitingou",
      note: 4.9,
      image:
        "https://img.lemde.fr/2023/09/28/27/0/640/426/664/0/75/0/0727c1f_1695904183877-img-1591.jpg",
      experience: "10 ans",
      verifie: true,
    },
  ];

  const filteredArtisans = artisans.filter(
    (artisan) =>
      (activeCategory === "Tous" || artisan.categorie === activeCategory) &&
      artisan.nom.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Helmet>
        <title>Explorer les créations —  Artisans, créateurs, stylistes ...</title>
        <meta
          name="description"
          content="Découvrez des œuvres uniques et des produits faits main par nos artisans locaux. Art, mode éthique et objets recyclés."
        />

        <link rel="icon" href="/images/icons8-maître.png" />
      </Helmet>

      <Header />

      <div
        className="min-h-screen p-4 md:p-10 space-y-10 mt-10"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: "#111",
          minHeight: "100vh",
        }}
      >
        <header className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 font-syne">
            Découvrez nos <span className="text-[#EF9F27]">Artisans</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Rencontrez les talents locaux qui font rayonner le savoir-faire
            béninois.
          </p>

          <div className="relative group max-w-xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EF9F27] transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher un artisan ou un métier..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-4 focus:ring-[#EF9F27]/10 focus:border-[#EF9F27] outline-none transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-white text-gray-500 border border-gray-100 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredArtisans.map((artisan) => (
            <div
              key={artisan.id}
              className="relative group bg-[#FDFCFB] border border-stone-100 rounded-[28px] p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,159,39,0.06)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.03] z-0"></div>

              <div className="relative z-10 flex items-center gap-5">
                <div className="relative shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-stone-100 border-2 border-white shadow-inner overflow-hidden ring-1 ring-stone-100/50">
                    <img
                      src={artisan.image}
                      alt={artisan.nom}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                  </div>

                  {artisan.verifie && (
                    <div className="absolute -top-1 -right-1 bg-white border border-stone-100 p-1.5 rounded-full shadow-sm">
                      <ShieldCheck size={14} className="text-emerald-600" />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="font-bold text-stone-950 font-syne text-[16px] tracking-tight">
                      {artisan.nom}
                    </h3>
                    <div className="flex items-center gap-1 bg-stone-100/50 px-2 py-1 rounded-lg">
                      <Star
                        size={10}
                        className="text-[#EF9F27] fill-[#EF9F27]"
                      />
                      <span className="text-[10px] font-bold text-stone-600">
                        {artisan.note}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block text-[#EF9F27] text-[12px] font-bold pb-2.5 w-fit">
                    {artisan.specialite}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-4 pt-3 mt-2 border-t border-stone-100/80">
                <div className="flex items-center gap-3 text-stone-400 text-[11px] font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} strokeWidth={1.5} />
                    <span>{artisan.ville}</span>
                  </div>
                  <div className="w-px h-3 bg-stone-200"></div>
                  <span>{artisan.experience} d'expertise</span>
                </div>

                <Link
                  to={`/dashboard`}
                  className="w-full group/btn flex items-center justify-between pt-1 transition-all"
                >
                  <span className="text-[11px] font-black uppercase tracking-widest text-stone-800 group-hover/btn:text-[#EF9F27] transition-colors">
                    Visiter l'atelier
                  </span>
                  <div className="w-9 h-9 rounded-full border border-stone-100 flex items-center justify-center group-hover/btn:bg-black group-hover/btn:border-black group-hover/btn:text-white transition-all duration-300 transform group-hover/btn:rotate-[-45deg]">
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredArtisans.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-medium">
              Aucun artisan ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto space-y-20 mt-20 py-10">
        <section className="relative overflow-hidden rounded-[40px] border border-stone-100 bg-[#FDFCFB] p-8 md:p-12">
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.03]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Confiance & Qualité
                </span>
              </div>

              <h2 className="font-syne text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                Le sceau de l'authenticité béninoise.
              </h2>

              <p className="text-stone-500 text-sm leading-relaxed">
                Chaque artisan portant le badge "Certifié" passe par un
                processus de sélection rigoureux. Nous ne nous contentons pas de
                photos : nous connaissons les visages derrière les produits.
              </p>

              <ul className="space-y-4">
                {[
                  "Vérification physique des ateliers",
                  "Contrôle de l'origine des matières premières",
                  "Évaluation du savoir-faire traditionnel",
                  "Charte éthique de production locale",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm font-medium text-stone-700"
                  >
                    <CheckCircle2 size={16} className="text-[#EF9F27]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-stone-100 rounded-[24px] overflow-hidden rotate-[-2deg]">
                <img
                  src="https://oukoikan.com/wp-content/uploads/2024/09/PHOTO-2024-09-10-12-41-46-1-1080x600.jpg"
                  className="w-full h-full object-cover"
                  alt="Atelier"
                />
              </div>
              <div className="aspect-[4/5] bg-stone-100 rounded-[24px] overflow-hidden translate-y-8 rotate-[2deg]">
                <img
                  src="https://beninrevele.bj/upload/images/articles//749260037086001657115161.jpg"
                  className="w-full h-full object-cover"
                  alt="Savoir-faire"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-stone-950 rounded-[40px] p-8 md:p-16 text-center space-y-8 overflow-hidden relative group mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#EF9F27] opacity-[0.05] blur-[120px] rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-[#EF9F27]/10 text-[#EF9F27] rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-12">
              <Store size={32} />
            </div>

            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-tight">
              Votre savoir-faire mérite une vitrine mondiale.
            </h2>

            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              Vous êtes un créateur, un sculpteur ou un artisan béninois ?
              Rejoignez la communauté L'Expo et commencez à vendre vos œuvres en
              quelques clics.
            </p>

            <div className="pt-8">
              <button className="bg-[#EF9F27] text-white px-6 py-3 rounded-full font-black text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-[#EF9F27]/10 flex items-center gap-3 mx-auto active:scale-95 tracking-wider">
                Ouvrir mon atelier
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreatorsPage;
