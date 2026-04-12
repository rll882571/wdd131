// --- 1. Rodapé (Datas e Copyright) ---
const yearEl = document.getElementById('currentyear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}

// --- 2. Menu Hambúrguer (Mobile) ---
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('#close-btn');
const mobileMenu = document.querySelector('#navbar-mobile');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });
}

if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
}

// --- 3. Array de Objetos (Dados dos Templos) ---
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Ceará, Brazil",
    dedicated: "2019, June, 2",
    area: 34200,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, São Paulo, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
  },
    {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico, United States",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-998219-wallpaper.jpg"
  }
];

// --- 4. Função para Exibir os Cards ---
const container = document.querySelector('.grid-container');

function displayTemples(filteredTemples) {
    if (!container) return;

    container.innerHTML = '';

    filteredTemples.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${temple.dedicated}</p>
            <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        `;

        container.appendChild(card);
    });
}

// --- 5. Filtros do Menu ---
const navLinks = document.querySelectorAll('.navbar a, .navbar-mobile a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const filter = event.target.textContent.trim().toLowerCase();

        if (filter === 'home') {
            displayTemples(temples);
        } else if (filter === 'old') {
            displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
        } else if (filter === 'new') {
            displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
        } else if (filter === 'large') {
            displayTemples(temples.filter(t => t.area > 90000));
        } else if (filter === 'small') {
            displayTemples(temples.filter(t => t.area < 10000));
        }

        if (mobileMenu) {
            mobileMenu.classList.remove('open');
        }
    });
});

// --- Inicialização ---
displayTemples(temples);
