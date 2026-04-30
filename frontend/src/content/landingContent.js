export const STORE_PLACEHOLDER_URL = "#coming-soon";
export const SITE_URL = "https://meetings.ro";
export const OG_IMAGE_URL = `${SITE_URL}/assets/branding/og-image.png`;
export const BRAND_LOGO_PATH = "/assets/branding/meetings-logo.svg";

export const landingContent = {
  ro: {
    locale: "ro_RO",
    meta: {
      title: "Meetings.ro — Transcriere și Rapoarte Structurate",
      description:
        "Transcriere automată pentru ședințe, interviuri și rapoarte structurate. Creat pentru Banking, Legal, Jurnalism și administrație publică.",
      keywords: [
        "inregistrare automata",
        "transcriere automata",
        "raport structurat automat",
        "software primarie",
        "minute sedinta",
        "banking meeting reports",
        "legal transcription",
      ],
    },
    navigation: {
      features: "Funcționalități",
      structure: "Cele 9 câmpuri",
      pricing: "Prețuri",
      security: "Confidențialitate",
      faq: "Întrebări",
      download: "Descarcă",
      openMenu: "Deschide meniul",
    },
    store: {
      tooltip: "Disponibil în curând",
      label: "Descarcă din store",
      altAppStore: "Descarcă Meetings.ro din App Store",
      altPlayStore: "Descarcă Meetings.ro din Google Play",
    },
    hero: {
      eyebrow: "Rapoarte automate din orice ședință",
      title: "Înregistrezi. Noi scriem raportul.",
      lead:
        "Ședința se termină. Raportul e gata în 2 minute.",
      secondaryCta: "Vezi un exemplu de raport",
      trustLine: "Simplu ca WhatsApp. Serios ca un dosar oficial.",
      proofs: [
        { value: "2 minute", label: "De la înregistrare la raport final." },
        { value: "Offline", label: "Înregistrezi fără internet. Încarci după." },
        { value: "Română", label: "Tot în română. Fără traduceri, fără erori." },
      ],
    },
    problem: {
      eyebrow: "Funcționează oriunde",
      title: "Nu ai internet? Nu e problemă.",
      lead:
        "Ședințele nu se țin mereu la birou. Meetings funcționează și fără semnal.",
      body:
        "Înregistrezi pe telefon. Te întorci la birou. Încarci fișierul. Primești raportul gata.",
      calloutTitle: "Offline complet",
      calloutBody:
        "Înregistrezi fără internet. Încarci când vrei. Raportul vine automat.",
      calloutBadge: "Merge și fără semnal",
      steps: [
        "1. Înregistrezi ședința pe telefon.",
        "2. Încarci fișierul când ai internet.",
        "3. Primești raportul structurat.",
      ],
    },
    fields: {
      eyebrow: "Raport complet, nu doar text",
      title: "9 câmpuri. Gata de arhivat.",
      lead:
        "Fiecare raport vine structurat. Verifici, exporți, arhivezi.",
      statement: "Nu primești text brut. Primești un document oficial.",
      items: [
        { label: "Data și ora", description: "Știi exact când a fost ședința." },
        { label: "Localitate / UAT", description: "Arhivezi pe comună sau localitate." },
        { label: "Participanți", description: "Lista completă, gata de raportare." },
        { label: "Ordinea de zi", description: "Subiectele discutate, în ordine." },
        { label: "Obiective", description: "Scopul ședinței, separat clar." },
        { label: "Discuții (sinteză)", description: "Doar ideile importante." },
        { label: "Decizii", description: "Ce s-a hotărât, fără ambiguitate." },
        { label: "Concluzii", description: "Sinteză clară, ușor de verificat." },
        { label: "Pași următori", description: "Cine face ce. Vizibil pentru toți." },
      ],
    },
    verticals: {
      eyebrow: "Adaptat pentru domeniul tău",
      title: "Pentru orice domeniu.",
      lead:
        "Același proces simplu. Raportul se adaptează automat.",
      cards: [
        {
          title: "Administrație & ONG-uri",
          subtitle: "Asociații, fundații, organizații nonprofit",
          extracts: ["Obiectiv ședință", "Decizii adoptate", "Participanți", "Termene", "Concluzii"],
          useCase: "Minute de ședință gata înainte să părăsești sala.",
          testid: "industry-admin-card",
        },
        {
          title: "Banking & Financiar",
          subtitle: "Ședințe de conformitate, minute de board, rapoarte interne",
          extracts: ["Puncte de conformitate", "Acțiuni de urmat", "Riscuri identificate", "Decizie finală"],
          useCase: "Rapoarte conforme generate automat după fiecare ședință.",
          testid: "industry-banking-card",
        },
        {
          title: "Legal & Juridic",
          subtitle: "Negocieri, consultații, dosare",
          extracts: ["Clauze discutate", "Termene limită", "Obligații", "Părți implicate"],
          useCase: "Fiecare detaliu din negociere, structurat și arhivat.",
          testid: "industry-legal-card",
        },
        {
          title: "Jurnalism & Media",
          subtitle: "Interviuri, conferințe de presă, investigații",
          extracts: ["Citate directe", "Persoane intervievate", "Unghi editorial", "Subiect principal"],
          useCase: "De la interviu la material structurat în minute.",
          testid: "industry-media-card",
        },
      ],
    },
    features: {
      eyebrow: "Totul organizat",
      title: "Găsești, exporți, arhivezi. Fără efort.",
      lead:
        "Rapoartele rămân organizate. Le găsești oricând.",
      cards: [
        {
          title: "Arhivă automată",
          description: "Dosarele se organizează singure pe localități.",
          detail: "Fără foldere create manual.",
          testid: "feature-archive-card",
        },
        {
          title: "Export instant",
          description: "PDF sau Word. Un click, gata de trimis.",
          detail: "Fără rescriere manuală.",
          testid: "feature-export-card",
        },
        {
          title: "Căutare rapidă",
          description: "Găsești orice ședință în câteva secunde.",
          detail: "După dată, localitate sau cuvinte cheie.",
          testid: "feature-search-card",
        },
      ],
    },
    security: {
      eyebrow: "Confidențialitate",
      title: "Datele tale rămân ale tale.",
      lead:
        "Securitate reală, nu doar promisiuni.",
      bullets: [
        "Conform GDPR",
        "Fără cloud public nesigur",
        "Suport în limba română",
        "Creat pentru instituții publice",
      ],
      badges: ["GDPR", "Suport română", "Sector public"],
      cardTitle: "Construit în România. Pentru România.",
      cardLead:
        "Știm cum lucrează instituțiile. Produsul reflectă asta.",
      cardItems: [
        "Procesare dedicată instituțiilor",
        "Interfață simplă, fără training",
        "Rapoarte ușor de verificat",
      ],
    },
    pricing: {
      eyebrow: "Prețuri în EUR",
      title: "Simplu. Fără surprize.",
      lead:
        "Trei planuri. Alegi ce ți se potrivește.",
      toggleMonthly: "Lunar",
      toggleAnnual: "Anual",
      savingsLabel: "Economisești cu plata anuală",
      vatNote: "Prețuri fără TVA",
      plans: [
        {
          name: "Starter",
          badge: "Gratuit",
          monthlyPrice: "0€",
          annualPrice: "0€",
          monthlyPeriod: "/lună",
          annualPeriod: "/an",
          detail: "5h înregistrare / lună",
          features: ["1 vertical inclus", "Export PDF basic", "Stocare 1GB", "Suport email"],
          ctaLabel: "În curând",
          ctaType: "store-badges",
          highlight: false,
          badgeTone: "neutral",
          testid: "pricing-starter-card",
        },
        {
          name: "Pro",
          badge: "Cel mai popular",
          monthlyPrice: "19€",
          annualPrice: "182€",
          monthlyPeriod: "/lună",
          annualPeriod: "/an",
          detail: "30h înregistrare / lună",
          features: ["3 verticale incluse", "Export PDF + DOCX", "Stocare 25GB", "Semantic search", "Suport prioritar"],
          ctaLabel: "Alege Pro",
          ctaType: "store-badges",
          highlight: true,
          badgeTone: "featured",
          testid: "pricing-pro-card",
        },
        {
          name: "Enterprise",
          badge: "Enterprise",
          monthlyPrice: "99€",
          annualPrice: "950€",
          monthlyPeriod: "/lună",
          annualPeriod: "/an",
          detail: "Ore nelimitate",
          features: ["Verticale nelimitate", "Export PDF + DOCX branded", "Stocare nelimitată", "SLA 99.9%", "Onboarding dedicat", "Factură fiscală"],
          ctaLabel: "Alege Enterprise",
          ctaType: "store-badges",
          highlight: false,
          badgeTone: "enterprise",
          testid: "pricing-enterprise-card",
        },
      ],
    },
    faq: {
      eyebrow: "Întrebări frecvente",
      title: "Răspunsuri scurte. Fără jargon.",
      lead:
        "Ce trebuie să știi înainte să începi.",
      items: [
        {
          question: "Trebuie să știu ceva tehnic?",
          answer: "Nu. Dacă știi să trimiți un mesaj pe WhatsApp, te descurci.",
          testid: "faq-item-technical",
        },
        {
          question: "Merge fără internet?",
          answer: "Da. Înregistrezi offline, încarci când ai semnal.",
          testid: "faq-item-offline",
        },
        {
          question: "Pot exporta în Word și PDF?",
          answer: "Da. Un click și descarci PDF sau DOCX.",
          testid: "faq-item-export",
        },
        {
          question: "Cum stați cu GDPR?",
          answer: "Conform GDPR. Fără cloud public nesigur.",
          testid: "faq-item-gdpr",
        },
        {
          question: "Merge și pentru alte domenii?",
          answer: "Da. Banking, Legal, Jurnalism și altele, în funcție de plan.",
          testid: "faq-item-verticals",
        },
      ],
    },
    finalCta: {
      title: "Mai puțin scris. Mai mult timp pentru decizii.",
      lead:
        "Descarcă Meetings.ro și uită de redactare.",
      secondary: "Vezi prețurile",
    },
    footer: {
      statement:
        "Meetings.ro — rapoarte structurate din orice ședință.",
      support: "Suport în română • GDPR • Creat pentru instituții",
      copyright: "© 2026 NEDEROV COMEX SRL",
      links: [
        { label: "Termeni și condiții", href: "/terms", internal: true },
        { label: "Politică confidențialitate", href: "/privacy-policy", internal: true },
        { label: "Contact", href: "mailto:hello@meetings.ro" },
      ],
    },
    preview: {
      title: "Raport generat",
      location: "Delta Dunării • Chilia Veche",
      generatedAt: "Generat în ~2 minute",
      summary: "Obiective, concluzii și pași următori apar structurat, gata pentru verificare internă.",
      tags: ["Data și ora", "Participanți", "Decizii", "Concluzii"],
      sections: ["Agenda", "Sinteză discuții", "Pași următori"],
    },
  },
  en: {
    locale: "en_US",
    meta: {
      title: "Meetings.ro — Automated Transcription & Structured Reports",
      description:
        "Automated transcription for meetings, interviews and structured reports. Built for Banking, Legal, Journalism and public administration.",
      keywords: [
        "automated recording",
        "automated transcription",
        "automated structured report",
        "public administration software",
        "meeting minutes",
        "banking compliance meeting reports",
        "legal transcription",
      ],
    },
    navigation: {
      features: "Features",
      structure: "9 fields",
      pricing: "Pricing",
      security: "Trust",
      faq: "FAQ",
      download: "Download",
      openMenu: "Open menu",
    },
    store: {
      tooltip: "Coming soon",
      label: "Download from stores",
      altAppStore: "Download Meetings.ro from the App Store",
      altPlayStore: "Download Meetings.ro from Google Play",
    },
    hero: {
      eyebrow: "Structured reports from any meeting",
      title: "Record. We write the report.",
      lead:
        "Meeting ends. Report ready in 2 minutes.",
      secondaryCta: "See a sample report",
      trustLine: "As simple as WhatsApp. As serious as an official file.",
      proofs: [
        { value: "2 minutes", label: "From recording to final report." },
        { value: "Offline", label: "Record without internet. Upload later." },
        { value: "Romanian", label: "All in Romanian. No translations needed." },
      ],
    },
    problem: {
      eyebrow: "Works anywhere",
      title: "No internet? No problem.",
      lead:
        "Meetings don't always happen at the office. Meetings works without signal too.",
      body:
        "Record on your phone. Return to the office. Upload. Get the report.",
      calloutTitle: "Fully offline",
      calloutBody:
        "Record without internet. Upload when ready. Report comes automatically.",
      calloutBadge: "Works without signal",
      steps: [
        "1. Record the meeting on your phone.",
        "2. Upload when you have internet.",
        "3. Get a structured report.",
      ],
    },
    fields: {
      eyebrow: "Full report, not just text",
      title: "9 fields. Ready to archive.",
      lead:
        "Every report comes structured. Review, export, archive.",
      statement: "Not raw text. A proper official document.",
      items: [
        { label: "Date & time", description: "Know exactly when it happened." },
        { label: "Locality / UAT", description: "Archive by commune or locality." },
        { label: "Attendees", description: "Full list, ready for reporting." },
        { label: "Agenda", description: "Topics discussed, in order." },
        { label: "Objectives", description: "Meeting purpose, clearly separated." },
        { label: "Discussion summary", description: "Only the key ideas." },
        { label: "Decisions", description: "What was decided. No ambiguity." },
        { label: "Conclusions", description: "Clear summary, easy to verify." },
        { label: "Next steps", description: "Who does what. Visible to all." },
      ],
    },
    verticals: {
      eyebrow: "Built for your industry",
      title: "For any industry.",
      lead:
        "Same simple process. The report adapts automatically.",
      cards: [
        {
          title: "Administration & NGOs",
          subtitle: "Associations, foundations, nonprofit organizations",
          extracts: ["Meeting objective", "Decisions adopted", "Attendees", "Deadlines", "Conclusions"],
          useCase: "Meeting minutes ready before you leave the room.",
          testid: "industry-admin-card",
        },
        {
          title: "Banking & Finance",
          subtitle: "Compliance meetings, board minutes, internal reports",
          extracts: ["Compliance points", "Action items", "Identified risks", "Final decision"],
          useCase: "Compliant reports generated after every meeting.",
          testid: "industry-banking-card",
        },
        {
          title: "Legal",
          subtitle: "Negotiations, consultations, case files",
          extracts: ["Clauses discussed", "Deadlines", "Obligations", "Parties involved"],
          useCase: "Every negotiation detail, structured and archived.",
          testid: "industry-legal-card",
        },
        {
          title: "Journalism & Media",
          subtitle: "Interviews, press conferences, investigations",
          extracts: ["Direct quotes", "Interviewed people", "Editorial angle", "Main topic"],
          useCase: "From interview to structured material in minutes.",
          testid: "industry-media-card",
        },
      ],
    },
    features: {
      eyebrow: "Everything organized",
      title: "Find, export, archive. No effort.",
      lead:
        "Reports stay organized. Find them anytime.",
      cards: [
        {
          title: "Auto archive",
          description: "Folders organize themselves by locality.",
          detail: "No manual folder creation.",
          testid: "feature-archive-card",
        },
        {
          title: "Instant export",
          description: "PDF or Word. One click, ready to send.",
          detail: "No manual rewriting.",
          testid: "feature-export-card",
        },
        {
          title: "Fast search",
          description: "Find any meeting in seconds.",
          detail: "By date, locality or keywords.",
          testid: "feature-search-card",
        },
      ],
    },
    security: {
      eyebrow: "Confidentiality",
      title: "Your data stays yours.",
      lead:
        "Real security, not just promises.",
      bullets: [
        "GDPR compliant",
        "No unsafe public cloud",
        "Romanian-language support",
        "Built for public institutions",
      ],
      badges: ["GDPR", "Romanian support", "Public sector"],
      cardTitle: "Built in Romania. For Romania.",
      cardLead:
        "We know how institutions work. The product reflects that.",
      cardItems: [
        "Institution-focused processing",
        "Simple interface, no training needed",
        "Reports easy to verify",
      ],
    },
    pricing: {
      eyebrow: "Pricing in EUR",
      title: "Simple. No surprises.",
      lead:
        "Three plans. Pick what fits.",
      toggleMonthly: "Monthly",
      toggleAnnual: "Annual",
      savingsLabel: "Save with annual billing",
      vatNote: "Prices exclude VAT",
      plans: [
        {
          name: "Starter",
          badge: "Free",
          monthlyPrice: "0€",
          annualPrice: "0€",
          monthlyPeriod: "/month",
          annualPeriod: "/year",
          detail: "5h recording / month",
          features: ["1 included vertical", "Basic PDF export", "1GB storage", "Email support"],
          ctaLabel: "Coming soon",
          ctaType: "store-badges",
          highlight: false,
          badgeTone: "neutral",
          testid: "pricing-starter-card",
        },
        {
          name: "Pro",
          badge: "Most popular",
          monthlyPrice: "19€",
          annualPrice: "182€",
          monthlyPeriod: "/month",
          annualPeriod: "/year",
          detail: "30h recording / month",
          features: ["3 included verticals", "PDF + DOCX export", "25GB storage", "Semantic search", "Priority support"],
          ctaLabel: "Choose Pro",
          ctaType: "store-badges",
          highlight: true,
          badgeTone: "featured",
          testid: "pricing-pro-card",
        },
        {
          name: "Enterprise",
          badge: "Enterprise",
          monthlyPrice: "99€",
          annualPrice: "950€",
          monthlyPeriod: "/month",
          annualPeriod: "/year",
          detail: "Unlimited hours",
          features: ["Unlimited verticals", "Branded PDF + DOCX export", "Unlimited storage", "99.9% SLA", "Dedicated onboarding", "Tax invoice"],
          ctaLabel: "Choose Enterprise",
          ctaType: "store-badges",
          highlight: false,
          badgeTone: "enterprise",
          testid: "pricing-enterprise-card",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Short answers. No jargon.",
      lead:
        "What you need to know before starting.",
      items: [
        {
          question: "Do I need technical skills?",
          answer: "No. If you can use WhatsApp, you're good.",
          testid: "faq-item-technical",
        },
        {
          question: "Does it work without internet?",
          answer: "Yes. Record offline, upload when you have signal.",
          testid: "faq-item-offline",
        },
        {
          question: "Can I export to Word and PDF?",
          answer: "Yes. One click and you download PDF or DOCX.",
          testid: "faq-item-export",
        },
        {
          question: "How about GDPR?",
          answer: "GDPR compliant. No unsafe public cloud.",
          testid: "faq-item-gdpr",
        },
        {
          question: "Does it work for other industries?",
          answer: "Yes. Banking, Legal, Journalism and more, depending on plan.",
          testid: "faq-item-verticals",
        },
      ],
    },
    finalCta: {
      title: "Less writing. More time for decisions.",
      lead:
        "Download Meetings.ro and forget about drafting.",
      secondary: "See pricing",
    },
    footer: {
      statement:
        "Meetings.ro — structured reports from any meeting.",
      support: "Romanian support • GDPR • Built for institutions",
      copyright: "© 2026 NEDEROV COMEX SRL",
      links: [
        { label: "Terms & Conditions", href: "/terms", internal: true },
        { label: "Privacy Policy", href: "/privacy-policy", internal: true },
        { label: "Contact", href: "mailto:hello@meetings.ro" },
      ],
    },
    preview: {
      title: "Generated report",
      location: "Danube Delta • Chilia Veche",
      generatedAt: "Generated in ~2 minutes",
      summary: "Objectives, conclusions and next steps appear in a structured format that is ready for internal review.",
      tags: ["Date & time", "Attendees", "Decisions", "Conclusions"],
      sections: ["Agenda", "Discussion summary", "Next steps"],
    },
  },
};
