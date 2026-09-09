// Configuração do menu ao rolar a página
window.onscroll = function () {
  const menu = document.querySelector(".menu");

  if (window.scrollY > 30) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}; // Adiciona ou remove a classe "scrolled" ao menu com base na posição de rolagem da página.

// Configuração dos botões menu mobile
const menuIcon = document.querySelector(".menu-icon");
const openMenuIcon = document.querySelector(".open-menu");
const closeMenuIcon = document.querySelector(".close-menu");
const menuMobileList = document.querySelector(".mobile-menu-list");
const linksMenuMobile = document.querySelectorAll(".links-mobile");

menuIcon.addEventListener("click", () => {
  if (openMenuIcon.style.display === "none") {
    openMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";

    menuMobileList.classList.remove("show");
  } else {
    openMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";

    menuMobileList.classList.add("show");
  }
}); // Alterna a exibição dos ícones de menu aberto e fechado ao clicar no ícone do menu mobile.

// Configuração GSAP
const videoBg = document.querySelector(".video-background");

gsap.registerPlugin(ScrollTrigger);

function createVideoAnimation() {
  gsap.to(videoBg, {
    currentTime: videoBg.duration,
    ease: "none",
    scrollTrigger: {
      trigger: ".video-section",
      start: "top top",
      end: "+=3000",
      scrub: 0.2,
      pin: true,
    },
  });
}

if (videoBg.redyState >= 1) {
  createVideoAnimation();
} else {
  videoBg.addEventListener("loadedmetadata", createVideoAnimation);
}
