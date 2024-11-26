const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let isDragging = false;
let startX;
let scrollLeft;

// Função para avançar o carrossel
nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.carousel-item').offsetWidth;
    carousel.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
});

// Função para retroceder o carrossel
prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.carousel-item').offsetWidth;
    carousel.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
});

// Evento de pressionar o botão do mouse
carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
});

// Evento de soltar o botão do mouse
carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

// Evento de sair da área do carrossel
carousel.addEventListener('mouseleave', () => {
    isDragging = false;
    carousel.style.cursor = 'grab';
});

// Evento de mover o mouse
carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do deslizamento
    carousel.scrollLeft = scrollLeft - walk;
});


