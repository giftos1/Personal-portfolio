
const menuBar = document.querySelector('.menu_bar');
const bar = document.querySelector('.bar');
const navBar = document.querySelector('.navbar');
const links = document.querySelector('.links');
const sections = document.querySelectorAll('.section');
const welcome = document.querySelector('.welcome-text');
const socialIcons = document.querySelector('.social-icons');
const welcomeDescription = document.querySelector('.welcome-description');
const logo = document.querySelector('.logo');

window.onload = function () {
    welcome.classList.toggle('preparation');
    socialIcons.classList.toggle('preparation');
    welcomeDescription.classList.toggle('preparation');
    logo.classList.toggle('fade-in');
}

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

// window.addEventListener("load", function() {
//     alert("Hey!");
//   })

menuBar.addEventListener('click', toggleMenu);
links.addEventListener('click', removeMenu);