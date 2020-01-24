import Game from "./game.js";


// Caching dom 
const player = document.querySelectorAll('.player');
const computer = document.querySelectorAll('.opponent');
const status = document.querySelector('.status');
const pScore = player[0];
const pCard = player[1];
const cScore = computer[0];
const cCard = computer[1];
const button = document.getElementById('button')

let game = new Game();
game.init()


function warWinner(winner,loser,round){
    if(round){
    let cards = [...winner.playerSpare,...loser.playerSpare,...round].flat();
    winner.playerPile.unshift(...cards)
    winner.playerSpare.length = 0 ;
    loser.playerSpare.length = 0 ;
    cards.length = 0 ;
    }
}



let outcome
function decideWinner([player1, player2],round=false) {
    const {
        player,
        computer
    } = game
    
    if (player1.value === player2.value) {
        if(outcome = 'war'){
            return outcome = 'War Leads To More War'
        }
        outcome = 'It looks like its WAR TIME'
        decideWinner(game.war(),[player1,player2]);
    }

    if (player1.value < player2.value) {
        outcome = 'Computer Won! : {( '
        warWinner(computer,player,round);
        computer.playerPile.unshift(player1);
        computer.playerPile.unshift(player2);
    };

    if (player1.value > player2.value) {
        outcome = 'Player Won! : {D '
        warWinner(player,computer,round);
        player.playerPile.unshift(player1);
        player.playerPile.unshift(player2);
    }
    return outcome;
}


button.addEventListener('click', () => {
    let round = game.round();
    let [player1, player2] = round
    pCard.innerText = player1.face;
    pCard.className = `player Card ${player1.suit}`;
    cCard.innerText = player2.face;
    cCard.className = `opponent Card ${player2.suit}`;
    status.innerText = decideWinner(round);
    pScore.innerText = game.player.playerPile.length;
    cScore.innerText = game.computer.playerPile.length;
})