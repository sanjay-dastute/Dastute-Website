/* ===================================================
   DASTUTE — Auto Region-Based Language Translation
   Uses Google Translate Element with silent auto-detection
   =================================================== */

/* Inject hiding CSS immediately — before Google Translate renders */
(function () {
  var s = document.createElement("style");
  s.textContent =
    ".skiptranslate,.goog-te-banner-frame,#goog-gt-tt,.goog-te-balloon-frame{display:none!important;height:0!important;overflow:hidden!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;position:absolute!important;top:-9999px!important;left:-9999px!important}#google_translate_element{display:none!important}body{top:0!important;position:static!important}";
  (document.head || document.documentElement).appendChild(s);
})();

(function () {
  "use strict";

  // Country code → Google Translate language code
  var COUNTRY_LANG = {
    DE: "de",
    AT: "de",
    CH: "de",
    FR: "fr",
    BE: "fr",
    LU: "fr",
    ES: "es",
    MX: "es",
    AR: "es",
    CO: "es",
    CL: "es",
    PE: "es",
    VE: "es",
    EC: "es",
    PT: "pt",
    BR: "pt",
    IT: "it",
    NL: "nl",
    PL: "pl",
    RO: "ro",
    SV: "sv",
    SE: "sv",
    NO: "no",
    DA: "da",
    DK: "da",
    FI: "fi",
    EL: "el",
    GR: "el",
    CS: "cs",
    CZ: "cs",
    HU: "hu",
    BG: "bg",
    HR: "hr",
    SK: "sk",
    SL: "sl",
    SI: "sl",
    ET: "et",
    EE: "et",
    LV: "lv",
    LT: "lt",
    UK: "uk",
    UA: "uk",
    RU: "ru",
    TR: "tr",
    AR: "ar",
    SA: "ar",
    AE: "ar",
    EG: "ar",
    IQ: "ar",
    KW: "ar",
    QA: "ar",
    HE: "iw",
    IL: "iw",
    FA: "fa",
    IR: "fa",
    HI: "hi",
    IN: "hi",
    BN: "bn",
    BD: "bn",
    TA: "ta",
    TE: "te",
    MR: "mr",
    GU: "gu",
    KN: "kn",
    ML: "ml",
    PA: "pa",
    UR: "ur",
    PK: "ur",
    ZH: "zh-CN",
    CN: "zh-CN",
    TW: "zh-TW",
    HK: "zh-TW",
    JA: "ja",
    JP: "ja",
    KO: "ko",
    KR: "ko",
    TH: "th",
    VI: "vi",
    VN: "vi",
    ID: "id",
    MS: "ms",
    MY: "ms",
    TL: "tl",
    PH: "tl",
    SW: "sw",
    KE: "sw",
    TZ: "sw",
    AM: "am",
    ET: "am",
    AF: "af",
    ZA: "af",
    NE: "ne",
    NP: "ne",
    SI: "si",
    LK: "si",
    KA: "ka",
    GE: "ka",
    HY: "hy",
    AZ: "az",
    KK: "kk",
    KZ: "kk",
    UZ: "uz",
    MN: "mn",
    KM: "km",
    KH: "km",
    LO: "lo",
    LA: "lo",
    MY: "my",
    MM: "my",
  };

  var STORAGE_KEY = "dastute_lang";

  /* ---------- Trigger translation ---------- */
  function translateTo(lang) {
    localStorage.setItem(STORAGE_KEY, lang);

    if (lang === "en") {
      var frame = document.querySelector(".goog-te-banner-frame");
      if (frame) {
        var innerDoc = frame.contentDocument || frame.contentWindow.document;
        var restoreBtn = innerDoc.querySelector(".goog-close-link");
        if (restoreBtn) restoreBtn.click();
      }
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." +
        location.hostname;
      if (getCurrentGoogleLang() !== "en") location.reload();
      return;
    }

    document.cookie = "googtrans=/en/" + lang + "; path=/;";
    document.cookie =
      "googtrans=/en/" + lang + "; path=/; domain=." + location.hostname;

    var combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
    } else {
      location.reload();
    }
  }

  function getCurrentGoogleLang() {
    var match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    return match ? match[1] : "en";
  }

  /* ---------- Auto-detect region ---------- */
  function autoDetect() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return;

    // 1. Try browser language first
    var browserLang = (navigator.language || navigator.userLanguage || "en")
      .split("-")[0]
      .toUpperCase();
    if (COUNTRY_LANG[browserLang] && COUNTRY_LANG[browserLang] !== "en") {
      translateTo(COUNTRY_LANG[browserLang]);
      return;
    }

    // 2. Fetch country from IP geolocation
    fetch("https://ipapi.co/json/", { cache: "default" })
      .then(function (r) {
        return r.json();
      })
      .then(function (data) {
        var code = (data.country_code || "").toUpperCase();
        if (
          code === "GB" ||
          code === "US" ||
          code === "AU" ||
          code === "NZ" ||
          code === "CA" ||
          code === "IE" ||
          code === "SG"
        )
          return;
        var lang = COUNTRY_LANG[code];
        if (lang) translateTo(lang);
      })
      .catch(function () {
        /* Fail silently — stay in English */
      });
  }

  /* ---------- Initialise Google Translate ---------- */
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element",
    );
  };

  /* ---------- Boot ---------- */
  function init() {
    // Hidden container for Google Translate widget
    var gtDiv = document.createElement("div");
    gtDiv.id = "google_translate_element";
    gtDiv.style.cssText =
      "position:absolute;top:-9999px;left:-9999px;height:0;overflow:hidden;visibility:hidden;";
    document.body.appendChild(gtDiv);

    // Observer to hide any Google Translate UI
    var observer = new MutationObserver(function () {
      document.querySelectorAll(".skiptranslate").forEach(function (el) {
        if (el.id !== "google_translate_element") {
          el.style.display = "none";
          el.style.height = "0";
          el.style.overflow = "hidden";
        }
      });
      var banner = document.querySelector(".goog-te-banner-frame");
      if (banner) banner.style.display = "none";
      document.body.style.top = "0px";
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Load Google Translate script dynamically
    var gtScript = document.createElement("script");
    gtScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(gtScript);

    // Auto-detect after a short delay
    setTimeout(autoDetect, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
