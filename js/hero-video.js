/*
 * Vídeo de fundo do banner: carrega a versão leve no celular e a 1080p no desktop.
 * O vídeo é mudo e toca em loop. Se o navegador bloquear o autoplay,
 * tenta de novo na primeira interação do visitante (toque, clique ou rolagem).
 */
(function () {
  "use strict";
  var video = document.querySelector(".hero-video");
  if (!video) return;

  var isMobile = window.matchMedia("(max-width: 767.98px)").matches;

  // Garante as propriedades exigidas pelos navegadores para autoplay
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.loop = true;
  video.src = isMobile ? video.dataset.srcMobile : video.dataset.srcDesktop;
  video.load();

  function tryPlay() {
    var p = video.play();
    if (p && p.catch) {
      p.catch(function () {
        var events = ["click", "touchstart", "scroll", "keydown"];
        function retry() {
          events.forEach(function (e) { window.removeEventListener(e, retry); });
          video.play();
        }
        events.forEach(function (e) { window.addEventListener(e, retry, { once: true, passive: true }); });
      });
    }
  }

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener("canplay", tryPlay, { once: true });
  }
})();
