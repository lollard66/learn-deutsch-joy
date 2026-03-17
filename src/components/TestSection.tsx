import { useState, useCallback } from "react";
import type { TestQuestion } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface TestSectionProps {
  questions: TestQuestion[];
  onComplete: (percent: number) => void;
}

export function TestSection({ questions, onComplete }: TestSectionProps) {
  const [answers, setAnswers] = useState<string[]>(() => Array(questions.length).fill(""));
  const [checked, setChecked] = useState<boolean[]>(() => Array(questions.length).fill(false));

  const updateAnswer = useCallback((i: number, val: string) => {
    setAnswers(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }, []);

  const checkSingle = useCallback((i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  }, []);

  const isCorrect = (i: number) => answers[i].trim().toLowerCase() === questions[i].answer.toLowerCase();

  const finishTest = () => {
    // Check all
    setChecked(Array(questions.length).fill(true));
    const correct = questions.filter((q, i) => answers[i].trim().toLowerCase() === q.answer.toLowerCase()).length;
    onComplete(Math.round((correct / questions.length) * 100));
  };

  return (
    <div className="bg-card p-5 sm:p-8 rounded-2xl border border-border shadow-card space-y-4">
      {questions.map((q, i) => {
        const wasChecked = checked[i];
        const correct = wasChecked && isCorrect(i);
        const wrong = wasChecked && !isCorrect(i);

        return (
          <div
            key={i}
            className="animate-slide-up-fade"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <label className="text-sm sm:text-base text-muted-foreground font-medium block mb-1.5">
              {i + 1}. {q.sentence}
            </label>
            <div className="relative">
              <input
                type="text"
                value={answers[i]}
                onChange={e => updateAnswer(i, e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") checkSingle(i);
                }}
                className={`w-full bg-muted border rounded-xl px-4 py-3 text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card ${
                  correct ? "border-case-akk bg-emerald-50" : wrong ? "border-case-dat bg-rose-50" : "border-border"
                }`}
                placeholder="Antwort eingeben..."
              />
              {wasChecked && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  {correct ? (
                    <CheckCircle2 className="w-5 h-5 text-case-akk" />
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-5 h-5 text-case-dat" />
                      <span className="text-xs font-semibold text-case-dat">{q.answer}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}

      <Button
        onClick={finishTest}
        className="w-full mt-6 py-6 text-base font-bold rounded-xl"
        size="lg"
      >
        Test auswerten
      </Button>
    </div>
  );
}
