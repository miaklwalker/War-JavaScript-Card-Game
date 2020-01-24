import Deck from "./deck.js";
import Player from './player.js';
export default class Game {
    constructor(){
        this.deck = new Deck();
        this.player = new Player();
        this.computer = new Player();
    }
    init(){
        this.deck.createDeck();
        this.deck.shuffleDeck();
        this.deck.shuffleDeck();
        this.deck.shuffleDeck();
        this.player.init(this.deck);
        this.computer.init(this.deck);
    };
    round(){
        const {player,computer} = this;
        return [player.drawCard(),computer.drawCard()];
    };
    war(){
        const {player,computer} = this;
        return [player.war(),computer.war()]
    };
}