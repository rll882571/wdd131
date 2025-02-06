const hamburger = document.getElementById('hamburger');
const navbarMobile = document.getElementById('navbar-mobile'); // Alterado para o ID correto
const closeBtn = document.getElementById('close-btn'); // Alterado para o ID correto

hamburger.addEventListener('click', () => {
  navbarMobile.classList.add('open'); // A classe 'open' será adicionada ao navbar-mobile
});

closeBtn.addEventListener('click', () => {
  navbarMobile.classList.remove('open'); // A classe 'open' será removida do navbar-mobile
});


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
  }
];

// Seleciona a div onde os templos serão exibidos
const container = document.querySelector(".grid-container");

// Função para exibir os templos com base em um filtro
function displayTemples(filteredTemples) {
  container.innerHTML = ""; // Limpa o conteúdo atual

  filteredTemples.forEach((temple) => {
    const figure = document.createElement("figure");
    figure.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Image of ${temple.templeName}`;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(caption);
    container.appendChild(figure);
  });
}

// Função para filtrar os templos de acordo com a opção selecionada
function filterTemples(criteria) {
  let filteredTemples = [];

  switch (criteria) {
    case "OLD":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "NEW":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "LARGE":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "SMALL":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    default:
      filteredTemples = temples; // "HOME" exibe todos os templos
  }

  displayTemples(filteredTemples);
}

// Adiciona event listeners ao menu de navegação
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    filterTemples(event.target.textContent.toUpperCase());
  });
});

// Exibir todos os templos ao carregar a página
displayTemples(temples);




// Atualiza o rodapé com o ano atual
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Atualiza o rodapé com a data da última modificação
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;
