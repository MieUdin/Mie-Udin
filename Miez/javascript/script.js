document.addEventListener('DOMContentLoaded', function() {
    const hamburg = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburg.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navigasi = document.querySelector('.nav-home');
    const mainElement = document.querySelector('main');

    navigasi.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navigasi = document.querySelector('.nav-about');
    const mainElement = document.querySelector('.container2');

    navigasi.addEventListener('click', function(event) {
        event.preventDefault(); 

        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navigasi = document.querySelector('.nav-teams');
    const mainElement = document.querySelector('.container3');

    navigasi.addEventListener('click', function(event) {
        event.preventDefault(); 

        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navigasi = document.querySelector('.nav-contact');
    const mainElement = document.querySelector('footer');

    navigasi.addEventListener('click', function(event) {
        event.preventDefault(); 

        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navigasi = document.querySelector('.contacus');
    const mainElement = document.querySelector('footer');

    navigasi.addEventListener('click', function(event) {
        event.preventDefault(); 

        mainElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});