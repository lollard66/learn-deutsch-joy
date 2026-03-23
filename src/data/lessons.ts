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
];
