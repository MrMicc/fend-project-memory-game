/*
 * Create a list that holds all of your cards
 */

let cards = [new Card('fa-diamond'),new Card('fa-diamond'), new Card('fa-paper-plane-o'), new Card('fa-paper-plane-o'),
    new Card('fa-anchor'), new Card('fa-anchor'),new Card('fa-bolt'), new Card('fa-bolt'), new Card('fa-cube'),
    new Card('fa-cube'), new Card('fa-leaf'), new Card('fa-leaf'), new Card('fa-bicycle'), new Card('fa-bicycle'),
    new Card('fa-bomb'), new Card('fa-bomb')];

let openCards = [];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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


/*
Setting up score Panel
 */
let score;

display = function () {
    score = new Score();

    score.getStars();
    score.getMoves();

    shuffle(cards, 'card');

    mountCards();


};


function addListenerToCards() {
    const cardsHtml =  document.querySelectorAll('ul.deck > li');
    console.log(cardsHtml);
    cardsHtml.forEach(function (card) {
       card.addEventListener('click',function () {
           if(this.className === 'card'){
               displayCard(this);
               addToOpenCards(this);
               checkOpenCards();
           }
       })
    });
}


function checkOpenCards() {
    if(openCards.length === 2){
        if(isEqual()){
            console.log(true);
        }else {
            console.log('not equals')
        }
    }

    openCards = [];
    score.addMove();
}


function isEqual() {
    console.log(openCards[0].firstElementChild.className);
    console.log(openCards[1].firstElementChild.className);
    return openCards[0].firstElementChild.className === openCards[1].firstElementChild.className;
}

function displayCard(htmlCard) {
    htmlCard.className = 'card open show';
}


function addToOpenCards(htmlCard) {
    openCards.push(htmlCard);
}

function mountCards() {
    cards.forEach(function (card) {
        $('.deck').append(card.mountCard('card'));
    });
}

display();
addListenerToCards();


