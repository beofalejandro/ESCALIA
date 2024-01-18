let currentIndex = 0;
// Theme variables
let ButtonMode = document.getElementById('theme-mode');
themeforbody = document.body;
themeforfooter = document.getElementById('footer');
themeforcontainers = document.getElementById('institute-container');

// Automatic slider
function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Button next slide
function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Button prev slide
function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
setInterval(nextSlide, 20000);

// Change theme
ButtonMode.addEventListener('click', () => {
    themeforbody.classList.toggle('body-light');
    themeforfooter.classList.toggle('footer-light');
    themeforcontainers.classList.toggle('institute-container-light');
});