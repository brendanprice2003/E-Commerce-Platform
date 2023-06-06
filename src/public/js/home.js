
// check for signed in user
let localStorage = window.localStorage;
let user = JSON.parse(localStorage.getItem('user'));

if (user) {
    document.getElementById('nouser').style.display = 'none';
    document.getElementById('user').innerHTML = `Hello ${user.username}`;
};

//handle the slideshow
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[currentSlide].style.display = 'flex';

    // Delay the opacity transition for a smooth fade-in effect
    setTimeout(() => {
        slides[currentSlide].style.opacity = 1;
    }, 50);
};

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
};

setInterval(nextSlide, 5000); // Change slide every 3 seconds



// THIS IS FOR THE SEARCH
