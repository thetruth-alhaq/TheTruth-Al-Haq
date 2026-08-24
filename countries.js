const APP_ID = '6800162514';
const APP_SLUG = 'the-truth-al-haq';

const countries = [
  { "name": "Afghanistan", "code": "af", "flag": "🇦🇫", "ar": "أفغانستان" },
  { "name": "Albania", "code": "al", "flag": "🇦🇱", "ar": "ألبانيا" },
  { "name": "Algeria", "code": "dz", "flag": "🇩🇿", "ar": "الجزائر" },
  { "name": "Angola", "code": "ao", "flag": "🇦🇴", "ar": "أنغولا" },
  { "name": "Anguilla", "code": "ai", "flag": "🇦🇮", "ar": "أنغويلا" },
  { "name": "Antigua and Barbuda", "code": "ag", "flag": "🇦🇬", "ar": "أنتيغوا وبربودا" },
  { "name": "Argentina", "code": "ar", "flag": "🇦🇷", "ar": "الأرجنتين" },
  { "name": "Armenia", "code": "am", "flag": "🇦🇲", "ar": "أرمينيا" },
  { "name": "Australia", "code": "au", "flag": "🇦🇺", "ar": "أستراليا" },
  { "name": "Azerbaijan", "code": "az", "flag": "🇦🇿", "ar": "أذربيجان" },
  { "name": "Bahamas", "code": "bs", "flag": "🇧🇸", "ar": "جزر البهاما" },
  { "name": "Bahrain", "code": "bh", "flag": "🇧🇭", "ar": "البحرين" },
  { "name": "Barbados", "code": "bb", "flag": "🇧🇧", "ar": "بربادوس" },
  { "name": "Belarus", "code": "by", "flag": "🇧🇾", "ar": "بيلاروس" },
  { "name": "Belize", "code": "bz", "flag": "🇧🇿", "ar": "بليز" },
  { "name": "Benin", "code": "bj", "flag": "🇧🇯", "ar": "بنين" },
  { "name": "Bermuda", "code": "bm", "flag": "🇧🇲", "ar": "برمودا" },
  { "name": "Bhutan", "code": "bt", "flag": "🇧🇹", "ar": "بوتان" },
  { "name": "Bolivia", "code": "bo", "flag": "🇧🇴", "ar": "بوليفيا" },
  { "name": "Bosnia and Herzegovina", "code": "ba", "flag": "🇧🇦", "ar": "البوسنة والهرسك" },
  { "name": "Botswana", "code": "bw", "flag": "🇧🇼", "ar": "بوتسوانا" },
  { "name": "Brazil", "code": "br", "flag": "🇧🇷", "ar": "البرازيل" },
  { "name": "British Virgin Islands", "code": "vg", "flag": "🇻🇬", "ar": "جزر فيرجن البريطانية" },
  { "name": "Brunei", "code": "bn", "flag": "🇧🇳", "ar": "بروناي" },
  { "name": "Burkina Faso", "code": "bf", "flag": "🇧🇫", "ar": "بوركينا فاسو" },
  { "name": "Cambodia", "code": "kh", "flag": "🇰🇭", "ar": "كمبوديا" },
  { "name": "Cameroon", "code": "cm", "flag": "🇨🇲", "ar": "الكاميرون" },
  { "name": "Canada", "code": "ca", "flag": "🇨🇦", "ar": "كندا" },
  { "name": "Cape Verde", "code": "cv", "flag": "🇨🇻", "ar": "الرأس الأخضر" },
  { "name": "Cayman Islands", "code": "ky", "flag": "🇰🇾", "ar": "جزر كايمان" },
  { "name": "Chad", "code": "td", "flag": "🇹🇩", "ar": "تشاد" },
  { "name": "Chile", "code": "cl", "flag": "🇨🇱", "ar": "تشيلي" },
  { "name": "China mainland", "code": "cn", "flag": "🇨🇳", "ar": "الصين" },
  { "name": "Colombia", "code": "co", "flag": "🇨🇴", "ar": "كولومبيا" },
  { "name": "Congo, Democratic Republic of the", "code": "cd", "flag": "🇨🇩", "ar": "الكونغو - كينشاسا" },
  { "name": "Congo, Republic of the", "code": "cg", "flag": "🇨🇬", "ar": "الكونغو - برازافيل" },
  { "name": "Costa Rica", "code": "cr", "flag": "🇨🇷", "ar": "كوستاريكا" },
  { "name": "Côte d'Ivoire", "code": "ci", "flag": "🇨🇮", "ar": "ساحل العاج" },
  { "name": "Dominica", "code": "dm", "flag": "🇩🇲", "ar": "دومينيكا" },
  { "name": "Dominican Republic", "code": "do", "flag": "🇩🇴", "ar": "جمهورية الدومينيكان" },
  { "name": "Ecuador", "code": "ec", "flag": "🇪🇨", "ar": "الإكوادور" },
  { "name": "Egypt", "code": "eg", "flag": "🇪🇬", "ar": "مصر" },
  { "name": "El Salvador", "code": "sv", "flag": "🇸🇻", "ar": "السلفادور" },
  { "name": "Eswatini", "code": "sz", "flag": "🇸🇿", "ar": "إسواتيني" },
  { "name": "Fiji", "code": "fj", "flag": "🇫🇯", "ar": "فيجي" },
  { "name": "Gabon", "code": "ga", "flag": "🇬🇦", "ar": "الغابون" },
  { "name": "Gambia", "code": "gm", "flag": "🇬🇲", "ar": "غامبيا" },
  { "name": "Georgia", "code": "ge", "flag": "🇬🇪", "ar": "جورجيا" },
  { "name": "Ghana", "code": "gh", "flag": "🇬🇭", "ar": "غانا" },
  { "name": "Grenada", "code": "gd", "flag": "🇬🇩", "ar": "غرينادا" },
  { "name": "Guatemala", "code": "gt", "flag": "🇬🇹", "ar": "غواتيمالا" },
  { "name": "Guinea-Bissau", "code": "gw", "flag": "🇬🇼", "ar": "غينيا بيساو" },
  { "name": "Guyana", "code": "gy", "flag": "🇬🇾", "ar": "غيانا" },
  { "name": "Honduras", "code": "hn", "flag": "🇭🇳", "ar": "هندوراس" },
  { "name": "Hong Kong", "code": "hk", "flag": "🇭🇰", "ar": "هونغ كونغ الصينية (منطقة إدارية خاصة)" },
  { "name": "Iceland", "code": "is", "flag": "🇮🇸", "ar": "آيسلندا" },
  { "name": "India", "code": "in", "flag": "🇮🇳", "ar": "الهند" },
  { "name": "Indonesia", "code": "id", "flag": "🇮🇩", "ar": "إندونيسيا" },
  { "name": "Iraq", "code": "iq", "flag": "🇮🇶", "ar": "العراق" },
  { "name": "Israel", "code": "il", "flag": "🇮🇱", "ar": "إسرائيل" },
  { "name": "Jamaica", "code": "jm", "flag": "🇯🇲", "ar": "جامايكا" },
  { "name": "Japan", "code": "jp", "flag": "🇯🇵", "ar": "اليابان" },
  { "name": "Jordan", "code": "jo", "flag": "🇯🇴", "ar": "الأردن" },
  { "name": "Kazakhstan", "code": "kz", "flag": "🇰🇿", "ar": "كازاخستان" },
  { "name": "Kenya", "code": "ke", "flag": "🇰🇪", "ar": "كينيا" },
  { "name": "Korea, Republic of", "code": "kr", "flag": "🇰🇷", "ar": "كوريا الجنوبية" },
  { "name": "Kosovo", "code": "xk", "flag": "🇽🇰", "ar": "كوسوفو" },
  { "name": "Kuwait", "code": "kw", "flag": "🇰🇼", "ar": "الكويت" },
  { "name": "Kyrgyzstan", "code": "kg", "flag": "🇰🇬", "ar": "قيرغيزستان" },
  { "name": "Laos", "code": "la", "flag": "🇱🇦", "ar": "لاوس" },
  { "name": "Lebanon", "code": "lb", "flag": "🇱🇧", "ar": "لبنان" },
  { "name": "Liberia", "code": "lr", "flag": "🇱🇷", "ar": "ليبيريا" },
  { "name": "Libya", "code": "ly", "flag": "🇱🇾", "ar": "ليبيا" },
  { "name": "Macau", "code": "mo", "flag": "🇲🇴", "ar": "منطقة ماكاو الإدارية الخاصة" },
  { "name": "Madagascar", "code": "mg", "flag": "🇲🇬", "ar": "مدغشقر" },
  { "name": "Malawi", "code": "mw", "flag": "🇲🇼", "ar": "ملاوي" },
  { "name": "Malaysia", "code": "my", "flag": "🇲🇾", "ar": "ماليزيا" },
  { "name": "Maldives", "code": "mv", "flag": "🇲🇻", "ar": "جزر المالديف" },
  { "name": "Mali", "code": "ml", "flag": "🇲🇱", "ar": "مالي" },
  { "name": "Mauritania", "code": "mr", "flag": "🇲🇷", "ar": "موريتانيا" },
  { "name": "Mauritius", "code": "mu", "flag": "🇲🇺", "ar": "موريشيوس" },
  { "name": "Mexico", "code": "mx", "flag": "🇲🇽", "ar": "المكسيك" },
  { "name": "Micronesia", "code": "fm", "flag": "🇫🇲", "ar": "ميكرونيزيا" },
  { "name": "Moldova", "code": "md", "flag": "🇲🇩", "ar": "مولدوفا" },
  { "name": "Mongolia", "code": "mn", "flag": "🇲🇳", "ar": "منغوليا" },
  { "name": "Montenegro", "code": "me", "flag": "🇲🇪", "ar": "الجبل الأسود" },
  { "name": "Montserrat", "code": "ms", "flag": "🇲🇸", "ar": "مونتسرات" },
  { "name": "Morocco", "code": "ma", "flag": "🇲🇦", "ar": "المغرب" },
  { "name": "Mozambique", "code": "mz", "flag": "🇲🇿", "ar": "موزمبيق" },
  { "name": "Myanmar", "code": "mm", "flag": "🇲🇲", "ar": "ميانمار (بورما)" },
  { "name": "Namibia", "code": "na", "flag": "🇳🇦", "ar": "ناميبيا" },
  { "name": "Nauru", "code": "nr", "flag": "🇳🇷", "ar": "ناورو" },
  { "name": "Nepal", "code": "np", "flag": "🇳🇵", "ar": "نيبال" },
  { "name": "New Zealand", "code": "nz", "flag": "🇳🇿", "ar": "نيوزيلندا" },
  { "name": "Nicaragua", "code": "ni", "flag": "🇳🇮", "ar": "نيكاراغوا" },
  { "name": "Niger", "code": "ne", "flag": "🇳🇪", "ar": "النيجر" },
  { "name": "Nigeria", "code": "ng", "flag": "🇳🇬", "ar": "نيجيريا" },
  { "name": "North Macedonia", "code": "mk", "flag": "🇲🇰", "ar": "مقدونيا الشمالية" },
  { "name": "Norway", "code": "no", "flag": "🇳🇴", "ar": "النرويج" },
  { "name": "Oman", "code": "om", "flag": "🇴🇲", "ar": "عُمان" },
  { "name": "Pakistan", "code": "pk", "flag": "🇵🇰", "ar": "باكستان" },
  { "name": "Palau", "code": "pw", "flag": "🇵🇼", "ar": "بالاو" },
  { "name": "Panama", "code": "pa", "flag": "🇵🇦", "ar": "بنما" },
  { "name": "Papua New Guinea", "code": "pg", "flag": "🇵🇬", "ar": "بابوا غينيا الجديدة" },
  { "name": "Paraguay", "code": "py", "flag": "🇵🇾", "ar": "باراغواي" },
  { "name": "Peru", "code": "pe", "flag": "🇵🇪", "ar": "بيرو" },
  { "name": "Philippines", "code": "ph", "flag": "🇵🇭", "ar": "الفلبين" },
  { "name": "Qatar", "code": "qa", "flag": "🇶🇦", "ar": "قطر" },
  { "name": "Russia", "code": "ru", "flag": "🇷🇺", "ar": "روسيا" },
  { "name": "Rwanda", "code": "rw", "flag": "🇷🇼", "ar": "رواندا" },
  { "name": "São Tomé and Príncipe", "code": "st", "flag": "🇸🇹", "ar": "ساو تومي وبرينسيبي" },
  { "name": "Saudi Arabia", "code": "sa", "flag": "🇸🇦", "ar": "المملكة العربية السعودية" },
  { "name": "Senegal", "code": "sn", "flag": "🇸🇳", "ar": "السنغال" },
  { "name": "Serbia", "code": "rs", "flag": "🇷🇸", "ar": "صربيا" },
  { "name": "Seychelles", "code": "sc", "flag": "🇸🇨", "ar": "سيشل" },
  { "name": "Sierra Leone", "code": "sl", "flag": "🇸🇱", "ar": "سيراليون" },
  { "name": "Singapore", "code": "sg", "flag": "🇸🇬", "ar": "سنغافورة" },
  { "name": "Solomon Islands", "code": "sb", "flag": "🇸🇧", "ar": "جزر سليمان" },
  { "name": "South Africa", "code": "za", "flag": "🇿🇦", "ar": "جنوب أفريقيا" },
  { "name": "Sri Lanka", "code": "lk", "flag": "🇱🇰", "ar": "سريلانكا" },
  { "name": "St. Kitts and Nevis", "code": "kn", "flag": "🇰🇳", "ar": "سانت كيتس ونيفيس" },
  { "name": "St. Lucia", "code": "lc", "flag": "🇱🇨", "ar": "سانت لوسيا" },
  { "name": "St. Vincent and the Grenadines", "code": "vc", "flag": "🇻🇨", "ar": "سانت فنسنت وجزر غرينادين" },
  { "name": "Suriname", "code": "sr", "flag": "🇸🇷", "ar": "سورينام" },
  { "name": "Switzerland", "code": "ch", "flag": "🇨🇭", "ar": "سويسرا" },
  { "name": "Taiwan", "code": "tw", "flag": "🇹🇼", "ar": "تايوان" },
  { "name": "Tajikistan", "code": "tj", "flag": "🇹🇯", "ar": "طاجيكستان" },
  { "name": "Tanzania", "code": "tz", "flag": "🇹🇿", "ar": "تنزانيا" },
  { "name": "Thailand", "code": "th", "flag": "🇹🇭", "ar": "تايلاند" },
  { "name": "Tonga", "code": "to", "flag": "🇹🇴", "ar": "تونغا" },
  { "name": "Trinidad and Tobago", "code": "tt", "flag": "🇹🇹", "ar": "ترينيداد وتوباغو" },
  { "name": "Tunisia", "code": "tn", "flag": "🇹🇳", "ar": "تونس" },
  { "name": "Türkiye", "code": "tr", "flag": "🇹🇷", "ar": "تركيا" },
  { "name": "Turkmenistan", "code": "tm", "flag": "🇹🇲", "ar": "تركمانستان" },
  { "name": "Turks and Caicos Islands", "code": "tc", "flag": "🇹🇨", "ar": "جزر توركس وكايكوس" },
  { "name": "Uganda", "code": "ug", "flag": "🇺🇬", "ar": "أوغندا" },
  { "name": "Ukraine", "code": "ua", "flag": "🇺🇦", "ar": "أوكرانيا" },
  { "name": "United Arab Emirates", "code": "ae", "flag": "🇦🇪", "ar": "الإمارات العربية المتحدة" },
  { "name": "United Kingdom", "code": "gb", "flag": "🇬🇧", "ar": "المملكة المتحدة" },
  { "name": "United States", "code": "us", "flag": "🇺🇸", "ar": "الولايات المتحدة" },
  { "name": "Uruguay", "code": "uy", "flag": "🇺🇾", "ar": "أورغواي" },
  { "name": "Uzbekistan", "code": "uz", "flag": "🇺🇿", "ar": "أوزبكستان" },
  { "name": "Vanuatu", "code": "vu", "flag": "🇻🇺", "ar": "فانواتو" },
  { "name": "Venezuela", "code": "ve", "flag": "🇻🇪", "ar": "فنزويلا" },
  { "name": "Vietnam", "code": "vn", "flag": "🇻🇳", "ar": "فيتنام" },
  { "name": "Yemen", "code": "ye", "flag": "🇾🇪", "ar": "اليمن" },
  { "name": "Zambia", "code": "zm", "flag": "🇿🇲", "ar": "زامبيا" },
  { "name": "Zimbabwe", "code": "zw", "flag": "🇿🇼", "ar": "زيمبابوي" }
];

function normalizeSearch(term) {
  if (typeof term !== 'string') return '';
  return term
    .normalize('NFC')
    .replace(/[\u200B-\u200F\u202A-\u202E\u2066-\u2069]/g, '')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .toLowerCase()
    .trim();
}

function matchCountry(c, term) {
  if (!term) return true;
  const t = term;
  const name = normalizeSearch(c.name);
  const ar = normalizeSearch(c.ar || '');
  const code = (c.code || '').toLowerCase();
  return name.includes(t) || ar.includes(t) || code.includes(t);
}

function renderCountries(filter) {
  const grid = document.getElementById('country-grid');
  const gridAr = document.getElementById('country-grid-ar');
  if (!grid) return;

  const term = normalizeSearch(filter);
  let filtered;
  try {
    filtered = term ? countries.filter(c => matchCountry(c, term)) : countries;
  } catch {
    filtered = countries;
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="country-card notranslate" translate="no" style="justify-content:center;grid-column:1/-1;cursor:default;"><span class="country-name">No countries found</span></div>';
    if (gridAr) {
      gridAr.innerHTML = '<div class="country-card notranslate" translate="no" dir="rtl" lang="ar" style="justify-content:center;grid-column:1/-1;cursor:default;"><span class="country-name">لا توجد نتائج</span></div>';
    }
    return;
  }

  grid.innerHTML = filtered.map(c => `
    <a class="country-card notranslate" translate="no" href="https://apps.apple.com/${c.code}/app/${APP_SLUG}/${APP_ID}" target="_blank" rel="noopener" title="${c.name}">
      <span class="country-flag notranslate" translate="no">${c.flag}</span>
      <span class="country-name notranslate" translate="no">${c.name}</span>
    </a>
  `).join('');

  if (gridAr) {
    gridAr.innerHTML = filtered.map(c => `
      <a class="country-card notranslate" translate="no" dir="rtl" lang="ar" href="https://apps.apple.com/${c.code}/app/${APP_SLUG}/${APP_ID}" target="_blank" rel="noopener" title="${c.ar || c.name}">
        <span class="country-flag notranslate" translate="no">${c.flag}</span>
        <span class="country-name notranslate" translate="no">${c.ar || c.name}</span>
      </a>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCountries();
  const search = document.getElementById('country-search');
  if (!search) return;

  const update = () => {
    try {
      renderCountries(search.value);
    } catch {}
  };

  search.addEventListener('input', update);
  search.addEventListener('compositionend', update);
  search.addEventListener('keyup', update);
  search.addEventListener('change', update);

  // Fallback: if the input is replaced/re-rendered by a translation widget,
  // listen for bubbling keyup/compositionend on document and re-read by id.
  document.addEventListener('keyup', (e) => {
    if (e && e.target && (e.target.id === 'country-search' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
      const input = document.getElementById('country-search');
      if (input) renderCountries(input.value);
    }
  });
  document.addEventListener('compositionend', (e) => {
    if (e && e.target && (e.target.id === 'country-search' || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
      const input = document.getElementById('country-search');
      if (input) renderCountries(input.value);
    }
  });
});
