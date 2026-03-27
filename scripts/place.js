// 1. Datas do Rodapé
const yearEl = document.getElementById("currentyear");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
    lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
}


const temperature = 5; // Em Celsius
const windSpeed = 10;  // Em km/h


const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const windChillElement = document.getElementById("windchill");

if (windChillElement) {
    
    if (temperature <= 10 && windSpeed > 4.8) {
        const wc = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${wc}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}