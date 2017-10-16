/*
 * Create a list that holds all of your cards
 */

let cards = [new Card('fa-diamond'),new Card('fa-diamond'), new Card('fa-paper-plane-o'), new Card('fa-paper-plane-o'),
    new Card('fa-anchor'), new Card('fa-anchor'),new Card('fa-bolt'), new Card('fa-bolt'), new Card('fa-cube'),
    new Card('fa-cube'), new Card('fa-leaf'), new Card('fa-leaf'), new Card('fa-bicycle'), new Card('fa-bicycle'),
    new Card('fa-bomb'), new Card('fa-bomb')];

let openCards = []; //this will have the swiped cards


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



// Setting up score Panel
let score;
let clock;

//setting up the reset button
document.getElementsByClassName('restart')[0].addEventListener('click', resetGame);

/**
 * Initial funciton responsible to start and config some objects
 */
display = function () {
    score = new Score();

    score.getStars();
    score.getMoves();

    clock = new Clock();
    shuffle(cards, 'card');
    mountCards();
    timer();
};


/**
 * When the reset button is clicked we are going to force de reload of the page
 */
function resetGame() {
    location.reload(); //reloading the page
}


/**
 * This function is reponsible to run over all cards tags and add an event listener
 */
function addListenerToCards() {
    const cardsHtml =  document.querySelectorAll('ul.deck > li');
    cardsHtml.forEach(function (card) {
       card.addEventListener('click',function () {
           if(this.className === 'card'){
               displayCard(this);
               addToOpenCards(this);
               checkOpenCards(); //when the card is clicked this will check the status of it
           }
       })
    });
}

/**
 * This is the core function of the game. Here you will find the main logic of the game
 */
function checkOpenCards() {
    if(openCards.length === 2){
        if(isEqual()){
            match();
            if(score.isWin()){
                gameOver('Win');
            }
        }else {
            score.addWrongMoves();
            score.removeStar();
          //it was removed as the instructor of Udacity has asked
            //  if(score.isGameOver()){
            //      gameOver('Lost');
            //  }
            notMatch();
        }
        openCards = [];
        score.addMove();
    }
}




function match() {
    let cards = openCards;
    setTimeout(function () {
        setCss(cards,'card match');
    },300); //after the card is swiped and match of the second one we wait 300ms to change make animation
}

function notMatch() {
    let cards = openCards;
    setTimeout(function () { //setting the cards red when not match
        setCss(cards, 'card notMatch');
        setTimeout(function () { //turning the cards to face down
            setCss(cards,'card');
        },1000);
    }, 300);

}

function isEqual() {
    return openCards[0].firstElementChild.className === openCards[1].firstElementChild.className;
}

function displayCard(htmlCard) {
    setCss(htmlCard, 'card open show');
}


function addToOpenCards(htmlCard) {
    openCards.push(htmlCard);
}

function mountCards() {
    cards.forEach(function (card) {
        $('.deck').append(card.mountCard('card'));
    });
}


/**
 * this function is generic function responsible to config a specific class name, of an object
 * @param object
 * @param className
 */
function setCss(object, className) {
    if(Array.isArray(object)){
        for(let  i = 0; i<object.length; i++){
            object[i].className = className;
        }

    }else {
        object.className = className;
    }
}

/**
 * This call the modal that is responsible to show when the game ends.
 * @param status - Win or Lost
 */
function gameOver(status) {
    const modal = document.getElementsByClassName('modal')[0];

    const modalContent = document.getElementsByClassName("modal-content")[0];

    modal.style.display = 'block';
    if(status === 'Lost'){
        modalContent.innerHTML = HTMLGameOverLoose.replace('%dataStatus%', 'You Loose!').replace('%dataTime%', clock.getTimer());
    }else{
        modalContent.innerHTML = HTMLGameOverWin.replace('%dataStatus%', 'Congratulations! You Win!').replace('%dataMoves%',
            score.countMoves()).replace('%dataStar%', score.countStar()).replace('%dataTime%', clock.getTimer());
    }

    eventPlayAgain();

}

function eventPlayAgain() {
    document.getElementById('play-again').onclick = function () {
        resetGame();
    };
}


function timer(){

    setInterval(function () {
        clock.setTimer();
    },1000);
}

display();
addListenerToCards();



