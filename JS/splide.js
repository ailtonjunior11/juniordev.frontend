document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".splide", {
    width: "100%",
    loop: true,
    type: "loop",
    gap: "2rem",
    breakpoints: {
      1000: {
        perPage: 1,
      },
      1440: {
        perPage: 3,
      },
    },
  });
  splide.mount();
}); // Função para inicializar o Splide quando o conteúdo do DOM estiver carregado.
