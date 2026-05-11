import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-[color:var(--text-strong)]">{title}</h2>
    <div className="space-y-3 text-sm leading-7 text-[color:var(--text-muted)]">{children}</div>
  </section>
);

const PrivacyPolicyPage = () => (
  <PageLayout lang="ro">
    <Helmet>
      <html lang="ro" />
      <title>Politică de confidențialitate — Meetings.ro</title>
      <meta name="description" content="Politica de confidențialitate a Meetings.ro — cum colectăm, stocăm și protejăm datele tale." />
      <link rel="canonical" href={`${SITE_URL}/privacy-policy`} />
      <meta property="og:title" content="Politică de confidențialitate — Meetings.ro" />
      <meta property="og:description" content="Cum colectăm, stocăm și protejăm datele tale." />
      <meta property="og:url" content={`${SITE_URL}/privacy-policy`} />
      <meta property="og:image" content={OG_IMAGE_URL} />
    </Helmet>

    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-extrabold text-[color:var(--text-strong)]">Politică de confidențialitate</h1>
        <p className="text-sm text-[color:var(--text-muted)]">Ultima actualizare: 30 aprilie 2026</p>
      </header>

      <Section title="1. Operatorul de date">
        <p>
          Operatorul datelor dumneavoastră cu caracter personal este{" "}
          <strong className="text-[color:var(--text-strong)]">NEDEROV COMEX S.R.L.</strong>{" "}
          (CUI 46076724, Reg. Com. J40/8510/2022, cu sediul în{" "}
          <strong className="text-[color:var(--text-strong)]">București, Sector 4, Str. Ienăchiță Văcărescu nr. 36, ap. 5</strong>),
          în sensul Regulamentului (UE) 2016/679 (GDPR).
        </p>
        <p>
          Pentru orice solicitări privind exercitarea drepturilor GDPR (dreptul de acces, ștergere, portare, opoziție),
          ne puteți contacta la:{" "}
          <a href="mailto:support@meetings-ro.app" className="simple-link">support@meetings-ro.app</a>.
        </p>
        <p>
          Serviciile noastre se adresează exclusiv persoanelor cu vârsta de cel puțin{" "}
          <strong className="text-[color:var(--text-strong)]">16 ani</strong>.
          NEDEROV COMEX S.R.L. nu colectează cu bună știință date de la persoane sub această vârstă.
        </p>
      </Section>

      <Section title="2. Ce date colectăm">
        <p>Colectăm doar datele necesare funcționării serviciului:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><strong className="text-[color:var(--text-strong)]">Date de cont:</strong> adresă de e-mail, parolă (hash), plan de abonament.</li>
          <li><strong className="text-[color:var(--text-strong)]">Înregistrări audio:</strong> fișiere audio ale ședințelor tale, transmise exclusiv pentru procesare automată.</li>
          <li><strong className="text-[color:var(--text-strong)]">Rapoarte generate:</strong> textul structurat produs după procesarea înregistrării.</li>
          <li><strong className="text-[color:var(--text-strong)]">Date de facturare:</strong> datele de plată sunt gestionate direct de Stripe — noi nu stocăm numerele de card.</li>
          <li><strong className="text-[color:var(--text-strong)]">Date tehnice:</strong> adresă IP, browser, date de sesiune — pentru securitate și diagnosticare.</li>
          <li><strong className="text-[color:var(--text-strong)]">Cookie-uri strict necesare:</strong> un singur cookie pentru sesiunea autentificată.</li>
        </ul>
      </Section>

      <Section title="3. Scopul și temeiul juridic al prelucrării">
        <ul className="ml-5 list-disc space-y-1">
          <li><strong className="text-[color:var(--text-strong)]">Executarea contractului (art. 6 alin. 1 lit. b GDPR):</strong> procesarea înregistrărilor și generarea rapoartelor.</li>
          <li><strong className="text-[color:var(--text-strong)]">Obligație legală (art. 6 alin. 1 lit. c GDPR):</strong> emiterea facturilor fiscale și arhivarea contabilă.</li>
          <li><strong className="text-[color:var(--text-strong)]">Interes legitim (art. 6 alin. 1 lit. f GDPR):</strong> securitatea platformei și prevenirea fraudei.</li>
          <li><strong className="text-[color:var(--text-strong)]">Consimțământ (art. 6 alin. 1 lit. a GDPR):</strong> cookie-uri strict necesare — retragerea consimțământului nu afectează legalitatea prelucrărilor anterioare.</li>
        </ul>
      </Section>

      <Section title="4. Procesatori de date (sub-processors)">
        <p>Transmitem date cu caracter personal exclusiv către procesatori care oferă garanții adecvate GDPR:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[color:var(--border)]">
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Procesator</th>
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Scop</th>
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Locație date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              {[
                { name: "Groq, Inc.", purpose: "Transcriere audio automată", location: "SUA (SCCs)" },
                { name: "Anthropic, Inc.", purpose: "Structurare raport text", location: "SUA (SCCs)" },
                { name: "MongoDB Atlas", purpose: "Stocare conturi și rapoarte", location: "UE (Frankfurt)" },
                { name: "Stripe, Inc.", purpose: "Procesare plăți", location: "SUA/UE (SCCs)" },
                { name: "Resend, Inc.", purpose: "Trimitere e-mailuri tranzacționale", location: "SUA (SCCs)" },
                { name: "SmartBill SRL", purpose: "Facturare fiscală & transmitere RO e-Factura către ANAF", location: "România" },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="py-2 font-medium text-[color:var(--text-strong)]">{row.name}</td>
                  <td className="py-2">{row.purpose}</td>
                  <td className="py-2">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Transferurile către SUA se realizează pe baza Clauzelor Contractuale Standard (SCCs) aprobate de Comisia Europeană.
        </p>
        <p className="mt-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-card)] p-4">
          <strong className="text-[color:var(--text-strong)]">SmartBill &amp; ANAF (SPV):</strong> Pentru procesarea plăților și emiterea facturilor fiscale,
          NEDEROV COMEX S.R.L. colectează datele de facturare furnizate de utilizator (Nume / Denumire companie, CUI, Adresă).
          Aceste date sunt introduse în platforma procesatorului nostru de facturare (SmartBill) și transmise obligatoriu prin lege
          către <strong className="text-[color:var(--text-strong)]">Agenția Națională de Administrare Fiscală (ANAF)</strong>{" "}
          prin sistemul național <strong className="text-[color:var(--text-strong)]">RO e-Factura</strong>.
        </p>
      </Section>

      <Section title="5. Durata stocării">
        <ul className="ml-5 list-disc space-y-1">
          <li><strong className="text-[color:var(--text-strong)]">Înregistrări audio:</strong> șterse automat după generarea raportului (maxim 24 de ore).</li>
          <li><strong className="text-[color:var(--text-strong)]">Rapoarte generate:</strong> stocate pe durata abonamentului activ + 30 de zile după anulare.</li>
          <li><strong className="text-[color:var(--text-strong)]">Date de facturare:</strong> 10 ani, conform Codului fiscal român.</li>
          <li><strong className="text-[color:var(--text-strong)]">Date de cont:</strong> pe durata contului activ; șterse la cererea utilizatorului sau după 2 ani de inactivitate.</li>
        </ul>
      </Section>

      <Section title="6. Drepturile tale GDPR">
        <p>Ai dreptul la:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li><strong className="text-[color:var(--text-strong)]">Acces</strong> — să primești o copie a datelor tale (art. 15 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Rectificare</strong> — corectarea datelor inexacte (art. 16 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Ștergere</strong> — „dreptul de a fi uitat" (art. 17 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Restricționare</strong> — limitarea prelucrării în anumite situații (art. 18 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Portabilitate</strong> — export date în format structurat (art. 20 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Opoziție</strong> — împotriva prelucrărilor bazate pe interes legitim (art. 21 GDPR).</li>
          <li><strong className="text-[color:var(--text-strong)]">Plângere</strong> — la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), <a href="https://www.dataprotection.ro" className="simple-link" target="_blank" rel="noopener noreferrer">dataprotection.ro</a>.</li>
        </ul>
        <p>Exercitarea drepturilor: <a href="mailto:support@meetings-ro.app" className="simple-link">support@meetings-ro.app</a>. Răspundem în maximum 30 de zile.</p>
      </Section>

      <Section title="7. Cookie-uri">
        <p>
          Folosim exclusiv cookie-uri strict necesare pentru funcționarea sesiunii autentificate.
          Nu folosim cookie-uri de tracking, publicitate sau analiză terță.
        </p>
        <p>
          Consimțământul tău pentru cookie-uri este stocat în <code className="rounded bg-[color:var(--surface-card)] px-1">localStorage</code> al browserului tău.
          Poți retrage consimțământul oricând prin ștergerea datelor locale ale browserului.
        </p>
      </Section>

      <Section title="8. Securitate">
        <p>
          Datele sunt transmise exclusiv prin HTTPS. Înregistrările audio sunt procesate în memorie și nu sunt stocate permanent pe serverele noastre.
          Rapoartele sunt accesibile exclusiv contului care le-a generat.
        </p>
      </Section>

      <Section title="9. Modificări ale politicii">
        <p>
          Orice modificare semnificativă va fi comunicată prin e-mail cu cel puțin 15 zile înainte de intrarea în vigoare.
          Continuarea utilizării serviciului după această dată constituie acceptarea noilor termeni.
        </p>
      </Section>
    </div>
  </PageLayout>
);

export default PrivacyPolicyPage;
