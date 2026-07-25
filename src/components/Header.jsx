import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, ArrowRight, User, Sparkles, LogOut } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Charger les données de l'utilisateur au montage du composant
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Erreur de lecture du profil", e);
      }
    }
  }, []);

  // Handler Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-[1000] h-[72px] w-full border-b border-stone-100 bg-white/80 backdrop-blur-md px-[4%]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        {/* Logo */}
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

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8 tracking-tight">
          <NavLink to="/explorer">Découvrir les créations</NavLink>
          <NavLink to="/artisans">Nos Artisans</NavLink>
        </nav>

        {/* Actions à droite */}
        <div className="flex items-center gap-3 md:gap-6">
          {user ? (
            /* Utilisateur Connecté */
            <div className="hidden sm:flex items-center gap-3 bg-stone-50 py-1.5 px-3 rounded-full border border-stone-200">
              <div
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="h-8 w-8 rounded-full object-cover border border-stone-200"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-xs font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
                <span className="text-sm font-medium text-stone-800 max-w-[120px] truncate">
                  {user.name}
                </span>
              </div>

              {/* Bouton déconnexion rapide */}
              <button
                onClick={handleLogout}
                title="Se déconnecter"
                className="text-stone-400 hover:text-red-500 transition-colors p-1"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            /* Utilisateur Non-Connecté */
            <button
              onClick={() => navigate("/login")}
              className="hidden sm:flex items-center gap-2 text-[15px] font-normal tracking-tight text-black hover:text-stone-950 transition-colors cursor-pointer"
            >
              <span>Se connecter</span>
            </button>
          )}

          <button
            onClick={() => navigate("/publier")}
            className="group flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2 text-[14px] font-normal uppercase text-white transition-all cursor-pointer"
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

      {/* Menu Mobile */}
      <div
        className={`absolute left-0 top-[72px] w-full border-b border-stone-100 bg-white p-6 shadow-xl transition-all duration-300 lg:hidden ${isMenuOpen
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

          <hr className="border-stone-100" />

          {user ? (
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-stone-900">
                    {user.name}
                  </span>
                  <span className="text-xs text-stone-400">{user.email}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-xs font-semibold text-red-500 uppercase tracking-wider"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
              className="text-left text-[15px] font-normal uppercase tracking-tight text-orange-600"
            >
              Se connecter
            </button>
          )}
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
        color: "#666",
        fontSize: "15px",
        fontWeight: "500",
        transition: "color 0.2s",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {children}
    </Link>
  );
}