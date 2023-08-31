
const menuBar = document.querySelector('.menu_bar');
const bar = document.querySelector('.bar');
const navBar = document.querySelector('.navbar');
const links = document.querySelector('.links');
const sections = document.querySelectorAll('.section');

function toggleActive() {
    links.classList.toggle('active');
    menuBar.classList.toggle('active');
    navBar.classList.toggle('active');
    sections.forEach((section) => {
        section.classList.toggle('active');
    });
}

function toggleMenu() {
    if(!menuBar.classList.contains("active")){
        toggleActive();

    } else {
        toggleActive();
    }
}

function removeMenu() {
    if (links.classList.contains("active")) {
        toggleActive();
    }
}

menuBar.addEventListener('click', toggleMenu);
links.addEventListener('click', removeMenu);