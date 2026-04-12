
const botao = document.querySelector('#bnt'); 
botao.addEventListener('click', function(){
    const notas = document.querySelectorAll('.nota');
    notas.forEach(function(nota){
        const valor = parseInt(nota.textContent);
        if(valor >= 90){
            nota.style.color = 'black';
        
        } else {
            nota.style.color = 'red';
        }   
        });

})
