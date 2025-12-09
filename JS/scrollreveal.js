const sr = ScrollReveal({ reset: true });

// configuração seção início
sr.reveal(".image-start", {
  distance: "100%",
  duration: 1100,
  delay: 300,
  origin: "top",
});

sr.reveal(".main-content", {
  distance: "100%",
  duration: 1100,
  delay: 300,
  origin: "left",
});

// configuração seção services
sr.reveal(".card-services3", {
  distance: "60%",
  duration: 1400,
  delay: 200,
  origin: "bottom",
});

sr.reveal(".card-services2", {
  distance: "45%",
  duration: 1200,
  delay: 200,
  origin: "bottom",
});

sr.reveal(".card-services1", {
  distance: "30%",
  duration: 1000,
  delay: 200,
  origin: "bottom",
});

// configuração seção sobre
sr.reveal(".image-about", {
  distance: "20%",
  duration: 1500,
  opacity: 0.1,
  origin: "bottom",
});

sr.reveal(".text-about", {
  distance: "20%",
  duration: 1500,
  origin: "top",
});

// configuração seção habilidades
sr.reveal(".item-skill1", {
  duration: 1000,
  delay: 200,
  scale: 1.2,
});

sr.reveal(".item-skill2", {
  duration: 1100,
  delay: 400,
  scale: 1.3,
});

sr.reveal(".item-skill3", {
  duration: 1200,
  delay: 600,
  scale: 1.3,
});

// configuração seção contatos
sr.reveal("form", {
  duration: 1100,
  delay: 200,
  scale: 1.2,
});
