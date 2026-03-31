import { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Shuffle, Eye, Shirt } from "lucide-react";

interface ClothingWord {
  de: string;
  ru: string;
  artikel: string;
  emoji: string;
}

const CLOTHING: ClothingWord[] = [
  { de: "Hose", ru: "штаны", artikel: "die", emoji: "👖" },
  { de: "Jeans", ru: "джинсы", artikel: "die", emoji: "👖" },
  { de: "Jogginghose", ru: "спортивные штаны", artikel: "die", emoji: "🩳" },
  { de: "Leggings", ru: "леггинсы", artikel: "die", emoji: "🩲" },
  { de: "T-Shirt", ru: "футболка", artikel: "das", emoji: "👕" },
  { de: "Hemd", ru: "рубашка", artikel: "das", emoji: "👔" },
  { de: "Kleid", ru: "платье", artikel: "das", emoji: "👗" },
  { de: "Schuhe", ru: "обувь", artikel: "die", emoji: "👟" },
  { de: "Jacke", ru: "куртка", artikel: "die", emoji: "🧥" },
  { de: "Pullover", ru: "свитер", artikel: "der", emoji: "🧶" },
  { de: "Rock", ru: "юбка", artikel: "der", emoji: "👗" },
  { de: "Mantel", ru: "пальто", artikel: "der", emoji: "🧥" },
  { de: "Mütze", ru: "шапка", artikel: "die", emoji: "🧢" },
  { de: "Schal", ru: "шарф", artikel: "der", emoji: "🧣" },
];

type Mode = "flashcard" | "quiz" | "match";

export function ClothingTrainer() {
  const [mode, setMode] = useState<Mode>("flashcard");

  return (
    <section className="animate-slide-up-fade">
      <h2 className="text-2xl font-bold tracking-display mb-5 flex items-center gap-2">
        <Shirt className="w-6 h-6 text-primary" />
        Kleidung Trainer
      </h2>

      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
        {([
          { id: "flashcard" as Mode, label: "Карточки" },
          { id: "quiz" as Mode, label: "Викторина" },
          { id: "match" as Mode, label: "Сопоставь" },
        ]).map(m => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              mode === m.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "flashcard" && <FlashcardMode />}
      {mode === "quiz" && <QuizMode />}
      {mode === "match" && <MatchMode />}
    </section>
  );
}

/* ── Flashcard ── */
function FlashcardMode() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [order, setOrder] = useState(() => CLOTHING.map((_, i) => i));

  const shuffle = useCallback(() => {
    setOrder(prev => [...prev].sort(() => Math.random() - 0.5));
    setIndex(0);
    setFlipped(false);
  }, []);

  const word = CLOTHING[order[index]];
  const progress = index + 1;

  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-muted-foreground font-medium">{progress} / {CLOTHING.length}</span>
        <Button variant="ghost" size="sm" onClick={shuffle}>
          <Shuffle className="w-4 h-4 mr-1" /> Перемешать
        </Button>
      </div>

      <button
        onClick={() => setFlipped(f => !f)}
        className="w-full min-h-[200px] bg-muted rounded-xl border-2 border-dashed border-border hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 p-6 cursor-pointer"
      >
        <span className="text-5xl">{word.emoji}</span>
        {!flipped ? (
          <>
            <span className="text-2xl font-bold">{word.artikel} {word.de}</span>
            <span className="text-sm text-muted-foreground">Нажми, чтобы увидеть перевод</span>
          </>
        ) : (
          <>
            <span className="text-2xl font-bold text-primary">{word.ru}</span>
            <span className="text-sm text-muted-foreground">{word.artikel} {word.de}</span>
          </>
        )}
      </button>

      <div className="flex gap-3 mt-4">
        <Button
          variant="outline"
          className="flex-1"
          disabled={index === 0}
          onClick={() => { setIndex(i => i - 1); setFlipped(false); }}
        >
          ← Назад
        </Button>
        <Button
          className="flex-1"
          disabled={index === CLOTHING.length - 1}
          onClick={() => { setIndex(i => i + 1); setFlipped(false); }}
        >
          Дальше →
        </Button>
      </div>
    </div>
  );
}

/* ── Quiz ── */
function QuizMode() {
  const questions = useMemo(() => {
    const shuffled = [...CLOTHING].sort(() => Math.random() - 0.5).slice(0, 10);
    return shuffled.map(word => {
      const wrongOptions = CLOTHING.filter(w => w.de !== word.de)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.ru);
      const options = [...wrongOptions, word.ru].sort(() => Math.random() - 0.5);
      return { word, options };
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === q.word.ru;
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent(c => c + 1);
        setSelected(null);
      }
    }, 1000);
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-card p-8 rounded-2xl border border-border shadow-card text-center">
        <p className="text-5xl mb-3">{percent >= 80 ? "🎉" : percent >= 50 ? "👍" : "💪"}</p>
        <p className="text-2xl font-bold mb-1">{score} / {questions.length}</p>
        <p className="text-muted-foreground mb-6">{percent}% правильно</p>
        <Button onClick={restart}>Ещё раз</Button>
      </div>
    );
  }

  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-muted-foreground font-medium">{current + 1} / {questions.length}</span>
        <span className="text-sm font-bold text-primary">{score} ✓</span>
      </div>

      <div className="text-center mb-6">
        <span className="text-4xl block mb-2">{q.word.emoji}</span>
        <p className="text-xl font-bold">{q.word.artikel} {q.word.de}</p>
        <p className="text-sm text-muted-foreground mt-1">Выбери перевод:</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {q.options.map(opt => {
          const isSelected = selected === opt;
          const isCorrect = opt === q.word.ru;
          let cls = "bg-muted hover:bg-secondary border border-border";
          if (selected) {
            if (isCorrect) cls = "bg-emerald-50 border-case-akk text-foreground";
            else if (isSelected && !isCorrect) cls = "bg-rose-50 border-case-dat text-foreground";
          }
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded-xl text-sm font-medium transition-all ${cls}`}
            >
              {opt}
              {selected && isCorrect && <CheckCircle2 className="w-4 h-4 inline ml-1 text-case-akk" />}
              {selected && isSelected && !isCorrect && <XCircle className="w-4 h-4 inline ml-1 text-case-dat" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Match ── */
function MatchMode() {
  const pairs = useMemo(() =>
    [...CLOTHING].sort(() => Math.random() - 0.5).slice(0, 6),
  []);

  const [selectedDe, setSelectedDe] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | null>(null);

  const shuffledRu = useMemo(() =>
    [...pairs].sort(() => Math.random() - 0.5),
  [pairs]);

  const handleRu = (word: ClothingWord) => {
    if (!selectedDe || matched.has(word.de)) return;
    if (selectedDe === word.de) {
      setMatched(prev => new Set([...prev, word.de]));
      setSelectedDe(null);
    } else {
      setWrong(word.de);
      setTimeout(() => { setWrong(null); setSelectedDe(null); }, 600);
    }
  };

  const allMatched = matched.size === pairs.length;

  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-card">
      <p className="text-sm text-muted-foreground mb-4 font-medium">
        Соедини слово с переводом ({matched.size}/{pairs.length})
      </p>

      {allMatched ? (
        <div className="text-center py-8">
          <p className="text-4xl mb-2">🎉</p>
          <p className="text-xl font-bold">Отлично!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            {pairs.map(w => (
              <button
                key={w.de}
                disabled={matched.has(w.de)}
                onClick={() => setSelectedDe(w.de)}
                className={`w-full p-3 rounded-xl text-sm font-medium text-left transition-all ${
                  matched.has(w.de)
                    ? "bg-emerald-50 border border-case-akk opacity-60"
                    : selectedDe === w.de
                    ? "bg-primary/10 border-2 border-primary"
                    : "bg-muted border border-border hover:border-primary/30"
                }`}
              >
                {w.emoji} {w.artikel} {w.de}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {shuffledRu.map(w => (
              <button
                key={w.de}
                disabled={matched.has(w.de)}
                onClick={() => handleRu(w)}
                className={`w-full p-3 rounded-xl text-sm font-medium text-left transition-all ${
                  matched.has(w.de)
                    ? "bg-emerald-50 border border-case-akk opacity-60"
                    : wrong === w.de
                    ? "bg-rose-50 border border-case-dat"
                    : "bg-muted border border-border hover:border-primary/30"
                }`}
              >
                {w.ru}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
