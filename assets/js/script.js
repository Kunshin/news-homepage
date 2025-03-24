function toggleMenu() {
    const menu = document.getElementsByClassName('menu')[0];
    if (menu.style.display === "block") {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}