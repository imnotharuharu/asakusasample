/* --- i18n.js --- */
const translations = {
    ja: {
        "nav.experience": "ワークショップ体験",
        "nav.reservation": "ご予約",
        "nav.plans": "プラン・料金",
        "hero.title": "ワークショップのご予約",
        "hero.desc": "浅草 露のワークショップは完全予約制です。"
    },
    en: {
        "nav.experience": "Experience",
        "nav.reservation": "Reservation",
        "nav.plans": "Plans",
        "hero.title": "Workshop Reservation",
        "hero.desc": "TSUYU workshop is by appointment only."
    }
};

// 言語を画面に反映させる関数
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let text = translations[lang];
        keys.forEach(k => { text = text ? text[k] : null; });
        if (text) el.textContent = text;
    });

    // HTMLタグのlang属性を更新
    document.documentElement.lang = lang;

    // 保存
    localStorage.setItem('tsuyu-lang', lang);
}

// ボタンから呼ばれる関数
function switchLanguage(lang) {
    applyLanguage(lang);
}

// 読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('tsuyu-lang') || 'ja';
    applyLanguage(savedLang);
});