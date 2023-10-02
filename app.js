
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
const html = document.querySelector('html');
const body = document.querySelector('body');
const form = document.getElementById('contact-form');
const formInputs = document.querySelectorAll('.input');


window.onload = function () {
    onLoadAnimations();
}

function onLoadAnimations() {
    welcome.classList.toggle('left-animation');
    socialIcons.classList.toggle('fade-in');
    welcomeDescription.classList.toggle('left-animation');
    logo.classList.toggle('top-animation');
    hiddenLinks.classList.toggle('top-animation');
    menuBar.classList.toggle('top-animation');
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
        html.style.overflow = "hidden";
        links.style.visibility ="visible";
    } else {
        toggleActive();
        html.style.overflow = "visible";
        links.style.visibility ="hidden";
    }
}

function removeMenu() {
    if (links.classList.contains("active")) {
        toggleActive();
        html.style.overflow = "visible";
        html.style.scrollBehavior = "auto";
        links.style.visibility ="hidden";
    }
}

// emailJs api
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let templateParams = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
    }
    
    emailjs.send('contact_service', 'contact_form', templateParams)
        .then(function() {
            console.log('SUCCESS!');
            alert("Your message has been sent successfully");
            formInputs.forEach(input => {
                input.value = "";
            });
        }, function(error) {
            console.log('FAILED...', error);
        }); 
});

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

// scrolls

function triggerLeftAnimation(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the image is in the viewport, animate it
            entry.target.style.opacity = "1";
            entry.target.style.left = "0";
            entry.target.style.transition = "opacity 1s ease-in-out, left 1s ease-in-out";
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}

function triggerRightAnimation(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the image is in the viewport, animate it
            entry.target.style.opacity = "1";
            entry.target.style.right = "0";
            entry.target.style.transition = "opacity 1s ease-in-out, right 1s ease-in-out";
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}
const triggerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No margin
    threshold: 1 // Trigger when at 100% of the image is visible
}

const observer1 = new IntersectionObserver(triggerLeftAnimation, triggerOptions);
const observer2 = new IntersectionObserver(triggerRightAnimation, triggerOptions);


const travelTrackerContainer = document.querySelector(".travel-tracker");
const bmiContainer = document.querySelector(".bmi-calculator");
const surveyFormContainer = document.querySelector(".survey-form");
const quoteContainer = document.querySelector(".quote-generator");

// Start observing the image
observer1.observe(travelTrackerContainer);
observer1.observe(bmiContainer);
observer2.observe(surveyFormContainer);
observer2.observe(quoteContainer);