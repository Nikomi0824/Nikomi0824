const menuButton = document.querySelector(".menu"); // Более понятное имя переменной
const navMenu = document.getElementById("navbar");
const headerRightButton = document.getElementById("header_right_button"); // Более понятное имя переменной
const header = document.querySelector("header"); // Более понятное имя переменной

menuButton.addEventListener("click", toggleMobileMenu); // Более понятное имя функции

function toggleMobileMenu() { // Более понятное имя функции
    header.classList.toggle("active");
    menuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerRightButton.classList.toggle("active");
}

const mediaQuery = window.matchMedia('(min-width: 720px)');
mediaQuery.addListener(function(event) {
    if (event.matches) {
        header.classList.remove("active");
        menuButton.classList.remove("active");
        navMenu.classList.remove("active");
        headerRightButton.classList.remove("active");
    }
});