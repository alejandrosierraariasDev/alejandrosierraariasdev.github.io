// ---------- Post page: mermaid diagrams + copy link ----------
document.querySelectorAll('pre code.language-mermaid').forEach(function (block) {
  var div = document.createElement('div');
  div.className = 'mermaid';
  div.textContent = block.textContent;
  block.closest('pre').replaceWith(div);
});
if (window.mermaid && document.querySelector('.mermaid')) {
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var themeAttr = document.documentElement.getAttribute('data-theme');
  var isDark = themeAttr ? themeAttr === 'dark' : prefersDark;
  mermaid.initialize({ startOnLoad: false, theme: isDark ? 'dark' : 'default' });
  mermaid.run();
}

var copyBtn = document.getElementById('pmCopyLink');
if (copyBtn) {
  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(copyBtn.getAttribute('data-url')).then(function () {
      var original = copyBtn.textContent;
      copyBtn.textContent = 'Link copied ✓';
      setTimeout(function () { copyBtn.textContent = original; }, 1800);
    });
  });
}
