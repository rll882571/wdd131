const hamburger = document.getElementById('hamburger');
const navbarMobile = document.getElementById('navbar-mobile'); // Alterado para o ID correto
const closeBtn = document.getElementById('close-btn'); // Alterado para o ID correto

hamburger.addEventListener('click', () => {
  navbarMobile.classList.add('open'); // A classe 'open' será adicionada ao navbar-mobile
});

closeBtn.addEventListener('click', () => {
  navbarMobile.classList.remove('open'); // A classe 'open' será removida do navbar-mobile
});




// Atualiza o rodapé com o ano atual
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Atualiza o rodapé com a data da última modificação
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
