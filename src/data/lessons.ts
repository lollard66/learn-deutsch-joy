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
  {
    id: "l18",
    date: "18. März",
    title: "Wo? & Wohin? — Wechselpräpositionen",
    subtitle: "Position und Bewegung mit Dativ und Akkusativ beschreiben.",
    grammar: [
      {
        title: "Die Hauptregel: Wo? vs. Wohin?",
        content: `<p class="mb-4 text-muted-foreground">Das ist die wichtigste Regel des heutigen Unterrichts:</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  <div class="p-5 bg-rose-50 rounded-xl border border-rose-200">
    <span class="block text-2xl font-bold case-dat mb-2">Wo?</span>
    <span class="text-sm text-muted-foreground">= Где? (Position, kein Bewegung)</span>
    <div class="mt-3 p-3 bg-white rounded-lg border border-rose-100">
      <p class="font-semibold text-sm">Präposition + <span class="case-dat">Dativ</span></p>
      <p class="text-xs text-muted-foreground mt-1">Das Buch liegt <span class="case-dat">auf dem Tisch</span>.</p>
    </div>
  </div>
  <div class="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
    <span class="block text-2xl font-bold case-akk mb-2">Wohin?</span>
    <span class="text-sm text-muted-foreground">= Куда? (Bewegung, Richtung)</span>
    <div class="mt-3 p-3 bg-white rounded-lg border border-emerald-100">
      <p class="font-semibold text-sm">Präposition + <span class="case-akk">Akkusativ</span></p>
      <p class="text-xs text-muted-foreground mt-1">Ich lege das Buch <span class="case-akk">auf den Tisch</span>.</p>
    </div>
  </div>
</div>
<p class="text-muted-foreground text-sm">📌 Keine Bewegung → <span class="case-dat">Dativ</span> &nbsp;|&nbsp; Bewegung → <span class="case-akk">Akkusativ</span></p>`,
      },
      {
        title: "Wechselpräpositionen (9 Präpositionen)",
        content: `<p class="mb-3 text-muted-foreground">Diese Präpositionen können mit <span class="case-dat">Dativ</span> oder <span class="case-akk">Akkusativ</span> stehen:</p>
<div class="grid grid-cols-3 gap-2">
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>auf</strong><br><span class="text-muted-foreground">на</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>unter</strong><br><span class="text-muted-foreground">под</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>vor</strong><br><span class="text-muted-foreground">перед</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>hinter</strong><br><span class="text-muted-foreground">за</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>neben</strong><br><span class="text-muted-foreground">рядом</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>zwischen</strong><br><span class="text-muted-foreground">между</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>über</strong><br><span class="text-muted-foreground">над</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>in</strong><br><span class="text-muted-foreground">в</span></span>
  <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>an</strong><br><span class="text-muted-foreground">у / на</span></span>
</div>
<div class="mt-4 p-3 bg-muted rounded-lg text-sm">
  <p class="font-semibold mb-1">Wichtige Kurzformen:</p>
  <p>in + dem = <strong>im</strong> &nbsp;|&nbsp; an + dem = <strong>am</strong> &nbsp;|&nbsp; in + das = <strong>ins</strong> &nbsp;|&nbsp; an + das = <strong>ans</strong></p>
</div>`,
      },
      {
        title: "Verben der Position",
        content: `<p class="mb-4 text-muted-foreground">Welches Verb passt? Das hängt von der Position ab:</p>
<div class="space-y-3">
  <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
    <span class="block font-bold case-nom mb-1">liegen</span>
    <span class="text-sm text-muted-foreground">= лежать (horizontal)</span>
    <p class="mt-2 text-sm">Das Buch <strong>liegt</strong> auf dem Tisch. 📖</p>
  </div>
  <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
    <span class="block font-bold case-akk mb-1">stehen</span>
    <span class="text-sm text-muted-foreground">= стоять (vertikal)</span>
    <p class="mt-2 text-sm">Der Tisch <strong>steht</strong> vor dem Sofa. 🪑</p>
  </div>
  <div class="p-4 bg-amber-50 rounded-xl border border-amber-100">
    <span class="block font-bold mb-1" style="color: hsl(35, 80%, 45%)">hängen</span>
    <span class="text-sm text-muted-foreground">= висеть (an der Wand / von oben)</span>
    <p class="mt-2 text-sm">Die Lampe <strong>hängt</strong> über dem Tisch. 💡</p>
  </div>
  <div class="p-4 bg-rose-50 rounded-xl border border-rose-100">
    <span class="block font-bold case-dat mb-1">sitzen</span>
    <span class="text-sm text-muted-foreground">= сидеть (Menschen & Tiere)</span>
    <p class="mt-2 text-sm">Die Katze <strong>sitzt</strong> auf dem Sofa. 🐱</p>
  </div>
</div>`,
      },
      {
        title: "Dativ-Artikel mit Präpositionen",
        content: `<div class="overflow-x-auto">
<table class="w-full text-sm">
  <thead>
    <tr class="border-b border-border">
      <th class="py-3 px-4 text-left font-semibold text-muted-foreground">Genus</th>
      <th class="py-3 px-4 text-left font-semibold case-nom">Nominativ</th>
      <th class="py-3 px-4 text-left font-semibold case-dat">Dativ (Wo?)</th>
      <th class="py-3 px-4 text-left font-semibold case-akk">Akkusativ (Wohin?)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Maskulin</td><td class="py-3 px-4 case-nom">der</td><td class="py-3 px-4 case-dat">dem</td><td class="py-3 px-4 case-akk">den</td></tr>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Feminin</td><td class="py-3 px-4 case-nom">die</td><td class="py-3 px-4 case-dat">der</td><td class="py-3 px-4 case-akk">die</td></tr>
    <tr class="border-b border-border/50"><td class="py-3 px-4 font-medium">Neutral</td><td class="py-3 px-4 case-nom">das</td><td class="py-3 px-4 case-dat">dem</td><td class="py-3 px-4 case-akk">das</td></tr>
    <tr><td class="py-3 px-4 font-medium">Plural</td><td class="py-3 px-4 case-nom">die</td><td class="py-3 px-4 case-dat">den (+n)</td><td class="py-3 px-4 case-akk">die</td></tr>
  </tbody>
</table>
</div>`,
      },
      {
        title: "Möbel & Zimmer — Wortschatz",
        content: `<div class="space-y-3">
  <p class="font-semibold text-sm text-muted-foreground">🛋 Wohnzimmer</p>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>das Sofa</strong><br><span class="text-muted-foreground">диван</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Sessel</strong><br><span class="text-muted-foreground">кресло</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>das Regal</strong><br><span class="text-muted-foreground">полка</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Teppich</strong><br><span class="text-muted-foreground">ковёр</span></span>
  </div>
  <p class="font-semibold text-sm text-muted-foreground mt-3">🍳 Küche</p>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Herd</strong><br><span class="text-muted-foreground">плита</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Kühlschrank</strong><br><span class="text-muted-foreground">холодильник</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>die Mikrowelle</strong><br><span class="text-muted-foreground">микроволновка</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Geschirrspüler</strong><br><span class="text-muted-foreground">посудомойка</span></span>
  </div>
  <p class="font-semibold text-sm text-muted-foreground mt-3">🛏 Schlafzimmer</p>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>das Bett</strong><br><span class="text-muted-foreground">кровать</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Kasten</strong><br><span class="text-muted-foreground">шкаф</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Spiegel</strong><br><span class="text-muted-foreground">зеркало</span></span>
    <span class="px-3 py-2 bg-muted rounded-lg text-center text-sm"><strong>der Polster</strong><br><span class="text-muted-foreground">подушка</span></span>
  </div>
</div>`,
      },
    ],
    examples: [
      { de: "Die Katze <span class='case-verb'>sitzt</span> <span class='case-dat'>auf dem Sofa</span>.", en: "Кошка сидит на диване." },
      { de: "Das Buch <span class='case-verb'>liegt</span> <span class='case-dat'>auf dem Tisch</span>.", en: "Книга лежит на столе." },
      { de: "Die Lampe <span class='case-verb'>hängt</span> <span class='case-dat'>über dem Tisch</span>.", en: "Лампа висит над столом." },
      { de: "Der Kasten <span class='case-verb'>steht</span> <span class='case-dat'>an der Wand</span>.", en: "Шкаф стоит у стены." },
      { de: "Minka <span class='case-verb'>liegt</span> <span class='case-dat'>zwischen den Kartons</span>.", en: "Минка лежит между коробками." },
      { de: "Ich <span class='case-verb'>lege</span> das Buch <span class='case-akk'>auf den Tisch</span>.", en: "Я кладу книгу на стол." },
      { de: "Ich <span class='case-verb'>stelle</span> den Kasten <span class='case-akk'>an die Wand</span>.", en: "Я ставлю шкаф к стене." },
      { de: "Ich <span class='case-verb'>hänge</span> die Lampe <span class='case-akk'>über den Tisch</span>.", en: "Я вешаю лампу над столом." },
    ],
    test: [
      { sentence: "Das Buch liegt auf ___ Tisch. (Wo?)", answer: "dem" },
      { sentence: "Ich lege das Buch auf ___ Tisch. (Wohin?)", answer: "den" },
      { sentence: "Die Lampe hängt über ___ Tisch. (Wo?)", answer: "dem" },
      { sentence: "Ich hänge die Lampe über ___ Tisch. (Wohin?)", answer: "den" },
      { sentence: "Der Kasten steht an ___ Wand. (Wo?)", answer: "der" },
      { sentence: "Ich stelle den Kasten an ___ Wand. (Wohin?)", answer: "die" },
      { sentence: "Die Katze sitzt auf ___ Sofa. (Wo?)", answer: "dem" },
      { sentence: "Die Bücher stehen ___ Kasten. (Wo? / in+dem)", answer: "im" },
      { sentence: "Minka liegt zwischen ___ Kartons. (Wo?)", answer: "den" },
      { sentence: "Das Bild hängt an ___ Wand. (Wo?)", answer: "der" },
      { sentence: "Der Teppich ___ vor dem Fenster. (liegen)", answer: "liegt" },
      { sentence: "Der Tisch ___ auf dem Teppich. (stehen)", answer: "steht" },
      { sentence: "Die Lampe ___ über dem Tisch. (hängen)", answer: "hängt" },
      { sentence: "Die Katze ___ auf dem Bett. (sitzen)", answer: "sitzt" },
      { sentence: "Ich lege die Katze in ___ Karton. (Wohin?)", answer: "den" },
      { sentence: "Die Pflanze steht hinter ___ Sessel. (Wo?)", answer: "dem" },
      { sentence: "Der Fernseher hängt ___ Fenster. (an+dem)", answer: "am" },
      { sentence: "Die Hose hängt an ___ Tür. (Wo?)", answer: "der" },
      { sentence: "Ich stelle den Tisch vor ___ Sofa. (Wohin?)", answer: "das" },
      { sentence: "Die Puppe ___ auf dem Bett. (sitzen)", answer: "sitzt" },
    ],
  },
  {
    id: "l19",
    date: "19. März",
    title: "Stellen, Legen, Hängen",
    subtitle: "Глаголы перемещения, описание квартиры и Perfekt с предлогами места",
    grammar: [
      {
        title: "Wohin? → Akkusativ (движение)",
        content: `
          <p class="mb-3">Когда мы говорим <strong>куда</strong> ставим / кладём / вешаем предмет — используем <span class="text-case-akk font-bold">Akkusativ</span>.</p>
          <table class="w-full text-sm border-collapse mb-3">
            <thead><tr class="border-b border-border">
              <th class="text-left py-2 pr-4">Предлог</th>
              <th class="text-left py-2 text-case-akk">Wohin? → Akkusativ</th>
            </tr></thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">an</td><td class="text-case-akk">an <strong>die</strong> Wand</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">auf</td><td class="text-case-akk">auf <strong>den</strong> Tisch</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">in</td><td class="text-case-akk">in <strong>die</strong> Küche</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">vor</td><td class="text-case-akk">vor <strong>das</strong> Sofa</td></tr>
              <tr><td class="py-2 pr-4 font-medium">neben</td><td class="text-case-akk">neben <strong>die</strong> Tür</td></tr>
            </tbody>
          </table>
          <p class="text-xs text-muted-foreground">⚡ Формула: Subjekt + <span class="text-case-verb">stellen/legen/hängen</span> + <span class="text-case-akk">Akk (что?)</span> + Präposition + <span class="text-case-akk">Akk (куда?)</span></p>
        `,
      },
      {
        title: "Wo? → Dativ (положение)",
        content: `
          <p class="mb-3">Когда мы говорим <strong>где</strong> предмет уже находится — используем <span class="text-case-dat font-bold">Dativ</span>.</p>
          <table class="w-full text-sm border-collapse mb-3">
            <thead><tr class="border-b border-border">
              <th class="text-left py-2 pr-4">Предлог</th>
              <th class="text-left py-2 text-case-dat">Wo? → Dativ</th>
            </tr></thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">an</td><td class="text-case-dat">an <strong>der</strong> Wand</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">auf</td><td class="text-case-dat">auf <strong>dem</strong> Tisch</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">in</td><td class="text-case-dat">in <strong>der</strong> Küche</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 font-medium">vor</td><td class="text-case-dat">vor <strong>dem</strong> Sofa</td></tr>
              <tr><td class="py-2 pr-4 font-medium">neben</td><td class="text-case-dat">neben <strong>der</strong> Tür</td></tr>
            </tbody>
          </table>
          <p class="text-xs text-muted-foreground">⚡ Формула: Subjekt + <span class="text-case-verb">stehen/liegen/hängen</span> + Präposition + <span class="text-case-dat">Dativ (где?)</span></p>
        `,
      },
      {
        title: "Глаголы перемещения: stellen, legen, hängen",
        content: `
          <p class="mb-3">Три глагола описывают <strong>действие</strong> — куда мы помещаем предмет:</p>
          <div class="space-y-2 mb-4">
            <div class="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
              <span class="text-case-verb font-bold text-lg">stellen</span>
              <span class="text-muted-foreground">→</span>
              <span>ставить <em>(вертикально)</em></span>
              <span class="ml-auto text-xs text-muted-foreground">Tisch, Schrank, Lampe</span>
            </div>
            <div class="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
              <span class="text-case-verb font-bold text-lg">legen</span>
              <span class="text-muted-foreground">→</span>
              <span>класть <em>(горизонтально)</em></span>
              <span class="ml-auto text-xs text-muted-foreground">Teppich, Buch, Handy</span>
            </div>
            <div class="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
              <span class="text-case-verb font-bold text-lg">hängen</span>
              <span class="text-muted-foreground">→</span>
              <span>вешать <em>(на стену / сверху)</em></span>
              <span class="ml-auto text-xs text-muted-foreground">Bild, Lampe, Hose</span>
            </div>
          </div>
          <p class="text-sm"><strong>⚠️ Двойной Akkusativ:</strong> <em>Ich lege <span class="text-case-akk font-semibold">den Teppich</span> vor <span class="text-case-akk font-semibold">das Sofa</span>.</em><br/>
          <span class="text-xs text-muted-foreground">den Teppich = что кладу (Akk) &nbsp;|&nbsp; vor das Sofa = куда кладу (Akk)</span></p>
        `,
      },
      {
        title: "Perfekt: haben + Partizip II",
        content: `
          <p class="mb-3">В прошедшем времени глаголы перемещения образуют Perfekt с <span class="text-case-verb font-bold">haben</span>:</p>
          <table class="w-full text-sm border-collapse mb-3">
            <thead><tr class="border-b border-border">
              <th class="text-left py-2 pr-4">Infinitiv</th>
              <th class="text-left py-2">Partizip II</th>
              <th class="text-left py-2 pl-4">Пример</th>
            </tr></thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 text-case-verb font-medium">stellen</td><td>ge<strong>stellt</strong></td><td class="pl-4">Ich habe den Tisch gestellt</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-4 text-case-verb font-medium">legen</td><td>ge<strong>legt</strong></td><td class="pl-4">Ich habe den Teppich gelegt</td></tr>
              <tr><td class="py-2 pr-4 text-case-verb font-medium">hängen</td><td>ge<strong>hängt</strong></td><td class="pl-4">Ich habe das Bild gehängt</td></tr>
            </tbody>
          </table>
          <p class="text-sm bg-muted/50 rounded-lg px-4 py-2"><strong>Диалог:</strong><br/>
          — <em>Wohin hast du den Tisch gestellt?</em><br/>
          — <em>Ich habe den Tisch in die Küche gestellt.</em></p>
        `,
      },
      {
        title: "Описание квартиры: Mir gefällt / Es gibt",
        content: `
          <p class="mb-3">Полезные конструкции для описания жилья:</p>
          <div class="space-y-2">
            <div class="bg-muted/50 rounded-lg px-4 py-2">
              <span class="font-semibold text-case-nom">👍 Mir gefällt:</span>
              <span class="ml-2">Mir gefällt meine Wohnung. Sie ist hell und gemütlich.</span>
            </div>
            <div class="bg-muted/50 rounded-lg px-4 py-2">
              <span class="font-semibold text-case-dat">👎 Mir gefällt nicht:</span>
              <span class="ml-2">Sie ist zu klein. Es gibt keinen Balkon.</span>
            </div>
            <div class="bg-muted/50 rounded-lg px-4 py-2">
              <span class="font-semibold text-case-akk">📦 Es gibt:</span>
              <span class="ml-2">Es gibt ein Bett, einen Tisch, ein Sofa.</span>
            </div>
            <div class="bg-muted/50 rounded-lg px-4 py-2">
              <span class="font-semibold text-case-verb">⭐ Wünsche:</span>
              <span class="ml-2">Ich wünsche mir neue Möbel.</span>
            </div>
          </div>
        `,
      },
    ],
    examples: [
      { de: "Ich <span class='text-case-verb font-semibold'>stelle</span> <span class='text-case-akk'>den Tisch</span> in <span class='text-case-akk'>die Küche</span>.", en: "Я ставлю стол в кухню." },
      { de: "Der Tisch <span class='text-case-verb font-semibold'>steht</span> in <span class='text-case-dat'>der Küche</span>.", en: "Стол стоит в кухне." },
      { de: "Ich <span class='text-case-verb font-semibold'>lege</span> <span class='text-case-akk'>den Teppich</span> vor <span class='text-case-akk'>das Sofa</span>.", en: "Я кладу ковёр перед диваном." },
      { de: "Der Teppich <span class='text-case-verb font-semibold'>liegt</span> vor <span class='text-case-dat'>dem Sofa</span>.", en: "Ковёр лежит перед диваном." },
      { de: "Ich <span class='text-case-verb font-semibold'>hänge</span> <span class='text-case-akk'>das Bild</span> an <span class='text-case-akk'>die Wand</span>.", en: "Я вешаю картину на стену." },
      { de: "Das Bild <span class='text-case-verb font-semibold'>hängt</span> an <span class='text-case-dat'>der Wand</span>.", en: "Картина висит на стене." },
      { de: "Ich <span class='text-case-verb font-semibold'>habe</span> den Tisch in die Küche <span class='text-case-verb font-semibold'>gestellt</span>.", en: "Я поставил стол в кухню." },
      { de: "<span class='text-case-nom font-semibold'>Mir gefällt</span> meine Wohnung. Sie ist hell und gemütlich.", en: "Мне нравится моя квартира. Она светлая и уютная." },
    ],
    test: [
      { sentence: "Ich stelle den Tisch in ___ Küche. (Wohin?)", answer: "die" },
      { sentence: "Der Tisch steht in ___ Küche. (Wo?)", answer: "der" },
      { sentence: "Ich lege den Teppich vor ___ Sofa. (Wohin?)", answer: "das" },
      { sentence: "Der Teppich liegt vor ___ Sofa. (Wo?)", answer: "dem" },
      { sentence: "Ich hänge das Bild an ___ Wand. (Wohin?)", answer: "die" },
      { sentence: "Das Bild hängt an ___ Wand. (Wo?)", answer: "der" },
      { sentence: "Ich stelle die Lampe neben ___ Tür. (Wohin?)", answer: "die" },
      { sentence: "Die Lampe steht neben ___ Tür. (Wo?)", answer: "der" },
      { sentence: "Ich ___ den Teppich auf den Boden. (класть)", answer: "lege" },
      { sentence: "Ich ___ den Schrank an die Wand. (ставить)", answer: "stelle" },
      { sentence: "Ich ___ das Bild an die Wand. (вешать)", answer: "hänge" },
      { sentence: "Ich habe den Tisch ___. (stellen → Partizip II)", answer: "gestellt" },
      { sentence: "Ich habe den Teppich ___. (legen → Partizip II)", answer: "gelegt" },
      { sentence: "Ich habe das Bild ___. (hängen → Partizip II)", answer: "gehängt" },
      { sentence: "Ich stelle den Stuhl auf ___ Teppich. (Wohin?)", answer: "den" },
      { sentence: "Der Stuhl steht auf ___ Teppich. (Wo?)", answer: "dem" },
      { sentence: "Wohin hast du den Tisch ___? (stellen → Partizip II)", answer: "gestellt" },
      { sentence: "Es gibt ___ Balkon. (kein, m. Akk)", answer: "keinen" },
      { sentence: "Ich lege das Buch auf ___ Tisch. (Wohin?)", answer: "den" },
      { sentence: "Das Buch liegt auf ___ Tisch. (Wo?)", answer: "dem" },
    ],
  },

  // ── 20. März ──────────────────────────────────────────
  {
    id: "l20",
    date: "20. März",
    title: "WG-Aufgaben & Wohin vs. Wo",
    subtitle: "Обязанности в квартире, глаголы движения и положения, Akkusativ и Dativ с Wechselpräpositionen.",
    grammar: [
      {
        title: "Wohin? → Akkusativ (движение)",
        content: `
          <p class="mb-3">Если предмет <strong>перемещается</strong> куда-то — после предлога стоит <span class="text-case-akk font-bold">Akkusativ</span>.</p>
          <p class="mb-2 font-semibold">Глаголы движения:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>stellen</strong> — ставить (вертикально)</li>
            <li><strong>legen</strong> — класть (горизонтально)</li>
            <li><strong>hängen</strong> — вешать</li>
          </ul>
          <div class="bg-muted rounded-xl p-4 space-y-1 text-sm">
            <p>Ich stelle <span class="text-case-akk font-bold">den</span> Tisch in <span class="text-case-akk font-bold">das</span> Zimmer.</p>
            <p>Ich lege <span class="text-case-akk font-bold">den</span> Teppich auf <span class="text-case-akk font-bold">den</span> Boden.</p>
            <p>Ich hänge <span class="text-case-akk font-bold">das</span> Bild an <span class="text-case-akk font-bold">die</span> Wand.</p>
          </div>
        `,
      },
      {
        title: "Wo? → Dativ (положение)",
        content: `
          <p class="mb-3">Если предмет <strong>уже находится</strong> где-то — после предлога стоит <span class="text-case-dat font-bold">Dativ</span>.</p>
          <p class="mb-2 font-semibold">Глаголы положения:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>stehen</strong> — стоять</li>
            <li><strong>liegen</strong> — лежать</li>
            <li><strong>hängen</strong> — висеть</li>
          </ul>
          <div class="bg-muted rounded-xl p-4 space-y-1 text-sm">
            <p>Der Tisch steht <span class="text-case-dat font-bold">im</span> Zimmer.</p>
            <p>Der Teppich liegt auf <span class="text-case-dat font-bold">dem</span> Boden.</p>
            <p>Das Bild hängt an <span class="text-case-dat font-bold">der</span> Wand.</p>
          </div>
        `,
      },
      {
        title: "Wechselpräpositionen — таблица",
        content: `
          <table class="w-full text-sm border-collapse mb-2">
            <thead><tr class="border-b border-border">
              <th class="text-left py-2">Präposition</th>
              <th class="text-left py-2"><span class="text-case-akk">Akk</span> (Wohin?)</th>
              <th class="text-left py-2"><span class="text-case-dat">Dat</span> (Wo?)</th>
            </tr></thead>
            <tbody class="space-y-1">
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">in</td><td>in <span class="text-case-akk">das</span> Zimmer</td><td><span class="text-case-dat">im</span> Zimmer</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">auf</td><td>auf <span class="text-case-akk">den</span> Boden</td><td>auf <span class="text-case-dat">dem</span> Boden</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">an</td><td>an <span class="text-case-akk">die</span> Wand</td><td>an <span class="text-case-dat">der</span> Wand</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">unter</td><td>unter <span class="text-case-akk">den</span> Tisch</td><td>unter <span class="text-case-dat">dem</span> Tisch</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">über</td><td>über <span class="text-case-akk">den</span> Tisch</td><td>über <span class="text-case-dat">dem</span> Tisch</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">vor</td><td>vor <span class="text-case-akk">das</span> Sofa</td><td>vor <span class="text-case-dat">dem</span> Sofa</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">hinter</td><td>hinter <span class="text-case-akk">den</span> Schrank</td><td>hinter <span class="text-case-dat">dem</span> Schrank</td></tr>
              <tr class="border-b border-border/50"><td class="py-1.5 font-medium">neben</td><td>neben <span class="text-case-akk">die</span> Tür</td><td>neben <span class="text-case-dat">der</span> Tür</td></tr>
              <tr><td class="py-1.5 font-medium">zwischen</td><td>zwischen <span class="text-case-akk">die</span> Stühle</td><td>zwischen <span class="text-case-dat">den</span> Stühlen</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        title: "Aufgaben in der WG — лексика",
        content: `
          <p class="mb-3">Обязанности в совместной квартире (Wohngemeinschaft):</p>
          <ul class="list-disc pl-5 space-y-1.5 text-sm mb-4">
            <li><strong>das Geschirr abwaschen</strong> — мыть посуду</li>
            <li><strong>den Müll runterbringen</strong> — выносить мусор</li>
            <li><strong>die Pflanzen gießen</strong> — поливать растения</li>
            <li><strong>das Bad putzen</strong> — убирать ванную</li>
            <li><strong>staubsaugen</strong> — пылесосить</li>
            <li><strong>kochen</strong> — готовить</li>
            <li><strong>die Lampe reparieren</strong> — чинить лампу</li>
            <li><strong>den Strom ausschalten</strong> — выключить электричество</li>
            <li><strong>die Glühbirne wechseln</strong> — заменить лампочку</li>
          </ul>
          <div class="bg-muted rounded-xl p-4 text-sm space-y-1">
            <p class="font-semibold mb-1">Mini-Dialog:</p>
            <p>👤 A: Wer putzt das Bad?</p>
            <p>👤 B: Du bist dran.</p>
            <p>👤 A: Okay, ich mache das heute.</p>
          </div>
        `,
      },
      {
        title: "Итог: stellen / legen / hängen ↔ stehen / liegen / hängen",
        content: `
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold text-case-akk mb-2">Движение → Akk</p>
              <p>stell<strong>en</strong> → ставить</p>
              <p>leg<strong>en</strong> → класть</p>
              <p>häng<strong>en</strong> → вешать</p>
            </div>
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold text-case-dat mb-2">Положение → Dat</p>
              <p>steh<strong>en</strong> → стоять</p>
              <p>lieg<strong>en</strong> → лежать</p>
              <p>häng<strong>en</strong> → висеть</p>
            </div>
          </div>
        `,
      },
    ],
    examples: [
      { de: "Ich stelle <span class='text-case-akk font-bold'>den</span> Schreibtisch <span class='text-case-akk font-bold'>ans</span> Fenster.", en: "Я ставлю письменный стол к окну." },
      { de: "Der Schreibtisch steht <span class='text-case-dat font-bold'>am</span> Fenster.", en: "Письменный стол стоит у окна." },
      { de: "Ich lege <span class='text-case-akk font-bold'>das</span> Handy auf <span class='text-case-akk font-bold'>den</span> Tisch.", en: "Я кладу телефон на стол." },
      { de: "Das Handy liegt auf <span class='text-case-dat font-bold'>dem</span> Tisch.", en: "Телефон лежит на столе." },
      { de: "Ich hänge <span class='text-case-akk font-bold'>die</span> Lampe an <span class='text-case-akk font-bold'>die</span> Decke.", en: "Я вешаю лампу на потолок." },
      { de: "Die Lampe hängt an <span class='text-case-dat font-bold'>der</span> Decke.", en: "Лампа висит на потолке." },
      { de: "Ich bringe <span class='text-case-akk font-bold'>den</span> Müll runter.", en: "Я выношу мусор." },
      { de: "Wer putzt <span class='text-case-akk font-bold'>das</span> Bad? — Du bist dran.", en: "Кто убирает ванную? — Твоя очередь." },
    ],
    test: [
      { sentence: "Ich stelle den Tisch in ___ Zimmer. (Wohin?)", answer: "das" },
      { sentence: "Der Tisch steht ___ Zimmer. (Wo?)", answer: "im" },
      { sentence: "Ich hänge das Bild an ___ Wand. (Wohin?)", answer: "die" },
      { sentence: "Das Bild hängt an ___ Wand. (Wo?)", answer: "der" },
      { sentence: "Ich lege den Teppich auf ___ Boden. (Wohin?)", answer: "den" },
      { sentence: "Der Teppich liegt auf ___ Boden. (Wo?)", answer: "dem" },
      { sentence: "Ich stelle den Stuhl vor ___ Sofa. (Wohin?)", answer: "das" },
      { sentence: "Der Stuhl steht vor ___ Sofa. (Wo?)", answer: "dem" },
      { sentence: "Ich lege das Handy auf ___ Tisch. (Wohin?)", answer: "den" },
      { sentence: "Das Handy liegt auf ___ Tisch. (Wo?)", answer: "dem" },
      { sentence: "Ich hänge die Lampe an ___ Decke. (Wohin?)", answer: "die" },
      { sentence: "Die Lampe hängt an ___ Decke. (Wo?)", answer: "der" },
      { sentence: "Ich stelle den Schrank an ___ Wand. (Wohin?)", answer: "die" },
      { sentence: "Der Schrank steht an ___ Wand. (Wo?)", answer: "der" },
      { sentence: "Wer ___ das Bad? (putzen)", answer: "putzt" },
      { sentence: "Ich bringe den Müll ___. (runterbringen)", answer: "runter" },
      { sentence: "Ich ___ das Geschirr. (abwaschen, 1. P.)", answer: "wasche" },
      { sentence: "Ich stelle den Schreibtisch ___ Fenster. (Wohin?, an+das)", answer: "ans" },
      { sentence: "Der Schreibtisch steht ___ Fenster. (Wo?, an+dem)", answer: "am" },
      { sentence: "Ich habe das Bild an die Wand ___. (hängen → Partizip II)", answer: "gehängt" },
    ],
  },
  {
    id: "l23",
    date: "23. März",
    title: "Meinungen, Artikel & Possessivpronomen",
    subtitle: "Wie finden Sie…? — Meinungen äußern, Artikeldeklination und Possessivpronomen im Überblick",
    grammar: [
      {
        title: "Meinungen äußern — Ich finde + Akk",
        content: `
          <p class="mb-3">Чтобы выразить мнение, используй конструкцию:</p>
          <div class="bg-muted rounded-xl p-4 mb-4 font-mono text-sm sm:text-base">
            <span class="text-case-nom font-bold">Ich</span> finde
            <span class="text-case-akk font-bold">den Tisch</span>
            <span class="text-primary font-bold">schön</span>.
          </div>
          <p class="mb-2"><strong>Структура:</strong> Ich finde + <span class="text-case-akk font-semibold">Akkusativ</span> + прилагательное</p>
          <p class="mb-1">❓ <em>Wie finden Sie den Tisch?</em> — Как вам стол?</p>
          <p class="mb-1">✅ <em>Ich finde den Tisch sehr schön.</em></p>
          <p class="mb-1">✅ <em>Ich finde das Zimmer klein.</em></p>
          <p>✅ <em>Ich finde die Wohnung gut.</em></p>
        `,
      },
      {
        title: "Артикли: Nom → Akk → Dat",
        content: `
          <p class="mb-3">Полная таблица изменения артиклей по падежам:</p>
          <table class="w-full text-sm sm:text-base border-collapse mb-4">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-3">Род</th>
                <th class="text-left py-2 pr-3 text-case-nom">Nom</th>
                <th class="text-left py-2 pr-3 text-case-akk">Akk</th>
                <th class="text-left py-2 text-case-dat">Dat</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-3">♂ maskulin</td><td class="py-2 pr-3">der / ein</td><td class="py-2 pr-3 font-bold">den / einen</td><td class="py-2 font-bold">dem / einem</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-3">♀ feminin</td><td class="py-2 pr-3">die / eine</td><td class="py-2 pr-3">die / eine</td><td class="py-2 font-bold">der / einer</td></tr>
              <tr><td class="py-2 pr-3">⚬ neutrum</td><td class="py-2 pr-3">das / ein</td><td class="py-2 pr-3">das / ein</td><td class="py-2 font-bold">dem / einem</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-muted-foreground">💡 В Akkusativ меняется <strong>только мужской род</strong>: der → <span class="text-case-akk font-bold">den</span></p>
        `,
      },
      {
        title: "Dativ + Akkusativ вместе",
        content: `
          <p class="mb-3">Когда в предложении два объекта — <strong>кому?</strong> и <strong>что?</strong>:</p>
          <div class="bg-muted rounded-xl p-4 mb-4 font-mono text-sm sm:text-base">
            <span class="text-case-nom">Ich</span> gebe
            <span class="text-case-dat font-bold">dir</span>
            <span class="text-case-akk font-bold">ein Buch</span>.
          </div>
          <p class="mb-2">📌 <strong>Правило:</strong></p>
          <p class="mb-1">👤 Человек → <span class="text-case-dat font-semibold">Dativ</span> (кому?)</p>
          <p class="mb-3">📦 Вещь → <span class="text-case-akk font-semibold">Akkusativ</span> (что?)</p>
          <div class="space-y-1 text-sm">
            <p>• Ich schenke <span class="text-case-dat font-semibold">meiner Mutter</span> <span class="text-case-akk font-semibold">eine Tasche</span>.</p>
            <p>• Ich zeige <span class="text-case-dat font-semibold">dir</span> <span class="text-case-akk font-semibold">mein Auto</span>.</p>
          </div>
        `,
      },
      {
        title: "Wohin? vs. Wo? — повторение",
        content: `
          <table class="w-full text-sm sm:text-base border-collapse mb-4">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-3">Вопрос</th>
                <th class="text-left py-2 pr-3">Смысл</th>
                <th class="text-left py-2">Падеж</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-3 font-bold">Wohin?</td><td class="py-2 pr-3">движение →</td><td class="py-2 text-case-akk font-bold">Akkusativ</td></tr>
              <tr><td class="py-2 pr-3 font-bold">Wo?</td><td class="py-2 pr-3">место 📍</td><td class="py-2 text-case-dat font-bold">Dativ</td></tr>
            </tbody>
          </table>
          <div class="space-y-2 text-sm">
            <p>→ Ich stelle <span class="text-case-akk">den Tisch</span> in <span class="text-case-akk font-bold">die Küche</span>. <em>(Wohin?)</em></p>
            <p>📍 Der Tisch steht in <span class="text-case-dat font-bold">der Küche</span>. <em>(Wo?)</em></p>
          </div>
        `,
      },
      {
        title: "Possessivpronomen: mein, dein…",
        content: `
          <p class="mb-3">Притяжательные местоимения склоняются как <em>ein</em>:</p>
          <table class="w-full text-sm sm:text-base border-collapse mb-4">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-3">Падеж</th>
                <th class="text-left py-2 pr-3">♂ m</th>
                <th class="text-left py-2 pr-3">♀ f</th>
                <th class="text-left py-2">⚬ n</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border/50"><td class="py-2 pr-3 text-case-nom font-semibold">Nom</td><td class="py-2 pr-3">mein</td><td class="py-2 pr-3">meine</td><td class="py-2">mein</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-3 text-case-akk font-semibold">Akk</td><td class="py-2 pr-3 font-bold">meinen</td><td class="py-2 pr-3">meine</td><td class="py-2">mein</td></tr>
              <tr><td class="py-2 pr-3 text-case-dat font-semibold">Dat</td><td class="py-2 pr-3 font-bold">meinem</td><td class="py-2 pr-3 font-bold">meiner</td><td class="py-2 font-bold">meinem</td></tr>
            </tbody>
          </table>
          <p class="text-sm text-muted-foreground">То же для: dein, sein, ihr, unser, euer, ihr, Ihr</p>
        `,
      },
    ],
    examples: [
      { de: "Ich finde <span class='text-case-akk font-semibold'>den Tisch</span> sehr <span class='text-primary font-semibold'>schön</span>.", en: "I find the table very beautiful." },
      { de: "Ich finde <span class='text-case-akk font-semibold'>das Zimmer</span> <span class='text-primary font-semibold'>klein</span>.", en: "I find the room small." },
      { de: "Ich gebe <span class='text-case-dat font-semibold'>dir</span> <span class='text-case-akk font-semibold'>ein Buch</span>.", en: "I give you a book." },
      { de: "Ich schenke <span class='text-case-dat font-semibold'>meiner Mutter</span> <span class='text-case-akk font-semibold'>eine Tasche</span>.", en: "I give my mother a bag." },
      { de: "Ich stelle <span class='text-case-akk font-semibold'>den Tisch</span> in <span class='text-case-akk font-semibold'>die Küche</span>.", en: "I put the table in the kitchen. (movement)" },
      { de: "Der Tisch steht in <span class='text-case-dat font-semibold'>der Küche</span>.", en: "The table is in the kitchen. (position)" },
      { de: "Ich hänge <span class='text-case-akk font-semibold'>das Bild</span> an <span class='text-case-akk font-semibold'>die Wand</span>.", en: "I hang the picture on the wall." },
      { de: "Das Bild hängt an <span class='text-case-dat font-semibold'>der Wand</span>.", en: "The picture hangs on the wall." },
    ],
    test: [
      { sentence: "Ich finde ___ Tisch schön. (der Tisch, Akk)", answer: "den" },
      { sentence: "Ich finde ___ Wohnung gut. (die Wohnung, Akk)", answer: "die" },
      { sentence: "Ich finde ___ Zimmer klein. (das Zimmer, Akk)", answer: "das" },
      { sentence: "Ich gebe ___ Mann das Buch. (der Mann, Dat)", answer: "dem" },
      { sentence: "Ich schenke ___ Mutter eine Tasche. (mein, Dat, f)", answer: "meiner" },
      { sentence: "Ich zeige ___ mein Auto. (du, Dat)", answer: "dir" },
      { sentence: "Ich stelle den Tisch in ___ Küche. (Wohin?, die)", answer: "die" },
      { sentence: "Der Tisch steht in ___ Küche. (Wo?, die)", answer: "der" },
      { sentence: "Ich hänge das Bild an ___ Wand. (Wohin?, die)", answer: "die" },
      { sentence: "Das Bild hängt an ___ Wand. (Wo?, die)", answer: "der" },
      { sentence: "Ich lege das Buch auf ___ Tisch. (Wohin?, der)", answer: "den" },
      { sentence: "Das Buch liegt auf ___ Tisch. (Wo?, der)", answer: "dem" },
      { sentence: "Ich finde ___ Film interessant. (der Film, Akk)", answer: "den" },
      { sentence: "Ich gebe ___ Kind ein Spielzeug. (das Kind, Dat)", answer: "dem" },
      { sentence: "Ich sehe ___ Tisch. (mein, Akk, m)", answer: "meinen" },
      { sentence: "Ich helfe ___ Freund. (mein, Dat, m)", answer: "meinem" },
      { sentence: "Ich stelle den Stuhl vor ___ Sofa. (Wohin?, das)", answer: "das" },
      { sentence: "Der Stuhl steht vor ___ Sofa. (Wo?, das)", answer: "dem" },
      { sentence: "Ich finde ___ Lampe schön. (die Lampe, Akk)", answer: "die" },
      { sentence: "Ich gebe ___ Frau die Blumen. (die Frau, Dat)", answer: "der" },
    ],
  },
  {
    id: "l24",
    date: "24. März",
    title: "Beruf, Freizeit & Perfekt",
    subtitle: "Работа, свободное время и прошедшее время с неправильными глаголами",
    grammar: [
      {
        title: "Beruf — как говорить о работе",
        content: `
          <p class="mb-3">Чтобы сказать, кем ты работаешь:</p>
          <div class="bg-muted rounded-xl p-4 mb-4 space-y-2 text-sm sm:text-base">
            <p>❓ <strong>Was bist du von Beruf?</strong> — Кем ты работаешь?</p>
            <p>👉 <span class="text-case-nom font-bold">Ich bin Techniker.</span></p>
            <p>👉 <span class="text-case-nom font-bold">Ich arbeite im Büro.</span></p>
          </div>
          <p class="font-semibold mb-2">📌 Важные слова:</p>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <div class="bg-muted/50 rounded-lg p-2"><strong>arbeiten</strong> — работать</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>der Beruf</strong> — профессия</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>die Firma</strong> — фирма</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>der Kollege</strong> — коллега</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>planen</strong> — планировать</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>organisieren</strong> — организовывать</div>
          </div>
        `,
      },
      {
        title: "Freizeit — свободное время",
        content: `
          <p class="mb-3">Чтобы рассказать о свободном времени:</p>
          <div class="bg-muted rounded-xl p-4 mb-4 space-y-2 text-sm sm:text-base">
            <p>❓ <strong>Was machst du in deiner Freizeit?</strong></p>
            <p>👉 <span class="text-case-nom font-bold">Ich koche.</span></p>
            <p>👉 <span class="text-case-nom font-bold">Ich gehe einkaufen.</span></p>
            <p>👉 <span class="text-case-nom font-bold">Ich mache Sport.</span></p>
          </div>
          <p class="font-semibold mb-2">📌 Важные слова:</p>
          <div class="grid grid-cols-2 gap-2 text-sm">
            <div class="bg-muted/50 rounded-lg p-2"><strong>die Freizeit</strong> — свободное время</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>kochen</strong> — готовить</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>einkaufen</strong> — покупать</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>Sport machen</strong> — заниматься спортом</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>Freunde treffen</strong> — встречаться с друзьями</div>
            <div class="bg-muted/50 rounded-lg p-2"><strong>joggen</strong> — бегать</div>
          </div>
        `,
      },
      {
        title: "Perfekt — прошедшее время 🔥",
        content: `
          <p class="mb-3">Самая важная тема уровня A2! Используем, когда говорим о прошлом.</p>
          <div class="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-4">
            <p class="text-lg font-bold mb-2">📌 Формула:</p>
            <p class="text-xl font-bold text-center">
              <span class="text-case-akk">haben / sein</span> + … + <span class="text-case-dat">Partizip II</span>
            </p>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 mb-4">
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold text-case-akk mb-2">haben (почти всегда)</p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">habe</span> <span class="text-case-dat font-bold">gegessen</span></p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">habe</span> <span class="text-case-dat font-bold">gearbeitet</span></p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">habe</span> <span class="text-case-dat font-bold">gekocht</span></p>
            </div>
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold text-case-nom mb-2">sein (движение / изменение)</p>
              <p class="text-sm">👉 Ich <span class="text-case-nom font-bold">bin</span> <span class="text-case-dat font-bold">gegangen</span></p>
              <p class="text-sm">👉 Ich <span class="text-case-nom font-bold">bin</span> <span class="text-case-dat font-bold">gefahren</span></p>
              <p class="text-sm">👉 Ich <span class="text-case-nom font-bold">bin</span> <span class="text-case-dat font-bold">geblieben</span></p>
            </div>
          </div>
          <div class="bg-muted rounded-xl p-4">
            <p class="font-semibold mb-2">🔥 Когда <span class="text-case-nom">sein</span>?</p>
            <p class="text-sm">👉 gehen, fahren, kommen, fliegen, bleiben, aufstehen, einschlafen</p>
            <p class="text-sm text-muted-foreground mt-1">Запомни: движение или изменение состояния → sein</p>
          </div>
        `,
      },
      {
        title: "Неправильные глаголы (Unreg. Verben)",
        content: `
          <p class="mb-3">У них меняется форма. Учи их с предложениями!</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead>
                <tr class="border-b border-border">
                  <th class="text-left p-2 font-bold">Infinitiv</th>
                  <th class="text-left p-2 font-bold">Präteritum</th>
                  <th class="text-left p-2 font-bold text-case-dat">Partizip II</th>
                  <th class="text-left p-2 font-bold text-muted-foreground">Перевод</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border">
                <tr><td class="p-2">gehen</td><td class="p-2">ging</td><td class="p-2 text-case-dat font-semibold">gegangen</td><td class="p-2 text-muted-foreground">идти</td></tr>
                <tr><td class="p-2">sehen</td><td class="p-2">sah</td><td class="p-2 text-case-dat font-semibold">gesehen</td><td class="p-2 text-muted-foreground">видеть</td></tr>
                <tr><td class="p-2">essen</td><td class="p-2">aß</td><td class="p-2 text-case-dat font-semibold">gegessen</td><td class="p-2 text-muted-foreground">есть</td></tr>
                <tr><td class="p-2">trinken</td><td class="p-2">trank</td><td class="p-2 text-case-dat font-semibold">getrunken</td><td class="p-2 text-muted-foreground">пить</td></tr>
                <tr><td class="p-2">bleiben</td><td class="p-2">blieb</td><td class="p-2 text-case-dat font-semibold">geblieben</td><td class="p-2 text-muted-foreground">оставаться</td></tr>
                <tr><td class="p-2">fahren</td><td class="p-2">fuhr</td><td class="p-2 text-case-dat font-semibold">gefahren</td><td class="p-2 text-muted-foreground">ехать</td></tr>
                <tr><td class="p-2">kommen</td><td class="p-2">kam</td><td class="p-2 text-case-dat font-semibold">gekommen</td><td class="p-2 text-muted-foreground">приходить</td></tr>
                <tr><td class="p-2">schreiben</td><td class="p-2">schrieb</td><td class="p-2 text-case-dat font-semibold">geschrieben</td><td class="p-2 text-muted-foreground">писать</td></tr>
              </tbody>
            </table>
          </div>
        `,
      },
      {
        title: "Как описывать людей (экзамен!)",
        content: `
          <p class="mb-3">На экзамене часто нужно описать человека по картинке:</p>
          <div class="bg-muted rounded-xl p-4 mb-4 space-y-1 text-sm sm:text-base">
            <p>👉 <strong>Ich glaube, …</strong> — Я думаю, …</p>
            <p>👉 <strong>Vielleicht ist er/sie …</strong> — Может быть, он/она …</p>
            <p>👉 <strong>Er/Sie arbeitet …</strong> — Он/она работает …</p>
            <p>👉 <strong>In seiner/ihrer Freizeit …</strong> — В свободное время …</p>
          </div>
          <div class="grid sm:grid-cols-2 gap-3">
            <div class="bg-muted/50 rounded-xl p-4 text-sm">
              <p class="font-bold mb-1">👨 Aman:</p>
              <p>Ich glaube, Aman ist <span class="text-case-nom font-bold">Techniker</span>.</p>
              <p>Er arbeitet mit <span class="text-case-akk font-bold">Solaranlagen</span>.</p>
              <p>In seiner Freizeit macht er <span class="text-case-akk font-bold">Sport</span>.</p>
            </div>
            <div class="bg-muted/50 rounded-xl p-4 text-sm">
              <p class="font-bold mb-1">👩 Jana:</p>
              <p>Ich glaube, Jana arbeitet im <span class="text-case-dat font-bold">Büro</span>.</p>
              <p>In ihrer Freizeit <span class="text-case-akk font-bold">kocht</span> sie.</p>
              <p>Sie geht gern <span class="text-case-akk font-bold">einkaufen</span>.</p>
            </div>
          </div>
        `,
      },
      {
        title: "Порядок слов + Perfekt",
        content: `
          <div class="space-y-4">
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold mb-2">📌 Глагол ВСЕГДА на 2-м месте:</p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">arbeite</span> heute.</p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">gehe</span> nach Hause.</p>
            </div>
            <div class="bg-muted rounded-xl p-4">
              <p class="font-bold mb-2">📌 В Perfekt — Partizip II в конце:</p>
              <p class="text-sm">👉 Ich <span class="text-case-akk font-bold">habe</span> Pizza <span class="text-case-dat font-bold">gegessen</span>.</p>
              <p class="text-sm">👉 Ich <span class="text-case-nom font-bold">bin</span> nach Wien <span class="text-case-dat font-bold">gefahren</span>.</p>
            </div>
            <div class="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p class="font-bold mb-2">🔥 sein vs haben:</p>
              <div class="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="font-bold text-case-nom mb-1">sein</p>
                  <p>движение:</p>
                  <p>gehen, fahren, kommen, fliegen</p>
                </div>
                <div>
                  <p class="font-bold text-case-akk mb-1">haben</p>
                  <p>всё остальное:</p>
                  <p>essen, arbeiten, kochen, lernen</p>
                </div>
              </div>
            </div>
          </div>
        `,
      },
    ],
    examples: [
      { de: "Ich <span class='text-case-akk font-bold'>arbeite</span> in einer Firma.", en: "Я работаю в фирме." },
      { de: "Ich <span class='text-case-akk font-bold'>organisiere</span> Termine.", en: "Я организую встречи." },
      { de: "Ich <span class='text-case-akk font-bold'>koche</span> am Abend.", en: "Я готовлю вечером." },
      { de: "Ich <span class='text-case-akk font-bold'>treffe</span> Freunde.", en: "Я встречаюсь с друзьями." },
      { de: "Ich <span class='text-case-akk font-bold'>habe</span> Pizza <span class='text-case-dat font-bold'>gegessen</span>.", en: "Я ел пиццу." },
      { de: "Ich <span class='text-case-nom font-bold'>bin</span> nach Wien <span class='text-case-dat font-bold'>gefahren</span>.", en: "Я поехал в Вену." },
      { de: "Ich <span class='text-case-nom font-bold'>bin</span> zu Hause <span class='text-case-dat font-bold'>geblieben</span>.", en: "Я остался дома." },
      { de: "Ich <span class='text-case-akk font-bold'>habe</span> dich <span class='text-case-dat font-bold'>gesehen</span>.", en: "Я тебя видел." },
    ],
    test: [
      { sentence: "Ich ___ Pizza gegessen. (haben)", answer: "habe" },
      { sentence: "Ich ___ nach Wien gefahren. (sein)", answer: "bin" },
      { sentence: "Ich ___ zu Hause geblieben. (sein)", answer: "bin" },
      { sentence: "Ich ___ gearbeitet. (haben)", answer: "habe" },
      { sentence: "Ich ___ Freunde getroffen. (haben)", answer: "habe" },
      { sentence: "Er ___ nach Berlin geflogen. (sein)", answer: "ist" },
      { sentence: "Sie ___ ein Buch gelesen. (haben)", answer: "hat" },
      { sentence: "Wir ___ ins Kino gegangen. (sein)", answer: "sind" },
      { sentence: "gehen → ging → ___", answer: "gegangen" },
      { sentence: "sehen → sah → ___", answer: "gesehen" },
      { sentence: "essen → aß → ___", answer: "gegessen" },
      { sentence: "trinken → trank → ___", answer: "getrunken" },
      { sentence: "bleiben → blieb → ___", answer: "geblieben" },
      { sentence: "fahren → fuhr → ___", answer: "gefahren" },
      { sentence: "kommen → kam → ___", answer: "gekommen" },
      { sentence: "schreiben → schrieb → ___", answer: "geschrieben" },
      { sentence: "Was ___ du von Beruf? (sein)", answer: "bist" },
      { sentence: "Ich ___ im Büro. (arbeiten)", answer: "arbeite" },
      { sentence: "Was ___ du in deiner Freizeit? (machen)", answer: "machst" },
      { sentence: "Ich ___ Sport. (machen)", answer: "mache" },
    ],
  },
  {
    id: "l25",
    date: "25. März",
    title: "Nomen & Artikel: Nominativ, Akkusativ, Dativ",
    subtitle: "Wer? Wen? Wem? — Притяжательные артикли, Dativ-предлоги и женские формы профессий.",
    grammar: [
      {
        title: "Wer? Wen? Wem? — Три главных вопроса",
        content: `<p class="mb-4 text-muted-foreground leading-relaxed">В немецком языке падеж определяет роль слова в предложении. Три ключевых вопроса:</p>
<div class="space-y-3 mb-4">
  <div class="p-4 bg-muted rounded-xl border border-dashed border-border">
    <span class="case-nom font-bold text-lg">Wer?</span> <span class="text-muted-foreground">— кто? →</span> <span class="font-semibold">Nominativ</span>
    <p class="text-sm text-muted-foreground mt-1"><span class="case-nom font-medium">Der Mann</span> kommt. — Мужчина приходит.</p>
  </div>
  <div class="p-4 bg-muted rounded-xl border border-dashed border-border">
    <span class="case-akk font-bold text-lg">Wen?</span> <span class="text-muted-foreground">— кого? →</span> <span class="font-semibold">Akkusativ</span>
    <p class="text-sm text-muted-foreground mt-1">Ich sehe <span class="case-akk font-medium">den Mann</span>. — Я вижу мужчину.</p>
  </div>
  <div class="p-4 bg-muted rounded-xl border border-dashed border-border">
    <span class="case-dat font-bold text-lg">Wem?</span> <span class="text-muted-foreground">— кому? →</span> <span class="font-semibold">Dativ</span>
    <p class="text-sm text-muted-foreground mt-1">Ich helfe <span class="case-dat font-medium">dem Mann</span>. — Я помогаю мужчине.</p>
  </div>
</div>`,
      },
      {
        title: "Artikeltabelle: der / die / das",
        content: `<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead><tr class="border-b border-border">
  <th class="text-left py-2 pr-3 font-semibold text-muted-foreground">Род</th>
  <th class="py-2 px-3 font-semibold"><span class="case-nom">Nominativ</span></th>
  <th class="py-2 px-3 font-semibold"><span class="case-akk">Akkusativ</span></th>
  <th class="py-2 px-3 font-semibold"><span class="case-dat">Dativ</span></th>
</tr></thead>
<tbody>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Maskulin</td><td class="py-2 px-3"><span class="case-nom font-bold">der</span></td><td class="py-2 px-3"><span class="case-akk font-bold">den</span></td><td class="py-2 px-3"><span class="case-dat font-bold">dem</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Feminin</td><td class="py-2 px-3"><span class="case-nom font-bold">die</span></td><td class="py-2 px-3"><span class="case-akk font-bold">die</span></td><td class="py-2 px-3"><span class="case-dat font-bold">der</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Neutral</td><td class="py-2 px-3"><span class="case-nom font-bold">das</span></td><td class="py-2 px-3"><span class="case-akk font-bold">das</span></td><td class="py-2 px-3"><span class="case-dat font-bold">dem</span></td></tr>
  <tr><td class="py-2 pr-3 font-medium">Plural</td><td class="py-2 px-3"><span class="case-nom font-bold">die</span></td><td class="py-2 px-3"><span class="case-akk font-bold">die</span></td><td class="py-2 px-3"><span class="case-dat font-bold">den + n</span></td></tr>
</tbody>
</table>
</div>
<p class="mt-4 text-muted-foreground text-sm leading-relaxed">📌 Запомни: только <span class="case-akk font-semibold">мужской род</span> меняется в Akkusativ: der → <span class="case-akk font-bold">den</span>. В Dativ меняются все!</p>`,
      },
      {
        title: "Притяжательные артикли: mein / dein / sein / ihr…",
        content: `<p class="mb-3 text-muted-foreground">Притяжательные артикли меняются так же, как неопределённый артикль <strong>ein</strong>:</p>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">mein</span><br/><span class="text-muted-foreground text-xs">мой</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">dein</span><br/><span class="text-muted-foreground text-xs">твой</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">sein</span><br/><span class="text-muted-foreground text-xs">его</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">ihr</span><br/><span class="text-muted-foreground text-xs">её</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">unser</span><br/><span class="text-muted-foreground text-xs">наш</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">euer</span><br/><span class="text-muted-foreground text-xs">ваш</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">ihr</span><br/><span class="text-muted-foreground text-xs">их</span></div>
  <div class="bg-muted rounded-lg p-2 text-center text-sm"><span class="font-bold">Ihr</span><br/><span class="text-muted-foreground text-xs">Ваш</span></div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead><tr class="border-b border-border">
  <th class="text-left py-2 pr-3 font-semibold text-muted-foreground">Род</th>
  <th class="py-2 px-3 font-semibold"><span class="case-nom">Nom.</span></th>
  <th class="py-2 px-3 font-semibold"><span class="case-akk">Akk.</span></th>
  <th class="py-2 px-3 font-semibold"><span class="case-dat">Dat.</span></th>
</tr></thead>
<tbody>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">der (Maskulin)</td><td class="py-2 px-3">mein</td><td class="py-2 px-3"><span class="case-akk font-bold">meinen</span></td><td class="py-2 px-3"><span class="case-dat font-bold">meinem</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">die (Feminin)</td><td class="py-2 px-3">mein<span class="case-nom font-bold">e</span></td><td class="py-2 px-3">mein<span class="case-akk font-bold">e</span></td><td class="py-2 px-3"><span class="case-dat font-bold">meiner</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">das (Neutral)</td><td class="py-2 px-3">mein</td><td class="py-2 px-3">mein</td><td class="py-2 px-3"><span class="case-dat font-bold">meinem</span></td></tr>
  <tr><td class="py-2 pr-3 font-medium">die (Plural)</td><td class="py-2 px-3">mein<span class="case-nom font-bold">e</span></td><td class="py-2 px-3">mein<span class="case-akk font-bold">e</span></td><td class="py-2 px-3"><span class="case-dat font-bold">meinen</span></td></tr>
</tbody>
</table>
</div>`,
      },
      {
        title: "Dativ-Предлоги: mit, von, bei, zu, nach",
        content: `<p class="mb-3 text-muted-foreground">После этих предлогов <strong>всегда</strong> стоит Dativ. Это главные сигналы Dativ!</p>
<div class="space-y-2">
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="case-dat font-bold text-lg shrink-0">mit</span>
    <div><span class="text-muted-foreground text-sm">— с</span><br/><span class="text-sm">Ich gehe mit <span class="case-dat font-bold">meinem Freund</span>.</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="case-dat font-bold text-lg shrink-0">von</span>
    <div><span class="text-muted-foreground text-sm">— от</span><br/><span class="text-sm">Eine Nachricht von <span class="case-dat font-bold">meiner Kollegin</span>.</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="case-dat font-bold text-lg shrink-0">bei</span>
    <div><span class="text-muted-foreground text-sm">— у, при</span><br/><span class="text-sm">Er arbeitet bei <span class="case-dat font-bold">einer Firma</span>.</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="case-dat font-bold text-lg shrink-0">zu</span>
    <div><span class="text-muted-foreground text-sm">— к</span><br/><span class="text-sm">Ich gehe zu <span class="case-dat font-bold">meinem Arzt</span>.</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="case-dat font-bold text-lg shrink-0">nach</span>
    <div><span class="text-muted-foreground text-sm">— после, в</span><br/><span class="text-sm">Nach <span class="case-dat font-bold">der Arbeit</span> gehe ich nach Hause.</span></div>
  </div>
</div>`,
      },
      {
        title: "Demonstrativartikel: dieser / dieses / diese",
        content: `<p class="mb-3 text-muted-foreground">Указательные артикли склоняются так же, как определённый артикль:</p>
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead><tr class="border-b border-border">
  <th class="text-left py-2 pr-3 font-semibold text-muted-foreground">Падеж</th>
  <th class="py-2 px-3 font-semibold">mask.</th>
  <th class="py-2 px-3 font-semibold">neutr.</th>
  <th class="py-2 px-3 font-semibold">fem.</th>
  <th class="py-2 px-3 font-semibold">Plural</th>
</tr></thead>
<tbody>
  <tr class="border-b border-border/50"><td class="py-2 pr-3"><span class="case-nom font-semibold">Nom.</span></td><td class="py-2 px-3">dies<span class="case-nom font-bold">er</span></td><td class="py-2 px-3">dies<span class="case-nom font-bold">es</span></td><td class="py-2 px-3">dies<span class="case-nom font-bold">e</span></td><td class="py-2 px-3">dies<span class="case-nom font-bold">e</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3"><span class="case-akk font-semibold">Akk.</span></td><td class="py-2 px-3">dies<span class="case-akk font-bold">en</span></td><td class="py-2 px-3">dies<span class="case-akk font-bold">es</span></td><td class="py-2 px-3">dies<span class="case-akk font-bold">e</span></td><td class="py-2 px-3">dies<span class="case-akk font-bold">e</span></td></tr>
  <tr><td class="py-2 pr-3"><span class="case-dat font-semibold">Dat.</span></td><td class="py-2 px-3">dies<span class="case-dat font-bold">em</span></td><td class="py-2 px-3">dies<span class="case-dat font-bold">em</span></td><td class="py-2 px-3">dies<span class="case-dat font-bold">er</span></td><td class="py-2 px-3">dies<span class="case-dat font-bold">en</span></td></tr>
</tbody>
</table>
</div>
<div class="mt-4 space-y-1 text-sm">
  <p><span class="case-nom font-medium">Dieser Mann</span> ist nett. → Ich sehe <span class="case-akk font-medium">diesen Mann</span>. → Ich helfe <span class="case-dat font-medium">diesem Mann</span>.</p>
  <p><span class="case-nom font-medium">Diese Frau</span> arbeitet. → Ich sehe <span class="case-akk font-medium">diese Frau</span>. → Ich spreche mit <span class="case-dat font-medium">dieser Frau</span>.</p>
</div>`,
      },
      {
        title: "Женские формы профессий: -in / -innen",
        content: `<p class="mb-3 text-muted-foreground">Для женской формы добавляется <strong>-in</strong>, во множественном числе <strong>-innen</strong>:</p>
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead><tr class="border-b border-border">
  <th class="text-left py-2 pr-3 font-semibold text-muted-foreground">Мужчина</th>
  <th class="py-2 px-3 font-semibold">Женщина</th>
  <th class="py-2 px-3 font-semibold">Множественное</th>
</tr></thead>
<tbody>
  <tr class="border-b border-border/50"><td class="py-2 pr-3">der Mitarbeiter</td><td class="py-2 px-3">die Mitarbeiter<span class="case-akk font-bold">in</span></td><td class="py-2 px-3">die Mitarbeiter<span class="case-akk font-bold">innen</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3">der Kollege</td><td class="py-2 px-3">die Kolleg<span class="case-akk font-bold">in</span></td><td class="py-2 px-3">die Kolleg<span class="case-akk font-bold">innen</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3">der Arzt</td><td class="py-2 px-3">die <span class="case-akk font-bold">Ä</span>rzt<span class="case-akk font-bold">in</span></td><td class="py-2 px-3">die <span class="case-akk font-bold">Ä</span>rzt<span class="case-akk font-bold">innen</span></td></tr>
  <tr class="border-b border-border/50"><td class="py-2 pr-3">der Elektriker</td><td class="py-2 px-3">die Elektriker<span class="case-akk font-bold">in</span></td><td class="py-2 px-3">die Elektriker<span class="case-akk font-bold">innen</span></td></tr>
  <tr><td class="py-2 pr-3">der Ingenieur</td><td class="py-2 px-3">die Ingenieur<span class="case-akk font-bold">in</span></td><td class="py-2 px-3">die Ingenieur<span class="case-akk font-bold">innen</span></td></tr>
</tbody>
</table>
</div>
<p class="mt-3 text-sm text-muted-foreground">⚠️ Иногда меняется гласная: <strong>Arzt → Ärztin</strong></p>`,
      },
      {
        title: "Как выбирать форму: 4 шага",
        content: `<div class="space-y-3">
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
    <div><span class="font-semibold">Найди существительное:</span> <span class="text-muted-foreground text-sm">Freund, Familie, Buch, Freunde</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
    <div><span class="font-semibold">Определи род:</span> <span class="text-muted-foreground text-sm"><span class="case-nom">der</span> Freund, <span class="case-nom">die</span> Familie, <span class="case-nom">das</span> Buch</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
    <div><span class="font-semibold">Посмотри на вопрос / предлог:</span> <span class="text-muted-foreground text-sm">Wer? → Nom. | Wen? → Akk. | mit/von/bei/zu/nach → Dat.</span></div>
  </div>
  <div class="flex items-start gap-3 p-3 bg-muted rounded-lg">
    <span class="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">4</span>
    <div><span class="font-semibold">Поставь правильную форму:</span> <span class="text-muted-foreground text-sm">mein → meinen → meinem</span></div>
  </div>
</div>`,
      },
      {
        title: "Частые ошибки ❌ → ✅",
        content: `<div class="space-y-3">
  <div class="p-3 bg-muted rounded-lg">
    <p class="text-sm"><span class="case-dat">❌</span> mit <strong>mein</strong> Freund</p>
    <p class="text-sm"><span class="case-akk">✅</span> mit <span class="case-dat font-bold">meinem</span> Freund <span class="text-muted-foreground text-xs">(mit → Dativ, mask.)</span></p>
  </div>
  <div class="p-3 bg-muted rounded-lg">
    <p class="text-sm"><span class="case-dat">❌</span> mit <strong>meine</strong> Familie</p>
    <p class="text-sm"><span class="case-akk">✅</span> mit <span class="case-dat font-bold">meiner</span> Familie <span class="text-muted-foreground text-xs">(mit → Dativ, fem.)</span></p>
  </div>
  <div class="p-3 bg-muted rounded-lg">
    <p class="text-sm"><span class="case-dat">❌</span> mit <strong>meine</strong> Freunde</p>
    <p class="text-sm"><span class="case-akk">✅</span> mit <span class="case-dat font-bold">meinen</span> Freund<span class="case-dat font-bold">en</span> <span class="text-muted-foreground text-xs">(mit → Dativ, Plural + n)</span></p>
  </div>
</div>`,
      },
    ],
    examples: [
      { de: '<span class="case-nom font-bold">Der Mann</span> arbeitet.', en: "Мужчина работает." },
      { de: 'Ich sehe <span class="case-akk font-bold">den Mann</span>.', en: "Я вижу мужчину." },
      { de: 'Ich helfe <span class="case-dat font-bold">dem Mann</span>.', en: "Я помогаю мужчине." },
      { de: 'Ich gehe mit <span class="case-dat font-bold">meinem Freund</span>.', en: "Я иду с моим другом." },
      { de: 'Ich spreche mit <span class="case-dat font-bold">meiner Kollegin</span>.', en: "Я говорю с моей коллегой." },
      { de: 'Ich spiele mit <span class="case-dat font-bold">meinen Freunden</span>.', en: "Я играю с моими друзьями." },
      { de: 'Aman ist gerne mit <span class="case-dat font-bold">seiner Familie</span> zusammen.', en: "Аман любит быть со своей семьёй." },
      { de: 'Nach <span class="case-dat font-bold">der Arbeit</span> gehe ich nach Hause.', en: "После работы я иду домой." },
      { de: '<span class="case-nom font-bold">Dieser Mann</span> ist freundlich.', en: "Этот мужчина дружелюбный." },
      { de: 'Ich helfe <span class="case-dat font-bold">diesem Mann</span>.', en: "Я помогаю этому мужчине." },
    ],
    test: [
      { sentence: "Ich gehe mit ___ Freund. (mein, mask.)", answer: "meinem" },
      { sentence: "Ich spreche mit ___ Mutter. (mein, fem.)", answer: "meiner" },
      { sentence: "Ich spiele mit ___ Freunden. (mein, Pl.)", answer: "meinen" },
      { sentence: "Ich sehe ___ Freund. (mein, mask.)", answer: "meinen" },
      { sentence: "Ich helfe ___ Freund. (mein, mask.)", answer: "meinem" },
      { sentence: "Das ist ___ Familie. (mein, fem. Nom.)", answer: "meine" },
      { sentence: "Ich liebe ___ Familie. (mein, fem. Akk.)", answer: "meine" },
      { sentence: "Ich bin mit ___ Familie zusammen. (mein, fem.)", answer: "meiner" },
      { sentence: "Er arbeitet mit ___ Kollegen. (sein, mask.)", answer: "seinem" },
      { sentence: "Sie geht zu ___ Arzt. (ihr, mask.)", answer: "ihrem" },
      { sentence: "___ Mann kommt. (dieser, Nom.)", answer: "Dieser" },
      { sentence: "Ich sehe ___ Mann. (dieser, Akk.)", answer: "diesen" },
      { sentence: "Ich helfe ___ Mann. (dieser, Dat.)", answer: "diesem" },
      { sentence: "Ich spreche mit ___ Frau. (dieser, Dat.)", answer: "dieser" },
      { sentence: "___ Kind spielt. (dieses, Nom.)", answer: "Dieses" },
      { sentence: "Nach ___ Arbeit gehe ich nach Hause. (die, Dat.)", answer: "der" },
      { sentence: "Ich gehe zu ___ Arzt. (mein, mask.)", answer: "meinem" },
      { sentence: "Eine Nachricht von ___ Kollegin. (mein, fem.)", answer: "meiner" },
      { sentence: "Die Mitarbeiterin → die Mitarbeiter___ (Plural)", answer: "innen" },
      { sentence: "Der Arzt → die ___ (fem.)", answer: "Ärztin" },
    ],
  },
  {
    id: "l26",
    date: "26. März",
    title: 'Konjunktion „dass" & Nebensätze',
    subtitle: "Придаточные предложения с dass — слухи, мнения, аргументы. Глагол в конце!",
    grammar: [
      {
        title: 'Was ist „dass"?',
        content: `
          <p class="mb-3"><strong>dass</strong> = <em>что</em> (союз, <strong>не</strong> артикль <em>das</em>!)</p>
          <p class="mb-2">Он соединяет два предложения:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li><strong>Hauptsatz</strong> (главное) — я думаю / я слышал</li>
            <li><strong>Nebensatz</strong> (придаточное) — что произошло</li>
          </ul>
          <div class="bg-muted p-4 rounded-xl text-sm space-y-1">
            <p>👉 Ich <strong>glaube</strong>, dass …</p>
            <p>👉 Ich <strong>finde</strong>, dass …</p>
            <p>👉 Ich <strong>denke</strong>, dass …</p>
            <p>👉 Ich <strong>weiß</strong>, dass …</p>
            <p>👉 Ich <strong>habe gehört</strong>, dass …</p>
          </div>
        `,
      },
      {
        title: "🔥 Главное правило: глагол В КОНЦЕ!",
        content: `
          <div class="bg-primary/10 border border-primary/30 p-4 rounded-xl mb-4">
            <p class="font-bold text-lg mb-2">Формула:</p>
            <p>Hauptsatz + <span class="text-primary font-bold">, dass</span> + … + <span class="text-primary font-bold">глагол ⬇️ в конце</span></p>
          </div>
          <div class="space-y-3 text-sm">
            <div class="bg-muted p-3 rounded-lg">
              <p>Ich <strong>glaube</strong>, dass er gut <span class="text-case-akk font-bold">arbeitet</span>.</p>
              <p class="text-muted-foreground text-xs mt-1">Я думаю, что он хорошо работает</p>
            </div>
            <div class="bg-muted p-3 rounded-lg">
              <p>Ich habe <strong>gehört</strong>, dass Jana die Prämie <span class="text-case-akk font-bold">gewonnen hat</span>.</p>
              <p class="text-muted-foreground text-xs mt-1">Я слышал, что Яна выиграла премию</p>
            </div>
            <div class="bg-muted p-3 rounded-lg">
              <p>Ich <strong>finde</strong>, dass das richtig <span class="text-case-akk font-bold">ist</span>.</p>
              <p class="text-muted-foreground text-xs mt-1">Я считаю, что это правильно</p>
            </div>
          </div>
        `,
      },
      {
        title: "Почему глагол в конце?",
        content: `
          <p class="mb-3">Потому что <strong>dass</strong> начинает <em>Nebensatz</em> (придаточное предложение).</p>
          <p class="mb-3">👉 <strong>Все</strong> придаточные предложения в немецком = глагол в конце.</p>
          <div class="bg-muted p-4 rounded-xl">
            <p class="text-sm mb-2"><strong>Perfekt в Nebensatz:</strong></p>
            <p class="text-sm">… dass Jana gewonnen <span class="text-case-akk font-bold">hat</span></p>
            <p class="text-xs text-muted-foreground">haben/sein идёт самым последним!</p>
          </div>
        `,
      },
      {
        title: "Gerüchte (слухи) — передаём информацию",
        content: `
          <p class="mb-3">Gerüchte = слухи. Мы не уверены, правда ли это.</p>
          <table class="w-full text-sm border-collapse mb-4">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-3">Фраза</th>
                <th class="text-left py-2">Значение</th>
              </tr>
            </thead>
            <tbody class="space-y-1">
              <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Hast du gehört, dass…</td><td class="py-2">Ты слышал, что…</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Weißt du schon, dass…</td><td class="py-2">Ты уже знаешь, что…</td></tr>
              <tr class="border-b border-border/50"><td class="py-2 pr-3 font-medium">Ich glaube, dass…</td><td class="py-2">Я думаю, что…</td></tr>
              <tr><td class="py-2 pr-3 font-medium">Ich finde, dass…</td><td class="py-2">Я считаю, что…</td></tr>
            </tbody>
          </table>
        `,
      },
      {
        title: "Реакции и мнения",
        content: `
          <div class="space-y-3 text-sm">
            <div class="flex gap-2 items-start"><span class="text-case-akk font-bold">✔ Согласие:</span><span>Ich finde, dass sie das verdient haben.</span></div>
            <div class="flex gap-2 items-start"><span class="text-case-dat font-bold">❓ Сомнение:</span><span>Ist das wahr?</span></div>
            <div class="flex gap-2 items-start"><span class="text-case-nom font-bold">💬 Мнение:</span><span>Ich denke, dass Jana zu viel macht.</span></div>
            <div class="flex gap-2 items-start"><span class="text-primary font-bold">💡 Аргумент:</span><span>Vergiss nicht, dass sie viel organisiert.</span></div>
          </div>
        `,
      },
      {
        title: "❌ Типичные ошибки",
        content: `
          <div class="space-y-4 text-sm">
            <div class="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-xl">
              <p class="text-case-dat font-bold mb-1">❌ Неправильно:</p>
              <p>Ich glaube, dass er <strong>ist</strong> müde.</p>
              <p class="text-case-akk font-bold mt-2 mb-1">✅ Правильно:</p>
              <p>Ich glaube, dass er müde <strong>ist</strong>.</p>
            </div>
            <div class="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-xl">
              <p class="text-case-dat font-bold mb-1">❌ Неправильно:</p>
              <p>Ich habe gehört, dass Jana <strong>hat</strong> gewonnen.</p>
              <p class="text-case-akk font-bold mt-2 mb-1">✅ Правильно:</p>
              <p>Ich habe gehört, dass Jana gewonnen <strong>hat</strong>.</p>
            </div>
          </div>
        `,
      },
      {
        title: "Мини-шаблоны для запоминания",
        content: `
          <div class="bg-muted p-4 rounded-xl space-y-2 text-sm">
            <p>📌 Ich <strong>glaube</strong>, dass + … + <span class="text-primary font-bold">Verb</span></p>
            <p>📌 Ich <strong>finde</strong>, dass + … + <span class="text-primary font-bold">Verb</span></p>
            <p>📌 Ich <strong>weiß</strong>, dass + … + <span class="text-primary font-bold">Verb</span></p>
            <p>📌 Ich <strong>habe gehört</strong>, dass + … + <span class="text-primary font-bold">Partizip + hat/ist</span></p>
          </div>
        `,
      },
    ],
    examples: [
      { de: "Ich <span class='text-case-nom font-semibold'>glaube</span>, dass er gut <span class='text-case-akk font-semibold'>arbeitet</span>.", en: "Я думаю, что он хорошо работает" },
      { de: "Ich habe <span class='text-case-nom font-semibold'>gehört</span>, dass Jana die Prämie <span class='text-case-akk font-semibold'>gewonnen hat</span>.", en: "Я слышал, что Яна выиграла премию" },
      { de: "Ich <span class='text-case-nom font-semibold'>finde</span>, dass das richtig <span class='text-case-akk font-semibold'>ist</span>.", en: "Я считаю, что это правильно" },
      { de: "<span class='text-case-nom font-semibold'>Hast du gehört</span>, dass Jana und Aman Mitarbeiter des Jahres <span class='text-case-akk font-semibold'>sind</span>?", en: "Ты слышал, что Яна и Аман — сотрудники года?" },
      { de: "<span class='text-case-nom font-semibold'>Weißt du schon</span>, dass Jana und Aman die Gewinner <span class='text-case-akk font-semibold'>sind</span>?", en: "Ты уже знаешь, что они победители?" },
      { de: "<span class='text-case-nom font-semibold'>Findest du nicht</span>, dass Nina das auch <span class='text-case-akk font-semibold'>verdient hat</span>?", en: "Не считаешь, что Нина тоже это заслужила?" },
      { de: "<span class='text-case-nom font-semibold'>Vergiss nicht</span>, dass Jana den Betriebsausflug <span class='text-case-akk font-semibold'>organisiert</span>.", en: "Не забывай, что Яна организует корпоратив" },
      { de: "Ich <span class='text-case-nom font-semibold'>denke</span>, dass er viel <span class='text-case-akk font-semibold'>arbeitet</span>.", en: "Я думаю, что он много работает" },
      { de: "Ich <span class='text-case-nom font-semibold'>weiß</span>, dass du Deutsch <span class='text-case-akk font-semibold'>lernst</span>.", en: "Я знаю, что ты учишь немецкий" },
      { de: "Ich habe <span class='text-case-nom font-semibold'>gehört</span>, dass sie zu Hause <span class='text-case-akk font-semibold'>ist</span>.", en: "Я слышал, что она дома" },
    ],
    test: [
      { sentence: "Ich glaube, dass er gut ___ . (arbeiten)", answer: "arbeitet" },
      { sentence: "Ich finde, dass das richtig ___ . (sein)", answer: "ist" },
      { sentence: "Ich habe gehört, dass Jana gewonnen ___ . (haben)", answer: "hat" },
      { sentence: "Ich denke, dass er müde ___ . (sein)", answer: "ist" },
      { sentence: "Weißt du, dass sie die Gewinnerin ___ ? (sein)", answer: "ist" },
      { sentence: "Ich glaube, ___ er viel arbeitet. (Konjunktion)", answer: "dass" },
      { sentence: "Ich habe gehört, ___ Jana die Prämie gewonnen hat. (Konjunktion)", answer: "dass" },
      { sentence: "Ich finde, dass sie das verdient ___ . (haben)", answer: "hat" },
      { sentence: "Vergiss nicht, dass Jana den Ausflug ___ . (organisieren)", answer: "organisiert" },
      { sentence: "Ich weiß, dass du Deutsch ___ . (lernen)", answer: "lernst" },
      { sentence: "Hast du gehört, dass Aman nach Wien ___ ? (fahren, Perfekt)", answer: "gefahren ist" },
      { sentence: "Ich denke, dass sie zu Hause ___ . (sein)", answer: "ist" },
      { sentence: "Ich glaube, dass er Pizza ___ . (essen, Perfekt)", answer: "gegessen hat" },
      { sentence: "Weißt du schon, ___ sie gewonnen haben? (Konjunktion)", answer: "dass" },
      { sentence: "Findest du nicht, dass Nina das auch verdient ___ ? (haben)", answer: "hat" },
      { sentence: "Ich habe gehört, dass er nach Hause ___ . (gehen, Perfekt)", answer: "gegangen ist" },
      { sentence: "Ich finde, ___ das gut ist. (Konjunktion)", answer: "dass" },
      { sentence: "Ich glaube, dass sie Kaffee ___ . (trinken)", answer: "trinkt" },
      { sentence: "Vergiss nicht, ___ er viel organisiert. (Konjunktion)", answer: "dass" },
      { sentence: "Ich weiß, dass er in einer Firma ___ . (arbeiten)", answer: "arbeitet" },
    ],
  },
  {
    id: "l27",
    date: "27. März",
    title: "dass-Sätze & Nebensatz (Vertiefung)",
    subtitle: "Konjunktion dass, Verben mit dass, Gerüchte, Alltag & Dialoge.",
    grammar: [
      {
        title: "Was ist dass?",
        content: `<p class="mb-3">👉 <strong>dass</strong> = <em>что</em> (по-русски)</p>
<p class="mb-3">Это <strong>союз</strong> (Konjunktion), а <strong>НЕ</strong> артикль!</p>
<div class="bg-muted rounded-xl border border-dashed border-border p-4 sm:p-6 mb-4">
  <p class="text-base sm:text-lg font-medium">Ich <span class="text-case-nom font-bold">glaube</span>, <span class="text-case-akk font-bold">dass</span> er <span class="text-case-dat font-bold">arbeitet</span>.</p>
  <p class="text-sm text-muted-foreground mt-1">Я думаю, <em>что</em> он работает</p>
</div>
<p class="text-muted-foreground">Он соединяет <strong>главное предложение</strong> (Hauptsatz) с <strong>придаточным</strong> (Nebensatz).</p>`,
      },
      {
        title: "🔥 Главное правило: глагол В КОНЦЕ",
        content: `<p class="mb-4">После <strong>dass</strong> глагол всегда стоит <strong>в конце</strong> предложения!</p>
<div class="flex flex-wrap items-center gap-3 text-base sm:text-lg font-medium p-4 sm:p-6 bg-muted rounded-xl border border-dashed border-border mb-4">
  <span class="text-case-nom font-bold">Hauptsatz</span>
  <span class="text-muted-foreground">+</span>
  <span class="text-case-akk font-bold">, dass</span>
  <span class="text-muted-foreground">+ … +</span>
  <span class="text-case-dat font-bold">Verb ⬅️</span>
</div>
<div class="space-y-2">
  <p>✅ Ich finde, dass Deutsch interessant <strong>ist</strong>.</p>
  <p>✅ Ich habe gehört, dass Jana die Prämie gewonnen <strong>hat</strong>.</p>
  <p class="text-destructive mt-3">❌ Ich glaube, dass er <s>ist</s> müde → ❌</p>
  <p class="text-case-akk">✅ Ich glaube, dass er müde <strong>ist</strong> → ✅</p>
</div>`,
      },
      {
        title: "Perfekt в dass-Sätze",
        content: `<p class="mb-3">Если в придаточном <strong>Perfekt</strong> — оба глагола идут в конец:</p>
<div class="bg-muted rounded-xl border border-dashed border-border p-4 sm:p-6 mb-4 space-y-2">
  <p class="font-medium">Ich glaube, dass ich gut <span class="text-case-akk font-bold">gelernt</span> <span class="text-case-dat font-bold">habe</span>.</p>
  <p class="text-sm text-muted-foreground">Partizip II → сначала, haben/sein → потом</p>
</div>
<div class="space-y-2 text-sm">
  <p class="text-destructive">❌ … dass Jana <s>hat gewonnen</s></p>
  <p class="text-case-akk">✅ … dass Jana gewonnen <strong>hat</strong></p>
  <p class="text-destructive">❌ … dass er <s>ist gefahren</s></p>
  <p class="text-case-akk">✅ … dass er nach Wien gefahren <strong>ist</strong></p>
</div>`,
      },
      {
        title: "Важные глаголы с dass",
        content: `<div class="overflow-x-auto">
<table class="w-full text-sm">
  <thead><tr class="border-b border-border">
    <th class="text-left py-2 px-3 font-bold">Глагол</th>
    <th class="text-left py-2 px-3 font-bold">Перевод</th>
    <th class="text-left py-2 px-3 font-bold">Пример</th>
  </tr></thead>
  <tbody class="divide-y divide-border">
    <tr><td class="py-2 px-3 text-case-nom font-semibold">finden</td><td class="py-2 px-3">считать</td><td class="py-2 px-3">Ich finde, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">glauben</td><td class="py-2 px-3">верить, думать</td><td class="py-2 px-3">Ich glaube, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">denken</td><td class="py-2 px-3">думать</td><td class="py-2 px-3">Ich denke, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">sagen</td><td class="py-2 px-3">говорить</td><td class="py-2 px-3">Er sagt, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">meinen</td><td class="py-2 px-3">считать</td><td class="py-2 px-3">Sie meint, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">wissen</td><td class="py-2 px-3">знать</td><td class="py-2 px-3">Ich weiß, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">erzählen</td><td class="py-2 px-3">рассказывать</td><td class="py-2 px-3">Er erzählt, dass…</td></tr>
    <tr><td class="py-2 px-3 text-case-nom font-semibold">vergessen</td><td class="py-2 px-3">забывать</td><td class="py-2 px-3">Vergiss nicht, dass…</td></tr>
  </tbody>
</table>
</div>`,
      },
      {
        title: "Konjugation: finden",
        content: `<div class="overflow-x-auto">
<table class="w-full text-sm">
  <thead><tr class="border-b border-border">
    <th class="text-left py-2 px-3 font-bold">Pronomen</th>
    <th class="text-left py-2 px-3 font-bold">Form</th>
  </tr></thead>
  <tbody class="divide-y divide-border">
    <tr><td class="py-2 px-3">ich</td><td class="py-2 px-3 text-case-nom font-semibold">finde</td></tr>
    <tr><td class="py-2 px-3">du</td><td class="py-2 px-3 text-case-nom font-semibold">findest</td></tr>
    <tr><td class="py-2 px-3">er/sie/es</td><td class="py-2 px-3 text-case-nom font-semibold">findet</td></tr>
    <tr><td class="py-2 px-3">wir</td><td class="py-2 px-3 text-case-nom font-semibold">finden</td></tr>
    <tr><td class="py-2 px-3">ihr</td><td class="py-2 px-3 text-case-nom font-semibold">findet</td></tr>
    <tr><td class="py-2 px-3">sie/Sie</td><td class="py-2 px-3 text-case-nom font-semibold">finden</td></tr>
  </tbody>
</table>
</div>`,
      },
      {
        title: "Gerüchte (слухи) — шаблоны",
        content: `<div class="space-y-3">
  <p class="font-medium">Начало фразы:</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <div class="bg-muted rounded-lg p-3 border border-border"><span class="text-case-nom font-bold">Hast du gehört</span>, dass…</div>
    <div class="bg-muted rounded-lg p-3 border border-border"><span class="text-case-nom font-bold">Weißt du schon</span>, dass…</div>
    <div class="bg-muted rounded-lg p-3 border border-border"><span class="text-case-nom font-bold">Ich glaube</span>, dass…</div>
    <div class="bg-muted rounded-lg p-3 border border-border"><span class="text-case-nom font-bold">Ich finde</span>, dass…</div>
  </div>
  <p class="text-sm text-muted-foreground mt-2">Реакции: <strong>Ist das wahr?</strong> / <strong>Das stimmt!</strong> / <strong>Ich denke, dass…</strong></p>
</div>`,
      },
      {
        title: "Alltag & Freizeit с dass",
        content: `<div class="space-y-3">
  <p class="mb-2">Рассказывай о себе, используя dass:</p>
  <div class="bg-muted rounded-xl border border-dashed border-border p-4 space-y-2">
    <p>Ich <strong>mache</strong> einen Deutschkurs.</p>
    <p>Der Kurs ist <strong>von 11 bis 14 Uhr</strong>.</p>
    <p>Nach dem Kurs gehe ich <strong>ins Fitnessstudio</strong>.</p>
  </div>
  <p class="mt-3 font-medium">С dass:</p>
  <div class="bg-muted rounded-xl border border-dashed border-border p-4 space-y-2">
    <p>Ich denke, <strong>dass</strong> ich viel <strong>lerne</strong>.</p>
    <p>Ich finde, <strong>dass</strong> der Kurs gut <strong>ist</strong>.</p>
  </div>
</div>`,
      },
      {
        title: "Dialoge & Anzeigen",
        content: `<div class="space-y-4">
  <div>
    <p class="font-semibold mb-2">Вопрос — Ответ:</p>
    <div class="bg-muted rounded-xl border border-dashed border-border p-4 space-y-2 text-sm">
      <p>— <strong>Hast du Zeit?</strong></p>
      <p>— Ja, ich habe Zeit / Nein, ich habe <strong>keine</strong> Zeit.</p>
      <p>— <strong>Wann hast du Zeit?</strong></p>
      <p>— Um 18 Uhr / Am Montag.</p>
    </div>
  </div>
  <div>
    <p class="font-semibold mb-2">Anzeigen — темы объявлений:</p>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Essen</span>
      <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Sport</span>
      <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Einkaufen</span>
      <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Besichtigung</span>
    </div>
  </div>
</div>`,
      },
    ],
    examples: [
      { de: "Ich <span class='text-case-nom font-semibold'>glaube</span>, dass er gut <span class='text-case-akk font-semibold'>arbeitet</span>.", en: "Я думаю, что он хорошо работает" },
      { de: "Ich <span class='text-case-nom font-semibold'>finde</span>, dass Deutsch interessant <span class='text-case-akk font-semibold'>ist</span>.", en: "Я считаю, что немецкий интересный" },
      { de: "Ich habe <span class='text-case-nom font-semibold'>gehört</span>, dass Jana die Prämie gewonnen <span class='text-case-akk font-semibold'>hat</span>.", en: "Я слышал, что Яна выиграла премию" },
      { de: "Er <span class='text-case-nom font-semibold'>sagt</span>, dass er morgen <span class='text-case-akk font-semibold'>kommt</span>.", en: "Он говорит, что придёт завтра" },
      { de: "<span class='text-case-nom font-semibold'>Weißt du schon</span>, dass sie die Gewinnerin <span class='text-case-akk font-semibold'>ist</span>?", en: "Ты уже знаешь, что она победительница?" },
      { de: "Ich <span class='text-case-nom font-semibold'>denke</span>, dass ich viel <span class='text-case-akk font-semibold'>lerne</span>.", en: "Я думаю, что я много учусь" },
      { de: "<span class='text-case-nom font-semibold'>Vergiss nicht</span>, dass er viel <span class='text-case-akk font-semibold'>organisiert</span>.", en: "Не забывай, что он много организует" },
      { de: "Sie <span class='text-case-nom font-semibold'>erzählt</span>, dass sie nach Wien gefahren <span class='text-case-akk font-semibold'>ist</span>.", en: "Она рассказывает, что ездила в Вену" },
      { de: "Ich <span class='text-case-nom font-semibold'>finde</span>, dass der Kurs gut <span class='text-case-akk font-semibold'>ist</span>.", en: "Я считаю, что курс хороший" },
      { de: "Ich <span class='text-case-nom font-semibold'>mache</span> einen Deutschkurs. Der Kurs ist <span class='text-case-akk font-semibold'>von 11 bis 14 Uhr</span>.", en: "Я хожу на курс немецкого. Курс с 11 до 14." },
    ],
    test: [
      { sentence: "Ich glaube, dass er gut ___ . (arbeiten)", answer: "arbeitet" },
      { sentence: "Ich finde, dass Deutsch interessant ___ . (sein)", answer: "ist" },
      { sentence: "Ich habe gehört, dass Jana gewonnen ___ . (haben)", answer: "hat" },
      { sentence: "Ich denke, dass er müde ___ . (sein)", answer: "ist" },
      { sentence: "Ich glaube, ___ er viel arbeitet. (Konjunktion)", answer: "dass" },
      { sentence: "Er sagt, dass er morgen ___ . (kommen)", answer: "kommt" },
      { sentence: "Weißt du, dass sie nach Wien gefahren ___ ? (sein)", answer: "ist" },
      { sentence: "Ich finde, dass der Kurs gut ___ . (sein)", answer: "ist" },
      { sentence: "Vergiss nicht, ___ er viel organisiert. (Konjunktion)", answer: "dass" },
      { sentence: "Ich weiß, dass du Deutsch ___ . (lernen)", answer: "lernst" },
      { sentence: "Sie erzählt, dass sie Pizza ___ . (essen, Perfekt)", answer: "gegessen hat" },
      { sentence: "Ich glaube, dass ich gut ___ . (lernen, Perfekt)", answer: "gelernt habe" },
      { sentence: "Hast du gehört, ___ Jana die Prämie gewonnen hat? (Konjunktion)", answer: "dass" },
      { sentence: "Ich finde, ___ das richtig ist. (Konjunktion)", answer: "dass" },
      { sentence: "Er meint, dass sie zu Hause ___ . (sein)", answer: "ist" },
      { sentence: "Ich denke, dass ich viel ___ . (lernen)", answer: "lerne" },
      { sentence: "ich / du / er — finden: ich ___ , du findest, er findet", answer: "finde" },
      { sentence: "Hast du ___? — Ja, um 18 Uhr. (Zeit)", answer: "Zeit" },
      { sentence: "Nach dem Kurs ___ ich ins Fitnessstudio. (gehen)", answer: "gehe" },
      { sentence: "Ich habe gehört, dass er nach Hause ___ . (gehen, Perfekt)", answer: "gegangen ist" },
    ],
  },
  {
    id: "l31",
    date: "31. März",
    title: "Kleidung, Bildbeschreibung & Meinung",
    subtitle: "Одежда, описание картинки, dass-Sätze и как выражать мнение.",
    grammar: [
      {
        title: "1. Kleidung (Одежда)",
        content: `<p class="mb-3">Важные слова:</p>
<div class="overflow-x-auto"><table class="w-full text-sm">
<thead><tr class="border-b border-border">
<th class="text-left py-2 px-3 font-bold">Deutsch</th>
<th class="text-left py-2 px-3 font-bold">Русский</th>
<th class="text-left py-2 px-3 font-bold">Artikel</th>
</tr></thead>
<tbody>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Hose</td><td class="py-2 px-3">штаны</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Jeans</td><td class="py-2 px-3">джинсы</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Jogginghose</td><td class="py-2 px-3">спортивные штаны</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Leggings</td><td class="py-2 px-3">леггинсы</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">das T-Shirt</td><td class="py-2 px-3">футболка</td><td class="py-2 px-3 text-case-nom">das</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">das Hemd</td><td class="py-2 px-3">рубашка</td><td class="py-2 px-3 text-case-nom">das</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">das Kleid</td><td class="py-2 px-3">платье</td><td class="py-2 px-3 text-case-nom">das</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Schuhe</td><td class="py-2 px-3">обувь</td><td class="py-2 px-3 text-case-dat">die (Pl.)</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Jacke</td><td class="py-2 px-3">куртка</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">der Pullover</td><td class="py-2 px-3">свитер</td><td class="py-2 px-3 text-case-akk">der</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">der Rock</td><td class="py-2 px-3">юбка</td><td class="py-2 px-3 text-case-akk">der</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">der Mantel</td><td class="py-2 px-3">пальто</td><td class="py-2 px-3 text-case-akk">der</td></tr>
<tr class="border-b border-border/50"><td class="py-2 px-3 font-medium">die Mütze</td><td class="py-2 px-3">шапка</td><td class="py-2 px-3 text-case-dat">die</td></tr>
<tr><td class="py-2 px-3 font-medium">der Schal</td><td class="py-2 px-3">шарф</td><td class="py-2 px-3 text-case-akk">der</td></tr>
</tbody></table></div>
<p class="mt-4 p-3 bg-muted rounded-lg text-sm"><span class="font-bold">Формула:</span> <span class="text-case-verb font-semibold">Ich trage</span> + <span class="text-case-akk font-semibold">Akkusativ</span><br/>→ Ich trage <span class="text-case-akk font-semibold">ein T-Shirt</span>.<br/>→ Ich trage <span class="text-case-akk font-semibold">Jeans</span>.</p>`,
      },
      {
        title: "2. Bildbeschreibung (Описание картинки — экзамен!)",
        content: `<p class="mb-3">Структура для описания картинки на экзамене:</p>
<div class="space-y-2 p-4 bg-muted rounded-xl border border-dashed border-border">
  <p><span class="text-case-nom font-bold">1.</span> Auf dem Bild sehe ich…</p>
  <p><span class="text-case-nom font-bold">2.</span> Es gibt…</p>
  <p><span class="text-case-nom font-bold">3.</span> Sie sind… (wo?)</p>
  <p><span class="text-case-nom font-bold">4.</span> Sie machen…</p>
  <p><span class="text-case-nom font-bold">5.</span> Ich denke, dass…</p>
</div>
<div class="mt-4 p-4 bg-primary/5 rounded-xl">
  <p class="font-bold mb-2">🔥 Пример:</p>
  <p class="italic">Auf dem Bild sehe ich <span class="text-case-akk font-semibold">eine Familie</span>.</p>
  <p class="italic">Sie sind <span class="text-case-dat font-semibold">zu Hause</span>.</p>
  <p class="italic">Die Mutter <span class="text-case-verb font-semibold">probiert</span> ein Kleid.</p>
  <p class="italic">Ich denke, dass sie einkaufen <span class="text-case-verb font-semibold">gehen</span>.</p>
</div>`,
      },
      {
        title: "3. Meinung ausdrücken (Выражение мнения)",
        content: `<div class="space-y-4">
<div class="p-4 bg-muted rounded-xl">
  <p class="font-bold text-case-akk mb-2">finden + Akkusativ</p>
  <p>→ Ich <span class="text-case-verb font-semibold">finde</span> das Kleid <span class="text-case-akk font-semibold">schön</span>.</p>
  <p>→ Ich <span class="text-case-verb font-semibold">finde</span> die Schuhe <span class="text-case-akk font-semibold">super</span>.</p>
</div>
<div class="p-4 bg-muted rounded-xl">
  <p class="font-bold text-case-dat mb-2">gefallen + Dativ</p>
  <p>→ Die Schuhe <span class="text-case-verb font-semibold">gefallen</span> <span class="text-case-dat font-semibold">mir</span>.</p>
  <p>→ Das Kleid <span class="text-case-verb font-semibold">gefällt</span> <span class="text-case-dat font-semibold">dir</span>.</p>
</div>
<div class="p-4 bg-muted rounded-xl">
  <p class="font-bold text-case-nom mb-2">stehen + Dativ (идёт / подходит)</p>
  <p>→ Das <span class="text-case-verb font-semibold">steht</span> <span class="text-case-dat font-semibold">dir</span> gut!</p>
  <p>→ Die Farbe <span class="text-case-verb font-semibold">steht</span> <span class="text-case-dat font-semibold">dir</span> nicht.</p>
</div>
</div>`,
      },
      {
        title: "4. dass-Sätze (Повторение)",
        content: `<p class="mb-3">Главное правило: после <span class="font-bold text-primary">dass</span> глагол идёт <span class="font-bold text-primary">в конец</span>!</p>
<div class="p-4 bg-muted rounded-xl border border-dashed border-border mb-4">
  <p class="font-mono text-sm">Hauptsatz + , <span class="text-primary font-bold">dass</span> + … + <span class="text-case-verb font-bold">Verb</span></p>
</div>
<div class="space-y-2">
  <p>→ Ich denke, <span class="text-primary font-semibold">dass</span> das Kleid schön <span class="text-case-verb font-semibold">ist</span>.</p>
  <p>→ Ich glaube, <span class="text-primary font-semibold">dass</span> die Preise hoch <span class="text-case-verb font-semibold">sind</span>.</p>
  <p>→ Hast du gehört, <span class="text-primary font-semibold">dass</span> Jana gewonnen <span class="text-case-verb font-semibold">hat</span>?</p>
</div>`,
      },
      {
        title: "5. Perfekt (Повторение)",
        content: `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div class="p-4 bg-muted rounded-xl">
  <p class="font-bold text-case-dat mb-2">sein (движение)</p>
  <p>gehen → <span class="font-semibold">ist gegangen</span></p>
  <p>fahren → <span class="font-semibold">ist gefahren</span></p>
  <p>fliegen → <span class="font-semibold">ist geflogen</span></p>
</div>
<div class="p-4 bg-muted rounded-xl">
  <p class="font-bold text-case-akk mb-2">haben (остальные)</p>
  <p>machen → <span class="font-semibold">hat gemacht</span></p>
  <p>kaufen → <span class="font-semibold">hat gekauft</span></p>
  <p>sehen → <span class="font-semibold">hat gesehen</span></p>
</div>
</div>`,
      },
      {
        title: "6. Wichtige Fragen & Antworten",
        content: `<div class="space-y-3">
<div class="p-3 bg-muted rounded-lg">
  <p class="text-case-nom font-semibold">Was ziehst du an?</p>
  <p class="text-muted-foreground text-sm">→ Ich ziehe Jeans und ein T-Shirt an.</p>
</div>
<div class="p-3 bg-muted rounded-lg">
  <p class="text-case-nom font-semibold">Was kaufst du gern?</p>
  <p class="text-muted-foreground text-sm">→ Ich kaufe gern Kleidung.</p>
</div>
<div class="p-3 bg-muted rounded-lg">
  <p class="text-case-nom font-semibold">Mit wem gehst du einkaufen?</p>
  <p class="text-muted-foreground text-sm">→ Ich gehe mit meinen Freunden einkaufen.</p>
</div>
<div class="p-3 bg-muted rounded-lg">
  <p class="text-case-nom font-semibold">Was soll ich anziehen?</p>
  <p class="text-muted-foreground text-sm">→ Das passt dir gut! / Das steht dir!</p>
</div>
</div>`,
      },
    ],
    examples: [
      { de: "Ich <span class='text-case-verb font-semibold'>trage</span> <span class='text-case-akk font-semibold'>ein T-Shirt</span> und <span class='text-case-akk font-semibold'>Jeans</span>.", en: "Я ношу футболку и джинсы" },
      { de: "Auf dem Bild <span class='text-case-verb font-semibold'>sehe</span> ich <span class='text-case-akk font-semibold'>eine Familie</span>.", en: "На картинке я вижу семью" },
      { de: "Ich <span class='text-case-verb font-semibold'>finde</span> das Kleid <span class='text-case-akk font-semibold'>schön</span>.", en: "Я считаю платье красивым" },
      { de: "Die Schuhe <span class='text-case-verb font-semibold'>gefallen</span> <span class='text-case-dat font-semibold'>mir</span>.", en: "Мне нравятся туфли" },
      { de: "Das <span class='text-case-verb font-semibold'>steht</span> <span class='text-case-dat font-semibold'>dir</span> gut!", en: "Тебе это идёт!" },
      { de: "Ich denke, <span class='text-primary font-semibold'>dass</span> das Kleid schön <span class='text-case-verb font-semibold'>ist</span>.", en: "Я думаю, что платье красивое" },
      { de: "Ich <span class='text-case-verb font-semibold'>ziehe</span> <span class='text-case-akk font-semibold'>eine Jacke</span> an.", en: "Я надеваю куртку" },
      { de: "Er <span class='text-case-verb font-semibold'>hat</span> einen Pullover <span class='text-case-verb font-semibold'>gekauft</span>.", en: "Он купил свитер" },
      { de: "Was <span class='text-case-verb font-semibold'>soll</span> ich <span class='text-case-verb font-semibold'>anziehen</span>?", en: "Что мне надеть?" },
      { de: "Die Farbe <span class='text-case-verb font-semibold'>steht</span> <span class='text-case-dat font-semibold'>dir</span> nicht.", en: "Этот цвет тебе не идёт" },
    ],
    test: [
      { sentence: "Ich ___ gern Jeans. (tragen)", answer: "trage" },
      { sentence: "Die Schuhe ___ mir. (gefallen)", answer: "gefallen" },
      { sentence: "Das Kleid ___ dir gut. (stehen)", answer: "steht" },
      { sentence: "Ich finde das T-Shirt ___ . (schön/hässlich)", answer: "schön" },
      { sentence: "Auf dem Bild ___ ich eine Familie. (sehen)", answer: "sehe" },
      { sentence: "Ich denke, dass das Kleid schön ___ . (sein)", answer: "ist" },
      { sentence: "Er hat einen Pullover ___ . (kaufen, Perfekt)", answer: "gekauft" },
      { sentence: "Sie ist nach Wien ___ . (fahren, Perfekt)", answer: "gefahren" },
      { sentence: "Ich glaube, ___ die Preise hoch sind. (Konjunktion)", answer: "dass" },
      { sentence: "Das ___ dir gut! (stehen)", answer: "steht" },
      { sentence: "Die Hose → auf Russisch: ___", answer: "штаны" },
      { sentence: "das Kleid → auf Russisch: ___", answer: "платье" },
      { sentence: "der Pullover → auf Russisch: ___", answer: "свитер" },
      { sentence: "die Jacke → auf Russisch: ___", answer: "куртка" },
      { sentence: "Ich ___ eine Jacke an. (anziehen)", answer: "ziehe" },
      { sentence: "Was ___ ich anziehen? (sollen)", answer: "soll" },
      { sentence: "Mit wem ___ du einkaufen? (gehen)", answer: "gehst" },
      { sentence: "Ich habe gehört, dass Jana ___ hat. (gewinnen, Perfekt)", answer: "gewonnen" },
      { sentence: "Das Hemd → auf Russisch: ___", answer: "рубашка" },
      { sentence: "die Mütze → auf Russisch: ___", answer: "шапка" },
    ],
  },
];
