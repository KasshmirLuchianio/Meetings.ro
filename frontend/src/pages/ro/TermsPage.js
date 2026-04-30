import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="mb-4 text-xl font-bold text-[color:var(--text-strong)]">{title}</h2>
    <div className="space-y-3 text-sm leading-7 text-[color:var(--text-muted)]">{children}</div>
  </section>
);

const TermsPage = () => (
  <PageLayout lang="ro">
    <Helmet>
      <html lang="ro" />
      <title>Termeni și condiții — Meetings.ro</title>
      <meta name="description" content="Termenii și condițiile de utilizare ale Meetings.ro — planuri, plăți, anulare și limitări." />
      <link rel="canonical" href={`${SITE_URL}/terms`} />
      <meta property="og:title" content="Termeni și condiții — Meetings.ro" />
      <meta property="og:description" content="Planuri, plăți, anulare și limitele serviciului Meetings.ro." />
      <meta property="og:url" content={`${SITE_URL}/terms`} />
      <meta property="og:image" content={OG_IMAGE_URL} />
    </Helmet>

    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="mb-3 text-3xl font-extrabold text-[color:var(--text-strong)]">Termeni și condiții</h1>
        <p className="text-sm text-[color:var(--text-muted)]">Ultima actualizare: 30 aprilie 2026</p>
      </header>

      <Section title="1. Parties">
        <p>
          Acești termeni reglementează relația dintre <strong className="text-[color:var(--text-strong)]">NEDEROV COMEX SRL</strong> (CUI RO46076724, denumit în continuare „noi" sau „Meetings.ro")
          și orice persoană fizică sau juridică care utilizează platforma Meetings.ro (denumită „Utilizator").
        </p>
        <p>Prin crearea unui cont, Utilizatorul acceptă integral acești termeni.</p>
      </Section>

      <Section title="2. Descrierea serviciului">
        <p>
          Meetings.ro este o platformă software care procesează automat înregistrări audio ale ședințelor
          și generează rapoarte structurate. Platforma nu stochează permanent înregistrările audio.
          Rapoartele generate rămân în contul Utilizatorului pe durata abonamentului activ.
        </p>
      </Section>

      <Section title="3. Planuri și prețuri">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[color:var(--border)]">
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Plan</th>
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Preț lunar</th>
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Preț anual</th>
                <th className="py-2 text-left font-semibold text-[color:var(--text-strong)]">Minute incluse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color:var(--border)]">
              <tr>
                <td className="py-2 font-medium text-[color:var(--text-strong)]">Starter</td>
                <td className="py-2">Gratuit</td>
                <td className="py-2">Gratuit</td>
                <td className="py-2">15 minute/lună</td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-[color:var(--text-strong)]">Pro</td>
                <td className="py-2">€19 + TVA</td>
                <td className="py-2">€182 + TVA (echivalent €15.17/lună)</td>
                <td className="py-2">300 minute/lună</td>
              </tr>
              <tr>
                <td className="py-2 font-medium text-[color:var(--text-strong)]">Enterprise</td>
                <td className="py-2">€99 + TVA</td>
                <td className="py-2">€950 + TVA (echivalent €79.17/lună)</td>
                <td className="py-2">Nelimitat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Prețurile sunt exprimate în EUR fără TVA. TVA-ul se aplică conform legislației aplicabile la locul Utilizatorului.
          Minutele neutilizate nu se reportează în luna următoare.
        </p>
      </Section>

      <Section title="4. Plăți și facturare">
        <p>
          Plățile se procesează prin <strong className="text-[color:var(--text-strong)]">Stripe</strong> (card bancar).
          Facturile fiscale sunt emise automat prin <strong className="text-[color:var(--text-strong)]">SmartBill</strong>
          și transmise pe e-mail.
        </p>
        <p>
          Abonamentele se reînnoiesc automat la fiecare perioadă (lunar sau anual), conform planului ales.
          Reînnoirea poate fi oprită oricând din setările contului.
        </p>
        <p>
          În caz de eșec al plății, serviciul este suspendat după o perioadă de grație de 3 zile.
          Ne rezervăm dreptul de a actualiza prețurile cu un preaviz de 30 de zile prin e-mail.
        </p>
      </Section>

      <Section title="5. Anulare și rambursare">
        <p>
          Poți anula abonamentul oricând. Anularea intră în vigoare la sfârșitul perioadei de facturare curente.
          Nu oferim rambursări proporționale pentru perioadele neutilizate, cu excepția cazurilor impuse de lege.
        </p>
        <p>
          Conturile Starter (gratuite) pot fi închise oricând fără nicio formalitate suplimentară.
        </p>
      </Section>

      <Section title="6. Utilizare acceptabilă">
        <p>Este interzisă utilizarea platformei pentru:</p>
        <ul className="ml-5 list-disc space-y-1">
          <li>procesarea înregistrărilor obținute fără consimțământul participanților;</li>
          <li>orice activitate ilegală sau care încalcă drepturile terților;</li>
          <li>tentative de acces neautorizat la infrastructura platformei;</li>
          <li>revânzarea sau redistribuirea serviciului fără acord scris.</li>
        </ul>
        <p>
          Utilizatorul este singurul responsabil pentru obținerea consimțământului participanților la ședințe
          înainte de înregistrare, conform legislației aplicabile.
        </p>
      </Section>

      <Section title="7. Proprietate intelectuală">
        <p>
          Rapoartele generate aparțin Utilizatorului. Meetings.ro nu revendică niciun drept asupra conținutului rapoartelor tale.
        </p>
        <p>
          Platforma, interfața și codul sursă aparțin NEDEROV COMEX SRL și sunt protejate de legislația privind drepturile de autor.
        </p>
      </Section>

      <Section title="8. Limitarea răspunderii">
        <p>
          Meetings.ro oferă serviciul „ca atare". Nu garantăm acuratețea 100% a transcrierilor sau rapoartelor generate automat.
          Utilizatorul are responsabilitatea verificării și validării rapoartelor înainte de utilizare oficială.
        </p>
        <p>
          Răspunderea noastră totală față de un Utilizator nu poate depăși sumele plătite de acesta în ultimele 3 luni.
          Nu răspundem pentru daune indirecte, pierderi de profit sau daune consecutive.
        </p>
      </Section>

      <Section title="9. Protecția datelor">
        <p>
          Prelucrarea datelor cu caracter personal se realizează conform{" "}
          <Link to="/privacy-policy" className="simple-link">Politicii de confidențialitate</Link>.
          NEDEROV COMEX SRL acționează ca operator de date în sensul GDPR.
        </p>
      </Section>

      <Section title="10. Modificarea termenilor">
        <p>
          Ne rezervăm dreptul de a modifica acești termeni. Modificările semnificative vor fi comunicate prin e-mail
          cu cel puțin 15 zile înainte de intrarea în vigoare.
          Continuarea utilizării serviciului după această dată constituie acceptarea noilor termeni.
        </p>
      </Section>

      <Section title="11. Legea aplicabilă">
        <p>
          Acești termeni sunt guvernați de legea română. Litigiile se soluționează pe cale amiabilă sau,
          în subsidiar, de instanțele competente din România.
        </p>
        <p>Contact: <a href="mailto:hello@meetings.ro" className="simple-link">hello@meetings.ro</a></p>
      </Section>
    </div>
  </PageLayout>
);

export default TermsPage;
