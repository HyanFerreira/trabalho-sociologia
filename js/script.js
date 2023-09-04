const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0; // Índice atual do carrossel

// Função para avançar para o próximo item
function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}

// Função para voltar para o item anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
}

// Função para atualizar a exibição do carrossel
function updateCarousel() {
    const translateX = -currentIndex * 270; // Largura do item + espaço entre os itens
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Adicione ouvintes de eventos aos botões
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
