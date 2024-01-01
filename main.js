let btnMenu = document.getElementById('btn-menu');
let Menu = document.querySelector('.nav-links');

btnMenu.onclick = function(){
    btnMenu.classList.toggle('fa-times');
    Menu.classList.toggle('active')
}

let header = document.querySelector('header');

window.onscroll = function(){
    if(this.scrollY >= 100){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
    btnMenu.classList.remove('fa-times')
    Menu.classList.remove('active')
}


const carousel = document.querySelector('.carousel');
const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
let currentIndex = 0;

function nextSlide() {
    currentIndex += 2;
    if (currentIndex >= carousel.children.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    currentIndex -= 2;
    if (currentIndex < 0) {
        currentIndex = carousel.children.length - 2;
    }
    updateCarousel();
}

function updateCarousel() {
    const transformValue = -currentIndex * 50 + '%';
    carousel.style.transform = 'translateX(' + transformValue + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slides = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function updateCarousel() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
});
