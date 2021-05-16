let slidePos = 0;
const sli = document.getElementsByClassName('caroussel-item');
const totSli = sli.length;

var intervalId = window.setInterval(function(){
    if (slidePos == totSli-1) {
        slidePos = 0;

    } else {
        slidePos++;
    }
    for(let slide of sli){
        slide.classList.remove('caroussel-item--visible');
        slide.classList.add('caroussel-item--hidden');
    }
    sli[slidePos].classList.add('caroussel-item--visible')
  }, 5000);

