// Menu Hamburguer
const navSlide = () => {
    const burger = document.getElementById('menu-hamburger');
    const nav = document.getElementById('menu-principal');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Validação do Formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    if (form.name.value === '' || form.email.value === '' || form.message.value === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
    }

    if (!form.email.value.includes('@')) {
        alert('Por favor, digite um email válido.');
        event.preventDefault();
    }
});
