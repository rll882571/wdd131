// =========================
// 1. Datas do Rodapé
// =========================
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

const yearEl = document.getElementById("currentyear");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) {
    yearEl.textContent = currentYear;
}

if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${lastModified}`;
}

// =========================
// 2. Cálculo de Wind Chill
// =========================
const temperature = 28;
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}

const windChillElement = document.getElementById("windchill");

if (windChillElement) {
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}