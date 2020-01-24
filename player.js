export default class Player {
    constructor () {
    this.playerPile=[];
    this.playerSpare=[];
    }
    drawCard (){
    return this.playerPile.pop();
            
    }
    init(deck){
        for(let i = 0 ; i < 26 ; i++){
            this.playerPile.push(deck.dealCards());
        }
    }
    war(){
        for(let i = 0 ; i < 3 ; i++){
            this.playerSpare.push(this.drawCard());
        }
        return this.drawCard();
    }

}