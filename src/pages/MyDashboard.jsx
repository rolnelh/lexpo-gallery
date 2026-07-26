import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import { Sparkles} from "lucide-react";


import {
  LayoutDashboard,
  ShoppingBag,
  UserCircle,
  Settings,
  LogOut,
  PlusCircle,
  MapPin,
} from "lucide-react";

import ProfilView from "../components/DashboardComponents/ProfilView";
import BoutiqueView from "../components/DashboardComponents/BoutiqueView";


const MyDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("aperçu");

  const renderContent = () => {
    switch (activeTab) {
      case "aperçu":
        return <DefaultApercu />;
      case "produits":
        return (
          <BoutiqueView />
        );
      case "profil":
        return <ProfilView />;
      default:
        return <DefaultApercu />;
    }
  };

  return (
    <div
      className="flex min-h-screen bg-[#fafafa]"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      <Helmet>
        <title>Tableau de bord — L'Expo</title>
      </Helmet>

      <aside className="fixed h-full w-64 border-r border-gray-100 bg-white p-6 hidden md:block">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#EF9F27]/10 to-[#EF9F27]/30 text-[#EF9F27] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#EF9F27] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#EF9F27]/25">
            <Sparkles
              size={18}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </div>

          <span className="font-syne text-base font-bold tracking-tight text-black">
            L'<span className="text-[#EF9F27]">Expo</span>
          </span>
        </div>

        <nav className="space-y-1">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            label="Aperçu"
            active={activeTab === "aperçu"}
            onClick={() => setActiveTab("aperçu")}
          />
          <SidebarItem
            icon={<ShoppingBag size={18} />}
            label="Ma boutique"
            active={activeTab === "produits"}
            onClick={() => setActiveTab("produits")}
          />
          <SidebarItem
            icon={<UserCircle size={18} />}
            label="Mon Profil"
            active={activeTab === "profil"}
            onClick={() => setActiveTab("profil")}
          />
          <div className="pt-4 mt-4 border-t border-gray-50">
            <SidebarItem icon={<Settings size={18} />} label="Paramètres" />
            <SidebarItem
              icon={<LogOut size={18} />}
              label="Déconnexion"
              color="text-red-400"
            />
          </div>
        </nav>
      </aside>

      <main className="flex-1 md:ml-64 p-4 md:p-10">{renderContent()}</main>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  active,
  onClick,
  color = "text-gray-900",
}) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[14px] font-semibold transition-all ${active
        ? "bg-black text-white shadow-md shadow-black/10"
        : `${color} hover:bg-gray-50 hover:text-black`
      }`}
  >
    {icon}
    {label}
  </button>
);

const StatCard = ({ label, value, growth }) => (
  <div className="rounded-[24px] border border-gray-100 bg-white p-6 shadow-sm">
    <p className="text-[12px] font-bold uppercase tracking-wider text-gray-900">
      {label}
    </p>
    <div className="mt-2 flex items-baseline gap-3">
      <span className="text-3xl font-extrabold text-gray-900">{value}</span>
      {growth && (
        <span className="text-[11px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
          {growth}
        </span>
      )}
    </div>
  </div>
);

const DefaultApercu = () => (
  <>
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
      <div>
        <h1 className="font-syne text-2xl font-bold text-gray-900">
          Bienvenue, Artisan 👋
        </h1>
        <p className="text-sm text-gray-500">
          Voici ce qui se passe dans votre boutique aujourd'hui.
        </p>
      </div>
      <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-all shadow-sm active:scale-95">
        <PlusCircle size={18} /> Exposer une création
      </button>
    </header>

    <div className="mb-8 flex items-center justify-between rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
      <div className="flex items-start gap-4">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-syne font-bold">
          !
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Complétez votre profil d'artisan
          </h3>
          <p className="text-xs text-gray-500 mt-1 max-w-md">
            Ajoutez votre ville et votre spécialité pour rassurer vos futurs
            clients.
          </p>
        </div>
      </div>
      <button className="text-sm font-bold text-orange-600 hover:underline">
        Compléter mon profil →
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <StatCard label="Vues totales" value="1,284" growth="+12%" />
      <StatCard label="Demandes de contact" value="14" growth="+5%" />
      <StatCard label="Créations exposées" value="8" />
    </div>

    <div className="rounded-[30px] border border-gray-100 bg-white p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
      <div className="h-16 w-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 mb-4">
        <ShoppingBag size={32} />
      </div>
      <h3 className="font-syne text-lg font-bold text-gray-800">
        Aucune création pour le moment
      </h3>
      <p className="text-sm text-gray-400 max-w-xs mt-2">
        Commencez par exposer votre premier chef-d'œuvre.
      </p>
    </div>
  </>
);

export default MyDashboard;
