const searchIcon = document.getElementById('search-icon');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');

searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active');
});

closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
    }
})

const menuOverlay = document.getElementById('menu-overlay');
const closeMenu = document.getElementById('close-menu');
const menuIcon = document.getElementById('menu-icon');
const menuNav = document.getElementById('menu-nav');

menuIcon.addEventListener('click', () => {
    menuOverlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
})

menuNav.addEventListener('click', (e) => {
    if (e.target === menuNav) {
        menuOverlay.classList.remove('active');
    }
})