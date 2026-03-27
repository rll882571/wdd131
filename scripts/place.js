// 1. Datas do Rodapé
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

// 2. Cálculo de Wind Chill (Resfriamento Eólico)
const temperature = 28; // Valores estáticos como pede a tarefa [cite: 172]
const windSpeed = 15;

function calculateWindChill(temp, speed) {
    // Fórmula para Celsius: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

const windChillElement = document.getElementById("windchill");

// Condições para cálculo válido (Metric): Temp <= 10°C e Wind > 4.8 km/h [cite: 183]
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChillElement.textContent = "N/A"; // No seu caso (28°C), deve mostrar N/A [cite: 184]
}