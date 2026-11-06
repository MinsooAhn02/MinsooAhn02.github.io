const languageButtons = document.querySelectorAll('[data-language]');
function setLanguage(language) {
  if (!['ko', 'en'].includes(language)) return;
  document.documentElement.lang = language;
  document.body.dataset.lang = language;
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelectorAll('[data-language-link]').forEach(link => {
    const url = new URL(link.href);
    url.searchParams.set('lang', language);
    link.href = url.href;
  });
}
languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(new URL(location.href).searchParams.get('lang') || 'ko');
