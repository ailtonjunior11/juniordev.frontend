const btnTop = document.querySelector(".btn-top"); // Seleciona o botão voltar ao topo.

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
}); // Função botão voltar ao topo, aparece ao rolar a página para baixo.

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}); // Função botão voltar ao topo suave, ao clicar no botão.
