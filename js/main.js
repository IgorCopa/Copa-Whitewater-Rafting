const openButton = document.querySelector(".hamburger");
function openMenu() {
    const nav = document.querySelector(".menu nav");
    nav.style.transform = "translateX(0%)";
}
openButton.onclick = openMenu;

const closeButton = document.querySelector(".hamburger-2");
function closeMenu() {
    const nav = document.querySelector(".menu nav");
    nav.style.transform = "translateX(100%)";
}
closeButton.onclick = closeMenu;