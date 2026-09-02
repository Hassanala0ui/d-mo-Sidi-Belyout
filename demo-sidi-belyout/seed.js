/* ============================================================
   data/seed.js - Données de démonstration
   Portail Numérique de Proximité - Sidi Belyout
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

/* Regroupements pour les 4 accès rapides de la section "Mon quartier" -
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
    phone: "0522475697",
    email: "arrondissement.sidibelyout1@gmail.com",
    verified: true,
    fr: {
      name: "Arrondissement de Sidi Belyout",
      address: "150 boulevard d'Anfa, Casablanca",
      hours: "Lundi à vendredi, 9h00 - 16h00",
      note: "Siège de l'arrondissement. Légalisation de documents, état civil, services administratifs."
    },
    ar: {
      name: "مقاطعة سيدي بليوط",
      address: "150 شارع أنفا، الدار البيضاء",
      hours: "الاثنين إلى الجمعة، 9:00 - 16:00",
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
      hours: "Lundi à vendredi, 8h30 - 16h00",
      note: "Consultations de médecine générale, vaccinations, suivi maternel et infantile."
    },
    ar: {
      name: "المركز الصحي مولاي يوسف",
      address: "شارع مولاي يوسف، الدار البيضاء",
      hours: "الاثنين إلى الجمعة، 8:30 - 16:00",
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
      hours: "Lundi à dimanche, 9h00 - 18h00",
      note: "Ateliers, expositions, spectacles et activités culturelles de l'arrondissement."
    },
    ar: {
      name: "المركب الثقافي سيدي بليوط",
      address: "زنقة سيدي بليوط، الدار البيضاء",
      hours: "الاثنين إلى الأحد، 9:00 - 18:00",
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
      hours: "Tous les jours, 8h00 - 23h00",
      note: "Salles et terrains, clubs et disciplines variées, arts martiaux."
    },
    ar: {
      name: "المركب الرياضي العربي بن مبارك",
      address: "زنقة سيدي بليوط، الدار البيضاء",
      hours: "كل الأيام، 8:00 - 23:00",
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
      hours: "Tous les jours, 8h30 - 19h00",
      note: "Le plus grand parc du centre-ville. Aire de jeux pour enfants, allées ombragées, fontaines."
    },
    ar: {
      name: "منتزه جامعة الدول العربية",
      address: "شارع مولاي يوسف، الدار البيضاء",
      hours: "كل الأيام، 8:30 - 19:00",
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
  },

  /* Ajout 2026-09-02 : établissements de proximité identifiés via une source
     publique (Google Places). Rattachement à l'annexe par proximité, à partir
     des en-têtes de quartier fournis. Horaires, descriptifs et noms arabes non
     confirmés, donc verified:false (bandeau "à valider" affiché).
     Cafés (4) et marchés (2) écartés faute de catégorie adaptée. */
  {
    id: "grande-pharmacie-commerciale",
    cat: "sante",
    annexe: "ben-jdia",
    lat: 33.5954608, lng: -7.6163343,
    phone: "0522262312",
    verified: false,
    fr: {
      name: "Grande Pharmacie Commerciale",
      address: "9 boulevard Mohammed V, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "الصيدلية التجارية الكبرى",
      address: "9 شارع محمد الخامس، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "pharmacie-normale",
    cat: "sante",
    annexe: "ben-jdia",
    lat: 33.5954522, lng: -7.6162262,
    phone: "0522265475",
    verified: false,
    fr: {
      name: "Pharmacie Normale",
      address: "39 boulevard Mohammed V, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "صيدلية نورمال",
      address: "39 شارع محمد الخامس، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "pharmacie-ibn-batouta",
    cat: "sante",
    annexe: "bousmara",
    lat: 33.5924384, lng: -7.6135740,
    phone: "0641580262",
    verified: false,
    fr: {
      name: "Pharmacie Ibn Batouta",
      address: "78 rue Ibn Batouta, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "صيدلية ابن بطوطة",
      address: "78 زنقة ابن بطوطة، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "eqdom-sidi-belyout",
    cat: "administration",
    annexe: "ben-jdia",
    lat: 33.5959979, lng: -7.6140602,
    phone: "0522484600",
    verified: false,
    fr: {
      name: "Eqdom - Agence Sidi Belyout",
      address: "rue Mohamed Faker, Casablanca",
      hours: "Horaires non communiqués",
      note: "Société de crédit à la consommation. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "إقدام - وكالة سيدي بليوط",
      address: "زنقة محمد فقير، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "شركة قروض الاستهلاك. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "tribunal-premiere-instance",
    cat: "administration",
    annexe: "bousmara",
    lat: 33.5908183, lng: -7.6174830,
    phone: "0537213737",
    verified: false,
    fr: {
      name: "Tribunal de première instance de Casablanca",
      address: "rue du Prince Moulay Abdellah, Casablanca",
      hours: "Horaires non communiqués",
      note: "Tribunal de première instance. Numéro à vérifier (indicatif de Rabat). Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "المحكمة الابتدائية بالدار البيضاء",
      address: "زنقة الأمير مولاي عبد الله، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "محكمة ابتدائية. الرقم الهاتفي يحتاج إلى تأكيد. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "poste-centrale",
    cat: "administration",
    annexe: "bousmara",
    lat: 33.5926120, lng: -7.6192831,
    phone: "0522223635",
    verified: false,
    fr: {
      name: "Poste Maroc - Bureau central",
      address: "rue El Houcine Ben Ali, Casablanca",
      hours: "Horaires non communiqués",
      note: "Bureau de poste. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "بريد المغرب - المكتب المركزي",
      address: "زنقة الحسين بن علي، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "مكتب بريد. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "pharmacie-verdun",
    cat: "sante",
    annexe: "lalla-yacout",
    lat: 33.5964342, lng: -7.6262795,
    phone: "0522274662",
    verified: false,
    fr: {
      name: "Pharmacie Verdun",
      address: "7 rue Abou Abdellah Mahassibi, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "صيدلية فردان",
      address: "7 زنقة أبي عبد الله المحاسبي، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "grande-pharmacie-derb-gnaoua",
    cat: "sante",
    annexe: "ben-jdia",
    lat: 33.5989921, lng: -7.6195919,
    phone: "0522220666",
    verified: false,
    fr: {
      name: "Grande Pharmacie Derb Gnaoua",
      address: "10 rue d'El Jadida, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "الصيدلية الكبرى درب كناوة",
      address: "10 زنقة الجديدة، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "poste-zellaqa",
    cat: "administration",
    annexe: "ben-jdia",
    lat: 33.5963620, lng: -7.6088583,
    phone: "0522303290",
    verified: false,
    fr: {
      name: "Poste Maroc - Zellaqa",
      address: "place Zellaqa, Casablanca",
      hours: "Horaires non communiqués",
      note: "Bureau de poste. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "بريد المغرب - الزلاقة",
      address: "ساحة الزلاقة، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "مكتب بريد. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "poste-bandoeng",
    cat: "administration",
    annexe: "ben-jdia",
    lat: 33.5925044, lng: -7.6071715,
    phone: "0522798322",
    verified: false,
    fr: {
      name: "Poste Maroc - Bandoeng",
      address: "quartier Bandoeng, Casablanca",
      hours: "Horaires non communiqués",
      note: "Bureau de poste. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "بريد المغرب - باندونغ",
      address: "باندونغ، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "مكتب بريد. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "banque-populaire-moulay-youssef",
    cat: "administration",
    annexe: "moulay-youssef",
    lat: 33.5959957, lng: -7.6303041,
    phone: "0522274034",
    verified: false,
    fr: {
      name: "Banque Populaire - Agence Moulay Youssef",
      address: "54 résidence Moulay Youssef, Casablanca",
      hours: "Horaires non communiqués",
      note: "Agence bancaire. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "البنك الشعبي - وكالة مولاي يوسف",
      address: "54 إقامة مولاي يوسف، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "وكالة بنكية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "pharmacie-para-ziraoui",
    cat: "sante",
    annexe: "moulay-youssef",
    lat: 33.5954485, lng: -7.6326234,
    phone: "0700899019",
    verified: false,
    fr: {
      name: "Pharmacie et parapharmacie Ziraoui",
      address: "215 boulevard Ziraoui, Casablanca",
      hours: "Horaires non communiqués",
      note: "Pharmacie et parapharmacie. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "صيدلية وشبه صيدلية الزرعوني",
      address: "215 شارع الزرعوني، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "صيدلية وشبه صيدلية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "banque-populaire-rahal-el-meskini",
    cat: "administration",
    annexe: "moussa-bnou-noussair",
    lat: 33.5875091, lng: -7.6154499,
    phone: "0522314815",
    verified: false,
    fr: {
      name: "Banque Populaire - Agence Rahal El Meskini",
      address: "27 boulevard Rahal El Meskini, Casablanca",
      hours: "Horaires non communiqués",
      note: "Agence bancaire. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "البنك الشعبي - وكالة رحال المسكيني",
      address: "27 شارع رحال المسكيني، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "وكالة بنكية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "banque-populaire-souktani",
    cat: "administration",
    annexe: "moussa-bnou-noussair",
    lat: 33.5891403, lng: -7.6338223,
    phone: null,
    verified: false,
    fr: {
      name: "Banque Populaire - Agence Souktani",
      address: "quartier Souktani, Casablanca",
      hours: "Horaires non communiqués",
      note: "Agence bancaire. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "البنك الشعبي - وكالة السكتاني",
      address: "حي السكتاني، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "وكالة بنكية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "banque-populaire-moussa-bnou-noussair",
    cat: "administration",
    annexe: "moussa-bnou-noussair",
    lat: 33.5904517, lng: -7.6289689,
    phone: "0522278553",
    verified: false,
    fr: {
      name: "Banque Populaire - Agence Moussa Bnou Noussair",
      address: "44 rue Jean Jaurès, Casablanca",
      hours: "Horaires non communiqués",
      note: "Agence bancaire. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "البنك الشعبي - وكالة موسى بن نصير",
      address: "44 زنقة جان جوريس، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "وكالة بنكية. بطاقة في انتظار مصادقة المقاطعة."
    }
  },
  {
    id: "credit-du-maroc-zerktouni",
    cat: "administration",
    annexe: "moussa-bnou-noussair",
    lat: 33.5864564, lng: -7.6306082,
    phone: null,
    verified: false,
    fr: {
      name: "Crédit du Maroc - Agence Zerktouni",
      address: "170 boulevard Mohammed Zerktouni, Casablanca",
      hours: "Horaires non communiqués",
      note: "Agence bancaire. Fiche à valider par l'arrondissement."
    },
    ar: {
      name: "القرض المغربي - وكالة الزرقطوني",
      address: "170 شارع محمد الزرقطوني، الدار البيضاء",
      hours: "التوقيت غير متوفر",
      note: "وكالة بنكية. بطاقة في انتظار مصادقة المقاطعة."
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
  },

  /* Ajout 2026-09-02 : agenda culturel de la ville (relevé de billetteries et
     de sources institutionnelles). Le Megarama est à Aïn Diab, hors du
     territoire de l'arrondissement : le lieu le précise. Champ `source` affiché
     sur la carte, comme pour les actualités. Affiches à fournir dans
     assets/agenda/ ; en leur absence, l'icône s'affiche. */
  {
    id: "e5", date: "2026-09-04", dateEnd: "2026-09-06", annexe: "moulay-youssef",
    photo: "assets/agenda/fig-open-portfolio.jpg",
    source: "Instituto Cervantes de Casablanca",
    cat: { fr: "Culture", ar: "ثقافة" },
    fr: { t: "XIII Open Portfolio - FIG Casablanca", lieu: "Cathédrale Sacré-Cœur", d: "Du 4 au 6 septembre 2026, la treizième édition de l'Open Portfolio réunit à la Cathédrale Sacré-Cœur des artistes des arts graphiques émergents : image imprimée, gravure, pratiques contemporaines. Horaires et accès selon la programmation, à confirmer auprès de l'organisation." },
    ar: { t: "المعرض الثالث عشر Open Portfolio - FIG الدار البيضاء", lieu: "كنيسة القلب المقدس", d: "من 4 إلى 6 شتنبر 2026، تجمع الدورة الثالثة عشرة من Open Portfolio بكنيسة القلب المقدس فنانين في مجال الفنون التخطيطية الناشئة: الصورة المطبوعة، الحفر، الممارسات المعاصرة. التوقيت وشروط الولوج حسب البرمجة، يُنصح بالتأكد لدى المنظمين." }
  },
  {
    id: "e6", date: "2026-09-05", annexe: "moulay-youssef",
    photo: "assets/agenda/hatim-ammor.jpg",
    source: "Billetterie Guichet",
    cat: { fr: "Musique", ar: "موسيقى" },
    fr: { t: "Hatim Ammor en concert", lieu: "Megarama Casablanca (Aïn Diab)", d: "Le chanteur marocain Hatim Ammor se produit le samedi 5 septembre 2026 à 20h30 au Megarama Casablanca, dans le cadre de sa tournée 2026 : pop marocaine et chanson arabe contemporaine. Billet : 250 dirhams." },
    ar: { t: "حاتم عمور في حفل موسيقي", lieu: "ميغاراما الدار البيضاء (عين الذياب)", d: "يحيي المغني المغربي حاتم عمور حفلاً يوم السبت 5 شتنبر 2026 على الساعة 20:30 بميغاراما الدار البيضاء، ضمن جولته لسنة 2026: بوب مغربي وأغنية عربية معاصرة. ثمن التذكرة: 250 درهماً." }
  },
  {
    id: "e7", date: "2026-09-11", annexe: "moulay-youssef",
    featured: true,
    photo: "assets/agenda/hoba-hoba-spirit.jpg",
    source: "Billetterie Guichet",
    cat: { fr: "Musique", ar: "موسيقى" },
    fr: { t: "Hoba Hoba Spirit en concert", lieu: "Megarama Casablanca (Aïn Diab)", d: "Le groupe Hoba Hoba Spirit, figure de la scène fusion marocaine (rock, reggae et rythmes marocains), joue le vendredi 11 septembre 2026 à 20h30 au Megarama Casablanca. Billet : 250 dirhams." },
    ar: { t: "هبة هبة سبيريت في حفل موسيقي", lieu: "ميغاراما الدار البيضاء (عين الذياب)", d: "تحيي مجموعة هبة هبة سبيريت، أحد رموز مشهد الفيوجن المغربي (روك، ريغي وإيقاعات مغربية)، حفلاً يوم الجمعة 11 شتنبر 2026 على الساعة 20:30 بميغاراما الدار البيضاء. ثمن التذكرة: 250 درهماً." }
  },
  {
    id: "e8", date: "2026-07-26", dateEnd: "2026-10-31", annexe: "moulay-youssef",
    photo: "assets/agenda/dinos-alive.jpg",
    source: "Exhibition Hub / Fever",
    cat: { fr: "Exposition", ar: "معرض" },
    fr: { t: "Dinos Alive - expérience immersive", lieu: "Sela Park Casablanca (Nassim)", d: "Du 26 juillet au 31 octobre 2026, un parcours intérieur climatisé présente plus de 40 dinosaures animés grandeur nature (T-Rex, Stégosaure, Vélociraptor), avec décors immersifs, aquarium virtuel et espace interactif sur le métier de paléontologue. Visite de 45 à 75 minutes, accessible aux poussettes, gratuite pour les moins de 3 ans. Créneaux à vérifier sur la billetterie." },
    ar: { t: "دينوز آلايف - تجربة غامرة", lieu: "سيلا بارك الدار البيضاء (نسيم)", d: "من 26 يوليوز إلى 31 أكتوبر 2026، مسار داخلي مكيَّف يعرض أكثر من 40 ديناصوراً متحركاً بالحجم الطبيعي (تي-ريكس، ستيغوصور، فيلوسيرابتور)، مع ديكورات غامرة وحوض مائي افتراضي وفضاء تفاعلي حول مهنة عالم الأحافير. تدوم الزيارة من 45 إلى 75 دقيقة، متاحة لعربات الأطفال، مجانية لمن هم دون 3 سنوات. يُنصح بالتحقق من الحصص عبر التذاكر." }
  }
];

/* `placeholder: true` : actualités de démonstration, reléguées après les vraies
   dans le rendu (voir renderNews), quelle que soit leur date. À retirer quand
   l'arrondissement fournit ses propres actualités. */
const ACTUS = [
  {
    id: "a1", date: "2026-08-20", cat: { fr: "Culture", ar: "ثقافة" },
    placeholder: true,
    photo: "assets/actus/rentree-culturelle.jpg",
    fr: { t: "Rentrée culturelle au Complexe Culturel Sidi Belyout", d: "Ateliers, expositions et spectacles reprennent dès septembre. Programme complet disponible à l'accueil du complexe et par téléphone." },
    ar: { t: "الموسم الثقافي بالمركب الثقافي سيدي بليوط", d: "تستأنف الورشات والمعارض والعروض ابتداءً من شتنبر. البرنامج الكامل متوفر باستقبال المركب وعبر الهاتف." }
  },
  {
    id: "a2", date: "2026-08-18", cat: { fr: "Travaux", ar: "أشغال" },
    placeholder: true,
    photo: "assets/actus/boulevard-ziraoui.jpg",
    fr: { t: "Réaménagement du boulevard Ziraoui", d: "Les travaux de voirie et d'éclairage public se poursuivent. Circulation adaptée aux heures de sortie scolaire." },
    ar: { t: "إعادة تهيئة شارع الزرعوني", d: "تتواصل أشغال الطرق والإنارة العمومية. حركة السير معدلة خلال أوقات الخروج المدرسي." }
  },
  {
    id: "a3", date: "2026-08-14", cat: { fr: "Sport", ar: "رياضة" },
    placeholder: true,
    photo: "assets/actus/complexe-sportif.jpg",
    fr: { t: "Ouverture des inscriptions au Complexe Sportif Larbi Ben Mbarek", d: "La nouvelle saison démarre en septembre : football à 7, tennis de table et arts martiaux. Inscriptions sur place, du lundi au samedi." },
    ar: { t: "فتح باب التسجيل بالمركب الرياضي العربي بن مبارك", d: "يبدأ الموسم الجديد في شتنبر: كرة القدم للسبعة، تنس الطاولة والفنون القتالية. التسجيل في عين المكان، من الاثنين إلى السبت." }
  },
  {
    id: "a4", date: "2026-08-12", cat: { fr: "Loisirs", ar: "ترفيه" },
    placeholder: true,
    photo: "assets/actus/aire-de-jeux-ligue-arabe.jpg",
    fr: { t: "Nouvelle aire de jeux au parc de la Ligue Arabe", d: "Un espace dédié aux enfants de 3 à 10 ans a été aménagé dans l'allée nord du parc." },
    ar: { t: "فضاء لعب جديد بمنتزه جامعة الدول العربية", d: "تم تهيئة فضاء مخصص للأطفال من 3 إلى 10 سنوات بالممر الشمالي للمنتزه." }
  },

  /* Ajout 2026-09-02 : sujets issus de la presse (Le360, L'Économiste,
     Al Akhbar), avec leur date réelle de publication. Le champ `source` est
     affiché sur la carte. Photos à déposer dans assets/actus/ ; tant qu'elles
     sont absentes, l'icône de rubrique s'affiche à la place. */
  {
    id: "a5", date: "2024-12-24", cat: { fr: "Sport", ar: "رياضة" },
    source: "Al Akhbar",
    photo: "assets/actus/stade-larbi-benbarek.jpg",
    fr: { t: "Stade Larbi-Benbarek : études lancées pour sa réhabilitation", d: "Le wali de Casablanca a saisi les élus de l'arrondissement au sujet du stade Larbi-Benbarek, situé près de la gare de Casa-Port et aujourd'hui désaffecté. Des bureaux d'études ont été mandatés pour évaluer son état et chiffrer une remise à niveau ou une reconstruction ; les élus locaux plaident pour le maintien de la vocation sportive du site." },
    ar: { t: "ملعب العربي بنمبارك: انطلاق دراسات إعادة التأهيل", d: "وجّه والي الدار البيضاء مراسلة إلى منتخبي المقاطعة بشأن ملعب العربي بنمبارك، القريب من محطة الدار البيضاء الميناء والمهجور حالياً. تم تكليف مكاتب دراسات بتقييم حالته وتحديد كلفة إعادة تأهيله أو إعادة بنائه، ويطالب المنتخبون المحليون بالحفاظ على الطابع الرياضي للموقع." }
  },
  {
    id: "a6", date: "2024-10-26", cat: { fr: "Travaux", ar: "أشغال" },
    source: "Le360",
    photo: "assets/actus/boulevard-zerktouni.jpg",
    fr: { t: "Boulevard Zerktouni : le chantier de mise à niveau à 75 %", d: "Les travaux de réaménagement du boulevard Zerktouni, qui traverse Anfa, Maârif, Sidi Belyout et Mers Sultan, atteignaient 75 % d'avancement fin octobre 2024. Le projet prévoit l'élargissement de la chaussée, la réfection des trottoirs, un aménagement paysager et un éclairage public modernisé." },
    ar: { t: "شارع الزرقطوني: أشغال التأهيل بلغت 75٪", d: "بلغت أشغال إعادة تهيئة شارع الزرقطوني، الذي يعبر مقاطعات أنفا والمعاريف وسيدي بليوط ومرس السلطان، نسبة 75٪ نهاية أكتوبر 2024. يشمل المشروع توسيع الطريق وإصلاح الأرصفة وتهيئة المساحات الخضراء وتحديث الإنارة العمومية." }
  },
  {
    id: "a7", date: "2024-07-15", cat: { fr: "Mobilité", ar: "تنقل" },
    source: "L'Économiste",
    photo: "assets/actus/parking-nations-unies.jpg",
    fr: { t: "Un parking souterrain de 800 places prévu place des Nations-Unies", d: "Un parking souterrain d'environ 800 places sur deux niveaux est prévu place des Nations-Unies, derrière l'hôtel Royal Mansour, sur une parcelle d'environ 13 000 m². Il doit compenser la réduction du stationnement de surface liée au tramway et au busway ; le coût est estimé à 118 millions de dirhams." },
    ar: { t: "موقف سيارات تحت أرضي بسعة 800 مكان بساحة الأمم المتحدة", d: "من المرتقب إنجاز موقف سيارات تحت أرضي بسعة حوالي 800 مكان في طابقين بساحة الأمم المتحدة، خلف فندق رويال منصور، على قطعة أرضية تبلغ حوالي 13000 متر مربع. ويهدف إلى تعويض تقليص الوقوف السطحي المرتبط بالطرامواي والحافلات السريعة، وتقدّر كلفته بـ118 مليون درهم." }
  },
  {
    id: "a8", date: "2026-08-27", cat: { fr: "Société", ar: "مجتمع" },
    source: "SNRT News",
    photo: "assets/actus/eclipse-lunaire.jpg",
    fr: { t: "Éclipse lunaire partielle observée depuis le Maroc", d: "Une éclipse lunaire partielle, avec près de 94 % du disque lunaire dans l'ombre de la Terre au maximum, a été visible depuis le Maroc dans la nuit du 27 au 28 août 2026. À Casablanca, la phase partielle a débuté vers 3h33 et son maximum est survenu vers 5h12, avant le coucher de la Lune peu après 7h." },
    ar: { t: "خسوف جزئي للقمر شوهد من المغرب", d: "شوهد خسوف جزئي للقمر، غُطّي خلاله نحو 94٪ من القرص القمري بظل الأرض عند الذروة، من المغرب ليلة 27 إلى 28 غشت 2026. بالدار البيضاء، انطلقت المرحلة الجزئية نحو الساعة 3:33 وبلغت ذروتها نحو 5:12، قبل غروب القمر بُعيد الساعة 7." }
  },
  {
    id: "a9", date: "2026-07-08", cat: { fr: "Culture", ar: "ثقافة" },
    source: "Culturama",
    photo: "assets/actus/jazzablanca-scorpions.jpg",
    fr: { t: "Jazzablanca 2026 : Scorpions et les fusions marocaines à l'affiche", d: "La 19e édition du festival Jazzablanca s'est tenue en juillet 2026 à Casablanca, entre Anfa Park et le parc de la Ligue Arabe. La soirée Casa Anfa a réuni le groupe de rock Scorpions, en tournée pour ses soixante ans de carrière, aux côtés de créations mêlant jazz, funk, gnaoua et musiques africaines (Hypnotic Brass Ensemble avec Mehdi Nassouli, José James, Sarah Mazigh). Le festival a proposé 40 concerts à Anfa Park et 10 concerts gratuits au parc de la Ligue Arabe." },
    ar: { t: "جازابلانكا 2026: سكوربيونز والتمازج الموسيقي المغربي على الركح", d: "احتضنت الدار البيضاء في يوليوز 2026 الدورة التاسعة عشرة من مهرجان جازابلانكا، بين منتزه أنفا ومنتزه جامعة الدول العربية. جمعت سهرة كازا أنفا فرقة الروك سكوربيونز، في جولة بمناسبة ستين سنة من مسيرتها، إلى جانب أعمال تمزج الجاز والفانك وكناوة والموسيقى الإفريقية (Hypnotic Brass Ensemble رفقة مهدي نصولي، خوسي جيمس، سارة مازيغ). قدّم المهرجان 40 حفلاً بمنتزه أنفا و10 حفلات مجانية بمنتزه جامعة الدول العربية." }
  }
];
