/*
 * RK SunLight - envio do formulário de orçamento pelo WhatsApp.
 * Não depende de servidor: monta a mensagem e abre o WhatsApp com o texto pronto.
 */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "5598985257041";

  var form = document.getElementById("quoteForm");
  if (!form) return;

  var feedback = document.getElementById("formFeedback");

  // Máscara simples de telefone: (98) 98888-8888
  var phoneInput = document.getElementById("telefone");
  phoneInput.addEventListener("input", function () {
    var d = phoneInput.value.replace(/\D/g, "").slice(0, 11);
    var out = d;
    if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
    phoneInput.value = out;
  });

  function value(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = value("nome");
    var telefone = value("telefone");
    var bairro = value("bairro");
    var tipo = value("tipo");
    var conta = value("conta");
    var mensagem = value("mensagem");

    if (!nome || telefone.replace(/\D/g, "").length < 10) {
      feedback.className = "alert alert-danger mt-3";
      feedback.textContent = "Por favor, informe seu nome e um telefone válido com DDD.";
      return;
    }

    var linhas = [
      "Olá, Roberto Kennedy! Vim pelo site da RK SunLight e quero um orçamento de energia solar.",
      "",
      "*Nome:* " + nome,
      "*Telefone:* " + telefone
    ];
    if (bairro) linhas.push("*Cidade/UF:* " + bairro);
    if (tipo) linhas.push("*Tipo de imóvel:* " + tipo);
    if (conta) linhas.push("*Conta de luz média:* " + conta);
    if (mensagem) linhas.push("*Mensagem:* " + mensagem);

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(linhas.join("\n"));

    feedback.className = "alert alert-success mt-3";
    feedback.textContent = "Abrindo o WhatsApp com sua mensagem...";

    window.open(url, "_blank", "noopener");
    form.reset();
  });
})();
