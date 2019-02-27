class Deck {
    constructor() {
        this.deck = [];
        this.drawn = [];
        this.cardsRemaining = 52;
    }
    createDeck(num=1) {
        let card;
        for (let i = 0 ;i<num;i++){
            for (let i = 0; i < suit.length; i++) {
                for (let j = 2; j < 15; j++) {
                    if (j > 10) {
                        card = new Card(suit[i],j,suitImg[i][j-2],face[j-11]);
                        this.deck.push((card));
                    } else {
                        card = new Card(suit[i],j,suitImg[i][j-2],j);
                        this.deck.push((card));
                    }
                }
            }
        }
    }
    shuffleDeck(){
        var m = this.deck.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
  
    return this.deck;
    }
    dealCards(num,playerName){
        let ranNum = Math.floor(Math.random()*this.cardsRemaining-1);
            let dealtCards = [];
            for(let j = 0 ; j<num;j++){
                let dealtCard = this.deck.pop();
                dealtCards.push(dealtCard);
                this.cardsRemaining--
            }
            playerName.playerPile = dealtCards;
        }
    }

