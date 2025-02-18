let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    // Esconde todos os slides
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    // Mostra o slide atual
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Inicia o slideshow
showSlide(currentSlide);

// Alterna os slides a cada 3 segundos
setInterval(nextSlide, 3000);

const hamburger = document.getElementById('hamburger');
const navbarMobile = document.getElementById('navbar-mobile');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  navbarMobile.style.display = 'flex'; // Exibe o menu mobile
});

closeBtn.addEventListener('click', () => {
  navbarMobile.style.display = 'none'; // Esconde o menu mobile
});

// Opcional: Esconde o menu mobile se o usuário clicar fora dele
navbarMobile.addEventListener('click', (event) => {
  if (event.target === navbarMobile) {
    navbarMobile.style.display = 'none';
  }
});