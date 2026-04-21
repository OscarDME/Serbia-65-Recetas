// lib/copy.js — Celokupan vidljiv tekstualni sadržaj na odredišnoj stranici (landing page). 
// Svaka promena teksta se vrši ovde.

export const copy = {
  metadata: {
    title: "365 zdravih recepata — Bez šećera i glutena",
    description:
      "1000 recepata bez šećera i glutena za 365 dana. Hranite se bez griže savesti, bez komplikacija i bez ograničenja. Specijalna ponuda: 990 din + 8 poklona.",
    lang: "sr",
  },

  hero: {
    banner: "PONUDA VAŽI SAMO DANAS!",
    timerLabels: { days: "Dani", hours: "Sati", minutes: "Min", seconds: "Sek" },
    headline:
      "365 dana ukusnih recepata bez šećera i glutena, da jedete bez griže savesti!",
    bullets: [
      "Učinite svoje obroke zdravijim i prijatnijim, bez odricanja od ukusa",
      "BEZ KOMPLIKACIJA",
      "BEZ OGRANIČENJA",
      "BEZ GRIŽE SAVESTI",
    ],
    cta: "ŽELIM DA JEDEM BEZ GRIŽE SAVESTI",
    kicker: "365 dana · 1000 recepata",
    imageAlt: "Knjiga sa receptima za 365 dana bez šećera i glutena",
    trustChips: [
      { icon: "⭐", text: "Preko 5.000 porodica" },
      { icon: "🎁", text: "8 bonus poklona" },
      { icon: "🛡️", text: "75% popusta danas" },
    ],
  },

  story: {
    headlinePre: "Šećer je tihi neprijatelj",
    headlineHighlight: "koji uništava vaše zdravlje",
    intro:
      "Prisutan je u hrani koju jedete svaki dan, skriven u namirnicama koje deluju potpuno bezazleno.",
    problemsLead:
      "Ovo su glavni problemi koje izaziva šećer i kako oni možda trenutno utiču na vas:",
    problems: [
      "Stalni umor i neobjašnjiva iscrpljenost",
      "Povećanje telesne težine i nakupljanje masti u predelu stomaka",
      "Hormonski i metabolički disbalans",
      "Rizik od hroničnih bolesti (dijabetes, hipertenzija, gojaznost itd.)",
      "Nagle promene raspoloženja i anksioznost",
      "Ubrzano starenje",
      "Zavisnost od hrane i napadi gladi",
    ],
    solutionHeadline:
      "Konačno, lako i efikasno rešenje da transformišete svoju ishranu, a da ne prestanete da jedete ono što volite.",
    solutionBadge: "Rešenje",
  },

  benefits: {
    stepsHeadline: "Samo 3 koraka su dovoljna za vašu transformaciju",
    steps: [
      {
        number: "1",
        title: "Pratite jelovnik bez griže savesti",
        desc: "Dobijate pristup kompletnom jelovniku sa receptima za svaki dan u godini – sve bez šećera i glutena. Nema potrebe da išta planirate!",
      },
      {
        number: "2",
        title: "Spremajte laka i ukusna jela",
        desc: "Pratite jednostavna uputstva u receptima i pripremajte neverovatna jela koja će preporoditi vašu ishranu.",
      },
      {
        number: "3",
        title: "Osetite transformaciju",
        desc: "Prateći recepte, osetićete razliku u svom telu i zdravlju: više energije, kontrola telesne težine i manji rizik od bolesti.",
      },
    ],
    ctaMid: "ŽELIM DA JEDEM BEZ GRIŽE SAVESTI",
    headline: "POGLEDAJTE PREDNOSTI KOJE ĆE VAM PROMENITI ŽIVOT",
    items: [
      {
        icon: "HeartPulse",
        title: "Kontrola šećera u krvi",
        desc: "Poboljšajte nivo šećera u krvi i smanjite rizik od dijabetesa uz hranljive i ukusne recepte.",
      },
      {
        icon: "Utensils",
        title: "Sloboda u ishrani",
        desc: "Uživajte u neodoljivim jelima bez griže savesti, gradeći zdrav odnos prema hrani.",
      },
      {
        icon: "CalendarDays",
        title: "Svakodnevna raznolikost",
        desc: "Sa 1000 recepata imate novi izbor za svaki dan u godini.",
      },
      {
        icon: "Timer",
        title: "Praktičnost u kuhinji",
        desc: "Spremajte ukusna jela za 30 minuta ili manje, štedeći vreme i eliminišući svakodnevni stres.",
      },
      {
        icon: "GraduationCap",
        title: "Edukacija o ishrani",
        desc: "Naučite da svesno birate namirnice i izgradite zdrave navike za ceo život.",
      },
      {
        icon: "Scale",
        title: "Kontrola telesne težine",
        desc: "Održavajte zdravu težinu uz recepte koji zasite i hrane, bez žrtvovanja ukusa.",
      },
    ],
  },

  features: {
    headline: "Imate gotove jelovnike za 365 dana – po 1 za svaki dan u godini",
    subheadline: "Vodićemo vas kroz svaki korak ka zdravoj ishrani",
    categories: [
      {
        image: "/carousel/categoria-1.webp",
        title: "Doručak i užine",
        desc: "Recepti za doručak i užinu kakve NIKADA ranije niste videli. Brza priprema sa praktičnim i dostupnim namirnicama!",
      },
      {
        image: "/carousel/categoria-2.webp",
        title: "Ručak i večera",
        desc: "Iznesite na sto raznovrsna i preukusna jela, kako za svaki dan, tako i za posebne prilike! Pripremljena od sastojaka koje već imate kod kuće.",
      },
      {
        image: "/carousel/categoria-3.webp",
        title: "Slatkiši i deserti",
        desc: "MNOŠTVO opcija za poslastice i deserte bez glutena i šećera, da biste se zasladili bez trunke griže savesti.",
      },
      {
        image: "/carousel/categoria-4.webp",
        title: "Sosevi i namazi",
        desc: "Sosevi i prelivi koji će vašim jelima dati neverovatan ukus – brzo i lako!",
      },
      {
        image: "/carousel/categoria-5.webp",
        title: "Zdrave supe i potaži",
        desc: "Supe, potaži i bujoni – sve pripremljeno od hranljivih sastojaka i pažljivo odabranih začina.",
      },
      {
        image: "/carousel/categoria-6.webp",
        title: "Alternative za brašno",
        desc: "Sve je bez glutena i sa niskim glikemijskim indeksom, tako da bez brige možete praviti torte, hleb i peciva.",
      },
    ],
    ctaMid: "ŽELIM DA JEDEM BEZ GRIŽE SAVESTI",
    badgesHeadline: "Najukusnija jela u varijantama",
    badges: ["BEZ ŠEĆERA", "BEZ GLUTENA", "NISKOKALORIČNO", "BEZ LAKTOZE"],
    audienceHeadline: "„Hrana bez griže savesti“ je idealna za vas ako:",
    audience: [
      {
        title: "Imate restrikcije u ishrani:",
        desc: "Osobe koje iz zdravstvenih razloga moraju da izbegavaju šećer i gluten, poput onih sa dijabetesom ili intolerancijom.",
      },
      {
        title: "Želite zdravu porodicu:",
        desc: "Roditelji koji svojoj deci žele da obezbede hranljive i ukusne obroke, podstičući zdrave navike od malih nogu.",
      },
      {
        title: "Vodite zdrav način života:",
        desc: "Osobe koje prate specifične režime ishrane – low-carb, paleo ili vegansku ishranu, i traže recepte koji se uklapaju u te pristupe.",
      },
      {
        title: "Želite da kontrolišete telesnu težinu:",
        desc: "Osobe koje žele da smršaju ili održe liniju, a potrebni su im recepti koji zasićuju, ali pomažu u kontroli unosa kalorija.",
      },
    ],
  },

  testimonials: {
    headline: "Pogledajte iskustva onih koji već koriste naše recepte",
    cta: "ŽELIM DA JEDEM BEZ GRIŽE SAVESTI",
    wallpaper: "/wallpaper-whatsapp.webp",
    messages: [
      {
        text: "Samo želim da vam kažem da je ova knjiga recepata pravi blagoslov. Sa troje male dece stalno sam u žurbi, a to što imam toliko recepata na jednom mestu sve je olakšalo. Sada kod kuće jedemo i ukusno i zdravo 😊",
        time: "20:04",
        reactions: ["👌", "❤️"],
      },
      {
        text: "Kakva fenomenalna knjiga recepata! Otkako mi je dijagnostikovana intolerancija na gluten, mislila sam da će biti nemoguće da uživam u hrani, ali sa vašim receptima mogu da jedem bez ikakve brige. Hvala vam što ste mi sve ovako olakšali! 🙏",
        time: "19:57",
      },
      {
        text: "Želim da vam se zahvalim, jer su mi ovi recepti promenili život. Dijabetičarka sam i uvek mi je bilo teško da nađem ukusne, a zdrave opcije. Sada uživam u svakom obroku bez straha. Od srca vam hvala! 🙏",
        time: "19:49",
      },
      {
        text: "Hiljadu puta hvala na receptima! Obožavam slatkiše i uvek sam imala problem sa šećerom, ali su mi vaši recepti dali preukusne alternative koje se lako spremaju.",
        time: "18:55",
        reactions: ["❤️"],
      },
    ],
  },

  carouselSection: {
    prevLabel: "Prethodno",
    nextLabel: "Sledeće",
    images: [
      { src: "/carousel/categoria-7.webp", alt: "Zdrav recept 1" },
      { src: "/carousel/categoria-8.webp", alt: "Zdrav recept 2" },
      { src: "/carousel/categoria-9.webp", alt: "Zdrav recept 3" },
      { src: "/carousel/categoria-10.webp", alt: "Zdrav recept 4" },
      { src: "/carousel/categoria-11.webp", alt: "Zdrav recept 5" },
      { src: "/carousel/categoria-1.webp", alt: "Zdrav recept 6" },
    ],
  },

  bonuses: {
    badge: "Specijalno za vas koji ste stigli do kraja",
    headline: "AKO DANAS KUPITE 1000 RECEPATA, DOBIĆETE 8 EKSKLUZIVNIH POKLONA 🎁",
    valueLabel: "Vrednost:",
    freeLabel: "BESPLATNO",
    items: [
      { image: "/bonuses/bono-1.webp", tag: "POKLON 1", title: "Recepti za deserte bez šećera", value: "1.390 din" },
      { image: "/bonuses/bono-2.webp", tag: "POKLON 2", title: "Recepti za soseve i namaze", value: "990 din" },
      { image: "/bonuses/bono-3.webp", tag: "POKLON 3", title: "Recepti za supe i potaže", value: "790 din" },
      { image: "/bonuses/bono-4.webp", tag: "POKLON 4", title: "Recepti sa bezglutenskim brašnom", value: "590 din" },
      { image: "/bonuses/bono-5.webp", tag: "POKLON 5", title: "Recepti za hleb bez glutena", value: "1.190 din" },
      { image: "/bonuses/bono-6.webp", tag: "POKLON 6", title: "Recepti za zdrave tortilje", value: "1.190 din" },
      { image: "/bonuses/bono-7.webp", tag: "POKLON 7", title: "Zdrave pice", value: "1.190 din" },
      { image: "/bonuses/bono-8.webp", tag: "POKLON 8", title: "500 ukusnih recepata kreiranih za dijabetičare", value: "1.190 din" },
    ],
    totalLabel: "Sve što dobijate je u vrednosti preko 4.990 din",
    footer: "Ali danas nećete platiti taj iznos... iako vredi svaku paru.",
  },

  finalCta: {
    preHeadline: "Vaša ukupna investicija za 1000 recepata i sve bonuse...",
    urgencyTop: "Vremenski ograničena ponuda!",
    subUrgency:
      "Ne propustite priliku da nabavite knjigu recepata uz 75% popusta. Transformišite svoje zdravlje već sada uz naš kompletan jelovnik za 365 dana.",
    headline: "365 DANA SA RECEPTIMA BEZ ŠEĆERA I GLUTENA + DODATNI BONUSI",
    bundleList: [
      "1000 recepata bez šećera i glutena",
      "Bonus 1: Recepti za deserte bez šećera",
      "Bonus 2: Recepti za soseve i namaze",
      "Bonus 3: Recepti za supe i potaže",
      "Bonus 4: Recepti sa bezglutenskim brašnom",
      "Bonus 5: Recepti za hleb bez glutena",
      "Bonus 6: Recepti za zdrave tortilje",
      "Bonus 7: Zdrave pice",
      "Bonus 8: 500 ukusnih recepata za dijabetičare",
    ],
    guaranteeText:
      "Pažnja: Ako ste osoba koja zaista želi da preuzme brigu o svom zdravlju ili zdravlju svoje porodice, naši recepti bez šećera i glutena vam definitivno mogu pomoći u tome već sada. Ne propustite ovu priliku!",
    regularPriceLabel: "OD:",
    regularPrice: "4.990 din",
    urgencyText: "PONUDA VAŽI SAMO DANAS!",
    offerPrice: "990 din",
    bottomUrgency: "Poslednji primerci na stanju",
    discountBadge: "75% POPUSTA",
    button: "DA, ŽELIM RECEPTE + BONUSE ODMAH",
    trustRow: "🔒 100% sigurno plaćanje • ⚡ Trenutni pristup • ✅ Doživotna garancija",
    imageAlt: "365 zdravih recepata + 8 bonusa",
  },

  faq: {
    authorHeadline: "Ko je Jelena Jovanović?",
    authorBio:
      "Jelena Jovanović je stručnjak za zdravu ishranu koja ljudima menja navike uz pomoć svog inovativnog jelovnika „Hrana bez griže savesti“. Sa bogatim iskustvom kao nutricionista, Jelena sa vama deli 1000 lakih i pristupačnih recepata koji su osmišljeni tako da vas podrže na svakom koraku vašeg puta ka zdravijem životu. Kao diplomirani nutricionista-dijetetičar, Jelena spaja svoje stručno znanje sa praktičnim pristupom, nudeći ukusne i izbalansirane recepte prilagođene različitim potrebama, uz dragocene savete koji će vam pomoći da uživate u hrani bez ikakvih ograničenja ili griže savesti.",
    authorRole: "Nutricionista",
    authorImageAlt: "Jelena Jovanović — Nutricionista",
    worksHeadline: "ŠTA ZAISTA DELUJE?",
    doesntWork: [
      "DA JEDETE MALO I GLADUJETE",
      "DA PRATITE KOMPLIKOVANE DIJETE",
      "DA SE ODRIČETE ONOGA ŠTO VOLITE",
    ],
    worksText:
      "Ono što zaista donosi rezultate jeste isplanirana ishrana sa lakim i praktičnim receptima, bez šećera i glutena. Sa našim jelovnikom za 365 dana, nećete morati da brinete o frustrirajućim i restriktivnim dijetama.",
    headline: "Često postavljana pitanja",
    subheadline: "Odgovori na najčešća pitanja",
    items: [
      { q: "KAKO ĆU DOBITI RECEPTE?", a: "Celokupan sadržaj ćete dobiti na vašu imejl adresu." },
      { q: "MOGU LI DA PRISTUPIM SA TELEFONA?", a: "Da, sa telefona, tableta ili računara." },
      { q: "IMATE DODATNIH PITANJA?", a: "Da, tokom celog procesa možete mi direktno postavljati sva vaša pitanja." },
      { q: "KOLIKO DUGO ĆU IMATI PRISTUP?", a: "Pristup celokupnom sadržaju je doživotan." },
    ],
  },

  closing: {
    kicker: "POSLEDNJA ŠANSA! ⚡ Ova ponuda uskoro ističe",
    headline:
      "Transformišite svoje zdravlje već danas uz naš kompletan jelovnik za 365 dana.",
    subheadline:
      "1000 recepata bez šećera i glutena + 8 bonus poklona. Sve to po ceni jednog prosečnog obroka.",
    regularPrice: "4.990 din",
    offerPrice: "990 din",
    ctaLabel: "DA, ŽELIM RECEPTE + BONUSE ODMAH",
    trustRow:
      "🔒 100% sigurno plaćanje • ⚡ Trenutni i doživotni pristup • ✅ Poslednji dostupni primerci",
  },

  footer: {
    brand: "Crearis",
    copyright: "2025 © Sva prava zadržana. Upoznajte se sa našom Politikom privatnosti.",
  },
};