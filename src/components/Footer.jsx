import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-white border-t border-neutral-100 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-100">

          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#EF9F27] text-white shadow-sm transition-transform group-hover:scale-105">
              <ShoppingBag size={16} strokeWidth={2.5} />
            </div>
            <span className="font-syne text-lg font-bold tracking-tight text-neutral-900">
              L'<span className="text-[#EF9F27]">Expo</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <Link
              to="/explorer"
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Découvrir
            </Link>
            <Link
              to="/artisans"
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Nos Artisans
            </Link>
            <Link
              to="/publier"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#EF9F27] hover:underline"
            >
              Exposer mon travail
              <ArrowUpRight size={13} />
            </Link>
            <Link
              to="/contact"
              className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Cotonou, Bénin
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-neutral-400">
          <p>© 2026 L'Expo. Fait pour l'artisanat béninois.</p>

          <div className="flex items-center gap-6">
            <Link
              to="/confidentialite"
              className="hover:text-neutral-600 transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              to="/conditions"
              className="hover:text-neutral-600 transition-colors"
            >
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
