
const sideMenu = document.querySelector("#sideMenu");
const header = document.querySelector("header");

function openMenu() {
    sideMenu.classList.remove('translate-x-full');
}

function closeMenu() {
    sideMenu.classList.add('translate-x-full');
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    } else {
        header.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    }
});
