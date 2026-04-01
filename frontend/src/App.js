import "@/App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LandingPage } from "@/components/LandingPage";

const STORAGE_KEY = "meetings-language";
const SUPPORTED_LANGUAGES = ["ro", "en"];

const getPreferredLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

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
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/ro" element={<LandingPage lang="ro" storageKey={STORAGE_KEY} />} />
          <Route path="/en" element={<LandingPage lang="en" storageKey={STORAGE_KEY} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
