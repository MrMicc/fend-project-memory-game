
let Score = function (){
    this.starsCount = 3;
    this._moves = 0;
    this._wrongMoves = 0;

};

Score.prototype.getMoves = function () {
    $('span').remove('.moves');
    $('.stars').after(HTMLMoves.replace('%data%', this._moves));
};

Score.prototype.countMoves =function () {
  return this._moves;
};

Score.prototype.getStars = function () {

    const star = HTMLStar.replace('%data%', 'fa fa-star');
    for(let i = 0; i< this.starsCount; i++){
        $('.stars').append(star);
    }
};

Score.prototype.countStar = function () {
    return $('[class="fa fa-star"]').length;
};

Score.prototype.removeStar = function () {
    if((this._wrongMoves%3) === 0){
       $('[class="fa fa-star"]').first().attr('class', 'fa fa-star disabled');
    }
};

Score.prototype.isGameOver = function () {
    return this._wrongMoves >= 9;
};

Score.prototype.addWrongMoves = function () {
  this._wrongMoves +=1;
};

Score.prototype.addMove = function () {
  this._moves +=1;
  this.getMoves();
};

Score.prototype.delMove = function () {
    this.starsCount -= 1;
    this.getStars();
};

Score.prototype.isWin = function () {
    if($('[class="card match"]').length >=14){
        return true;
    }else {
        return false
    }
};