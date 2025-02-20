const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Alternar a visibilidade do menu
    navLinks.classList.toggle('nav-active');

    // Animar os links do menu
    navLinksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Animar o botão hamburger
    burger.classList.toggle('toggle');
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none"); // Oculta todos os slides
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reinicia o loop
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
    setTimeout(showSlides, 2000); // Muda a cada 2 segundos
}

// Função para mudar de slide manualmente
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; } 
    if (slideIndex < 1) { slideIndex = slides.length; }
    
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// Inicia o slideshow ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    slides[0].style.display = "block"; // Mostra o primeiro slide ao carregar
    showSlides();
});
// ... (seu código JavaScript existente para menu e slideshow)

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Criptografa a senha (exemplo com js-sha256 - inclua a biblioteca no seu HTML)
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>
  const hashedPassword = sha256(password); // Certifique-se de que sha256 está definido

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', hashedPassword); // Salvar a senha criptografada

  alert('Sign up successful!');

  // Redireciona para o home
  window.location.href = 'website.html'; 
});

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Formulário enviado!'); // Verifica se o evento submit está sendo acionado

  // ... (resto do seu código)

  console.log('Redirecionando para website.html'); // Verifica se o redirecionamento está sendo executado
  window.location.href = 'website.html'; 
});