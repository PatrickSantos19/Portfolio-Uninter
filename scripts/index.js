// Seleciona elementos do DOM para manipulação
const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

// Alterna a exibição do menu mobile ao clicar no ícone
button.addEventListener("click", function () {
  mobileNavbar.classList.toggle("active");
});

// Adiciona sombra à navbar quando há scroll na página
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add("active");
  return navbar.classList.remove("active");
});
