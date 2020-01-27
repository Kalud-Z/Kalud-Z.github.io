

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);    // create an array
const nextButton = document.querySelector('.carousel__button--left');
const prevButton = document.querySelector('.carousel__button--right');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect(); //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
const slideWidth = slideSize.width;

setSlidePosition();

// when i click left , move slides to to the left ################################################
nextButton.addEventListener('click', function(){
    const currentSlide  = track.querySelector('.current-slide'); // look in track and find that class
    const nextSlide     = currentSlide.nextElementSibling;
    moveToSlide(track , currentSlide, nextSlide);
    
    // console.log(dotsNav)
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot   = currentDot.nextElementSibling;
    updateDots(currentDot,nextDot);

})


// when i click right , move slides to to the right
prevButton.addEventListener('click', function(){
    const currentSlide  = track.querySelector('.current-slide'); // look in track and find that class
    const prevSlide     = currentSlide.previousElementSibling;
    moveToSlide(track , currentSlide, prevSlide);
    
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot   = currentDot.previousElementSibling;
    
    updateDots(currentDot,prevDot);
})


// when I click the nav indicator move to that slide. ##############################################################
dotsNav.addEventListener('click', function(e) {
    // console.log(e.target);   // shows the elements thats being clicked !
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = e.target.closest('button');  // detect and do sth. ONLY when it is a button element.
    
    if(!targetDot) return;  // if clicked outside of the buttons , get out !
    
    const currentSlide = track.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    updateDots(currentDot,targetDot);    
    moveToSlide(track , currentSlide, targetSlide);

    currentSlideIndex();
})


//########### FUNCTIONS ###############################################################

function setSlidePosition() {
    for(var i = 0 ; i < slides.length ; i++) {
        slides[i].style.left = slideWidth * i + 'px';
    }
}


function moveToSlide(track , currentSlide , targetSlide) {
    const amountToMove  = targetSlide.style.left;
    track.style.transform = 'translateX(-' +  amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    toggleArrows();
}


function updateDots(currentDot , targetDot){
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


function currentSlideIndex() {
    for(var i = 0 ; i < slides.length ; i++) {
        if(slides[i].className === 'carousel__slide current-slide'){
            return i;
            // console.log(i);
        }
    }
}


function toggleArrows() {
    const currentIndex = currentSlideIndex();
    if(currentIndex === slides.length-1)
    {
        document.querySelector('.carousel__button--left').classList.add('is-hidden');
    }
    else {
        document.querySelector('.carousel__button--left').classList.remove('is-hidden');
    }

    if(currentIndex === 0)
    {
        document.querySelector('.carousel__button--right').classList.add('is-hidden');
    }
    else {
        document.querySelector('.carousel__button--right').classList.remove('is-hidden');
    }
}





















