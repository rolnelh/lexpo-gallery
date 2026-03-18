import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full border-t border-gray-100 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">

          <div className="space-y-4 lg:max-w-xs">
            <div
              onClick={() => navigate("/")}
              className="flex cursor-pointer items-center gap-2.5 transition-transform active:scale-95 w-fit"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EF9F27] shadow-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#412402"
                  strokeWidth="2.5"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="font-syne text-[17px] font-bold tracking-tight text-black">
                L'/<span className="text-[#EF9F27]">Expo</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-gray-500 font-medium">
              La vitrine digitale dédiée au savoir-faire des artisans béninois.
              Exposez, découvrez et commandez des créations uniques.
            </p>
          </div>


          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:gap-24">

            <div className="space-y-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-black">
                Plateforme
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/explorer">Découvrir</FooterLink>
                <FooterLink to="/artisans">Nos Artisans</FooterLink>
                <FooterLink to="/publier">Exposer mon travail</FooterLink>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-black">
                Services
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/sur-mesure">Sur mesure</FooterLink>
                <FooterLink to="/aide">Centre d'aide</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </ul>
            </div>


            <div className="space-y-4">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-black">
                Légal
              </h4>
              <ul className="space-y-3">
                <FooterLink to="/confidentialite">Confidentialité</FooterLink>
                <FooterLink to="/conditions">Conditions</FooterLink>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-50 pt-8 md:flex-row">
          <p className="text-[12px] font-medium text-gray-400">
            © 2026 L'Expo. Fait avec passion pour l'artisanat béninois.
          </p>

          <div className="mt-4 flex gap-6 md:mt-0">

            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">
              Cotonou, Bénin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-[13px] font-medium text-gray-500 transition-colors hover:text-[#EF9F27]"
    >
      {children}
    </Link>
  </li>
);
