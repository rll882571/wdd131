// 1. Datas do Rodapé
const yearEl = document.getElementById("currentyear");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModifiedEl) lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;

// 2. Cálculo de Wind Chill (Critério: Função de 1 linha)
const temperature = 28; // Estático conforme seu exemplo
const windSpeed = 15;

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const windChillElement = document.getElementById("windchill");

if (windChillElement) {
    // Só chama a função se as condições da rubrica forem atendidas
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}