# Memory Game Project

## Page of Working Game

* [Game Working](https://mrmicc.github.io/fend-project-memory-game/)
## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. And it is apart 
of Web Front-End course of Udaciy for specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## JS Files
### app.js
It has the main logical of the game

### card.js
A simple object that has the only the constructor of the cards

### clock
Has the ability and responsibility of the clock logical, it has the following methdos
* getTimer - Return the exact time that the game has been played
* setTimer - Add and update the timer at the HTML

### score
File that has the object responsible for the scores and moves that player has done.
The object has the following methods
* getMoves - Set the moves at the HTML
* countMoves - Count the moves that has been done
* getStars - Set the stars over the HTML
* countStar - Count the total of stars that player has
* removeStar - Remove one start 
* isGameOver - Check if the games is over or not
* addWrongMoves - add a count at the wrong moves
* addMove - add a move 
* delMove - delete a move
* isWin - Check if the player win 

### helperHtml
Has the dynamics htmls that was necessary to mount the game