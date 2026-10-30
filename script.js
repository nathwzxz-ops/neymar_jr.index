const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("escuro");

  botaoTema.textContent = escuro
    ? "☀️ Tema claro"
    : "🌙 Tema escuro";

  botaoTema.setAttribute("aria-pressed", String(escuro));
});
