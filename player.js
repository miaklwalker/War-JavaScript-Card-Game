class Players {
    constructor () {
    this.playerPile=[];
    this.playerSpare=[];
    this.playerCard=[];
    }
    grabCard (){
    let drawnCard = this.playerPile.pop();
            this.playerCard.push(drawnCard);
    }
}