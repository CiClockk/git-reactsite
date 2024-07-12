let slider = document.querySelector('.slider');
let slides = Array.from(slider.querySelectorAll('.slide-viewing'));
let slideCount = slides.length;
let slideIndex = 0;

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index == slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function autoSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

let slideInterval = setInterval(autoSlide, 1000);

updateSlider();