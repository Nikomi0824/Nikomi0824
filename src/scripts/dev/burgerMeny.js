const hamburger = document.querySelector(".menu");
const navMenu = document.getElementById("navbar");
const buttonMenu = document.getElementById("header_right_button");
const sthell = document.querySelector("header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    sthell.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    buttonMenu.classList.toggle("active");
}

const mediaQuery = window.matchMedia('(min-width: 720px)');
mediaQuery.addListener(function(event) {
    if (event.matches) {
        sthell.classList.remove("active");
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        buttonMenu.classList.remove("active");
    }
});