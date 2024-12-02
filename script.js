// JavaScript for automatic slider movement
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to first slide
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
