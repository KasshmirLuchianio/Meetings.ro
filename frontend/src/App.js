import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import RoHomePage from "@/pages/ro/HomePage";
import FunctionalitatiPage from "@/pages/ro/FunctionalitatiPage";
import PreturiPage from "@/pages/ro/PreturiPage";
import DomeniiPage from "@/pages/ro/DomeniiPage";
import IntrebariPage from "@/pages/ro/IntrebariPage";

import EnHomePage from "@/pages/en/HomePage";
import FeaturesPage from "@/pages/en/FeaturesPage";
import PricingPage from "@/pages/en/PricingPage";
import IndustriesPage from "@/pages/en/IndustriesPage";
import FaqPage from "@/pages/en/FaqPage";

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

function App() {
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
          {/* Redirect */}
          <Route path="/" element={<HomeRedirect />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
