// GLOBAL VARIABLES FOR GAME
const newDeck = new Deck();
newDeck.createDeck();
newDeck.shuffleDeck();
newDeck.shuffleDeck();
newDeck.shuffleDeck();
let human = new Players();
let computer = new Players();
newDeck.dealCards(26, human);
newDeck.dealCards(26, computer);
console.log(human.playerPile);
console.log(computer.playerPile);
let c1 = human.playerCard;
let c2 = computer.playerCard;
let compRamaining;
let humanRemaining;

let warCounter = 0;

// GLOBAL FUNCTIONS FOR GAME
function newHand() {
let end = false;
    if (computer.playerPile.length === 0) {
        document.getElementById("warIndicator").innerHTML ="You won The Game of War!";
        end = true;
    } else if (human.playerPile.length === 0) {
        document.getElementById("warIndicator").innerHTML ="You Lost The Game Of War! Try Again Soon";
        end = true;
    } else{
    human.grabCard();
    document.getElementById("cardImage").innerHTML = human.playerCard[0].img;
    computer.grabCard();
    document.getElementById("computerCardImage").innerHTML = computer.playerCard[0].img;
    DecideWinnerOfRound(c1[0].value, c2[0].value);
    end ? console.log("Game Over") : document.getElementById("computerCardsLeft").innerHTML = computer.playerPile.length;
    end ? console.log("Game Over") : document.getElementById("humanCardsLeft").innerHTML =human.playerPile.length ;
    }
}

const DecideWinnerOfRound = (PlayersCard, ComputersCard) => {
    if (PlayersCard === ComputersCard) {
        document.getElementById("outcome").innerHTML ="You are going to WAR!!!";
        war(c1, c2)
    } else if (PlayersCard > ComputersCard) {
        document.getElementById("outcome").innerHTML ="You Win!!";
        win(c1, c2);
    } else {
        document.getElementById("outcome").innerHTML ="You Lose!";
        lose(c1, c2);
    }
}

let win = (x, y) => {
    console.log(x[0].value, y[0].value);
    let temp1 = x.pop();
    let temp2 = y.pop();
    human.playerPile.unshift(temp1, temp2)
    console.log(human.playerPile)
    console.log(computer.playerPile)
};

let lose = (x, y) => {
    console.log(x[0].value, y[0].value);
    let temp1 = x.pop();
    let temp2 = y.pop();
    computer.playerPile.unshift(temp1, temp2)
    console.log(human.playerPile)
    console.log(computer.playerPile)
};
let war = () => {
    human.grabCard();
    computer.grabCard();
    warCounter++
    console.log(c1[warCounter], c2[warCounter], warCounter)
    c1[warCounter].value > c2[warCounter].value ? warWin(warCounter) : c1[warCounter].value === c2[warCounter].value ? war() : warLose(warCounter);
}
let warWin = (c) => {
    for (let i = 0; i < c; i++) {
        for (let j = 0; j < 3; j++) {
            if (computer.playerPile.length === 0) {
                gameOver()
            } else {
                let card1 = computer.playerPile.pop();
                console.log(human.playerPile.unshift(card1));
            }
        }
        let card4 = computer.playerCard.pop();
        console.log(human.playerPile.unshift(card4));
        let card5 = computer.playerCard.pop();
        console.log(human.playerPile.unshift(card5));
        let card6 = human.playerCard.pop();
        console.log(human.playerPile.unshift(card6));
        let card7 = human.playerCard.pop();
        console.log(human.playerPile.unshift(card7));
    }
    console.log(human.playerPile)
    console.log(computer.playerPile)
    console.log("You won the war!")
    warCounter = 0;
};
let warLose = (c) => {
    for (let i = 0; i < c; i++) {
        for (let j = 0; j < 3; j++) {
            if (human.playerPile.length === 0) {
                gameOver()
            } else {
                let card1 = human.playerPile.pop();
                console.log(computer.playerPile.unshift(card1));
            }
        }
        let card4 = human.playerCard.pop();
        console.log(computer.playerPile.unshift(card4));
        let card5 = human.playerCard.pop();
        console.log(computer.playerPile.unshift(card5));
        let card6 = computer.playerCard.pop();
        console.log(computer.playerPile.unshift(card6));
        let card7 = computer.playerCard.pop();
        console.log(computer.playerPile.unshift(card7));
    }
    console.log(human.playerPile)
    console.log(computer.playerPile)
    console.log("You lost the war!")
    warCounter = 0;
}


   
