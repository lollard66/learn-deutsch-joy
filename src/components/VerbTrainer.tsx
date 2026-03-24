import { useState, useCallback, useMemo, useEffect } from "react";
import { irregularVerbs, type IrregularVerb } from "@/data/verbs";
import { Button } from "@/components/ui/button";
import {
  Shuffle, Eye, EyeOff, ChevronRight, ChevronLeft,
  RotateCcw, CheckCircle2, XCircle, Zap, BookOpen, Dumbbell,
  ArrowRight
} from "lucide-react";

type Mode = "cards" | "quiz" | "match";
type QuizField = "praesens" | "praeteritum" | "perfekt";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── Flashcards ─── */
function Flashcards() {
  const [deck, setDeck] = useState(() => shuffle(irregularVerbs));
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);

  const card = deck[idx];
  const total = deck.length;

  const reshuffleDeck = () => {
    setDeck(shuffle(irregularVerbs));
    setIdx(0);
    setFlipped(false);
    setKnown(0);
  };

  const next = (isKnown: boolean) => {
    if (isKnown) setKnown(k => k + 1);
    setFlipped(false);
    setTimeout(() => {
      if (idx < total - 1) setIdx(i => i + 1);
      else reshuffleDeck();
    }, 150);
  };

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{idx + 1} / {total}</span>
        <span className="text-case-akk font-semibold">✓ {known} знаю</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      {/* Card */}
      <div
        onClick={() => setFlipped(f => !f)}
        className="relative min-h-[280px] sm:min-h-[320px] bg-card border border-border rounded-2xl shadow-card cursor-pointer select-none overflow-hidden transition-all duration-300 hover:shadow-elevated"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          {!flipped ? (
            <>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Infinitiv</p>
              <p className="text-3xl sm:text-4xl font-bold tracking-display mb-3">{card.infinitiv}</p>
              <p className="text-sm text-muted-foreground">{card.translation}</p>
              <p className="mt-8 text-xs text-muted-foreground/60 flex items-center gap-1">
                <Eye className="w-3 h-3" /> Нажми, чтобы перевернуть
              </p>
            </>
          ) : (
            <>
              <div className="space-y-4 w-full max-w-xs">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Präsens</span>
                  <span className="text-lg font-bold text-case-nom">{card.praesens}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Präteritum</span>
                  <span className="text-lg font-bold text-case-akk">{card.praeteritum}</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Perfekt</span>
                  <span className="text-lg font-bold text-case-dat">{card.perfekt}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1 py-5 text-destructive border-destructive/30 hover:bg-destructive/5"
          onClick={() => next(false)}
        >
          <XCircle className="w-4 h-4 mr-2" /> Не знаю
        </Button>
        <Button
          className="flex-1 py-5 bg-case-akk hover:bg-case-akk/90 text-white"
          onClick={() => next(true)}
        >
          <CheckCircle2 className="w-4 h-4 mr-2" /> Знаю!
        </Button>
      </div>

      <Button variant="ghost" size="sm" className="w-full" onClick={reshuffleDeck}>
        <Shuffle className="w-4 h-4 mr-2" /> Перемешать
      </Button>
    </div>
  );
}

/* ─── Quiz ─── */
function Quiz() {
  const BATCH = 10;
  const [questions, setQuestions] = useState<{ verb: IrregularVerb; field: QuizField }[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const generateQuiz = useCallback(() => {
    const fields: QuizField[] = ["praesens", "praeteritum", "perfekt"];
    const pool = shuffle(irregularVerbs).slice(0, BATCH).map(verb => ({
      verb,
      field: fields[Math.floor(Math.random() * fields.length)],
    }));
    setQuestions(pool);
    setAnswers(Array(BATCH).fill(""));
    setChecked(Array(BATCH).fill(false));
    setScore(null);
  }, []);

  useEffect(() => { generateQuiz(); }, [generateQuiz]);

  const getCorrectAnswer = (q: { verb: IrregularVerb; field: QuizField }) => q.verb[q.field];

  const fieldLabel = (f: QuizField) =>
    f === "praesens" ? "Präsens (er/sie)" :
      f === "praeteritum" ? "Präteritum" : "Perfekt";

  const isCorrect = (i: number) => answers[i].trim().toLowerCase() === getCorrectAnswer(questions[i]).toLowerCase();

  const checkSingle = (i: number) => {
    setChecked(prev => { const n = [...prev]; n[i] = true; return n; });
  };

  const finishQuiz = () => {
    setChecked(Array(BATCH).fill(true));
    const correct = questions.filter((_, i) => isCorrect(i)).length;
    setScore(Math.round((correct / BATCH) * 100));
  };

  if (!questions.length) return null;

  return (
    <div className="space-y-4">
      {score !== null && (
        <div className={`p-4 rounded-xl text-center font-bold text-lg ${score >= 70 ? "bg-case-akk/10 text-case-akk" : "bg-case-dat/10 text-case-dat"}`}>
          {score}% {score >= 70 ? "🎉 Отлично!" : "Попробуй ещё раз!"}
        </div>
      )}

      {questions.map((q, i) => {
        const wasChecked = checked[i];
        const correct = wasChecked && isCorrect(i);
        const wrong = wasChecked && !isCorrect(i);
        return (
          <div key={i} className="animate-slide-up-fade" style={{ animationDelay: `${i * 30}ms` }}>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{fieldLabel(q.field)}</span>
              <span className="text-sm sm:text-base text-muted-foreground font-medium">
                {q.verb.infinitiv} ({q.verb.translation})
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={answers[i]}
                onChange={e => setAnswers(prev => { const n = [...prev]; n[i] = e.target.value; return n; })}
                onKeyDown={e => { if (e.key === "Enter") checkSingle(i); }}
                className={`w-full bg-muted border rounded-xl px-4 py-3 text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card ${correct ? "border-case-akk bg-emerald-50" : wrong ? "border-case-dat bg-rose-50" : "border-border"}`}
                placeholder="Antwort eingeben..."
              />
              {wasChecked && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-case-akk" />
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-5 h-5 text-case-dat" />
                      <span className="text-xs font-semibold text-case-dat">{getCorrectAnswer(q)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div className="flex gap-3 pt-2">
        <Button onClick={finishQuiz} className="flex-1 py-6 text-base font-bold rounded-xl" size="lg">
          Проверить
        </Button>
        <Button variant="outline" onClick={generateQuiz} className="py-6 rounded-xl" size="lg">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

/* ─── Match Game ─── */
function MatchGame() {
  const PAIRS = 6;
  const [pairs, setPairs] = useState<IrregularVerb[]>([]);
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const startGame = useCallback(() => {
    const p = shuffle(irregularVerbs).slice(0, PAIRS);
    setPairs(p);
    setLeftItems(shuffle(p.map(v => v.infinitiv)));
    setRightItems(shuffle(p.map(v => v.perfekt)));
    setSelected(null);
    setMatched(new Set());
    setWrong(null);
    setScore(0);
  }, []);

  useEffect(() => { startGame(); }, [startGame]);

  const handleClick = (item: string, side: "left" | "right") => {
    if (matched.has(item)) return;

    if (!selected) {
      setSelected(item);
      return;
    }

    // Check if they match
    const pair = pairs.find(v =>
      (v.infinitiv === selected && v.perfekt === item) ||
      (v.perfekt === selected && v.infinitiv === item)
    );

    if (pair) {
      setMatched(prev => new Set([...prev, pair.infinitiv, pair.perfekt]));
      setScore(s => s + 1);
      setSelected(null);
    } else {
      setWrong(item);
      setTimeout(() => {
        setWrong(null);
        setSelected(null);
      }, 600);
    }
  };

  const allMatched = matched.size === PAIRS * 2;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Соедини пары</span>
        <span className="font-bold text-case-akk">{score} / {PAIRS}</span>
      </div>

      {allMatched ? (
        <div className="text-center py-12 space-y-4 animate-slide-up-fade">
          <p className="text-4xl">🎉</p>
          <p className="text-xl font-bold">Все пары найдены!</p>
          <Button onClick={startGame} className="mt-4">
            <RotateCcw className="w-4 h-4 mr-2" /> Ещё раз
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">Infinitiv</p>
            {leftItems.map(item => (
              <button
                key={item}
                onClick={() => handleClick(item, "left")}
                disabled={matched.has(item)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  matched.has(item)
                    ? "bg-case-akk/10 border-case-akk/30 text-case-akk opacity-60"
                    : selected === item
                      ? "bg-primary/10 border-primary ring-2 ring-primary/30"
                      : wrong === item
                        ? "bg-case-dat/10 border-case-dat"
                        : "bg-card border-border hover:border-primary/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-2">Perfekt</p>
            {rightItems.map(item => (
              <button
                key={item}
                onClick={() => handleClick(item, "right")}
                disabled={matched.has(item)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  matched.has(item)
                    ? "bg-case-akk/10 border-case-akk/30 text-case-akk opacity-60"
                    : selected === item
                      ? "bg-primary/10 border-primary ring-2 ring-primary/30"
                      : wrong === item
                        ? "bg-case-dat/10 border-case-dat"
                        : "bg-card border-border hover:border-primary/40"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {!allMatched && (
        <Button variant="ghost" size="sm" className="w-full" onClick={startGame}>
          <Shuffle className="w-4 h-4 mr-2" /> Новые слова
        </Button>
      )}
    </div>
  );
}

/* ─── Main Component ─── */
export function VerbTrainer() {
  const [mode, setMode] = useState<Mode>("cards");

  const modes: { id: Mode; label: string; icon: React.ReactNode }[] = [
    { id: "cards", label: "Карточки", icon: <BookOpen className="w-4 h-4" /> },
    { id: "quiz", label: "Тест", icon: <Dumbbell className="w-4 h-4" /> },
    { id: "match", label: "Соедини", icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <section className="animate-slide-up-fade">
      <h2 className="text-2xl font-bold tracking-display mb-2">
        🇩🇪 Unreg. Verben — Тренажёр
      </h2>
      <p className="text-sm text-muted-foreground mb-5">
        {irregularVerbs.length} неправильных глаголов • 3 режима
      </p>

      {/* Mode tabs */}
      <div className="flex gap-2 mb-6">
        {modes.map(m => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              mode === m.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </div>

      <div className="bg-card p-5 sm:p-8 rounded-2xl border border-border shadow-card">
        {mode === "cards" && <Flashcards />}
        {mode === "quiz" && <Quiz />}
        {mode === "match" && <MatchGame />}
      </div>
    </section>
  );
}
