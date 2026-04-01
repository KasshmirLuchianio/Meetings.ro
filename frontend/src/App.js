import { useEffect } from "react";
import "@/App.css";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const APP_URL = "https://gal-transcribe.preview.emergentagent.com/";
const STORAGE_KEY = "meetings-language";
const SITE_URL = "https://reports-auto.preview.emergentagent.com";

const pageContent = {
  ro: {
    locale: "ro_RO",
    meta: {
      title: "Meetings.ro | Secretar digital pentru procese-verbale și rapoarte GAL",
      description:
        "Automatizezi procese-verbale și rapoarte pentru primării și GAL-uri din România. Încarci audio, primești document structurat în câteva minute.",
      keywords:
        "procese verbale automate, rapoarte GAL, software primarii Romania, secretar digital, automatizare administratie publica, transcriere sedinte",
    },
    nav: {
      product: "Produs",
      features: "Funcționalități",
      pricing: "Prețuri",
      trust: "Încredere",
      cta: "Intră în aplicație",
    },
    hero: {
      eyebrow: "Creat pentru GAL-uri și primării din România",
      title: "Reduceți timpul petrecut pe procese-verbale cu 40%. Automat.",
      description:
        "Prima aplicație din România creată special pentru administrația publică locală. Transformă ore de înregistrări audio în rapoarte structurate, gata de arhivare.",
      primary: "Intră în aplicație",
      secondary: "Vezi prețurile",
    },
  },
  en: {
    locale: "en_US",
    meta: {
      title: "Meetings.ro | Digital secretary for minutes and public administration reports",
      description:
        "Automate minutes and GAL reports for Romanian public institutions. Upload audio and receive structured, audit-ready documents in minutes.",
      keywords:
        "minutes automation Romania, GAL reports software, Romanian city hall software, digital secretary, public administration reporting",
    },
    nav: {
      product: "Product",
      features: "Features",
      pricing: "Pricing",
      trust: "Trust",
      cta: "Open app",
    },
    hero: {
      eyebrow: "Built for Romanian GAL teams and city halls",
      title: "Reduce the time spent on minutes by 40%. Automatically.",
      description:
        "The first Romanian solution built specifically for local public administration. Turn hours of meeting audio into structured reports ready for archiving.",
      primary: "Open app",
      secondary: "View pricing",
    },
  },
};

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const MetaManager = ({ lang }) => {
  useEffect(() => {
    const current = pageContent[lang];
    document.title = current.meta.title;
    document.documentElement.lang = lang;

    ensureMetaTag('meta[name="description"]', {
      name: "description",
      content: current.meta.description,
    });
    ensureMetaTag('meta[name="keywords"]', {
      name: "keywords",
      content: current.meta.keywords,
    });
    ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: current.meta.title,
    });
    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: current.meta.description,
    });
    ensureMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: `${SITE_URL}/${lang}`,
    });
    ensureMetaTag('meta[property="og:locale"]', {
      property: "og:locale",
      content: current.locale,
    });
    ensureMetaTag('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMetaTag('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: current.meta.title,
    });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: current.meta.description,
    });

    ensureLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: `${SITE_URL}/${lang}`,
    });
    ensureLinkTag('link[rel="alternate"][hreflang="ro"]', {
      rel: "alternate",
      hreflang: "ro",
      href: `${SITE_URL}/ro`,
    });
    ensureLinkTag('link[rel="alternate"][hreflang="en"]', {
      rel: "alternate",
      hreflang: "en",
      href: `${SITE_URL}/en`,
    });
    ensureLinkTag('link[rel="alternate"][hreflang="x-default"]', {
      rel: "alternate",
      hreflang: "x-default",
      href: `${SITE_URL}/ro`,
    });
  }, [lang]);

  return null;
};

const LanguageToggle = ({ lang }) => {
  const navigate = useNavigate();

  const switchLanguage = (nextLanguage) => {
    localStorage.setItem(STORAGE_KEY, nextLanguage);
    navigate(`/${nextLanguage}`);
  };

  return (
    <div className="language-toggle" role="group" aria-label="Language switcher">
      {["en", "ro"].map((option) => (
        <button
          key={option}
          type="button"
          data-testid={`lang-toggle-${option}`}
          className={`language-button ${lang === option ? "active" : ""}`}
          onClick={() => switchLanguage(option)}
          aria-pressed={lang === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const HomeRedirect = () => {
  const browserLanguage = navigator.language?.toLowerCase().startsWith("ro") ? "ro" : "en";
  const storedLanguage = localStorage.getItem(STORAGE_KEY);
  const targetLanguage = storedLanguage || browserLanguage;

  return <Navigate to={`/${targetLanguage}`} replace />;
};

const LandingPOC = ({ lang }) => {
  const location = useLocation();
  const content = pageContent[lang];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, location.pathname]);

  return (
    <>
      <MetaManager lang={lang} />
      <div className="poc-shell">
        <header className="poc-header">
          <Link className="brand-mark" to={`/${lang}`} data-testid="brand-link">
            Meetings<span>.ro</span>
          </Link>
          <nav className="top-nav" aria-label="Primary navigation">
            <a href="#product">{content.nav.product}</a>
            <a href="#features">{content.nav.features}</a>
            <a href="#pricing">{content.nav.pricing}</a>
            <a href="#trust">{content.nav.trust}</a>
          </nav>
          <div className="header-actions">
            <LanguageToggle lang={lang} />
            <a
              className="header-cta"
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="header-cta"
            >
              {content.nav.cta}
            </a>
          </div>
        </header>

        <main className="poc-hero" id="product">
          <div className="hero-copy">
            <span className="hero-eyebrow">{content.hero.eyebrow}</span>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
            <div className="hero-actions">
              <a
                className="primary-button"
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-primary-cta"
              >
                {content.hero.primary}
              </a>
              <a className="secondary-button" href="#pricing" data-testid="hero-secondary-cta">
                {content.hero.secondary}
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="App preview mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <span className="status-pill">GAL Report</span>
                <div className="screen-card">
                  <strong>Meeting summary</strong>
                  <p>Structured minutes, conclusions and actions appear here.</p>
                </div>
                <div className="screen-list">
                  <span>Date</span>
                  <span>Objective</span>
                  <span>Decisions</span>
                  <span>Follow-up</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section className="poc-placeholder" id="features">
          <p>
            Phase 1 POC: routing, language persistence, keyboard-accessible toggle and live metadata updates are now in place.
          </p>
        </section>

        <section className="poc-placeholder" id="pricing">
          <p>Pricing section will be expanded in Phase 2.</p>
        </section>

        <section className="poc-placeholder" id="trust">
          <p>Trust section will be expanded in Phase 2.</p>
        </section>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRedirect />} />
        <Route path="/ro" element={<LandingPOC lang="ro" />} />
        <Route path="/en" element={<LandingPOC lang="en" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
