/* ============================================================
   legal.js - bascule langue / thème des pages légales
   Partage les préférences (sb-lang, sb-theme) avec le portail.
   ============================================================ */
(function(){
  "use strict";

  var root = document.documentElement;

  var STORE = {
    get: function(k){ try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var STR = {
    fr: {
      brand: "Sidi Belyout",
      home: "Accueil",
      langBtn: "العربية",
      themeToDark: "Mode sombre",
      themeToLight: "Mode clair",
      copy: "© 2026 Arrondissement de Sidi Belyout",
      mentions: "Mentions légales",
      confid: "Politique de confidentialité",
      map: "Carte : OpenStreetMap"
    },
    ar: {
      brand: "سيدي بليوط",
      home: "الرئيسية",
      langBtn: "Français",
      themeToDark: "الوضع الليلي",
      themeToLight: "الوضع النهاري",
      copy: "© 2026 مقاطعة سيدي بليوط",
      mentions: "الإشعار القانوني",
      confid: "سياسة الخصوصية",
      map: "الخريطة: OpenStreetMap"
    }
  };

  var ICON_MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
  var ICON_SUN  = '<circle cx="12" cy="12" r="4.5"/><rect x="11" y="1" width="2" height="3" rx="1"/><rect x="11" y="20" width="2" height="3" rx="1"/><rect x="20" y="11" width="3" height="2" rx="1"/><rect x="1" y="11" width="3" height="2" rx="1"/>';

  function setText(id, value){
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function applyLang(lang){
    var s = STR[lang];
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-fr]").forEach(function(el){ el.hidden = lang !== "fr"; });
    document.querySelectorAll("[data-ar]").forEach(function(el){ el.hidden = lang !== "ar"; });

    setText("brandLbl", s.brand);
    setText("homeLbl", s.home);
    setText("langBtn", s.langBtn);
    setText("footCopy", s.copy);
    setText("footMentions", s.mentions);
    setText("footConfid", s.confid);
    setText("footMap", s.map);

    var visible = document.querySelector("main.legal:not([hidden]) h1");
    if (visible) document.title = visible.textContent + " - Sidi Belyout";
  }

  function applyTheme(theme){
    var dark = theme === "dark";
    root.dataset.theme = theme;
    var btn = document.getElementById("themeBtn");
    var ico = document.getElementById("themeIco");
    var s = STR[root.lang === "ar" ? "ar" : "fr"];
    if (btn) btn.setAttribute("aria-label", dark ? s.themeToLight : s.themeToDark);
    if (ico) ico.innerHTML = dark ? ICON_SUN : ICON_MOON;
  }

  var lang = STORE.get("sb-lang") === "ar" ? "ar" : "fr";
  var theme = root.dataset.theme === "dark" ? "dark" : "light";

  applyLang(lang);
  applyTheme(theme);

  var langBtn = document.getElementById("langBtn");
  if (langBtn){
    langBtn.addEventListener("click", function(){
      lang = lang === "fr" ? "ar" : "fr";
      STORE.set("sb-lang", lang);
      applyLang(lang);
      applyTheme(theme);   // ré-aligne le libellé du bouton thème sur la langue
    });
  }

  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn){
    themeBtn.addEventListener("click", function(){
      theme = theme === "dark" ? "light" : "dark";
      STORE.set("sb-theme", theme);
      applyTheme(theme);
    });
  }
})();
