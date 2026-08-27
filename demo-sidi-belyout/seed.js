/* ============================================================
   data/seed.js — Données de démonstration
   Portail Numérique de Proximité — Sidi Belyout
   ------------------------------------------------------------
   Toute donnée affichée dans la démo provient de ce fichier.
   Aucune donnée n'est codée en dur dans un composant.

   Sources : OpenStreetMap, annuaires publics.
   Statut : "provisoire" = à valider par l'arrondissement.
   ============================================================ */

const ANNEXES = [
  {
    id: "bousmara",
    n: 1,
    accent: "#C9A227",
    accentInk: "#8A6D10",
    lat: 33.5905, lng: -7.6180,
    provisional: true,
    photo: "assets/annexes/bousmara.jpg",
    fr: { name: "Bousmara", desc: "Secteur central, à proximité immédiate du centre-ville historique et des grands axes." },
    ar: { name: "بوسمارة", desc: "قطاع مركزي، على مقربة مباشرة من وسط المدينة التاريخي والمحاور الكبرى." }
  },
  {
    id: "lalla-yacout",
    n: 2,
    accent: "#D98E3B",
    accentInk: "#95571A",
    lat: 33.5905, lng: -7.6220,
    provisional: true,
    photo: "assets/annexes/lalla-yacout.jpg",
    fr: { name: "Lalla Yacout", desc: "Cœur administratif et commerçant, desservi par le tramway." },
    ar: { name: "لالة ياقوت", desc: "قلب إداري وتجاري، تخدمه الطرامواي." }
  },
  {
    id: "ben-jdia",
    n: 3,
    accent: "#4FA3A5",
    accentInk: "#2A6D6F",
    lat: 33.5975, lng: -7.6180,
    provisional: true,
    photo: "assets/annexes/ben-jdia.jpg",
    fr: { name: "Ben Jdia", desc: "Secteur nord, entre l'ancienne médina et le port." },
    ar: { name: "بن جدية", desc: "القطاع الشمالي، بين المدينة القديمة والميناء." }
  },
  {
    id: "moussa-bnou-noussair",
    n: 4,
    accent: "#A8654A",
    accentInk: "#7A4229",
    lat: 33.5890, lng: -7.6300,
    provisional: true,
    photo: "assets/annexes/moussa-bnou-noussair.jpg",
    fr: { name: "Moussa Bnou Noussair", desc: "Secteur résidentiel, écoles et équipements de proximité." },
    ar: { name: "موسى بن نصير", desc: "قطاع سكني، مدارس ومرافق القرب." }
  },
  {
    id: "moulay-youssef",
    n: 5,
    accent: "#7A8FBF",
    accentInk: "#43598C",
    lat: 33.5960, lng: -7.6320,
    provisional: true,
    photo: "assets/annexes/moulay-youssef.jpg",
    fr: { name: "Moulay Youssef", desc: "Pôle santé de l'arrondissement, bordé par le parc de la Ligue Arabe." },
    ar: { name: "مولاي يوسف", desc: "القطب الصحي للمقاطعة، يحده منتزه جامعة الدول العربية." }
  },
  {
    id: "sour-jdid",
    n: 6,
    accent: "#9C7BA8",
    accentInk: "#6B4A78",
    lat: 33.6047, lng: -7.6215,
    provisional: true,
    photo: "assets/annexes/sour-jdid.jpg",
    fr: { name: "Sour Jdid", desc: "Secteur nord de l'arrondissement, proche des remparts et du port." },
    ar: { name: "السور الجديد", desc: "القطاع الشمالي للمقاطعة، قرب الأسوار والميناء." }
  }
];

const CATEGORIES = [
  { id: "administration", icon: "building",  fr: "Administration",   ar: "إدارة" },
  { id: "police",         icon: "shield",    fr: "Police",           ar: "شرطة" },
  { id: "secours",        icon: "flame",     fr: "Secours",          ar: "إسعاف" },
  { id: "sante",          icon: "heart",     fr: "Santé",            ar: "صحة" },
  { id: "culture",        icon: "music",     fr: "Culture",          ar: "ثقافة" },
  { id: "sport",          icon: "activity",  fr: "Sport",            ar: "رياضة" },
  { id: "jardin",         icon: "tree",      fr: "Jardins",          ar: "حدائق" },
  { id: "education",      icon: "book",      fr: "Éducation",        ar: "تعليم" },
  { id: "parking",        icon: "car",       fr: "Parkings",         ar: "مواقف" },
  { id: "transport",      icon: "train",     fr: "Transport",        ar: "نقل" }
];

/* Regroupements pour les 4 accès rapides de la section "Mon quartier" —
   un bouton n'apparaît que si l'annexe a au moins un service réel dedans. */
const QUICK_GROUPS = [
  { id: "administratif", icon: "building", cats: ["administration", "police", "secours"], fr: "Services Administratifs", ar: "الخدمات الإدارية" },
  { id: "ecoles-sante",  icon: "heart",     cats: ["education", "sante"],                  fr: "Écoles & Santé",          ar: "المدارس والصحة" },
  { id: "culture-sport", icon: "activity",  cats: ["culture", "sport", "jardin"],          fr: "Culture & Sport",         ar: "الثقافة والرياضة" },
  { id: "transport",     icon: "train",     cats: ["parking", "transport"],                fr: "Transports",              ar: "النقل" }
];

const SERVICES = [
  {
    id: "arrondissement",
    cat: "administration",
    annexe: "lalla-yacout",
    lat: 33.5948881, lng: -7.6264608,
    phone: "0522223367",
    verified: true,
    fr: {
      name: "Arrondissement de Sidi Belyout",
      address: "150 boulevard d'Anfa, Casablanca",
      hours: "Lundi à vendredi, 9h00 – 16h00",
      note: "Siège de l'arrondissement. Légalisation de documents, état civil, services administratifs."
    },
    ar: {
      name: "مقاطعة سيدي بليوط",
      address: "150 شارع أنفا، الدار البيضاء",
      hours: "الاثنين إلى الجمعة، 9:00 – 16:00",
      note: "مقر المقاطعة. تصحيح الإمضاء، الحالة المدنية، الخدمات الإدارية."
    }
  },
  {
    id: "annexe-4",
    cat: "administration",
    annexe: "moussa-bnou-noussair",
    lat: 33.5877196, lng: -7.6301778,
    phone: null,
    verified: false,
    fr: {
      name: "Annexe administrative n°4",
      address: "Préfecture Casablanca-Anfa",
      hours: "Lundi à vendredi, horaires à confirmer",
      note: "Légalisation de signature, certification de documents, état civil."
    },
    ar: {
      name: "الملحقة الإدارية رقم 4",
      address: "عمالة الدار البيضاء أنفا",
      hours: "الاثنين إلى الجمعة، التوقيت قيد التأكيد",
      note: "تصحيح الإمضاء، الإشهاد على الوثائق، الحالة المدنية."
    }
  },
  {
    id: "commissariat-sour-jdid",
    cat: "police",
    annexe: "sour-jdid",
    lat: 33.6047101, lng: -7.6214540,
    phone: "19",
    verified: false,
    fr: {
      name: "Commissariat de police Sour Jdid",
      address: "Boulevard Sour Jdid, Casablanca",
      hours: "Ouvert 24h/24",
      note: "Dépôt de plainte, déclarations, urgences de sécurité."
    },
    ar: {
      name: "دائرة الشرطة السور الجديد",
      address: "شارع السور الجديد، الدار البيضاء",
      hours: "مفتوح 24 ساعة",
      note: "تقديم الشكايات، التصريحات، حالات الطوارئ الأمنية."
    }
  },
  {
    id: "protection-civile",
    cat: "secours",
    annexe: "bousmara",
    lat: 33.5911883, lng: -7.6167269,
    phone: "15",
    verified: false,
    fr: {
      name: "Siège de la Protection Civile",
      address: "Centre-ville, Casablanca",
      hours: "Ouvert 24h/24",
      note: "Sapeurs-pompiers, secours d'urgence, interventions."
    },
    ar: {
      name: "مقر الوقاية المدنية",
      address: "وسط المدينة، الدار البيضاء",
      hours: "مفتوح 24 ساعة",
      note: "رجال الإطفاء، الإسعاف الاستعجالي، التدخلات."
    }
  },
  {
    id: "hopital-moulay-youssef",
    cat: "sante",
    annexe: "moulay-youssef",
    lat: 33.6027676, lng: -7.6323317,
    phone: "0522265453",
    verified: true,
    fr: {
      name: "Hôpital Moulay Youssef",
      address: "112 boulevard Moulay Youssef, Casablanca",
      hours: "Urgences ouvertes 24h/24",
      note: "Hôpital public. Service des urgences accessible en permanence."
    },
    ar: {
      name: "مستشفى مولاي يوسف",
      address: "112 شارع مولاي يوسف، الدار البيضاء",
      hours: "المستعجلات مفتوحة 24 ساعة",
      note: "مستشفى عمومي. مصلحة المستعجلات مفتوحة باستمرار."
    }
  },
  {
    id: "centre-sante-my-youssef",
    cat: "sante",
    annexe: "moulay-youssef",
    lat: 33.5971679, lng: -7.6310699,
    phone: "0522279234",
    verified: true,
    fr: {
      name: "Centre de Santé Moulay Youssef",
      address: "Boulevard Moulay Youssef, Casablanca",
      hours: "Lundi à vendredi, 8h30 – 16h00",
      note: "Consultations de médecine générale, vaccinations, suivi maternel et infantile."
    },
    ar: {
      name: "المركز الصحي مولاي يوسف",
      address: "شارع مولاي يوسف، الدار البيضاء",
      hours: "الاثنين إلى الجمعة، 8:30 – 16:00",
      note: "استشارات الطب العام، التلقيح، تتبع صحة الأم والطفل."
    }
  },
  {
    id: "complexe-culturel",
    cat: "culture",
    annexe: "ben-jdia",
    lat: 33.5957406, lng: -7.6110997,
    phone: "0522316758",
    verified: true,
    fr: {
      name: "Complexe Culturel Sidi Belyout",
      address: "Rue Sidi Belyout, Casablanca",
      hours: "Lundi à dimanche, 9h00 – 18h00",
      note: "Ateliers, expositions, spectacles et activités culturelles de l'arrondissement."
    },
    ar: {
      name: "المركب الثقافي سيدي بليوط",
      address: "زنقة سيدي بليوط، الدار البيضاء",
      hours: "الاثنين إلى الأحد، 9:00 – 18:00",
      note: "ورشات، معارض، عروض وأنشطة ثقافية بالمقاطعة."
    }
  },
  {
    id: "complexe-sportif",
    cat: "sport",
    annexe: "ben-jdia",
    lat: 33.5955837, lng: -7.6088197,
    phone: null,
    verified: false,
    fr: {
      name: "Complexe Sportif Larbi Ben Mbarek",
      address: "Rue Sidi Belyout, Casablanca",
      hours: "Tous les jours, 8h00 – 23h00",
      note: "Salles et terrains, clubs et disciplines variées, arts martiaux."
    },
    ar: {
      name: "المركب الرياضي العربي بن مبارك",
      address: "زنقة سيدي بليوط، الدار البيضاء",
      hours: "كل الأيام، 8:00 – 23:00",
      note: "قاعات وملاعب، أندية وتخصصات متنوعة، فنون قتالية."
    }
  },
  {
    id: "parc-ligue-arabe",
    cat: "jardin",
    annexe: "moulay-youssef",
    lat: 33.5892017, lng: -7.6237164,
    phone: null,
    verified: true,
    fr: {
      name: "Parc de la Ligue Arabe",
      address: "Boulevard Moulay Youssef, Casablanca",
      hours: "Tous les jours, 8h30 – 19h00",
      note: "Le plus grand parc du centre-ville. Aire de jeux pour enfants, allées ombragées, fontaines."
    },
    ar: {
      name: "منتزه جامعة الدول العربية",
      address: "شارع مولاي يوسف، الدار البيضاء",
      hours: "كل الأيام، 8:30 – 19:00",
      note: "أكبر منتزه بوسط المدينة. فضاء لعب للأطفال، ممرات مظللة، نوافير."
    }
  },
  {
    id: "ecole-augustin-sourzac",
    cat: "education",
    annexe: "ben-jdia",
    lat: 33.5951407, lng: -7.6069731,
    phone: null,
    verified: false,
    fr: {
      name: "École Augustin Sourzac",
      address: "Centre-ville, Casablanca",
      hours: "Lundi à vendredi, horaires scolaires",
      note: "Établissement scolaire. Bâtiment classé au patrimoine de Casablanca."
    },
    ar: {
      name: "مدرسة أوغستان سورزاك",
      address: "وسط المدينة، الدار البيضاء",
      hours: "الاثنين إلى الجمعة، التوقيت المدرسي",
      note: "مؤسسة تعليمية. بناية مصنفة ضمن تراث الدار البيضاء."
    }
  },
  {
    id: "parking-borj-al-yassamin",
    cat: "parking",
    annexe: "bousmara",
    lat: 33.5925719, lng: -7.6097834,
    phone: "0638870137",
    verified: true,
    fr: {
      name: "Parking Borj Al Yassamin",
      address: "27 rue Ouled Ziane, Casablanca",
      hours: "Tous les jours",
      note: "Parking public. Abonnements mensuels disponibles."
    },
    ar: {
      name: "موقف برج الياسمين",
      address: "27 زنقة أولاد زيان، الدار البيضاء",
      hours: "كل الأيام",
      note: "موقف عمومي. اشتراكات شهرية متوفرة."
    }
  },
  {
    id: "gare-casa-port",
    cat: "transport",
    annexe: "ben-jdia",
    lat: 33.5992484, lng: -7.6126231,
    phone: null,
    verified: true,
    fr: {
      name: "Gare Casa-Port",
      address: "Boulevard Zayid Ou Hmad, Casablanca",
      hours: "Ouvert 24h/24",
      note: "Gare ferroviaire ONCF. Liaisons régionales, grandes lignes et navette aéroport."
    },
    ar: {
      name: "محطة الدار البيضاء الميناء",
      address: "شارع زايد أوحماد، الدار البيضاء",
      hours: "مفتوحة 24 ساعة",
      note: "محطة سكك حديدية. رحلات جهوية، خطوط طويلة ومكوك المطار."
    }
  }
];

const URGENCES = [
  { id: "police",   num: "19",  fr: "Police secours",   ar: "النجدة" },
  { id: "pompiers", num: "15",  fr: "Protection civile", ar: "الوقاية المدنية" },
  { id: "gendarm",  num: "177", fr: "Gendarmerie royale", ar: "الدرك الملكي" }
];

/* Regroupées pour le méga-menu de navigation (voir app.js renderMega). */
const RUBRIQUES = [
  { id: "services",  group: "services",   fr: { t: "Services à proximité" },  ar: { t: "خدمات القرب" } },
  { id: "demarches", group: "services",   fr: { t: "Mes démarches" },          ar: { t: "إجراءاتي" } },
  { id: "contacts",  group: "services",   fr: { t: "Contacts utiles" },        ar: { t: "أرقام مفيدة" } },
  { id: "famille",   group: "vie-locale", fr: { t: "Famille & enfants" },      ar: { t: "الأسرة والأطفال" } },
  { id: "culture",   group: "vie-locale", fr: { t: "Culture & sport" },        ar: { t: "الثقافة والرياضة" } },
  { id: "agenda",    group: "vie-locale", fr: { t: "Agenda" },                 ar: { t: "الأجندة" } },
  { id: "actus",     group: "vie-locale", fr: { t: "Actualités" },             ar: { t: "الأخبار" } }
];

const EVENEMENTS = [
  {
    id: "e1", date: "2026-09-06", annexe: "ben-jdia",
    photo: "assets/agenda/forum-associations.jpg",
    cat: { fr: "Vie locale", ar: "الحياة المحلية" },
    fr: { t: "Forum des associations de quartier", lieu: "Complexe Culturel Sidi Belyout", d: "Les associations de l'arrondissement présentent leurs activités : ateliers, bénévolat, aide aux familles. Entrée libre." },
    ar: { t: "منتدى جمعيات الحي", lieu: "المركب الثقافي سيدي بليوط", d: "تعرض جمعيات المقاطعة أنشطتها: ورشات، عمل تطوعي، مساعدة الأسر. الدخول حر." }
  },
  {
    id: "e2", date: "2026-09-12", annexe: "ben-jdia",
    photo: "assets/agenda/tournoi-sport.jpg",
    cat: { fr: "Sport", ar: "رياضة" },
    fr: { t: "Tournoi de proximité inter-quartiers", lieu: "Complexe Sportif Larbi Ben Mbarek", d: "Football à 7 et tennis de table, ouvert aux habitants de 12 à 18 ans. Inscription sur place le jour même." },
    ar: { t: "دورة القرب بين الأحياء", lieu: "المركب الرياضي العربي بن مبارك", d: "كرة القدم للسبعة وتنس الطاولة، مفتوحة للسكان من 12 إلى 18 سنة. التسجيل في عين المكان يوم الدورة." }
  },
  {
    id: "e3", date: "2026-09-19", annexe: "moulay-youssef",
    photo: "assets/agenda/journee-familiale.jpg",
    cat: { fr: "Famille", ar: "الأسرة" },
    fr: { t: "Journée familiale au parc de la Ligue Arabe", lieu: "Parc de la Ligue Arabe", d: "Animations pour enfants, stands de sensibilisation à la propreté urbaine, goûter offert par l'arrondissement." },
    ar: { t: "يوم عائلي بمنتزه جامعة الدول العربية", lieu: "منتزه جامعة الدول العربية", d: "أنشطة للأطفال، أروقة للتحسيس بالنظافة الحضرية، وجبة خفيفة تقدمها المقاطعة." }
  },
  {
    id: "e4", date: "2026-09-24", annexe: "lalla-yacout",
    cat: { fr: "Démarches", ar: "إجراءات" },
    fr: { t: "Séance d'information : démarches en ligne", lieu: "Arrondissement de Sidi Belyout", d: "Présentation des démarches administratives disponibles et accompagnement pour les habitants peu familiers du numérique." },
    ar: { t: "لقاء تحسيسي: الإجراءات عبر الإنترنت", lieu: "مقاطعة سيدي بليوط", d: "تقديم الإجراءات الإدارية المتاحة ومرافقة السكان الأقل دراية بالخدمات الرقمية." }
  }
];

const ACTUS = [
  {
    id: "a1", date: "2026-08-20", cat: { fr: "Culture", ar: "ثقافة" },
    photo: "assets/actus/rentree-culturelle.jpg",
    fr: { t: "Rentrée culturelle au Complexe Culturel Sidi Belyout", d: "Ateliers, expositions et spectacles reprennent dès septembre. Programme complet disponible à l'accueil du complexe et par téléphone." },
    ar: { t: "الموسم الثقافي بالمركب الثقافي سيدي بليوط", d: "تستأنف الورشات والمعارض والعروض ابتداءً من شتنبر. البرنامج الكامل متوفر باستقبال المركب وعبر الهاتف." }
  },
  {
    id: "a2", date: "2026-08-18", cat: { fr: "Travaux", ar: "أشغال" },
    photo: "assets/actus/boulevard-ziraoui.jpg",
    fr: { t: "Réaménagement du boulevard Ziraoui", d: "Les travaux de voirie et d'éclairage public se poursuivent. Circulation adaptée aux heures de sortie scolaire." },
    ar: { t: "إعادة تهيئة شارع الزرقطوني", d: "تتواصل أشغال الطرق والإنارة العمومية. حركة السير معدلة خلال أوقات الخروج المدرسي." }
  },
  {
    id: "a3", date: "2026-08-14", cat: { fr: "Sport", ar: "رياضة" },
    photo: "assets/actus/complexe-sportif.jpg",
    fr: { t: "Ouverture des inscriptions au Complexe Sportif Larbi Ben Mbarek", d: "La nouvelle saison démarre en septembre : football à 7, tennis de table et arts martiaux. Inscriptions sur place, du lundi au samedi." },
    ar: { t: "فتح باب التسجيل بالمركب الرياضي العربي بن مبارك", d: "يبدأ الموسم الجديد في شتنبر: كرة القدم للسبعة، تنس الطاولة والفنون القتالية. التسجيل في عين المكان، من الاثنين إلى السبت." }
  },
  {
    id: "a4", date: "2026-08-12", cat: { fr: "Loisirs", ar: "ترفيه" },
    photo: "assets/actus/aire-de-jeux-ligue-arabe.jpg",
    fr: { t: "Nouvelle aire de jeux au parc de la Ligue Arabe", d: "Un espace dédié aux enfants de 3 à 10 ans a été aménagé dans l'allée nord du parc." },
    ar: { t: "فضاء لعب جديد بمنتزه جامعة الدول العربية", d: "تم تهيئة فضاء مخصص للأطفال من 3 إلى 10 سنوات بالممر الشمالي للمنتزه." }
  }
];

/* Section "Projets" — un seul exemple, explicitement fictif (voir badge
   superposé au lecteur vidéo dans index.html). Sert à démontrer l'usage
   du timelapse pour présenter un aménagement avant sa réalisation. */
const PROJET_EXEMPLE = {
  fr: {
    titre: "Donner vie à vos futurs aménagements",
    texte: "Exemple de démonstration : avant même la fin des travaux, ce format permet de présenter aux habitants à quoi ressemblera un aménagement futur — un nouveau parc, une rue réaménagée, une place rénovée.",
    points: [
      { t: "Un aperçu avant travaux", d: "Montrer le résultat attendu dès la phase de conception, pas seulement une fois le chantier terminé." },
      { t: "Adhésion des habitants", d: "Un rendu concret facilite la compréhension du projet et son acceptation par les riverains." },
      { t: "Valorisation du patrimoine", d: "Le même procédé peut aussi mettre en valeur les lieux existants de l'arrondissement." }
    ]
  },
  ar: {
    titre: "إحياء مشاريعكم المستقبلية",
    texte: "مثال توضيحي: يتيح هذا الشكل، قبل انتهاء الأشغال، عرض الشكل الذي سيكون عليه مشروع مستقبلي على السكان — حديقة جديدة، شارع معاد تهيئته، أو ساحة مجددة.",
    points: [
      { t: "لمحة قبل الأشغال", d: "إظهار النتيجة المرتقبة منذ مرحلة التصميم، وليس فقط بعد انتهاء الورش." },
      { t: "انخراط السكان", d: "تصور واقعي يسهل فهم المشروع وتقبّله من طرف الساكنة." },
      { t: "إبراز التراث المحلي", d: "يمكن اعتماد نفس الأسلوب لإبراز الأماكن القائمة في المقاطعة." }
    ]
  }
};
