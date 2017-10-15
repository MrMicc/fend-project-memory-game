let Clock = function () {
    mountClock();

    this.momentTime = new Date().getTime();

};


Clock.prototype.getTimer = function () {
    let rightNowTime = new Date().getTime();
    let elapsed = rightNowTime - this.momentTime;
    let minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    if(seconds < 10) {
        seconds = '0'+seconds;//adding a left zero if it has less then 10 seconds
    }

    console.log(minutes+':'+seconds);
    return minutes+':'+seconds;
};

Clock.prototype.setTimer = function () {
    $('#time').text(this.getTimer());
};



function mountClock() {
    $('[class="moves"]').after(HTMLClock);

}