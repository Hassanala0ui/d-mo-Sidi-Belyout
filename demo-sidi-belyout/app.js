/* ============================================================
   app.js - Portail Sidi Belyout (démo)
   ============================================================ */

/* ── 1. Traductions ─────────────────────────────────────── */
const T = {
  fr: {
    urgences:"Urgences",
    brand:"Sidi Belyout", brandSub:"Portail de proximité",
    navServices:"Services", navVie:"Vie locale", navAnnexes:"Mon annexe", navCarte:"Carte",
    megaQuick:"Accès rapide", megaUrgences:"Numéros d'urgence",
    eyebrow:"Arrondissement de Sidi Belyout",
    heroTitle:"Votre arrondissement,<br>à portée de main.",
    heroLead:"Trouvez un service, une démarche ou un équipement près de chez vous. Appelez, ou lancez l'itinéraire.",
    heroNote:"Positions des annexes provisoires - à valider par l'arrondissement.",
    ebAnnexe:"Mon quartier", annexeH:"Les services autour de vous",
    annexeP:"Choisissez votre quartier ci-dessus : la liste et la carte s'adaptent immédiatement.",
    ebCarte:"Carte interactive", carteH:"Localiser un service",
    carteP:"Filtrez par catégorie ou par quartier. Cliquez sur un point pour voir sa fiche complète.",
    ebActus:"Actualités", actusH:"La vie de l'arrondissement", publishedOn:"Publié le",
    actusAll:"Voir toutes les actualités",
    ebAgenda:"Agenda", agendaH:"Ce qui se passe près de chez vous", agendaAll:"Voir tout l'agenda",
    ebProjets:"Projets", projetsH:"Visualiser un aménagement avant sa réalisation",
    projetBadge:"Exemple de rendu - projet fictif, à titre de démonstration",
    footTag:"Votre arrondissement. Vos services. Votre proximité.",
    footNote:"Démonstration - les données affichées proviennent de sources publiques et doivent être validées par l'arrondissement avant toute mise en ligne. Les numéros d'urgence sont à vérifier.",
    footLegal:"Maquette de présentation - non contractuelle",
    footTech:"Carte : OpenStreetMap",
    footContactT:"Contact", footHoursT:"Horaires", footAddrT:"Adresse",
    footMentions:"Mentions légales", footConfid:"Politique de confidentialité",
    footNewsTitle:"Recevez les actualités de l'arrondissement",
    footNewsBtn:"S'abonner", footNewsSoon:"Bientôt disponible",
    call:"Appeler", route:"Voir l'itinéraire",
    toValidate:"Information à valider par l'arrondissement",
    search:"Rechercher un service, un équipement…",
    all:"Toutes", services:"services", service:"service",
    address:"Adresse", phone:"Téléphone", hours:"Horaires", about:"Informations", annexe:"Annexe",
    noPhone:"Non communiqué",
    emptyList:"Aucun service ne correspond à cette recherche.",
    langBtn:"العربية",
    themeLight:"Mode sombre", themeDark:"Mode clair"
  },
  ar: {
    urgences:"الطوارئ",
    brand:"سيدي بليوط", brandSub:"بوابة القرب",
    navServices:"الخدمات", navVie:"الحياة المحلية", navAnnexes:"ملحقتي", navCarte:"الخريطة",
    megaQuick:"وصول سريع", megaUrgences:"أرقام الطوارئ",
    eyebrow:"مقاطعة سيدي بليوط",
    heroTitle:"مقاطعتكم،<br>في متناول يدكم.",
    heroLead:"اعثروا على خدمة أو إجراء أو مرفق بالقرب منكم. اتصلوا، أو انطلقوا في الاتجاه.",
    heroNote:"مواقع الملحقات مؤقتة - في انتظار مصادقة المقاطعة.",
    ebAnnexe:"حيّي", annexeH:"الخدمات من حولكم",
    annexeP:"اختاروا حيّكم أعلاه: تتكيف اللائحة والخريطة على الفور.",
    ebCarte:"الخريطة التفاعلية", carteH:"تحديد موقع خدمة",
    carteP:"صفّوا حسب الفئة أو الحي. انقروا على نقطة لعرض بطاقتها الكاملة.",
    ebActus:"الأخبار", actusH:"حياة المقاطعة", publishedOn:"نُشر بتاريخ",
    actusAll:"عرض جميع الأخبار",
    ebAgenda:"الأجندة", agendaH:"ما يقع بالقرب منكم", agendaAll:"عرض كامل الأجندة",
    ebProjets:"المشاريع", projetsH:"تصوّر مشروع قبل إنجازه",
    projetBadge:"نموذج توضيحي - مشروع افتراضي لأغراض العرض فقط",
    footTag:"مقاطعتكم. خدماتكم. قربكم.",
    footNote:"نموذج تجريبي - المعطيات المعروضة مستقاة من مصادر عمومية ويجب أن تصادق عليها المقاطعة قبل النشر. أرقام الطوارئ تحتاج إلى تأكيد.",
    footLegal:"نموذج للعرض - غير تعاقدي",
    footTech:"الخريطة: OpenStreetMap",
    footContactT:"اتصال", footHoursT:"التوقيت", footAddrT:"العنوان",
    footMentions:"الإشعار القانوني", footConfid:"سياسة الخصوصية",
    footNewsTitle:"استلموا أخبار المقاطعة عبر البريد الإلكتروني",
    footNewsBtn:"الاشتراك", footNewsSoon:"قريباً",
    call:"اتصال", route:"عرض الاتجاه",
    toValidate:"معلومة في انتظار مصادقة المقاطعة",
    search:"ابحث عن خدمة أو مرفق…",
    all:"الكل", services:"خدمات", service:"خدمة",
    address:"العنوان", phone:"الهاتف", hours:"التوقيت", about:"معلومات", annexe:"الملحقة",
    noPhone:"غير متوفر",
    emptyList:"لا توجد خدمة تطابق هذا البحث.",
    langBtn:"Français",
    themeLight:"الوضع الليلي", themeDark:"الوضع النهاري"
  }
};

/* ── 2. État ────────────────────────────────────────────── */
let L_ = "fr";                 // locale
let annexeId = ANNEXES[0].id;  // annexe sélectionnée
let anCatFilter = "all";       // filtre catégorie, section "Mon quartier" uniquement
let catId = "all";             // filtre catégorie, carte interactive
let query = "";                // recherche

const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const t  = k => T[L_][k];

/* ── 3. Icônes - pleines, blanches, dans un aplat de couleur ── */
const ICONS = {
  building:'<path d="M12 2 4 7h16Z"/><rect x="4" y="7" width="16" height="2"/><rect x="5" y="11" width="2" height="8"/><rect x="9" y="11" width="2" height="8"/><rect x="13" y="11" width="2" height="8"/><rect x="17" y="11" width="2" height="8"/><rect x="3" y="19" width="18" height="2"/>',
  shield:'<path d="M12 2 20 5v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V5Z"/>',
  flame:'<circle cx="12" cy="15" r="6"/><path d="M12 2 8 11h8Z"/>',
  heart:'<path d="M12 21C7 17 3 13.5 3 9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 4.5-4 8-9 12Z"/>',
  music:'<circle cx="7" cy="18" r="3"/><circle cx="17" cy="16" r="3"/><rect x="9" y="5" width="2" height="13"/><rect x="19" y="3" width="2" height="13"/><path d="M9 5 19 3v3L9 8Z"/>',
  activity:'<rect x="2" y="10" width="3" height="4" rx="1"/><rect x="19" y="10" width="3" height="4" rx="1"/><rect x="6" y="8" width="3" height="8" rx="1"/><rect x="15" y="8" width="3" height="8" rx="1"/><rect x="9" y="11" width="6" height="2"/>',
  tree:'<circle cx="12" cy="9" r="7"/><rect x="10.5" y="15" width="3" height="7" rx="1"/>',
  book:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/>',
  car:'<path d="M5 16 6 10a2 2 0 0 1 2-1.5h8A2 2 0 0 1 20 10l1 6Z"/><rect x="3" y="16" width="18" height="4" rx="2"/><circle cx="7" cy="20" r="2"/><circle cx="17" cy="20" r="2"/>',
  train:'<path d="M6 3h12a2 2 0 0 1 2 2v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Z"/><circle cx="8" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/>',
  home:'<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z"/>',
  pin:'<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Z"/>',
  file:'<path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/>',
  users:'<circle cx="8" cy="8" r="4"/><path d="M1 21a7 7 0 0 1 14 0Z"/><circle cx="17" cy="8" r="3.2"/><path d="M13 21a6 6 0 0 1 11 0Z"/>',
  rss:'<path d="M12 2a6 6 0 0 0-6 6v3.5c0 1-.4 2-1.2 2.7L3 16h18l-1.8-1.8c-.8-.7-1.2-1.7-1.2-2.7V8a6 6 0 0 0-6-6Z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0Z"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><rect x="7" y="2" width="2" height="5" rx="1"/><rect x="15" y="2" width="2" height="5" rx="1"/>',
  phone:'<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.2.4 2.4.6 3.7.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.7a1 1 0 0 1-.2 1Z"/>',
  map:'<path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2Z"/>',
  clock:'<path fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM11 7h2v5.6l3.5 2-1 1.7L11 13.5Z"/>',
  info:'<path fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-13h-2v2h2Zm0 4h-2v6h2Z"/>',
  chevron:'<path d="M8 4l8 8-8 8Z"/>',
  check:'<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 20.6 7.4l-1.4-1.4Z"/>'
};
const svg = (n, s=20) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor">${ICONS[n]||ICONS.pin}</svg>`;

/* ── 4. Helpers ─────────────────────────────────────────── */
const cat     = id => CATEGORIES.find(c => c.id === id);
const annexe  = id => ANNEXES.find(a => a.id === id);
const catName = id => (cat(id) || {})[L_] || "";
const fmtDate = iso => new Date(iso)
  .toLocaleDateString(L_ === "ar" ? "ar-MA-u-ca-gregory-nu-latn" : "fr-FR", { day:"numeric", month:"long", year:"numeric" });
const fmtDayMonth = iso => {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleDateString(L_ === "ar" ? "ar-MA-u-ca-gregory-nu-latn" : "fr-FR", { month:"long" });
  return { day, month };
};

function servicesOf(aId){ return SERVICES.filter(s => s.annexe === aId); }

function filtered(){
  const q = query.trim().toLowerCase();
  return SERVICES.filter(s => {
    if (catId !== "all" && s.cat !== catId) return false;
    if (!q) return true;
    const a = annexe(s.annexe);
    return [s[L_].name, s[L_].address, catName(s.cat), a ? a[L_].name : ""]
      .join(" ").toLowerCase().includes(q);
  });
}

/* ── 5. Application de la langue et du sens ─────────────── */
function applyLocale(){
  const html = document.documentElement;
  html.lang = L_;
  html.dir  = L_ === "ar" ? "rtl" : "ltr";

  $$("[data-t]").forEach(el => {
    const v = t(el.dataset.t);
    if (v !== undefined) el.innerHTML = v;
  });

  $("#q").placeholder = t("search");
  $("#langTxt").textContent = t("langBtn");
  $("#langTxtShort").textContent = L_ === "fr" ? "AR" : "FR";
  $("#themeBtn").setAttribute("aria-label",
    document.documentElement.dataset.theme === "dark" ? t("themeDark") : t("themeLight"));

  renderUrgences();
  renderQCards();
  renderAnnexe();
  renderMega();
  renderMobileNav();
  renderFilters();
  renderNews();
  renderAgenda();
  renderProjet();
  renderFooter();
  renderMarkers();
}

/* ── 6. Rendus ──────────────────────────────────────────── */
function renderUrgences(){
  const bar = $("#urgBar");
  bar.querySelectorAll(".urg").forEach(n => n.remove());
  URGENCES.forEach(u => {
    const a = document.createElement("a");
    a.className = "urg";
    a.href = "tel:" + u.num;
    a.innerHTML = `<span>${u[L_]}</span><b class="num">${u.num}</b>`;
    bar.appendChild(a);
  });
}

function renderQCards(){
  const box = $("#qCards");
  box.innerHTML = "";
  ANNEXES.forEach(a => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "qcard";
    b.style.setProperty("--chip", a.accent);
    b.setAttribute("aria-pressed", String(a.id === annexeId));
    b.innerHTML =
      `<span class="qcard__frame"><img class="qcard__img" src="${a.photo}" alt="" loading="lazy"></span>
       <span class="qcard__foot">
         <span class="qcard__name">${a[L_].name}</span>
         <span class="qcard__check" aria-hidden="true">${svg("check", 11)}</span>
       </span>`;
    b.onclick = () => selectAnnexe(a.id);
    box.appendChild(b);
  });
}

/* Regroupements réellement disponibles pour cette annexe - jamais de
   bouton vers un groupe sans service réel derrière. */
function annexeQuickGroups(aId){
  const present = new Set(servicesOf(aId).map(s => s.cat));
  return QUICK_GROUPS.filter(g => g.cats.some(c => present.has(c)));
}

function renderAnnexe(){
  const a = annexe(annexeId);
  const list = servicesOf(annexeId);
  const activeGroup = QUICK_GROUPS.find(g => g.id === anCatFilter);
  const shown = !activeGroup ? list : list.filter(s => activeGroup.cats.includes(s.cat));

  $("#anBadge").textContent = a.n;
  $("#anBadge").classList.add("num");
  $("#anName").textContent  = a[L_].name;
  $("#anDesc").textContent  = a[L_].desc;
  $("#anCount").textContent = `${list.length} ${list.length > 1 ? t("services") : t("service")}`;

  const quick = $("#anQuick");
  quick.innerHTML = "";
  annexeQuickGroups(annexeId).forEach(g => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "qbtn";
    b.setAttribute("aria-pressed", String(anCatFilter === g.id));
    b.innerHTML = `<span class="qbtn__ico">${svg(g.icon, 17)}</span><span class="qbtn__label">${g[L_]}</span>`;
    b.onclick = () => { anCatFilter = anCatFilter === g.id ? "all" : g.id; renderAnnexe(); };
    quick.appendChild(b);
  });

  const box = $("#anList");
  box.innerHTML = "";
  if (!shown.length){
    box.innerHTML = `<p class="empty">${t("emptyList")}</p>`;
  } else {
    shown.forEach(s => box.appendChild(rowEl(s)));
  }
  drawAnnexeMap();
}

function rowEl(s){
  const b = document.createElement("button");
  b.type = "button";
  b.className = "row";
  b.innerHTML =
    `<span class="row__ico">${svg(cat(s.cat).icon, 19)}</span>
     <span class="row__txt">
       <span class="row__name">${s[L_].name}</span>
       <span class="row__meta">${catName(s.cat)} · ${s[L_].address}</span>
     </span>
     <span class="row__go dir-icon">${svg("chevron", 17)}</span>`;
  b.onclick = () => openSheet(s.id);
  return b;
}

/* Cible d'ancrage la plus pertinente pour chaque rubrique du méga-menu :
   seules Actualités et Agenda ont leur propre section dans cette démo. */
const MEGA_TARGET = {
  services:"carte", demarches:"carte", contacts:"pied",
  famille:"carte", culture:"agenda", agenda:"agenda", actus:"actus"
};

function megaQuickHtml(){
  return `<div class="mega__quick">
    <p class="mega__quickT">${t("megaQuick")}</p>
    <button class="mega__qbtn" type="button" data-scrolltop>${t("megaUrgences")}</button>
    <a class="mega__qbtn" href="#carte">${t("ebCarte")}</a>
    <a class="mega__qbtn" href="#agenda">${t("agendaAll")}</a>
  </div>`;
}

function megaShell(colsHtml){
  return `<div class="wrap mega__in">
    <div class="mega__cols">${colsHtml}</div>
    ${megaQuickHtml()}
  </div>`;
}

function renderMega(){
  const rubLink = r => `<a class="mega__link" href="#${MEGA_TARGET[r.id]}">${r[L_].t}</a>`;
  const annexeLink = a =>
    `<a class="mega__link mega__link--annexe" href="#annexes" data-annexe="${a.id}" style="--chip:${a.accent}">
       <span class="mega__dot"></span>${a[L_].name}
     </a>`;

  const services = RUBRIQUES.filter(r => r.group === "services");
  $("#mega-services").innerHTML = megaShell(
    `<div class="mega__col">${services.map(rubLink).join("")}</div>`
  );

  const vie = RUBRIQUES.filter(r => r.group === "vie-locale");
  const vieHalf = Math.ceil(vie.length / 2);
  $("#mega-vie").innerHTML = megaShell(
    `<div class="mega__col">${vie.slice(0, vieHalf).map(rubLink).join("")}</div>
     <div class="mega__col">${vie.slice(vieHalf).map(rubLink).join("")}</div>`
  );

  const anHalf = Math.ceil(ANNEXES.length / 2);
  $("#mega-annexe").innerHTML = megaShell(
    `<div class="mega__col">${ANNEXES.slice(0, anHalf).map(annexeLink).join("")}</div>
     <div class="mega__col">${ANNEXES.slice(anHalf).map(annexeLink).join("")}</div>`
  );
}

/* Panneau plein écran sous 900px : mêmes données que le méga-menu,
   en accordéons natifs <details> - accessibles au clavier sans JS de focus-trap. */
function renderMobileNav(){
  const rubLink = r => `<a href="#${MEGA_TARGET[r.id]}">${r[L_].t}</a>`;
  const annexeLink = a =>
    `<a href="#annexes" data-annexe="${a.id}" style="--chip:${a.accent}">
       <span class="mega__dot"></span>${a[L_].name}
     </a>`;

  const services = RUBRIQUES.filter(r => r.group === "services");
  const vie = RUBRIQUES.filter(r => r.group === "vie-locale");
  const chev = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6 9l6 6 6-6Z"/></svg>';

  $("#mobileNav .mobilenav__in").innerHTML = `
    <details class="msec">
      <summary>${t("navServices")}${chev}</summary>
      <div class="msec__body">${services.map(rubLink).join("")}</div>
    </details>
    <details class="msec">
      <summary>${t("navVie")}${chev}</summary>
      <div class="msec__body">${vie.map(rubLink).join("")}</div>
    </details>
    <details class="msec">
      <summary>${t("navAnnexes")}${chev}</summary>
      <div class="msec__body">${ANNEXES.map(annexeLink).join("")}</div>
    </details>
    <a class="msec--link" href="#carte">${t("navCarte")}</a>
    <div class="mobilenav__quick">
      <p class="mobilenav__quickT">${t("megaQuick")}</p>
      <button class="mega__qbtn" type="button" data-scrolltop>${t("megaUrgences")}</button>
      <a class="mega__qbtn" href="#carte">${t("ebCarte")}</a>
      <a class="mega__qbtn" href="#agenda">${t("agendaAll")}</a>
    </div>`;
}

function renderFilters(){
  const box = $("#catFilters");
  box.innerHTML = "";
  const mk = (id, label, icon) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "filt";
    b.setAttribute("aria-pressed", String(catId === id));
    b.innerHTML = (icon ? svg(icon, 15) : "") + `<span>${label}</span>`;
    b.onclick = () => { catId = id; renderFilters(); renderMarkers(); };
    box.appendChild(b);
  };
  mk("all", t("all"), null);
  CATEGORIES.forEach(c => mk(c.id, c[L_], c.icon));
}

function renderNews(){
  renderEventGrid("#news", ACTUS, { icon:"rss", dated:"line" });
}

function renderFooter(){
  const box = $("#footContact");
  const s = SERVICES.find(x => x.id === "arrondissement");
  if (!box || !s) return;
  const phoneHref = s.phone ? "tel:" + s.phone : null;
  const phoneTxt = s.phone ? s.phone.replace(/(\d{2})(?=\d)/g,"$1 ").trim() : t("noPhone");
  box.innerHTML =
    `<div class="foot__col">
       <h4>${t("footContactT")}</h4>
       <p>${phoneHref ? `<a href="${phoneHref}" class="num">${phoneTxt}</a>` : `<span class="num">${phoneTxt}</span>`}</p>
     </div>
     <div class="foot__col">
       <h4>${t("footHoursT")}</h4>
       <p>${s[L_].hours}</p>
     </div>
     <div class="foot__col">
       <h4>${t("footAddrT")}</h4>
       <p>${s[L_].address}</p>
     </div>`;
}

/* Carte commune à l'Agenda (à venir, date en badge) et aux Actualités
   (déjà publiées, date en pied de carte) - même structure, même gabarit. */
function renderEventGrid(sel, items, { icon, dated }){
  const box = $(sel);
  box.innerHTML = "";

  const card = (e, cls) => {
    const hasPhoto = !!e.photo;
    const el = document.createElement("article");
    el.className = "ag " + cls + (hasPhoto ? " ag--photo" : "");
    const media = hasPhoto
      ? `<div class="ag__media"><img src="${e.photo}" alt="" loading="lazy"></div>`
      : `<span class="ag__ico">${svg(icon, cls === "ag--feat" ? 24 : 18)}</span>`;
    let dateBadge = "";
    if (dated === "badge") {
      const { day, month } = fmtDayMonth(e.date);
      dateBadge = `<p class="ag__date"><span class="num">${day}</span> ${month}</p>`;
    }
    const lieu = e[L_].lieu ? `<p class="ag__lieu">${svg("pin", 13)}<span>${e[L_].lieu}</span></p>` : "";
    const publiee = dated === "line" ? `<p class="ag__pub num">${t("publishedOn")} ${fmtDate(e.date)}</p>` : "";
    el.innerHTML =
      media +
      `<div class="ag__body">
         ${dateBadge}
         <span class="ag__tag">${e.cat[L_]}</span>
         <h3 class="ag__t">${e[L_].t}</h3>
         <p class="ag__d">${e[L_].d}</p>
         ${lieu}${publiee}
       </div>`;
    return el;
  };

  const [feat, ...rest] = items;
  box.appendChild(card(feat, "ag--feat"));
  const list = document.createElement("div");
  list.className = "ag__list";
  rest.forEach(e => list.appendChild(card(e, "ag--sm")));
  box.appendChild(list);
}

function renderAgenda(){
  renderEventGrid("#agenda-grid", EVENEMENTS, { icon:"calendar", dated:"badge" });
}

function renderProjet(){
  const p = PROJET_EXEMPLE[L_];
  $("#projTitle").textContent = p.titre;
  $("#projLead").textContent = p.texte;
  const box = $("#projPoints");
  box.innerHTML = "";
  p.points.forEach(pt => {
    const d = document.createElement("div");
    d.className = "projet__point";
    d.innerHTML = `<b>${pt.t}</b><span>${pt.d}</span>`;
    box.appendChild(d);
  });
}

/* ── 7. Cartes ──────────────────────────────────────────── */
const TILES = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTR  = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

let map, anMap, shMap, layer;

function pinIcon(color, icon, big=false){
  const size = big ? 38 : 32;
  return L.divIcon({
    className:"",
    html:`<div class="pin ${big?'pin--annexe':''}" style="background:${color};width:${size}px;height:${size}px">
            <span style="color:#fff;display:grid;place-items:center">${svg(icon, big?18:16)}</span>
          </div>`,
    iconSize:[size,size],
    iconAnchor:[size/2,size],
    popupAnchor:[0,-size+4]
  });
}

/* Pastille de regroupement - carte interactive uniquement (#map).
   Trois paliers de taille/teinte dans notre palette (pas celle de Culturama). */
function clusterIcon(cluster){
  const count = cluster.getChildCount();
  const tier = count < 5 ? "sm" : count < 15 ? "md" : "lg";
  const size = count < 5 ? 34 : count < 15 ? 42 : 50;
  return L.divIcon({
    className:"",
    html:`<div class="mcluster mcluster--${tier}" style="width:${size}px;height:${size}px">
            <div class="mcluster__core">${count}</div>
          </div>`,
    iconSize:[size, size]
  });
}

function initMaps(){
  map = L.map("map", { scrollWheelZoom:false, zoomControl:true })
        .setView([33.5955, -7.6210], 14);
  L.tileLayer(TILES, { attribution:ATTR, maxZoom:19 }).addTo(map);
  layer = L.markerClusterGroup({
    iconCreateFunction: clusterIcon,
    showCoverageOnHover: false,
    spiderfyOnMaxZoom: true,
    maxClusterRadius: 50
  }).addTo(map);

  anMap = L.map("anMap", { scrollWheelZoom:false, zoomControl:true, attributionControl:false })
          .setView([33.5955, -7.6210], 14);
  L.tileLayer(TILES, { maxZoom:19 }).addTo(anMap);

  renderMarkers();
  drawAnnexeMap();
}

function renderMarkers(){
  if (!layer) return;
  layer.clearLayers();

  // annexes
  ANNEXES.forEach(a => {
    L.marker([a.lat, a.lng], { icon: pinIcon(a.accent, "home", true) })
      .bindPopup(
        `<span class="pop__c">${t("annexe")} 0${a.n}</span>
         <div class="pop__n">${a[L_].name}</div>`)
      .addTo(layer);
  });

  // services
  filtered().forEach(s => {
    const a = annexe(s.annexe);
    L.marker([s.lat, s.lng], { icon: pinIcon(a ? a.accent : "#0C7A5F", cat(s.cat).icon) })
      .bindPopup(
        `<span class="pop__c">${catName(s.cat)}</span>
         <div class="pop__n">${s[L_].name}</div>
         <a class="pop__b" href="#" onclick="openSheet('${s.id}');return false;">
           ${t("about")} ${svg("chevron",14)}
         </a>`)
      .addTo(layer);
  });
}

function fitAnMap(){
  const a = annexe(annexeId);
  const pts = [[a.lat, a.lng], ...servicesOf(annexeId).map(s => [s.lat, s.lng])];
  if (pts.length > 1) anMap.fitBounds(pts, { padding:[36,36], maxZoom:15 });
  else anMap.setView([a.lat, a.lng], 15);
}

function drawAnnexeMap(){
  if (!anMap) return;
  anMap.eachLayer(l => { if (l instanceof L.Marker) anMap.removeLayer(l); });

  const a = annexe(annexeId);
  const list = servicesOf(annexeId);
  const activeGroup = QUICK_GROUPS.find(g => g.id === anCatFilter);
  const shown = !activeGroup ? list : list.filter(s => activeGroup.cats.includes(s.cat));
  L.marker([a.lat, a.lng], { icon: pinIcon(a.accent, "home", true) }).addTo(anMap);
  shown.forEach(s => {
    L.marker([s.lat, s.lng], { icon: pinIcon(a.accent, cat(s.cat).icon) })
      .on("click", () => openSheet(s.id))
      .addTo(anMap);
  });

  fitAnMap();
  setTimeout(() => anMap.invalidateSize(), 60);
}

/* ── 8. Sélection d'annexe ──────────────────────────────── */
function selectAnnexe(id){
  annexeId = id;
  anCatFilter = "all";
  const a = annexe(id);
  document.documentElement.style.setProperty("--accent", a.accent);
  document.documentElement.style.setProperty("--accent-ink", a.accentInk);
  renderQCards();
  renderAnnexe();
}

/* ── 9. Fiche service ───────────────────────────────────── */
function openSheet(id){
  const s = SERVICES.find(x => x.id === id);
  if (!s) return;
  const a = annexe(s.annexe);

  $("#shIco").innerHTML  = svg(cat(s.cat).icon, 22);
  $("#shCat").textContent = catName(s.cat);
  $("#shName").textContent = s[L_].name;

  const line = (icon, k, v, isNum) =>
    `<div class="info">
       <span class="info__i">${svg(icon,18)}</span>
       <div><div class="info__k">${k}</div>
       <div class="info__v${isNum ? " num" : ""}">${v}</div></div>
     </div>`;

  $("#shInfos").innerHTML =
    line("pin",   t("address"), s[L_].address) +
    line("clock", t("hours"),   s[L_].hours) +
    line("phone", t("phone"),   s.phone ? s.phone.replace(/(\d{2})(?=\d)/g,"$1 ").trim() : t("noPhone"), !!s.phone) +
    line("home",  t("annexe"),  a ? a[L_].name : "-") +
    line("info",  t("about"),   s[L_].note);

  const call = $("#shCall");
  if (s.phone){ call.href = "tel:" + s.phone; call.removeAttribute("aria-disabled"); }
  else { call.href = "#"; call.setAttribute("aria-disabled","true"); }

  $("#shGo").href = `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`;
  $("#shFlag").hidden = !!s.verified;

  const sh = $("#sheet");
  sh.setAttribute("open","");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    if (shMap){ shMap.remove(); shMap = null; }
    shMap = L.map("shMap", { scrollWheelZoom:false, zoomControl:false, attributionControl:false })
            .setView([s.lat, s.lng], 16);
    L.tileLayer(TILES, { maxZoom:19 }).addTo(shMap);
    L.marker([s.lat, s.lng], { icon: pinIcon(a ? a.accent : "#0C7A5F", cat(s.cat).icon) }).addTo(shMap);
    shMap.invalidateSize();
  }, 60);

  $(".sheet__x").focus();
}

function closeSheet(){
  $("#sheet").removeAttribute("open");
  document.body.style.overflow = "";
  if (shMap){ shMap.remove(); shMap = null; }
}

/* ── 10. Branchements ───────────────────────────────────── */
$("#langBtn").onclick = () => { L_ = L_ === "fr" ? "ar" : "fr"; applyLocale(); };

$("#themeBtn").onclick = () => {
  const h = document.documentElement;
  const dark = h.dataset.theme === "dark";
  h.dataset.theme = dark ? "light" : "dark";
  $("#themeBtn").setAttribute("aria-label", dark ? t("themeLight") : t("themeDark"));
  $("#themeIco").innerHTML = dark
    ? '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'
    : '<circle cx="12" cy="12" r="4.5"/><rect x="11" y="1" width="2" height="3" rx="1"/><rect x="11" y="20" width="2" height="3" rx="1"/><rect x="20" y="11" width="3" height="2" rx="1"/><rect x="1" y="11" width="3" height="2" rx="1"/>';
};

/* ── Méga-menu ──────────────────────────────────────────── */
const megaTriggers = $$(".navtrig[aria-controls]");
const closeMega = b => {
  b.setAttribute("aria-expanded", "false");
  $("#" + b.getAttribute("aria-controls")).hidden = true;
};
const openMega = b => {
  megaTriggers.forEach(closeMega);
  b.setAttribute("aria-expanded", "true");
  $("#" + b.getAttribute("aria-controls")).hidden = false;
};
megaTriggers.forEach(b => {
  b.onclick = () => b.getAttribute("aria-expanded") === "true" ? closeMega(b) : openMega(b);
});
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  const open = megaTriggers.find(b => b.getAttribute("aria-expanded") === "true");
  if (open){ closeMega(open); open.focus(); }
  if (navBurger.getAttribute("aria-expanded") === "true"){ closeMobileNav(); navBurger.focus(); }
});
document.addEventListener("click", e => {
  if (!e.target.closest(".head__nav")) megaTriggers.forEach(closeMega);
  if (!e.target.closest(".mobilenav") && !e.target.closest("#navBurger")) closeMobileNav();
});
$$(".mega").forEach(panel => {
  panel.addEventListener("click", e => {
    const el = e.target.closest("a,button");
    if (!el) return;
    const annexeId_ = el.dataset.annexe;
    if (annexeId_){
      e.preventDefault();
      selectAnnexe(annexeId_);
      $("#annexes").scrollIntoView({ behavior:"smooth", block:"start" });
    } else if (el.hasAttribute("data-scrolltop")){
      window.scrollTo({ top:0, behavior:"smooth" });
    }
    const trig = document.querySelector(`[aria-controls="${panel.id}"]`);
    if (trig) closeMega(trig);
  });
});

/* ── Navigation mobile ──────────────────────────────────── */
const navBurger = $("#navBurger");
const mobileNav = $("#mobileNav");
const closeMobileNav = () => {
  navBurger.setAttribute("aria-expanded", "false");
  mobileNav.hidden = true;
  document.body.style.overflow = "";
};
const openMobileNav = () => {
  megaTriggers.forEach(closeMega);
  navBurger.setAttribute("aria-expanded", "true");
  mobileNav.hidden = false;
  document.body.style.overflow = "hidden";
};
navBurger.onclick = () => navBurger.getAttribute("aria-expanded") === "true" ? closeMobileNav() : openMobileNav();

mobileNav.addEventListener("click", e => {
  const el = e.target.closest("a,button");
  if (!el) return;
  const annexeId_ = el.dataset.annexe;
  if (annexeId_){
    e.preventDefault();
    selectAnnexe(annexeId_);
    closeMobileNav();
    $("#annexes").scrollIntoView({ behavior:"smooth", block:"start" });
    return;
  }
  if (el.hasAttribute("data-scrolltop")){
    closeMobileNav();
    window.scrollTo({ top:0, behavior:"smooth" });
    return;
  }
  if (el.tagName === "A") closeMobileNav();
});

$("#anMapReset").onclick = () => { fitAnMap(); anMap.invalidateSize(); };

$("#q").addEventListener("input", e => { query = e.target.value; renderMarkers(); });

$$("[data-close]").forEach(el => el.onclick = closeSheet);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeSheet(); });

/* Si la vidéo est absente, on garde le ciel animé en repli */
const vid = $("#heroVid");
vid.addEventListener("error", () => vid.style.display = "none", true);
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) vid.removeAttribute("autoplay");

/* Même repli pour la vidéo de la section Projets - si le fichier est
   absent, le fond plein de couleur de .projet__media prend le relais
   et le badge « exemple de démonstration » reste affiché. */
const projVid = $("#projetVid");
if (projVid){
  projVid.addEventListener("error", () => projVid.style.display = "none", true);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) projVid.removeAttribute("autoplay");
}

/* ── 11. Démarrage ──────────────────────────────────────── */
selectAnnexe(ANNEXES[0].id);
applyLocale();
initMaps();
