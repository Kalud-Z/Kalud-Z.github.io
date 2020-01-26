

/*  
document.querySelector('.btn-help').addEventListener('mouseenter' , function() {
    document.querySelector('.popup').classList.add('show-popup');
}); */

/* 
 document.querySelector('.popup').addEventListener('mouseleave' , function() {
    document.querySelector('.popup').classList.remove('show-popup');
});

document.querySelector('.portfolio-item').addEventListener('mouseleave' , function() {
    document.querySelector('.popup').classList.remove('show-popup');
}); */

  
document.querySelector('.portfolio-items').addEventListener('click', function(event) {
    var elementClicked = event.target;
    var elementToModify = elementClicked.parentNode.previousSibling.previousSibling;
    var elementToModifyID = elementToModify.id;
        
    if(elementToModifyID) {
        elementToModify.classList.toggle('show-popup');
    } 
        
});
 
/* 
document.querySelector('.portfolio-item').addEventListener('mouseleave', function(event) {
    var elementMouseLeft = event.target;
    var elementToModify = elementMouseLeft;
        
    // elementToModify.classList.remove('show-popup');

    console.log(elementMouseLeft);
        
});  */
