import { useState, useCallback, useMemo } from "react";
import { lessons } from "@/data/lessons";
import { GrammarCard } from "@/components/GrammarCard";
import { ExampleCard } from "@/components/ExampleCard";
import { TestSection } from "@/components/TestSection";
import { ScoreToast } from "@/components/ScoreToast";
import { AdjektivDeklination } from "@/components/AdjektivDeklination";
import { VerbTrainer } from "@/components/VerbTrainer";
import { ClothingTrainer } from "@/components/ClothingTrainer";
import { VocabularyTrainer } from "@/components/VocabularyTrainer";
import { WeeklyReview } from "@/components/WeeklyReview";
import { BookOpen } from "lucide-react";

export default function Index() {
  const [activeId, setActiveId] = useState(lessons[0].id);
  const [score, setScore] = useState<number | null>(null);
  const [contentKey, setContentKey] = useState(0);

  const lesson = lessons.find(l => l.id === activeId)!;

  const switchLesson = useCallback((id: string) => {
    setActiveId(id);
    setScore(null);
    setContentKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold tracking-display text-lg sm:text-xl">
              Linguist<span className="text-primary">Pro</span>
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            {lessons.map(l => (
              <button
                key={l.id}
                onClick={() => switchLesson(l.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeId === l.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                {l.date}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-20">
        {/* Header */}
        <header className="mb-10 sm:mb-12 animate-slide-up-fade" key={`header-${contentKey}`}>
          <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Level A2 • Grammatik
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-display mb-3">
            {lesson.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">{lesson.subtitle}</p>
        </header>

        <div key={`content-${contentKey}`} className="space-y-16">
          {/* Grammar */}
          <section>
            <div className="space-y-5">
              {lesson.grammar.map((block, i) => (
                <GrammarCard key={i} block={block} index={i} />
              ))}
            </div>
          </section>

          {/* Adjektivdeklination for l23 */}
          {lesson.id === "l23" && <AdjektivDeklination />}

          {/* Verb Trainer for l24 */}
          {lesson.id === "l24" && <VerbTrainer />}

          {/* Clothing Trainer for l31 */}
          {lesson.id === "l31" && <ClothingTrainer />}

          {/* Examples */}
          <section>
            <h2 className="text-2xl font-bold tracking-display mb-5 animate-slide-up-fade">
              Beispiele
            </h2>
            <div className="space-y-3">
              {lesson.examples.map((ex, i) => (
                <ExampleCard key={i} example={ex} index={i} />
              ))}
            </div>
          </section>

          {/* Test */}
          <section>
            <h2 className="text-2xl font-bold tracking-display mb-5 animate-slide-up-fade">
              Interaktiver Test
            </h2>
            <TestSection
              questions={lesson.test}
              onComplete={setScore}
            />
          </section>
        </div>
      </main>

      <ScoreToast percent={score} onClose={() => setScore(null)} />
    </div>
  );
}
