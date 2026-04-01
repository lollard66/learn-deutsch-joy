import { useState, useCallback, useMemo } from "react";
import type { VocabWord } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw, Eye, EyeOff, CheckCircle2, XCircle } from "lucide-react";

interface VocabularyTrainerProps {
  words: VocabWord[];
}

type Mode = "cards" | "quiz";

export function VocabularyTrainer({ words }: VocabularyTrainerProps) {
  const [mode, setMode] = useState<Mode>("cards");

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-display mb-5 animate-slide-up-fade">
        Neue Wörter lernen
      </h2>
      <div className="flex gap-2 mb-4">
        <Button
          variant={mode === "cards" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("cards")}
          className="rounded-full"
        >
          Karteikarten
        </Button>
        <Button
          variant={mode === "quiz" ? "default" : "outline"}
          size="sm"
          onClick={() => setMode("quiz")}
          className="rounded-full"
        >
          Quiz
        </Button>
      </div>
      {mode === "cards" ? <FlashCards words={words} /> : <VocabQuiz words={words} />}
    </section>
  );
}

function FlashCards({ words }: { words: VocabWord[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = useCallback(() => {
    setIndex(i => (i + 1) % words.length);
    setFlipped(false);
  }, [words.length]);

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + words.length) % words.length);
    setFlipped(false);
  }, [words.length]);

  const word = words[index];

  return (
    <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden animate-slide-up-fade">
      <div
        className="min-h-[200px] flex flex-col items-center justify-center p-6 cursor-pointer select-none"
        onClick={() => setFlipped(f => !f)}
      >
        {!flipped ? (
          <>
            <p className="text-2xl sm:text-3xl font-bold mb-2">
              {word.article ? `${word.article} ${word.de}` : word.de}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Eye className="w-4 h-4" /> Klicken zum Aufdecken
            </p>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-primary mb-1">{word.en}</p>
            <p className="text-sm text-muted-foreground">{word.ru}</p>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
              <EyeOff className="w-3 h-3" /> Klicken zum Verbergen
            </p>
          </>
        )}
      </div>
      <div className="border-t border-border p-3 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={prev}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <span className="text-sm text-muted-foreground font-medium">
          {index + 1} / {words.length}
        </span>
        <Button variant="ghost" size="icon" onClick={next}>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function VocabQuiz({ words }: { words: VocabWord[] }) {
  const shuffled = useMemo(() => [...words].sort(() => Math.random() - 0.5), [words]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [done, setDone] = useState(false);

  const word = shuffled[current];

  const options = useMemo(() => {
    const correct = word.ru;
    const others = words
      .filter(w => w.ru !== correct)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.ru);
    return [...others, correct].sort(() => Math.random() - 0.5);
  }, [word, words]);

  const handleSelect = useCallback(
    (opt: string) => {
      if (selected) return;
      setSelected(opt);
      const isCorrect = opt === word.ru;
      if (isCorrect) setCorrectCount(c => c + 1);
      setTimeout(() => {
        if (current + 1 >= shuffled.length) {
          setDone(true);
        } else {
          setCurrent(c => c + 1);
          setSelected(null);
        }
      }, 1000);
    },
    [selected, word, current, shuffled.length]
  );

  const restart = useCallback(() => {
    setCurrent(0);
    setSelected(null);
    setCorrectCount(0);
    setDone(false);
  }, []);

  if (done) {
    const percent = Math.round((correctCount / shuffled.length) * 100);
    return (
      <div className="bg-card rounded-2xl border border-border shadow-card p-6 text-center animate-slide-up-fade">
        <p className="text-4xl font-bold mb-2">{percent}%</p>
        <p className="text-muted-foreground mb-4">
          {correctCount} von {shuffled.length} richtig
        </p>
        <Button onClick={restart} className="rounded-xl">
          <RotateCcw className="w-4 h-4 mr-2" /> Nochmal
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border shadow-card p-5 sm:p-6 animate-slide-up-fade">
      <p className="text-xs text-muted-foreground mb-1">
        {current + 1} / {shuffled.length}
      </p>
      <p className="text-xl sm:text-2xl font-bold mb-5">
        {word.article ? `${word.article} ${word.de}` : word.de}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => {
          const isCorrect = opt === word.ru;
          const isSelected = opt === selected;
          let cls = "border-border hover:border-primary/40";
          if (selected) {
            if (isCorrect) cls = "border-case-akk bg-emerald-50";
            else if (isSelected) cls = "border-case-dat bg-rose-50";
          }
          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded-xl border text-sm font-medium text-left transition-all ${cls}`}
            >
              <span className="flex items-center justify-between">
                {opt}
                {selected && isCorrect && <CheckCircle2 className="w-4 h-4 text-case-akk" />}
                {selected && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-case-dat" />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
