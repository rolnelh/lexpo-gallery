import React from "react";
import { Pencil, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const InfoItem = ({ label, value, className = "" }) => (
  <div className={`space-y-1.5 group ${className}`}>
    <p className="text-[12px] font-bold text-gray-800 uppercase tracking-[0.1em]">
      {label}
    </p>
    <p className="text-[14px] font-normal text-gray-800 group-hover:text-black transition-colors leading-relaxed">
      {value}
    </p>
  </div>
);

const ProfilView = () => {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4 md:p-0 animate-in fade-in duration-500">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 font-syne tracking-tight">
          Informations de Profil
        </h1>
      </div>


      <div className="bg-white border border-gray-100 rounded-[24px] p-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-full bg-gray-50 border-[3px] border-white shadow-md overflow-hidden ring-2 ring-[#EF9F27]/20">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center md:text-left space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 font-syne tracking-tight">
                Dieudonné Houndagnon
              </h2>
              <p className="text-[14px] text-[#EF9F27] font-bold tracking-wide">
                Artisan Maroquinier
              </p>
              <p className="text-[13px] text-gray-500 font-medium">
                Cotonou, Bénin
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                {socialLinks.map(({ Icon }, i) => (
                  <button
                    key={i}
                    className="p-2 border border-gray-100 rounded-xl text-gray-400 hover:text-[#EF9F27] hover:bg-[#EF9F27]/5 transition-all"
                  >
                    <Icon size={16} strokeWidth={2} />
                  </button>
                ))}
              </div>
            </div>
          </div>


          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-xl text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95">
            <Pencil size={14} strokeWidth={2.5} /> Modifier le profil
          </button>
        </div>
      </div>


      <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-bold text-gray-900 font-syne text-[15px] tracking-tight">
            Détails du compte
          </h3>
          <button className="md:hidden p-2 text-gray-400 hover:text-[#EF9F27]">
            <Pencil size={18} />
          </button>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          <InfoItem label="Prénom" value="Dieudonné" />
          <InfoItem label="Nom" value="Houndagnon" />
          <InfoItem label="Email" value="dieudonne.h@lexpo.bj" />
          <InfoItem label="Téléphone" value="+229 01 40 00 00 00" />

          <div className="col-span-full border-t border-gray-50 pt-8 mt-2">
            <InfoItem
              label="Biographie professionnelle"
              value="Je suis un artisan passionné spécialisé dans la création de sacs à main en cuir de haute qualité. Avec plus de 10 ans d'expérience, je m'efforce de fusionner l'artisanat traditionnel avec des designs modernes pour offrir des pièces uniques et durables. Mon atelier est situé à Cotonou, où je travaille avec des matériaux locaux pour soutenir l'économie locale et promouvoir le savoir-faire béninois."
            />
          </div>
        </div>
      </div>

      <div className="md:hidden pb-10">
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white rounded-2xl font-bold">
          <Pencil size={18} /> Modifier mes informations
        </button>
      </div>
    </div>
  );
};

export default ProfilView;
