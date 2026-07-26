import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Why from "../components/Why";
import How from "../components/How";
import Avis from "../components/Avis";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import FeaturedArtist from "../components/FeaturedArtist";
import CreatorPage from "./CreatorPage";

export default function ReventeLanding() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>L'Expo — Sublimez vos Créations</title>
        <meta
          name="description"
          content="La plateforme d'exposition dédiée aux créateurs d'exception. Offrez à vos œuvres l'écrin qu'elles méritent."
        />

        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="icon" href="/images/icons8-fileur.gif" />
      </Helmet>

      <div
        style={{
          fontFamily: "'Quicksand', sans-serif",
          color: "#111",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Hero />

        <CreatorPage />

        <Why />

        <How />

        <Avis />

        <FeaturedArtist />

        <Cta />

        <Footer />
      </div>
    </>
  );
}
