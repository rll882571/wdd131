const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#navbar-mobile');

if (hamburger && mobileMenu) {
   
    hamburger.addEventListener('click', () => {
            
        mobileMenu.classList.toggle('open');   
        hamburger.classList.toggle('active'); 
    });
}

const yearEl = document.getElementById('currentyear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}