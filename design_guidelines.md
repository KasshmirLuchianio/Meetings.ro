{
  "brand": {
    "name": "Meetings.ro",
    "positioning": "Digital secretary for Romanian public institutions (GALs, City Halls). Converts meeting recordings into audit-ready minutes and reports.",
    "tone": {
      "attributes": [
        "authoritative",
        "friendly",
        "relief-focused",
        "non-technical",
        "trust-first"
      ],
      "copy_rules": [
        "Avoid overusing 'AI' — prefer 'Secretar digital' / 'Procesare automată'.",
        "Use plain Romanian/English; short sentences; avoid jargon.",
        "Speak to 45–50+ public servants: clarity > cleverness.",
        "Reassure: GDPR, confidentiality, Romanian support, works with weak internet.",
        "Add SEO keywords naturally in headings and meta: 'procese-verbale automate', 'rapoarte GAL', 'software primărie', 'minute ședință', 'offline upload'."
      ]
    }
  },

  "information_architecture": {
    "routes": {
      "root": "Redirect to /ro or /en based on browser language (navigator.language) with a manual override stored in localStorage.",
      "ro": "/ro",
      "en": "/en"
    },
    "sections_order": [
      "Sticky header (logo, nav anchors, language toggle, CTA)",
      "Hero (value prop + CTA + device mock)",
      "Problem → Solution (offline upload)",
      "9 fields (structured report)",
      "Smart features (archive by locality, export PDF/DOCX, search)",
      "Security & trust (GDPR, confidentiality, made in Romania)",
      "Pricing (Free/Basic/Full + institutional CTA)",
      "FAQ",
      "Footer"
    ],
    "success_actions": [
      "Primary: click CTA to existing app https://gal-transcribe.preview.emergentagent.com/",
      "Secondary: pricing CTA 'Request offer' (mailto or form modal)",
      "Tertiary: language switch, scroll to sections"
    ]
  },

  "visual_personality": {
    "style": [
      "Minimalist",
      "Airy",
      "Shadcn-inspired",
      "Soft glass panels (header only)",
      "Bento-grid feature cards"
    ],
    "layout_principles": [
      "Left-aligned reading flow (no centered paragraphs on desktop)",
      "Large whitespace; 2–3x spacing",
      "Strong hierarchy: eyebrow → H1 → lead → CTAs",
      "Use subtle borders and shadows instead of heavy gradients",
      "Mobile-first: single column; desktop: split hero + bento grids"
    ]
  },

  "typography": {
    "fonts": {
      "headings": {
        "family": "Space Grotesk",
        "fallback": "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        "usage": "H1–H3, pricing plan names, section titles"
      },
      "body": {
        "family": "Inter",
        "fallback": "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        "usage": "Body copy, labels, nav"
      }
    },
    "scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl",
      "h2": "text-base md:text-lg",
      "body": "text-sm md:text-base",
      "small": "text-xs md:text-sm"
    },
    "type_rules": [
      "Max line length for paragraphs: 60–72ch.",
      "Use font-semibold for key phrases; avoid ALL CAPS except small badges.",
      "Use letter-spacing only for badges/eyebrows (tracking-wide)."
    ]
  },

  "color_system": {
    "palette_hex": {
      "primary": "#115E87",
      "primary_deep": "#0D4B6B",
      "accent_turquoise_pale": "#D7F5F2",
      "success": "#1B8B5C",
      "ink_strong": "#0F2740",
      "ink_soft": "#5B6B7B",
      "surface": "#F5FBFF",
      "line": "rgba(17, 94, 135, 0.14)",
      "white": "#FFFFFF"
    },
    "semantic_tokens_css": {
      "instructions": "Define these in :root (App.css or a new tokens file imported once). Keep Tailwind for layout; use CSS vars for brand colors.",
      "css": ":root{\n  --brand-900:#0F2740;\n  --brand-800:#0D4B6B;\n  --brand-700:#115E87;\n  --brand-600:#1A6F9B;\n  --brand-100:#D7F5F2;\n  --bg-0:#FBFEFF;\n  --bg-1:#F5FBFF;\n  --text-strong:#0F2740;\n  --text-muted:#5B6B7B;\n  --border:rgba(17,94,135,.14);\n  --success:#1B8B5C;\n  --success-bg:rgba(27,139,92,.12);\n  --warning:#B45309;\n  --warning-bg:rgba(180,83,9,.12);\n  --danger:#B91C1C;\n  --danger-bg:rgba(185,28,28,.10);\n  --focus:rgba(17,94,135,.28);\n  --shadow-sm:0 8px 20px rgba(17,94,135,.10);\n  --shadow-md:0 18px 50px rgba(17,94,135,.14);\n  --radius-sm:12px;\n  --radius-md:18px;\n  --radius-lg:24px;\n  --radius-pill:999px;\n}\n"
    },
    "usage_rules": [
      "Primary buttons/links: --brand-700 on white.",
      "Accents: use pale turquoise as background chips, not as text.",
      "Success green only for confirmations and 'works offline' reassurance.",
      "Borders: subtle blue-tinted lines for structure.",
      "Keep backgrounds light for older office monitors; avoid low-contrast grays."
    ]
  },

  "gradients_and_texture": {
    "allowed_gradients": [
      {
        "name": "Hero background wash (<=20% viewport)",
        "css": "background: radial-gradient(circle at top left, rgba(215,245,242,.75), transparent 22%), linear-gradient(180deg, #FBFEFF 0%, #F5FBFF 45%, #EDF7FB 100%);",
        "notes": "Use only on page background / hero wrapper."
      }
    ],
    "noise_overlay": {
      "use": "Optional subtle grain to avoid flatness (very low opacity).",
      "css": ".noise::before{content:'';position:absolute;inset:0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>');mix-blend-mode:multiply;pointer-events:none;border-radius:inherit;}"
    }
  },

  "grid_and_spacing": {
    "container": {
      "max_width": "max-w-6xl",
      "padding": "px-4 sm:px-6 lg:px-8",
      "section_spacing": "py-14 sm:py-18 lg:py-22"
    },
    "grids": {
      "hero": "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
      "bento_features": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6",
      "pricing": "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6",
      "faq": "max-w-3xl"
    },
    "card_spacing": {
      "padding": "p-5 sm:p-6",
      "radius": "rounded-[var(--radius-lg)]",
      "border": "border border-[color:var(--border)]"
    }
  },

  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "navigation_menu": "/app/frontend/src/components/ui/navigation-menu.jsx",
      "sheet": "/app/frontend/src/components/ui/sheet.jsx",
      "sonner": "/app/frontend/src/components/ui/sonner.jsx"
    },
    "header": {
      "structure": "Sticky glass header with logo left, anchor nav center (desktop), language toggle + CTA right. Mobile: hamburger opens Sheet with anchors + CTA.",
      "shadcn": ["navigation-menu", "sheet", "button", "separator"],
      "tailwind_classes": {
        "wrapper": "sticky top-3 z-50",
        "bar": "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
        "panel": "flex items-center justify-between gap-3 rounded-[28px] border border-[color:var(--border)] bg-white/80 backdrop-blur-xl shadow-[var(--shadow-sm)] px-4 py-3"
      },
      "data_testids": {
        "language_toggle": "language-toggle",
        "nav_features": "nav-features-link",
        "nav_pricing": "nav-pricing-link",
        "nav_security": "nav-security-link",
        "nav_faq": "nav-faq-link",
        "cta_primary": "header-primary-cta"
      }
    },
    "buttons": {
      "variants": {
        "primary": {
          "style": "Professional / Corporate with pill radius",
          "classes": "rounded-full bg-[color:var(--brand-700)] text-white shadow-[0_16px_30px_rgba(17,94,135,.22)] hover:bg-[color:var(--brand-800)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--focus)]",
          "motion": "transition-colors transition-shadow duration-200 ease-out active:scale-[0.98]"
        },
        "secondary": {
          "classes": "rounded-full bg-white text-[color:var(--brand-700)] border border-[color:rgba(17,94,135,.20)] hover:bg-[color:rgba(17,94,135,.06)] focus-visible:ring-4 focus-visible:ring-[color:var(--focus)]",
          "motion": "transition-colors duration-200 ease-out active:scale-[0.98]"
        },
        "ghost": {
          "classes": "rounded-full text-[color:var(--text-strong)] hover:bg-[color:rgba(17,94,135,.06)]",
          "motion": "transition-colors duration-200"
        }
      },
      "rules": [
        "No 'transition: all'. Use transition-colors/transition-shadow only.",
        "Touch targets >= 44px height (use h-11 / min-h-11).",
        "All CTA buttons must include data-testid."
      ]
    },
    "hero": {
      "layout": "Left copy + right device mock. On mobile: copy then mock.",
      "shadcn": ["badge", "button", "card"],
      "copy_blocks": {
        "ro": {
          "eyebrow": "Secretar digital pentru instituții publice",
          "h1": "Reduci timpul pentru procese-verbale cu 40%. Automat.",
          "lead": "Prima aplicație din România creată pentru GAL-uri și Primării. Transformă ore de înregistrări audio în rapoarte structurate în ~2 minute.",
          "cta_primary": "Începe gratuit (2 rapoarte incluse)",
          "cta_secondary": "Vezi cum arată un raport",
          "trust_line": "Dacă știi să folosești WhatsApp, știi să folosești Meetings."
        },
        "en": {
          "eyebrow": "Digital secretary for public institutions",
          "h1": "Cut meeting minutes time by 40%. Automatically.",
          "lead": "Built in Romania for GAL teams and City Halls. Turn hours of recordings into structured, audit-ready reports in ~2 minutes.",
          "cta_primary": "Start free (2 reports included)",
          "cta_secondary": "See a sample report",
          "trust_line": "If you can use WhatsApp, you can use Meetings."
        }
      },
      "device_mock": {
        "approach": "Generic phone frame (CSS) + inside Card components showing 'Generated report' preview. Avoid heavy images; optionally use one Unsplash mockup as decorative only.",
        "data_testids": {
          "cta_primary": "hero-primary-cta",
          "cta_secondary": "hero-secondary-cta",
          "mock": "hero-device-mock"
        }
      }
    },
    "problem_solution": {
      "pattern": "Split section with left narrative and right 'Offline upload' callout card.",
      "key_message_ro": "Știm că pe teren internetul nu e mereu de partea ta.",
      "key_message_en": "We know the internet isn’t always on your side in the field.",
      "callout": {
        "title": "Offline upload",
        "body": "Înregistrezi ședința oriunde (chiar fără semnal). Încarci fișierul când revii la birou.",
        "badge": "Funcționează și cu conexiuni slabe"
      },
      "data_testids": {
        "section": "problem-solution-section"
      }
    },
    "nine_fields": {
      "pattern": "Bento grid of 9 cards with short labels + 1-line explanation. Add a top statement: 'Not just transcription — audit-ready structure'.",
      "fields_ro": [
        "Data și ora",
        "Localitate / UAT",
        "Participanți",
        "Ordinea de zi",
        "Obiective",
        "Discuții (sinteză)",
        "Decizii",
        "Concluzii",
        "Pași următori"
      ],
      "fields_en": [
        "Date & time",
        "Locality / UAT",
        "Attendees",
        "Agenda",
        "Objectives",
        "Discussion summary",
        "Decisions",
        "Conclusions",
        "Next steps"
      ],
      "data_testids": {
        "section": "nine-fields-section"
      }
    },
    "smart_features": {
      "cards": [
        {
          "title_ro": "Arhivă pe localități",
          "desc_ro": "Dosare organizate automat (ex: Chilia Veche, Crișan, Maliuc).",
          "title_en": "Archive by locality",
          "desc_en": "Auto-organized folders (e.g., Chilia Veche, Crișan, Maliuc).",
          "testid": "feature-archive-card"
        },
        {
          "title_ro": "Export instant",
          "desc_ro": "Descarci raportul ca PDF sau Word (DOCX) pentru tipărire și arhivare.",
          "title_en": "Instant export",
          "desc_en": "Download as PDF or Word (DOCX) for printing and archiving.",
          "testid": "feature-export-card"
        },
        {
          "title_ro": "Căutare rapidă",
          "desc_ro": "Găsești orice ședință după dată sau localitate în 2 secunde.",
          "title_en": "Fast search",
          "desc_en": "Find any meeting by date or locality in seconds.",
          "testid": "feature-search-card"
        }
      ]
    },
    "security_trust": {
      "pattern": "Two-column: left trust bullets, right compliance card with badges.",
      "bullets_ro": [
        "GDPR & confidențialitate: procesare dedicată pentru instituții",
        "Fără 'cloud public' nesigur pentru documente sensibile",
        "Suport tehnic în limba română",
        "Produs construit pentru birocrația locală"
      ],
      "bullets_en": [
        "GDPR & confidentiality: dedicated processing for institutions",
        "No unsafe public cloud for sensitive documents",
        "Romanian-language support",
        "Built for local public administration workflows"
      ],
      "data_testids": {
        "section": "security-trust-section"
      }
    },
    "pricing": {
      "plans": [
        {
          "name": "Free",
          "price": "$0/mo",
          "details": "2 recordings/reports",
          "cta": "Start free",
          "highlight": false,
          "testid": "pricing-free-card"
        },
        {
          "name": "Basic",
          "price": "$175/mo",
          "details": "15 recordings/reports",
          "cta": "Choose Basic",
          "highlight": true,
          "testid": "pricing-basic-card"
        },
        {
          "name": "Full",
          "price": "$250/mo",
          "details": "Unlimited recordings/reports",
          "cta": "Choose Full",
          "highlight": false,
          "testid": "pricing-full-card"
        }
      ],
      "institutional_cta": {
        "label_ro": "Cere ofertă pentru instituția ta",
        "label_en": "Request an institutional offer",
        "action": "mailto:sales@meetings.ro?subject=Meetings.ro%20-%20Oferta%20institutie",
        "testid": "pricing-institutional-cta"
      },
      "notes": [
        "Show pricing in USD as provided; add small note 'Billing monthly'.",
        "Add reassurance line under cards: 'Cancel anytime. Romanian support included.'"
      ]
    },
    "faq": {
      "shadcn": ["accordion"],
      "items_ro": [
        {
          "q": "Trebuie să știu ceva tehnic ca să folosesc Meetings?",
          "a": "Nu. Dacă știi să folosești WhatsApp, te descurci. Încarci înregistrarea și primești raportul structurat.",
          "testid": "faq-item-technical"
        },
        {
          "q": "Funcționează dacă nu am internet pe teren?",
          "a": "Da. Înregistrezi oriunde, apoi încarci fișierul când revii la birou (offline upload).",
          "testid": "faq-item-offline"
        },
        {
          "q": "Pot exporta în Word/PDF?",
          "a": "Da. Raportul se descarcă direct ca PDF sau DOCX pentru tipărire și arhivare.",
          "testid": "faq-item-export"
        },
        {
          "q": "Cum tratați confidențialitatea și GDPR?",
          "a": "Datele sunt procesate în condiții de confidențialitate, cu flux dedicat pentru instituții. Nu folosim soluții nesigure pentru documente sensibile.",
          "testid": "faq-item-gdpr"
        }
      ],
      "items_en": [
        {
          "q": "Do I need technical skills to use Meetings?",
          "a": "No. Upload the recording and receive a structured report. If you can use WhatsApp, you can use Meetings.",
          "testid": "faq-item-technical"
        },
        {
          "q": "Does it work with poor internet in the field?",
          "a": "Yes. Record anywhere, then upload once you’re back at the office.",
          "testid": "faq-item-offline"
        },
        {
          "q": "Can I export to Word/PDF?",
          "a": "Yes. Download as PDF or DOCX for printing and archiving.",
          "testid": "faq-item-export"
        },
        {
          "q": "How do you handle GDPR and confidentiality?",
          "a": "We process data with institutional confidentiality in mind and avoid unsafe public-cloud handling for sensitive documents.",
          "testid": "faq-item-gdpr"
        }
      ]
    }
  },

  "motion_microinteractions": {
    "principles": [
      "Subtle, confidence-building motion (no playful bounces).",
      "Use Framer Motion only if already installed; otherwise CSS transitions + IntersectionObserver for reveal.",
      "Respect prefers-reduced-motion: disable reveals and parallax."
    ],
    "recommended_effects": [
      "Header: slight shadow increase on scroll (no layout shift).",
      "Buttons: active scale 0.98; hover shadow increase.",
      "Cards: hover border tint + shadow-sm.",
      "Section reveal: fade-up 12px over 240ms with easing (only once)."
    ],
    "js_scaffold_reveal": {
      "note": "Use in .js components. Keep lightweight.",
      "code": "// useReveal.js\nimport { useEffect, useRef } from 'react';\n\nexport function useReveal(options = {}) {\n  const ref = useRef(null);\n\n  useEffect(() => {\n    const el = ref.current;\n    if (!el) return;\n    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n    if (reduce) {\n      el.dataset.revealed = 'true';\n      return;\n    }\n    const io = new IntersectionObserver(([entry]) => {\n      if (entry.isIntersecting) {\n        el.dataset.revealed = 'true';\n        io.disconnect();\n      }\n    }, { threshold: 0.12, ...options });\n    io.observe(el);\n    return () => io.disconnect();\n  }, [options]);\n\n  return ref;\n}\n\n// CSS\n// [data-reveal]{opacity:0;transform:translateY(12px);transition:opacity .24s ease, transform .24s ease;}\n// [data-reveal][data-revealed='true']{opacity:1;transform:translateY(0);}"
    }
  },

  "seo": {
    "routes_meta": {
      "ro": {
        "title": "Meetings.ro — Procese-verbale automate pentru GAL-uri și Primării",
        "description": "Transformă înregistrările ședințelor în rapoarte structurate în ~2 minute. Offline upload, export PDF/DOCX, arhivă pe localități. GDPR și suport în română.",
        "keywords": [
          "procese verbale automate",
          "rapoarte GAL",
          "software primarie",
          "minute sedinta",
          "transcriere sedinte",
          "raport audit",
          "export DOCX PDF"
        ]
      },
      "en": {
        "title": "Meetings.ro — Automated meeting minutes for Romanian public institutions",
        "description": "Turn meeting recordings into structured, audit-ready reports in ~2 minutes. Offline upload, PDF/DOCX export, locality-based archive. GDPR-focused, Romanian support.",
        "keywords": [
          "automated meeting minutes",
          "Romanian city hall software",
          "GAL reports",
          "offline upload",
          "PDF DOCX export",
          "GDPR confidentiality"
        ]
      }
    },
    "implementation_notes": [
      "Use react-helmet-async (preferred) or react-helmet to set per-route title/meta.",
      "Add canonical URLs for /ro and /en.",
      "Add OpenGraph tags with same titles/descriptions; use a simple solid-color OG image if none exists.",
      "Ensure headings are semantic (one H1 per page)."
    ]
  },

  "accessibility": {
    "requirements": [
      "WCAG AA contrast for text and interactive elements.",
      "Visible focus states (ring).",
      "Keyboard navigable nav + Sheet.",
      "Use aria-label for icon-only buttons.",
      "Respect prefers-reduced-motion.",
      "Touch targets >= 44x44px."
    ]
  },

  "image_urls": {
    "hero_device_mock_optional": [
      {
        "url": "https://images.pexels.com/photos/12876448/pexels-photo-12876448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "description": "Minimal smartphone mockup (optional decorative). Prefer CSS device frame for performance.",
        "category": "hero"
      },
      {
        "url": "https://images.unsplash.com/photo-1656099707475-4fdf14e45912?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
        "description": "Clean phone on light background (optional).",
        "category": "hero"
      }
    ]
  },

  "libraries": {
    "recommended": [
      {
        "name": "react-helmet-async",
        "why": "Per-route SEO meta for /ro and /en.",
        "install": "npm i react-helmet-async",
        "usage": "Wrap app with <HelmetProvider>. In each route component, add <Helmet><title>...</title><meta name='description' ... /></Helmet>."
      }
    ],
    "avoid": [
      "Heavy animation libs unless already present",
      "Large hero videos",
      "Complex 3D/three.js (not needed for this audience)"
    ]
  },

  "implementation_notes_for_main_agent": {
    "react_js_conventions": [
      "Project uses .js files (not .tsx). Keep components in .jsx only if existing pattern; otherwise .js with JSX is fine per tooling.",
      "Pages must be default exports; components named exports.",
      "Use shadcn components from /app/frontend/src/components/ui (Button, Card, Accordion, Sheet, NavigationMenu).",
      "All interactive and key informational elements MUST include data-testid (kebab-case).",
      "CTA links should open the existing app URL; consider target='_blank' rel='noreferrer' for institutional browsing."
    ],
    "performance": [
      "Prefer CSS device mock over images.",
      "Avoid large background images; keep gradients mild and limited.",
      "Use system fallbacks for fonts; load Google Fonts once (already in App.css)."
    ]
  },

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
