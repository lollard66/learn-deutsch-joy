import { useEffect, useRef } from "react";

interface ScoreToastProps {
  percent: number | null;
  onClose: () => void;
}

export function ScoreToast({ percent, onClose }: ScoreToastProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (percent !== null && barRef.current) {
      barRef.current.style.width = `${percent}%`;
    }
  }, [percent]);

  if (percent === null) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="bg-foreground text-card p-6 rounded-2xl shadow-elevated w-full max-w-md pointer-events-auto animate-slide-up-fade">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Lektion abgeschlossen!</h3>
          <span className="text-2xl font-bold text-primary">{percent}%</span>
        </div>
        <div className="w-full bg-muted/20 h-2 rounded-full mb-6 overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-primary rounded-full transition-all duration-700"
            style={{ width: 0, transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)" }}
          />
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 bg-card text-foreground rounded-xl font-bold hover:bg-muted transition-colors"
        >
          Weiter
        </button>
      </div>
    </div>
  );
}
