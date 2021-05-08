let slidePosition = 0;
const slides = document.getElementsByClassName('caroussel-item');
const totSlides = slides.length;

document.
    getElementById('carousel_button--next')
    .addEventListener("click", function() {
        moveToNextSlide();
    });
document.
    getElementById('carousel_button--prev')
    .addEventListener("click", function() {
        moveToPreviousSlide();
    });
function updateSlidePosition() {
    for(let slide of slides){
        slide.classList.remove('caroussel-item--visible');
        slide.classList.add('caroussel-item--hidden');
    }
    slides[slidePosition].classList.add('caroussel-item--visible')
}
function moveToNextSlide() {
    
    if (slidePosition == totSlides-1) {
        slidePosition = 0;

    } else {
        slidePosition++;
    }
    updateSlidePosition();
}
function moveToPreviousSlide() {
    
    if (slidePosition == 0) {
        slidePosition = totSlides-1;

    } else {
        slidePosition--;
    }    
    updateSlidePosition();
}


