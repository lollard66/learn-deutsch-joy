import { useState } from "react";
import { CheckCircle2, XCircle, Eye } from "lucide-react";

const tabs = [
  { key: "bestimmt", label: "Nach der/die/das" },
  { key: "unbestimmt", label: "Nach ein/mein/kein" },
  { key: "ohne", label: "Ohne Artikel" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

interface Row {
  kasus: string;
  m: string;
  f: string;
  n: string;
  pl: string;
}

const endings: Record<TabKey, { explanation: string; rows: Row[]; examples: string[] }> = {
  bestimmt: {
    explanation:
      "После определённого артикля (der, die, das) окончания прилагательных «слабые» — почти везде <strong class='text-primary'>-en</strong>, кроме Nominativ (m/f/n) и Akkusativ (f/n), где окончание <strong class='text-primary'>-e</strong>.",
    rows: [
      { kasus: "Nominativ", m: "der alt-e Baum", f: "die klein-e Frau", n: "das groß-e Haus", pl: "die neu-en Bücher" },
      { kasus: "Akkusativ", m: "den alt-en Baum", f: "die klein-e Frau", n: "das groß-e Haus", pl: "die neu-en Bücher" },
      { kasus: "Dativ", m: "dem alt-en Baum", f: "der klein-en Frau", n: "dem groß-en Haus", pl: "den neu-en Büchern" },
      { kasus: "Genitiv", m: "des alt-en Baums", f: "der klein-en Frau", n: "des groß-en Hauses", pl: "der neu-en Bücher" },
    ],
    examples: [
      "Der alte Baum steht im Park.",
      "Ich sehe den alten Baum.",
      "Ich sitze unter dem alten Baum.",
      "Die Blätter des alten Baumes.",
    ],
  },
  unbestimmt: {
    explanation:
      "После неопределённого артикля (ein, mein, kein) прилагательное «берёт на себя» показатель рода, если артикль его не показывает. В Nom. m. — <strong class='text-primary'>-er</strong>, в Nom./Akk. n. — <strong class='text-primary'>-es</strong>, остальное как у определённого.",
    rows: [
      { kasus: "Nominativ", m: "ein alt-er Baum", f: "eine klein-e Frau", n: "ein groß-es Haus", pl: "keine neu-en Bücher" },
      { kasus: "Akkusativ", m: "einen alt-en Baum", f: "eine klein-e Frau", n: "ein groß-es Haus", pl: "keine neu-en Bücher" },
      { kasus: "Dativ", m: "einem alt-en Baum", f: "einer klein-en Frau", n: "einem groß-en Haus", pl: "keinen neu-en Büchern" },
      { kasus: "Genitiv", m: "eines alt-en Baums", f: "einer klein-en Frau", n: "eines groß-en Hauses", pl: "keiner neu-en Bücher" },
    ],
    examples: [
      "Ein alter Baum steht im Park.",
      "Ich sehe einen alten Baum.",
      "Ich sitze unter einem alten Baum.",
      "Mein kleines Haus ist gemütlich.",
    ],
  },
  ohne: {
    explanation:
      "Без артикля прилагательное получает «сильные» окончания — оно само показывает род, число и падеж. Окончания совпадают с окончаниями определённого артикля (кроме Genitiv m./n.).",
    rows: [
      { kasus: "Nominativ", m: "alt-er Baum", f: "klein-e Frau", n: "groß-es Haus", pl: "neu-e Bücher" },
      { kasus: "Akkusativ", m: "alt-en Baum", f: "klein-e Frau", n: "groß-es Haus", pl: "neu-e Bücher" },
      { kasus: "Dativ", m: "alt-em Baum", f: "klein-er Frau", n: "groß-em Haus", pl: "neu-en Büchern" },
      { kasus: "Genitiv", m: "alt-en Baums", f: "klein-er Frau", n: "groß-en Hauses", pl: "neu-er Bücher" },
    ],
    examples: [
      "Alter Baum steht im Park.",
      "Ich trinke kalten Kaffee.",
      "Mit großem Interesse lese ich.",
      "Frische Bücher riechen gut.",
    ],
  },
};

// highlight ending after the hyphen
function renderCell(text: string) {
  const parts = text.split("-");
  if (parts.length < 2) return <span>{text}</span>;
  return (
    <span>
      {parts[0]}
      <span className="text-primary font-bold">{parts.slice(1).join("-")}</span>
    </span>
  );
}

const quizQuestions: { sentence: string; answer: string; tab: TabKey }[] = [
  { sentence: "Der alt___ Baum steht im Park. (Nom, m)", answer: "e", tab: "bestimmt" },
  { sentence: "Ich sehe den alt___ Baum. (Akk, m)", answer: "en", tab: "bestimmt" },
  { sentence: "Unter dem alt___ Baum. (Dat, m)", answer: "en", tab: "bestimmt" },
  { sentence: "Die klein___ Frau lacht. (Nom, f)", answer: "e", tab: "bestimmt" },
  { sentence: "Die neu___ Bücher sind toll. (Nom, Pl)", answer: "en", tab: "bestimmt" },
  { sentence: "Ein alt___ Baum steht dort. (Nom, m)", answer: "er", tab: "unbestimmt" },
  { sentence: "Ich sehe einen alt___ Baum. (Akk, m)", answer: "en", tab: "unbestimmt" },
  { sentence: "Ein groß___ Haus. (Nom, n)", answer: "es", tab: "unbestimmt" },
  { sentence: "Mein klein___ Auto. (Nom, n)", answer: "es", tab: "unbestimmt" },
  { sentence: "Keine neu___ Bücher. (Akk, Pl)", answer: "en", tab: "unbestimmt" },
  { sentence: "Kalt___ Kaffee schmeckt nicht. (Nom, m)", answer: "er", tab: "ohne" },
  { sentence: "Ich trinke kalt___ Kaffee. (Akk, m)", answer: "en", tab: "ohne" },
  { sentence: "Mit groß___ Interesse. (Dat, n)", answer: "em", tab: "ohne" },
  { sentence: "Frisch___ Bücher riechen gut. (Nom, Pl)", answer: "e", tab: "ohne" },
  { sentence: "Ich esse warm___ Suppe. (Akk, f)", answer: "e", tab: "ohne" },
];

export function AdjektivDeklination() {
  const [activeTab, setActiveTab] = useState<TabKey>("bestimmt");
  const [answers, setAnswers] = useState<string[]>(Array(quizQuestions.length).fill(""));
  const [checked, setChecked] = useState<boolean[]>(Array(quizQuestions.length).fill(false));
  const [revealed, setRevealed] = useState<boolean[]>(Array(quizQuestions.length).fill(false));

  const data = endings[activeTab];
  const tabQuestions = quizQuestions
    .map((q, i) => ({ ...q, idx: i }))
    .filter((q) => q.tab === activeTab);

  const updateAnswer = (i: number, val: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const checkOne = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  const revealOne = (i: number) => {
    setRevealed((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  const isCorrect = (i: number) =>
    answers[i].trim().toLowerCase() === quizQuestions[i].answer.toLowerCase();

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold tracking-display animate-slide-up-fade">
        Adjektivdeklination
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeTab === t.key
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Explanation */}
      <div className="bg-card p-5 sm:p-8 rounded-2xl border border-border shadow-card animate-slide-up-fade">
        <h3 className="text-lg font-bold tracking-display mb-3 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full" />
          {tabs.find((t) => t.key === activeTab)!.label}
        </h3>
        <p
          className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5"
          dangerouslySetInnerHTML={{ __html: data.explanation }}
        />

        {/* Table */}
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-xs sm:text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-2.5 px-2 font-bold">Kasus</th>
                <th className="text-left py-2.5 px-2 text-case-nom">♂ Maskulin</th>
                <th className="text-left py-2.5 px-2 text-case-dat">♀ Feminin</th>
                <th className="text-left py-2.5 px-2 text-case-akk">⚬ Neutral</th>
                <th className="text-left py-2.5 px-2 text-case-verb">⊕ Plural</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.kasus} className="border-b border-border/50">
                  <td className="py-2.5 px-2 font-semibold">{row.kasus}</td>
                  <td className="py-2.5 px-2">{renderCell(row.m)}</td>
                  <td className="py-2.5 px-2">{renderCell(row.f)}</td>
                  <td className="py-2.5 px-2">{renderCell(row.n)}</td>
                  <td className="py-2.5 px-2">{renderCell(row.pl)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Examples */}
        <div className="mt-5 space-y-2">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Beispiele
          </p>
          {data.examples.map((ex, i) => (
            <p key={i} className="text-sm sm:text-base pl-3 border-l-2 border-primary/30">
              {ex}
            </p>
          ))}
        </div>
      </div>

      {/* Quiz */}
      <div className="bg-card p-5 sm:p-8 rounded-2xl border border-border shadow-card animate-slide-up-fade">
        <h3 className="text-lg font-bold tracking-display mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-primary rounded-full" />
          Test: Welche Endung?
        </h3>
        <div className="space-y-4">
          {tabQuestions.map(({ sentence, answer, idx }, qi) => {
            const wasChecked = checked[idx];
            const correct = wasChecked && isCorrect(idx);
            const wrong = wasChecked && !isCorrect(idx);
            const wasRevealed = revealed[idx];

            return (
              <div key={idx} className="animate-slide-up-fade" style={{ animationDelay: `${qi * 30}ms` }}>
                <label className="text-sm sm:text-base text-muted-foreground font-medium block mb-1.5">
                  {qi + 1}. {sentence}
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={answers[idx]}
                      onChange={(e) => updateAnswer(idx, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") checkOne(idx);
                      }}
                      placeholder="-e, -en, -er, -es, -em…"
                      className={`w-full bg-muted border rounded-xl px-4 py-3 text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card ${
                        correct
                          ? "border-case-akk bg-emerald-50"
                          : wrong
                          ? "border-case-dat bg-rose-50"
                          : "border-border"
                      }`}
                    />
                    {wasChecked && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {correct ? (
                          <CheckCircle2 className="w-5 h-5 text-case-akk" />
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <XCircle className="w-5 h-5 text-case-dat" />
                            <span className="text-xs font-semibold text-case-dat">-{answer}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {!wasChecked && !wasRevealed && (
                    <button
                      onClick={() => revealOne(idx)}
                      className="shrink-0 p-2.5 rounded-xl bg-muted text-muted-foreground hover:bg-secondary transition-colors"
                      title="Показать ответ"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  {wasRevealed && !wasChecked && (
                    <span className="shrink-0 text-xs font-bold text-primary px-2">-{answer}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
