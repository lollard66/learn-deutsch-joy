export interface Example {
  de: string; // can contain HTML spans with case-nom/akk/dat classes
  en: string;
}

export interface TestQuestion {
  sentence: string; // with ___ placeholder
  answer: string;
}

export interface GrammarBlock {
  title: string;
  content: string; // HTML string
}

export interface Lesson {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  grammar: GrammarBlock[];
  examples: Example[];
  test: TestQuestion[];
}

export const lessons: Lesson[] = [
  {
    id: "l13",
    date: "13. März",
    title: "Dativ & Akkusativ",
    subtitle: "Die Logik des Gebens und Empfangens in deutschen Sätzen.",
    grammar: [
      {
        title: "Die Satzstruktur",
        content: `<p class="mb-4">Im Deutschen folgt der Satz einer klaren Informationslogik:</p>
<div class="flex flex-wrap items-center gap-3 text-base sm:text-lg font-medium p-4 sm:p-6 bg-muted rounded-xl border border-dashed border-border">
  <span class="case-nom underline decoration-2 underline-offset-4">Subjekt (Wer?)</span>
  <span class="text-muted-foreground">→</span>
  <span class="case-verb">Verb</span>
  <span class="text-muted-foreground">→</span>
  <span class="case-dat underline decoration-2 underline-offset-4">Dativ (Wem?)</span>
  <span class="text-muted-foreground">→</span>
  <span class="case-akk underline decoration-2 underline-offset-4">Akkusativ (Was?)</span>
</div>
<p class="mt-4 text-muted-foreground leading-relaxed">Die <span class="case-dat">Person (Dativ)</span> kommt vor der <span class="case-akk">Sache (Akkusativ)</span>. Das ist die goldene Regel der deutschen Informationslogik.</p>`,
      },
      {
        title: "Artikeltabelle",
        content: `<div class="overflow-x-auto">
<table class="w-full text-sm">
  <thead>
    <tr class="border-b border-border">
      <th class="py-3 px-4 text-left font-semibold text-muted-foreground">Genus</th>
      <th class="py-3 px-4 text-left font-semibold case-nom">Nominativ</th>
      <th class="py-3 px-4 text-left font-semibold case-akk">Akkusativ</th>
      <th class="py-3 px-4 text-left font-semibold case-dat">Dativ</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Maskulin</td><td class="py-3 px-4 case-nom">der / ein</td><td class="py-3 px-4 case-akk">den / einen</td><td class="py-3 px-4 case-dat">dem / einem</td></tr>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Feminin</td><td class="py-3 px-4 case-nom">die / eine</td><td class="py-3 px-4 case-akk">die / eine</td><td class="py-3 px-4 case-dat">der / einer</td></tr>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Neutral</td><td class="py-3 px-4 case-nom">das / ein</td><td class="py-3 px-4 case-akk">das / ein</td><td class="py-3 px-4 case-dat">dem / einem</td></tr>
    <tr><td class="py-3 px-4 font-medium">Plural</td><td class="py-3 px-4 case-nom">die</td><td class="py-3 px-4 case-akk">die</td><td class="py-3 px-4 case-dat">den + n</td></tr>
  </tbody>
</table>
</div>`,
      },
      {
        title: "Wichtige Dativ-Verben",
        content: `<p class="mb-3 text-muted-foreground">Diese Verben verlangen <span class="case-dat">immer Dativ</span>:</p>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">helfen</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">danken</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">gehören</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">gefallen</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">glauben</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">folgen</span>
</div>`,
      },
    ],
    examples: [
      { de: "<span class='case-nom'>Ich</span> <span class='case-verb'>gebe</span> <span class='case-dat'>dem Mann</span> <span class='case-akk'>das Buch</span>.", en: "I give the man the book." },
      { de: "<span class='case-nom'>Sie</span> <span class='case-verb'>zeigt</span> <span class='case-dat'>dem Kind</span> <span class='case-akk'>den Weg</span>.", en: "She shows the child the way." },
      { de: "<span class='case-nom'>Wir</span> <span class='case-verb'>schicken</span> <span class='case-dat'>dem Freund</span> <span class='case-akk'>eine Nachricht</span>.", en: "We send the friend a message." },
      { de: "<span class='case-nom'>Der Lehrer</span> <span class='case-verb'>erklärt</span> <span class='case-dat'>dem Schüler</span> <span class='case-akk'>die Aufgabe</span>.", en: "The teacher explains the task to the student." },
      { de: "<span class='case-nom'>Ich</span> <span class='case-verb'>bringe</span> <span class='case-dat'>dem Kollegen</span> <span class='case-akk'>Kaffee</span>.", en: "I bring the colleague coffee." },
    ],
    test: [
      { sentence: "Ich gebe ___ Mann das Buch.", answer: "dem" },
      { sentence: "Ich sehe ___ Hund.", answer: "den" },
      { sentence: "Ich helfe ___ Kind.", answer: "dem" },
      { sentence: "Ich habe ___ Auto.", answer: "ein" },
      { sentence: "Ich sehe ___ Frau.", answer: "die" },
      { sentence: "Ich gebe ___ Freund Geld.", answer: "dem" },
      { sentence: "Ich kaufe ___ Brot.", answer: "das" },
      { sentence: "Ich sehe ___ Tisch.", answer: "den" },
      { sentence: "Ich schreibe ___ Mutter.", answer: "der" },
      { sentence: "Ich frage ___ Lehrer.", answer: "den" },
      { sentence: "Ich sehe ___ Film.", answer: "den" },
      { sentence: "Ich habe ___ Apfel.", answer: "einen" },
      { sentence: "Ich helfe ___ Mann.", answer: "dem" },
      { sentence: "Ich besuche ___ Arzt.", answer: "den" },
      { sentence: "Ich liebe ___ Frau.", answer: "die" },
      { sentence: "Ich sehe ___ Haus.", answer: "das" },
      { sentence: "Ich kaufe ___ Auto.", answer: "das" },
      { sentence: "Ich gebe ___ Kind Spielzeug.", answer: "dem" },
      { sentence: "Ich sehe ___ Spiegel.", answer: "den" },
      { sentence: "Ich habe ___ Buch.", answer: "ein" },
    ],
  },
  {
    id: "l16",
    date: "16. März",
    title: "Höfliche Fragen",
    subtitle: "Modalverben nutzen, um respektvoll zu kommunizieren.",
    grammar: [
      {
        title: "Modalverben & Etikette",
        content: `<p class="mb-4 text-muted-foreground">Modalverben machen Fragen höflicher. Sie reduzieren den Druck und zeigen Respekt.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
    <span class="block font-bold text-case-nom mb-1">können</span>
    <span class="text-sm text-muted-foreground italic">Möglichkeit / Fähigkeit</span>
    <p class="mt-2 text-sm">Können Sie mir helfen?</p>
  </div>
  <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
    <span class="block font-bold text-case-akk mb-1">dürfen</span>
    <span class="text-sm text-muted-foreground italic">Erlaubnis / Höflichkeit</span>
    <p class="mt-2 text-sm">Darf ich Sie etwas fragen?</p>
  </div>
</div>`,
      },
      {
        title: "W-Fragen",
        content: `<p class="mb-3 text-muted-foreground">W-Fragen beginnen mit einem Fragewort:</p>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Wo?</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Wann?</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Was?</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Wie?</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Wer?</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">Warum?</span>
</div>
<p class="mt-4 text-muted-foreground">Struktur: <span class="font-semibold">W-Wort + Verb + Subjekt + ...</span></p>`,
      },
      {
        title: "Konjunktiv II für mehr Höflichkeit",
        content: `<p class="mb-3 text-muted-foreground">Der Konjunktiv II macht Bitten noch höflicher:</p>
<div class="space-y-2">
  <div class="flex items-center gap-3 p-3 bg-muted rounded-lg"><span class="font-medium w-28">können</span><span class="text-muted-foreground">→</span><span class="case-verb">könnten</span></div>
  <div class="flex items-center gap-3 p-3 bg-muted rounded-lg"><span class="font-medium w-28">dürfen</span><span class="text-muted-foreground">→</span><span class="case-verb">dürften</span></div>
  <div class="flex items-center gap-3 p-3 bg-muted rounded-lg"><span class="font-medium w-28">haben</span><span class="text-muted-foreground">→</span><span class="case-verb">hätten</span></div>
</div>`,
      },
    ],
    examples: [
      { de: "<span class='case-verb'>Können</span> Sie mir bitte <span class='case-verb'>helfen</span>?", en: "Can you please help me?" },
      { de: "<span class='case-verb'>Darf</span> ich Sie etwas <span class='case-verb'>fragen</span>?", en: "May I ask you something?" },
      { de: "<span class='case-verb'>Könnten</span> Sie mir den Weg <span class='case-verb'>erklären</span>?", en: "Could you explain the way to me?" },
      { de: "Entschuldigung, <span class='case-verb'>wo ist</span> der Bahnhof?", en: "Excuse me, where is the train station?" },
      { de: "<span class='case-verb'>Was kostet</span> das, bitte?", en: "How much does that cost, please?" },
    ],
    test: [
      { sentence: "___ Sie mir helfen?", answer: "können" },
      { sentence: "___ ich fragen?", answer: "darf" },
      { sentence: "Wo ___ der Bahnhof?", answer: "ist" },
      { sentence: "Wann ___ der Bus?", answer: "fährt" },
      { sentence: "Was ___ das?", answer: "kostet" },
      { sentence: "___ Sie Deutsch sprechen?", answer: "können" },
      { sentence: "___ ich hier sitzen?", answer: "darf" },
      { sentence: "Wann ___ der Zug?", answer: "kommt" },
      { sentence: "Wo ___ das Hotel?", answer: "ist" },
      { sentence: "___ Sie mir sagen?", answer: "können" },
      { sentence: "___ ich bezahlen?", answer: "darf" },
      { sentence: "Wo ___ die Toilette?", answer: "ist" },
      { sentence: "Wann ___ das Geschäft?", answer: "öffnet" },
      { sentence: "Was ___ das?", answer: "kostet" },
      { sentence: "___ Sie helfen?", answer: "können" },
      { sentence: "___ ich fragen?", answer: "darf" },
      { sentence: "Wo ___ der Bus?", answer: "ist" },
      { sentence: "Wann ___ der Zug?", answer: "fährt" },
      { sentence: "Was ___ das?", answer: "kostet" },
      { sentence: "___ Sie helfen?", answer: "können" },
    ],
  },
  {
    id: "l17",
    date: "17. März",
    title: "bringen / mitbringen / nehmen",
    subtitle: "Bewegung und Richtung präzise beschreiben.",
    grammar: [
      {
        title: "Verben der Bewegung",
        content: `<p class="mb-4 text-muted-foreground">Deutsch beschreibt Bewegung und Richtung sehr genau. Jedes Verb hat eine spezifische Bedeutung:</p>
<div class="space-y-3">
  <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
    <span class="block font-bold text-case-nom mb-1">bringen</span>
    <span class="text-sm text-muted-foreground">Bewegung <strong>zu</strong> einer Person. Du trägst etwas dorthin.</span>
    <p class="mt-2 text-sm font-medium">Ich bringe dir Kaffee. ☕→👤</p>
  </div>
  <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
    <span class="block font-bold text-case-akk mb-1">mitbringen</span>
    <span class="text-sm text-muted-foreground">Etwas <strong>mitnehmen</strong>, wenn man irgendwohin geht.</span>
    <p class="mt-2 text-sm font-medium">Ich bringe Getränke mit. 🧃+👤→🏠</p>
  </div>
  <div class="p-4 bg-rose-50 rounded-xl border border-rose-100">
    <span class="block font-bold text-case-dat mb-1">nehmen</span>
    <span class="text-sm text-muted-foreground">Aktiv etwas <strong>nehmen</strong> / ergreifen.</span>
    <p class="mt-2 text-sm font-medium">Ich nehme den Tisch. 👤→🪑</p>
  </div>
</div>`,
      },
      {
        title: "Umzug & Wohnung",
        content: `<p class="mb-3 text-muted-foreground">Wichtige Verben und Vokabeln zum Thema Umziehen:</p>
<div class="grid grid-cols-2 gap-2">
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">umziehen</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">einziehen</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">ausziehen</span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center font-medium">einrichten</span>
</div>
<div class="mt-4 p-4 bg-muted rounded-xl">
  <p class="text-sm"><span class="font-semibold">Ich ziehe nach Wien.</span> → Ich bewege mich nach Wien.</p>
  <p class="text-sm mt-1"><span class="font-semibold">Ich bin umgezogen.</span> → Der Umzug ist abgeschlossen (Perfekt).</p>
</div>`,
      },
      {
        title: "Möbel-Vokabeln",
        content: `<div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Tisch</strong><br><span class="text-muted-foreground">table</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Stuhl</strong><br><span class="text-muted-foreground">chair</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>das Sofa</strong><br><span class="text-muted-foreground">sofa</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>das Bett</strong><br><span class="text-muted-foreground">bed</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>die Lampe</strong><br><span class="text-muted-foreground">lamp</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Schrank</strong><br><span class="text-muted-foreground">wardrobe</span></span>
</div>`,
      },
    ],
    examples: [
      { de: "Ich <span class='case-verb'>bringe</span> dir <span class='case-akk'>Kaffee</span>.", en: "I bring you coffee." },
      { de: "Ich <span class='case-verb'>bringe</span> <span class='case-akk'>Getränke</span> <span class='case-verb'>mit</span>.", en: "I'm bringing drinks along." },
      { de: "Ich <span class='case-verb'>nehme</span> <span class='case-akk'>den Tisch</span>.", en: "I'm taking the table." },
      { de: "Ich <span class='case-verb'>ziehe</span> nach Wien.", en: "I'm moving to Vienna." },
      { de: "Ich bin <span class='case-verb'>umgezogen</span>.", en: "I've moved." },
    ],
    test: [
      { sentence: "Ich bringe ___ Kaffee.", answer: "den" },
      { sentence: "Ich bringe Getränke ___.", answer: "mit" },
      { sentence: "Ich nehme ___ Tisch.", answer: "den" },
      { sentence: "Ich bin nach Wien ___.", answer: "gezogen" },
      { sentence: "Ich sehe ___ Sofa.", answer: "ein" },
      { sentence: "Ich kaufe ___ Bett.", answer: "ein" },
      { sentence: "Ich bringe ___ Lampe.", answer: "die" },
      { sentence: "Ich nehme ___ Stuhl.", answer: "den" },
      { sentence: "Ich sehe ___ Kühlschrank.", answer: "den" },
      { sentence: "Ich habe ___ Möbel.", answer: "die" },
      { sentence: "Ich kaufe ___ Tisch.", answer: "den" },
      { sentence: "Ich bringe ___ Sofa.", answer: "das" },
      { sentence: "Ich sehe ___ Bett.", answer: "das" },
      { sentence: "Ich nehme ___ Lampe.", answer: "die" },
      { sentence: "Ich habe ___ Zimmer.", answer: "ein" },
      { sentence: "Ich kaufe ___ Haus.", answer: "ein" },
      { sentence: "Ich sehe ___ Spiegel.", answer: "den" },
      { sentence: "Ich nehme ___ Schrank.", answer: "den" },
      { sentence: "Ich bringe ___ Möbel.", answer: "die" },
      { sentence: "Ich habe ___ Sofa.", answer: "ein" },
    ],
  },
];
