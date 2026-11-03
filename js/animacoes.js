/*
 * Animações opcionais do site (ligadas com "animacoes": true no JSON do cliente).
 * - Tela de carregamento com o logo
 * - Parallax das camadas do banner seguindo o mouse
 * - Revelação dos blocos ao rolar (pop-up, esquerda, direita, de baixo)
 */
(function () {
  "use strict";
  document.documentElement.classList.add("anim-on");

  /* ---------- Tela de carregamento ---------- */
  var preloader = document.getElementById("preloader");
  function hidePreloader() {
    if (preloader) preloader.classList.add("is-hidden");
  }
  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 400);
  });
  setTimeout(hidePreloader, 3500); // nunca prende o visitante

  /* ---------- Partículas do banner ---------- */
  var decor = document.querySelector(".hero-decor");
  if (decor) {
    for (var i = 0; i < 16; i++) {
      var p = document.createElement("span");
      var size = 6 + Math.round(Math.random() * 14);
      p.className = "particle" + (i % 3 === 0 ? " fill" : "");
      p.style.left = Math.round(Math.random() * 100) + "%";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = 9 + Math.random() * 10 + "s";
      p.style.animationDelay = -Math.random() * 15 + "s";
      decor.appendChild(p);
    }
  }

  /* ---------- Parallax das camadas (mouse) ---------- */
  var hero = document.getElementById("home");
  var layers = decor ? decor.querySelectorAll(".layer[data-depth]") : [];
  if (hero && layers.length && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      for (var j = 0; j < layers.length; j++) {
        var d = parseFloat(layers[j].getAttribute("data-depth")) || 10;
        layers[j].style.transform = "translate3d(" + (-x * d * 4).toFixed(1) + "px," + (-y * d * 4).toFixed(1) + "px,0)";
      }
    });
    hero.addEventListener("mouseleave", function () {
      for (var j = 0; j < layers.length; j++) layers[j].style.transform = "";
    });
  }

  /* ---------- Revelação ao rolar ---------- */
  function mark(selector, anim, stagger) {
    var els = document.querySelectorAll(selector);
    for (var k = 0; k < els.length; k++) {
      if (els[k].hasAttribute("data-anim")) continue;
      els[k].setAttribute("data-anim", anim);
      if (stagger) els[k].style.setProperty("--anim-delay", (k % 4) * stagger + "s");
    }
  }
  mark(".section-title", "top-to-bottom");
  mark(".stat-item", "bottom-to-top", 0.12);
  mark("#about .about-img-wrap", "left-to-right");
  mark("#about .col-lg-7", "right-to-left");
  mark(".product-item", "pop-up", 0.15);
  mark(".step-card", "bottom-to-top", 0.15);
  mark(".result-card", "pop-up", 0.15);
  mark(".review-card", "pop-up");
  mark("#vantagens .col-md-6:first-child", "left-to-right");
  mark("#vantagens .col-md-6:nth-child(2)", "right-to-left");
  mark(".faq-accordion .card", "left-to-right", 0.08);
  mark(".contact-info-box", "left-to-right");
  mark(".contact-form", "right-to-left");

  var targets = document.querySelectorAll("[data-anim]");
  if (!("IntersectionObserver" in window)) {
    for (var t = 0; t < targets.length; t++) targets[t].classList.add("is-visible");
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  for (var u = 0; u < targets.length; u++) io.observe(targets[u]);
})();
