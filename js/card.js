let Card = function (figure, status) {
    this.figure = figure;
    this.status = status;
    this.html = HTMLCard.replace('%data%',figure).replace( '%dataStatus%', this.status);
};

Card.prototype.mountCard = function(status){
    const newHtml =  this.html.replace(this.status, status);
    this.status = status;
    return newHtml;
};

