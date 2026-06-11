import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import RoHomePage from "@/pages/ro/HomePage";
import FunctionalitatiPage from "@/pages/ro/FunctionalitatiPage";
import PreturiPage from "@/pages/ro/PreturiPage";
import DomeniiPage from "@/pages/ro/DomeniiPage";
import IntrebariPage from "@/pages/ro/IntrebariPage";
import PrivacyPolicyPage from "@/pages/ro/PrivacyPolicyPage";
import TermsPage from "@/pages/ro/TermsPage";

import EnHomePage from "@/pages/en/HomePage";
import FeaturesPage from "@/pages/en/FeaturesPage";
import PricingPage from "@/pages/en/PricingPage";
import IndustriesPage from "@/pages/en/IndustriesPage";
import FaqPage from "@/pages/en/FaqPage";

import CookieBanner from "@/components/CookieBanner";

const SUPPORTED_LANGUAGES = ["ro", "en"];

const getPreferredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem("meetings-language");
    if (SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
    return window.navigator.language?.toLowerCase().startsWith("ro") ? "ro" : "en";
  } catch (error) {
    return "ro";
  }
};

const HomeRedirect = () => {
  const preferredLanguage = getPreferredLanguage();
  return <Navigate to={`/${preferredLanguage}`} replace />;
};

const useSmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
};

function App() {
  useSmoothScroll();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Română */}
          <Route path="/ro" element={<RoHomePage />} />
          <Route path="/ro/functionalitati" element={<FunctionalitatiPage />} />
          <Route path="/ro/preturi" element={<PreturiPage />} />
          <Route path="/ro/domenii" element={<DomeniiPage />} />
          <Route path="/ro/intrebari" element={<IntrebariPage />} />
          {/* English */}
          <Route path="/en" element={<EnHomePage />} />
          <Route path="/en/features" element={<FeaturesPage />} />
          <Route path="/en/pricing" element={<PricingPage />} />
          <Route path="/en/industries" element={<IndustriesPage />} />
          <Route path="/en/faq" element={<FaqPage />} />
          {/* Legal — language-neutral */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* Redirect */}
          <Route path="/" element={<HomeRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
