let currentIndex = 0;
let ButtonMode = document.getElementById('mode');
let themeforbody = document.body;
let themeforfooter = document.getElementById('footer');


function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 15000);

ButtonMode.addEventListener('click', () => {
        themeforbody.classList.toggle('light');
        themeforfooter.classList.toggle('light');
    });