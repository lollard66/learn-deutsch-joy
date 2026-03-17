import type { GrammarBlock } from "@/data/lessons";

interface GrammarCardProps {
  block: GrammarBlock;
  index: number;
}

export function GrammarCard({ block, index }: GrammarCardProps) {
  return (
    <div
      className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-card animate-slide-up-fade"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <h3 className="text-lg sm:text-xl font-bold tracking-display mb-5 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-primary rounded-full" />
        {block.title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: block.content }} />
    </div>
  );
}
