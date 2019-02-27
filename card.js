

class Card {
    constructor(suit,value,img,faceValue){
        this.suit      = suit;
        this.value     = value;
        this.img       = img;
        this.faceValue = faceValue;
    }
        get cardInfo() {
            return `${this.faceValue} of ${this.suit}`
    }

}