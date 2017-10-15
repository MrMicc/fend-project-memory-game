let HTMLStar = '<li><i class="%data%"></i></li>'; /*<li><i class="fa fa-star"></i></li>*/
let HTMLMoves = '<span class="moves">%data% Moves</span>';

let HTMLGameOverWin = `
                    <i class="fa fa-check-circle-o fa-5x check-win" aria-hidden="true"></i>
                    <h1>%dataStatus%<h1>
                    <p>With %dataMoves% Moves and %dataStar% Stars.</p>
                    <p>Wooooooo!</p>
                    <p>You took only %dataTime%</p>
                    <div><button id="play-again">Play Again</button></div>`;


let HTMLGameOverLoose = `
                    <h1>%dataStatus%<h1>
                    <p>You took %dataTime%</p>
                    <i class="fa fa-thumbs-down check-loose" aria-hidden="true"></i>
                    <div><button id="play-again">Play Again</button></div>`;

let HTMLCard = ` <li class="%dataStatus%">
                    <i class="fa %data%"></i>
                 </li>`;

let HTMLClock = `<div>
                    <span class="clock">Time: <span id="time"></span></span>
                </div>`;
