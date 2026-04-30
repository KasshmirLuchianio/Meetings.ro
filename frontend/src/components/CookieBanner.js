import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "meetings-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable — show banner anyway
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consimțământ cookie-uri"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-[color:var(--border)] bg-white px-5 py-4 shadow-xl sm:bottom-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[color:var(--text-muted)]">
          Folosim cookie-uri strict necesare pentru funcționarea serviciului.{" "}
          <Link to="/privacy-policy" className="simple-link font-medium">
            Politică de confidențialitate
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="shrink-0 rounded-full bg-[color:var(--brand-800)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-800)] focus:ring-offset-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
