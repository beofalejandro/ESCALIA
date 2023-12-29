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

// PANELS 
const contenedor = document.getElementById("contenedor");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

// Inicialmente, solo se muestra el panel 1
panel1.style.display = "block";
panel2.style.display = "none";

boton1.addEventListener("click", () => {
    // Muestra el panel 1
    panel1.style.display = "block";
    panel2.style.display = "none";
});

boton2.addEventListener("click", () => {
    // Muestra el panel 2
    panel1.style.display = "none";
    panel2.style.display = "block";
});
