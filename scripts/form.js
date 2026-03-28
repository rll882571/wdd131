// Espera o DOM carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Array de Produtos (conforme exigido na Step 4 do PDF) [cite: 104, 110]
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power converter", averagerating: 4.7 },
        { id: "fs-1987", name: "warp drive", averagerating: 3.5 },
        { id: "nv-3345", name: "laser solar-plexus", averagerating: 3.9 },
        { id: "jj-1969", name: "multimeter", averagerating: 4.4 }
    ];

    // --- LÓGICA PARA A PÁGINA DO FORMULÁRIO (form.html) ---
    const productSelect = document.getElementById("productName");
    
    // Se o elemento 'productName' existir, significa que estamos na página do formulário [cite: 59, 104]
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;     // O ID do array vai no atributo 'value' [cite: 104]
            option.textContent = product.name; // O Nome do array aparece para o usuário [cite: 104]
            productSelect.appendChild(option);
        });
    }

    // --- LÓGICA PARA A PÁGINA DE CONFIRMAÇÃO (review.html) ---
    // Verifica se a URL atual contém "review.html" [cite: 57, 112]
    if (window.location.pathname.includes("review.html")) {
        const reviewDisplay = document.getElementById("review-count");
        
        // Recupera o contador do localStorage ou define como 0 se for a primeira vez 
        let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
        
        // Incrementa o contador apenas quando a página review.html carrega 
        reviewCount++;
        
        // Salva o novo valor de volta no localStorage 
        window.localStorage.setItem("reviewCount-ls", reviewCount);
        
        // Se você tiver um elemento com ID 'review-count' no HTML, ele mostra o número [cite: 15, 112]
        if (reviewDisplay) {
            reviewDisplay.textContent = reviewCount;
        }
    }
});