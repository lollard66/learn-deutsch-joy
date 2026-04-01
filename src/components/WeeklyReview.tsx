import { useState, useCallback, useMemo } from "react";
import type { VocabWord } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

interface WeeklyReviewProps {
  words: VocabWord[];
  weekLabel: string;
}

export function WeeklyReview({ words, weekLabel }: WeeklyReviewProps) {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <section>
        <h2 className="text-2xl font-bold tracking-display mb-5 animate-slide-up-fade flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" />
          Wochenwiederholung
        </h2>
        <div className="bg-card rounded-2xl border border-border shadow-card p-6 text-center animate-slide-up-fade">
          <p className="text-lg font-semibold mb-2">{weekLabel}</p>
          <p className="text-muted-foreground mb-4">
            {words.length} Wörter aus dieser Woche
          </p>
          <Button onClick={() => setStarted(true)} className="rounded-xl" size="lg">
            Prüfung starten
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-display mb-5 animate-slide-up-fade flex items-center gap-2">
        <Trophy className="w-6 h-6 text-primary" />
        Wochenwiederholung
      </h2>
      <ReviewQuiz words={words} onRestart={() => setStarted(false)} />
    </section>
  );
}

function ReviewQuiz({ words, onRestart }: { words: VocabWord[]; onRestart: () => void }) {
  const shuffled = useMemo(() => [...words].sort(() => Math.random() - 0.5), [words]);
  const [answers, setAnswers] = useState<string[]>(() => Array(shuffled.length).fill(""));
  const [checked, setChecked] = useState(false);

  const updateAnswer = useCallback((i: number, val: string) => {
    setAnswers(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }, []);

  const isCorrect = (i: number) => {
    const ans = answers[i].trim().toLowerCase();
    const word = shuffled[i];
    // Accept de word with or without article
    const acceptable = [
      word.de.toLowerCase(),
      word.article ? `${word.article} ${word.de}`.toLowerCase() : null,
    ].filter(Boolean) as string[];
    return acceptable.includes(ans);
  };

  const handleCheck = () => setChecked(true);

  const correctCount = checked ? shuffled.filter((_, i) => isCorrect(i)).length : 0;
  const percent = checked ? Math.round((correctCount / shuffled.length) * 100) : 0;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-card p-5 sm:p-8 space-y-4 animate-slide-up-fade">
      {checked && (
        <div className="text-center py-4 mb-2">
          <p className="text-4xl font-bold mb-1">{percent}%</p>
          <p className="text-muted-foreground">
            {correctCount} von {shuffled.length} richtig
          </p>
        </div>
      )}
      {shuffled.map((word, i) => {
        const correct = checked && isCorrect(i);
        const wrong = checked && !isCorrect(i);
        return (
          <div key={i} className="animate-slide-up-fade" style={{ animationDelay: `${i * 20}ms` }}>
            <label className="text-sm text-muted-foreground font-medium block mb-1">
              {i + 1}. {word.ru} → auf Deutsch?
            </label>
            <div className="relative">
              <input
                type="text"
                value={answers[i]}
                onChange={e => updateAnswer(i, e.target.value)}
                disabled={checked}
                className={`w-full bg-muted border rounded-xl px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card ${
                  correct ? "border-case-akk bg-emerald-50" : wrong ? "border-case-dat bg-rose-50" : "border-border"
                }`}
                placeholder="Antwort..."
              />
              {checked && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-case-akk" />
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-5 h-5 text-case-dat" />
                      <span className="text-xs font-semibold text-case-dat">
                        {word.article ? `${word.article} ${word.de}` : word.de}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
      {!checked ? (
        <Button onClick={handleCheck} className="w-full mt-4 py-6 text-base font-bold rounded-xl" size="lg">
          Ergebnis prüfen
        </Button>
      ) : (
        <Button onClick={onRestart} variant="outline" className="w-full mt-4 py-6 text-base font-bold rounded-xl" size="lg">
          <RotateCcw className="w-4 h-4 mr-2" /> Nochmal versuchen
        </Button>
      )}
    </div>
  );
}
