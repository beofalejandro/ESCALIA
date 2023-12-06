var header = document.getElementById('header');
///// HEADER
window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 10) {
        header.style.backgroundColor = '#FFFFFF'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})

///// SLIDER
let currentIndex = 0;

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

///// Automático
setInterval(nextSlide, 10000);