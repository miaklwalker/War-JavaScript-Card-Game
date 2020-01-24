import deckCache from './cache.js';
import Card from './card.js';
let lowestValue = 2;
let highestValue = 15;
export default class Deck {
    constructor() {
        this.deck = [];
        this.drawn = [];
        this.cardsRemaining = 52;
    }
    createDeck() {
        let suit, face, value, faceValue
        for (let i = 0; i < 4; i++) {
            suit = deckCache.suit[i];
            for (let j = lowestValue; j < highestValue; j++) {
                value = j;
                faceValue = j <= 10 ? j : deckCache.face[j - 11];
                face = deckCache.cards[suit][value - lowestValue];
                let card = new Card({
                    suit,
                    value,
                    faceValue,
                    face
                });
                this.deck.push(card)
            }
        }

    }
    shuffleDeck() {
        let m = this.deck.length;
        let t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck;
    }
    dealCards() {
        let card = this.deck.pop();
        this.drawn.push(card);
        return card;
    }
}