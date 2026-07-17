/* Mobiles Menü — das einzige JavaScript dieser Website. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });

  // Beim Wechsel auf Desktop-Breite zurücksetzen
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (e) {
    if (e.matches) {
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
