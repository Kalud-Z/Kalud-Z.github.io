// TICKETS POPUP ##################################################################################
 
var buttons = document.getElementsByClassName('button'); 
for (var i = 0 ; i < buttons.length; i++) {

    buttons[i].addEventListener('click' , function() {
        document.querySelector('.popup-tickets').classList.add('popup-tickets-show');
        document.querySelector('.popup-tickets__content-wrapper').classList.add('popup-tickets__content-wrapper-show');
    }); 
}

document.querySelector('.popup-tickets__head__close').addEventListener('click' , function() {
    document.querySelector('.popup-tickets').classList.remove('popup-tickets-show');
    document.querySelector('.popup-tickets__content-wrapper').classList.remove('popup-tickets__content-wrapper-show');
});



// SCROLL TO #################################################################################

document.querySelector('.nav-bar__band').addEventListener('click' , function() {
    document.querySelector(".section-band").scrollIntoView();
});


document.querySelector('.nav-bar__tour').addEventListener('click' , function() {
    document.querySelector(".section-tour-dates").scrollIntoView();
});


document.querySelector('.nav-bar__contact').addEventListener('click' , function() {
    document.querySelector(".section-contact").scrollIntoView();
});













