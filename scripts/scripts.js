function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('nav-menu-hidden')) {
        menu.classList.remove('nav-menu-hidden');
        menu.classList.add('nav-menu-visible');
    } else {
        menu.classList.remove('nav-menu-visible');
        menu.classList.add('nav-menu-hidden');
    }
}