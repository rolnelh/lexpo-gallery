import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ArrowRight, User } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] h-[72px] w-full border-b border-stone-100 bg-white/80 backdrop-blur-md px-[4%]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden">
            <img
              src="/images/icons8-fileur.gif"
              alt="Icon"
              className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all"
            />
          </div>
          <span className="font-syne text-base font-bold tracking-tight text-black">
            L'<span className="text-[#EF9F27]">Expo</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/explorer">Découvrir les créations</NavLink>
          <NavLink to="/artisans">Nos Artisans</NavLink>
          <NavLink to="/sur-mesure">Demande sur mesure</NavLink>
          <NavLink to="/aide">Aide</NavLink>
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:flex items-center gap-2 text-[13px] font-normal tracking-widest text-black hover:text-stone-950 transition-colors"
          >
            <User size={16} />
            <span>Se connecter</span>
          </button>

          <button
            onClick={() => navigate("/publier")}
            className="group flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all"
          >
            <span className="hidden xs:inline">Exposer mon travail</span>
            <span className="xs:hidden">Exposer</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full bg-stone-50 text-stone-900 transition-colors hover:bg-stone-100"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-[72px] w-full border-b border-stone-100 bg-white p-6 shadow-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          <NavLink to="/explorer" onClick={() => setIsMenuOpen(false)}>
            Découvrir les créations
          </NavLink>
          <NavLink to="/artisans" onClick={() => setIsMenuOpen(false)}>
            Nos Artisans
          </NavLink>
          <NavLink to="/sur-mesure" onClick={() => setIsMenuOpen(false)}>
            Demande sur mesure
          </NavLink>
          <hr className="border-stone-50" />
          <button
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
            className="text-left text-[13px] font-normal uppercase tracking-widest text-orange-600"
          >
            Se connecter
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        textDecoration: "none",
        color: "#555",
        fontSize: "14px",
        fontWeight: "500",
        transition: "color 0.2s",
      }}
    >
      {children}
    </Link>
  );
}
