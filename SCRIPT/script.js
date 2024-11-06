document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animação do formulário
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    form.reset();
  });
});
