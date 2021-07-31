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

const menuLink = document.querySelectorAll('.navLink');
menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.style.display = 'none';
        item.classList.toggle('active');
        menuLink.forEach(i => {
            if (item != i) {
                i.classList.remove('active');
            }
        })
    })

})

const allButton = document.querySelector('#portfolio-all');
const webButton = document.querySelector('#portfolio-web');
const mobileButton = document.querySelector('#portfolio-mobile');

const portfolioCard = document.querySelectorAll('.portfolioItems');

allButton.addEventListener("click", function () {
    allButton.classList.add('btn-primary');
    webButton.classList.remove('btn-primary');
    mobileButton.classList.remove('btn-primary');
    portfolioCard.forEach(item => {
        item.style.display = 'block';
    });
});

webButton.addEventListener("click", function () {
    webButton.classList.add('btn-primary');
    allButton.classList.remove('btn-primary');
    mobileButton.classList.remove('btn-primary');
    portfolioCard.forEach(item => {
        if (item.dataset.id != 'Website') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});
mobileButton.addEventListener("click", function () {
    mobileButton.classList.add('btn-primary');
    allButton.classList.remove('btn-primary');
    webButton.classList.remove('btn-primary');
    portfolioCard.forEach(item => {
        if (item.dataset.id != 'Mobile') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
});