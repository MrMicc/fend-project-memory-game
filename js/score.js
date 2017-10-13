
let Score = function (){
    this.starsCount = 3;
    this._moves = 0;

};

Score.prototype.getMoves = function () {
    $('span').remove('.moves');
    $('#score-panel').append(HTMLMoves.replace('%data%', this._moves));
};

Score.prototype.getStars = function () {

    const star = HTMLStar.replace('%data%', 'fa fa-star');
    for(let i = 0; i< this.starsCount; i++){
        $('.stars').append(star);
    }
};

Score.prototype.addMove = function () {
  this._moves +=1;
  this.getMoves();
};

Score.prototype.delMove = function () {
    this.starsCount -= 1;
    this.getStars();
};