

const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area'); 

let area = 0;
const PI = 3.14159;
let radius = 10;

area = PI * radius * radius;
console.log('Área do círculo:', area);


radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20; 
area = PI * radius * radius;

radiusOutput.textContent = radius;
areaOutput.textContent = area;

const circuloOutput = document.getElementById('circulo');

if (radius > 25) {
    circuloOutput.textContent = 'Muito Grande';

}
else if (radius > 15){
    circuloOutput.textContent = 'Médio';
}
else {
    circuloOutput.textContent = 'Pequeno';
}
