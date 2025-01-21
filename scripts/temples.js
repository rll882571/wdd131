document.addEventListener("DOMContentLoaded", () => {
    const bot = document.getElementById("bot"); // Botão do menu
    const navMenu = document.querySelector("nav ul"); // Menu de navegação

    bot.addEventListener("click", () => {
        // Alterna a classe 'show' no menu
        navMenu.classList.toggle("show");

        // Alterna o ícone do botão
        bot.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });

    // Garante que o menu seja exibido em telas maiores
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove("show"); // Remove a classe 'show'
            bot.textContent = "☰"; // Restaura o ícone padrão
        }
    });
});



  
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;