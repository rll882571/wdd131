const yearEl = document.getElementById('currentyear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('#navbar-mobile');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');

});
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});