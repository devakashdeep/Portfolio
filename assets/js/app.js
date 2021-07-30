const headerHeight = document.querySelector('header').clientHeight;
const screenHeight = `${window.screen.height - 1.5 * headerHeight}px`;
const banner = document.querySelector('#banner-section');
banner.style.height = screenHeight;
console.log(screenHeight);

const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('#menu-options');

openMenu.addEventListener("click", function () {
    menu.style.display = 'block';
});

closeMenu.addEventListener("click", function () {
    menu.style.display = 'none';
});