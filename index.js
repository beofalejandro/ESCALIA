var header = document.getElementById('header');
window.addEventListener('scroll', () => {
    var scroll = window.scrollY

    if (scroll > 10) {
        header.style.backgroundColor = '#252525'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})