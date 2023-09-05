
const menuBar = document.querySelector('.menu-bar');
const bar = document.querySelector('.bar');
const navBar = document.querySelector('.navbar');
const links = document.querySelector('.links');
const sections = document.querySelectorAll('.section');
const welcome = document.querySelector('.welcome-text');
const socialIcons = document.querySelector('.social-icons');
const welcomeDescription = document.querySelector('.welcome-description');
const logo = document.querySelector('.logo');
const hiddenLinks = document.querySelector('.hidden-links');
const rightArrows = document.querySelectorAll('.fa-arrow-right');
const readMores = document.querySelectorAll('.read-text');
const reveals= document.querySelectorAll('.reveal-description');

window.onload = function () {
    onLoadAnimations();
}

function onLoadAnimations() {
    welcome.classList.toggle('left-animation');
    socialIcons.classList.toggle('fade-in');
    welcomeDescription.classList.toggle('left-animation');
    logo.classList.toggle('fade-in');
    hiddenLinks.classList.toggle('top-animation');
    menuBar.classList.toggle('fade-in');
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

menuBar.addEventListener('click', toggleMenu);
links.addEventListener('click', removeMenu);

for (let i = 0; i < reveals.length; i++) {
    rightArrows[i].addEventListener('click', function() {
        if (!rightArrows[i].classList.contains('reveal')) {
            readMores[i].textContent="Read less";
            rightArrows[i].classList.toggle('reveal');
            reveals[i].style.opacity="1";
            reveals[i].style.height="125px";
            reveals[i].style.visibility="visible";

        } else {
            readMores[i].textContent="Read more";
            rightArrows[i].classList.toggle('reveal');
            reveals[i].style.opacity="0";
            reveals[i].style.height="0";
            reveals[i].style.visibility="hidden";
        }
    }) 
}


   
        