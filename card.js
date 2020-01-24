

export default class Card {
    constructor({suit,face,value,faceValue}){
        this.suit = suit;
        this.face = face;
        this.value = value;
        this.faceValue = faceValue;
    }
    get name(){
        return `The ${this.faceValue} of ${this.suit}`
    }
}