import type { Example } from "@/data/lessons";

interface ExampleCardProps {
  example: Example;
  index: number;
}

export function ExampleCard({ example, index }: ExampleCardProps) {
  return (
    <div
      className="bg-card p-4 sm:p-5 rounded-xl border border-border hover:border-primary/30 transition-colors duration-200 animate-slide-up-fade"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <p
        className="text-base sm:text-lg font-medium mb-1"
        dangerouslySetInnerHTML={{ __html: example.de }}
      />
      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide font-semibold">
        {example.en}
      </p>
    </div>
  );
}
