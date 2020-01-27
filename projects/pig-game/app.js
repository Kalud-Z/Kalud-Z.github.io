var scrore , roundScore;
var winningScoreInput , winningScore , winningScorePlaceHolder ;
var activePlayer;
var gamePlaying = true;

winningScore = 100;

reset();    


//#####################################################################################################
//################################ SET WINNING SCORE ##################################################
document.querySelector('.final-score-submit').addEventListener('click', setWinningScore);


//#####################################################################################################
//########################### ROLL BUTTON ##############################################################
document.querySelector('.btn-roll').addEventListener('click', btnRoll);   


//#####################################################################################################
//########################### HOLD BUTTON ##############################################################
document.querySelector('.btn-hold').addEventListener('click' , btnHold);


//#####################################################################################################
//######################### BUTTON NEW GAME ###########################################################
document.querySelector('.btn-new').addEventListener('click' , reset);




//#####################################################################################################
//######################### POPUP #####################################################################
document.querySelector('.btn-help').addEventListener('click' , function() {
    document.querySelector('.popup').classList.toggle('show-popup');
});

document.querySelector('.popup__close-icon').addEventListener('click' , function() {
    document.querySelector('.popup').classList.toggle('show-popup');
});




//####################################################################################################
// ##########################KEYBOARD SHORTCUTS ######################################################

document.addEventListener('keypress', function(event){ 
    // console.log(event); // use this to find out the code keys. 
    if(event.keyCode == 105) {  // key = I
        document.querySelector('.popup').classList.toggle('show-popup');
    }
});


document.addEventListener('keypress', function(event){ 
    console.log(event);
    if(event.keyCode == 114) { btnRoll(); }  // ley = R
});


document.addEventListener('keypress', function(event){ 
    console.log(event);
    if(event.keyCode == 104) { btnHold(); }  // ley = H
});


document.addEventListener('keypress', function(event){ 
    console.log(event);
    if(event.keyCode == 110) { reset(); }  // ley = N
});














// ###############################  FUNCTIONS #################################################
//#############################################################################################


function btnRoll() {
    if(gamePlaying) {

    
        var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';      
            dice = Math.floor(Math.random()*6) + 1;
       
            diceDOM.src = 'dice-' + dice + '.png';

        if(dice > 1) {
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
        else { nextPlayer();}
    }
}


function btnHold() {
    if(gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        console.log('the winning score is : ' + winningScore);

        if(scores[activePlayer] >= winningScore ) { winnerState(); }
        else { nextPlayer(); }
    }    
}


function nextPlayer() {
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none'; 
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer = (activePlayer == 1) ? 0 : 1 ;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}


function reset() {
    gamePlaying = true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('score-0').textContent      = '0' ;  
    document.getElementById('score-1').textContent      = '0' ;
    document.getElementById('current-0').textContent    = '0' ;
    document.getElementById('current-1').textContent    = '0' ;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none'; 
    document.querySelector('.btn-roll').style.display = 'block'; 
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function winnerState() {
    gamePlaying = false;
    document.querySelector('#name-' + activePlayer).innerHTML = '<b> Winner ! </b>';
    document.querySelector('.dice').style.display = 'none'; 
    document.querySelector('.btn-roll').style.display = 'none'; 
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
}


function setWinningScore() {
    winningScoreInput = document.querySelector('.final-score').value;
    // console.log('the winning score input is : ' + winningScoreInput);
    if(winningScoreInput) {
         winningScore = winningScoreInput;
        //  console.log('the winning score is set ! ==> ' + winningScore);
         winningScorePlaceHolder = document.querySelector('.final-score').placeholder = winningScore ;
        //  winningScoreInput = '';  // IT DOESNT WORK THIS WAY !!!! why ????
        document.querySelector('.final-score').value = '';
        document.querySelector('.btn-roll').focus();
    }
}



/* document.addEventListener('keypress', function(event){ 
    if(event.keyCode == 13) {
         setWinningScore();
    }
}); */   // you dont need this event. U just need to set the type of the button to 'submit'































