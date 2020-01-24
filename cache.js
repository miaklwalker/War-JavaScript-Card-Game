let hearts   =["🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾", "🂱"];
let spades   =["🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮", "🂡"];
let diamonds =["🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎", "🃁"];
let clubs    =["🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞", "🃑"];


let suit = ["hearts", "spades", "diamonds", "clubs"];

let face = ["Jack", "Queen", "King", "Ace"];

let deckCache = {
    suit,
    face,
    cards:{
        hearts,
        spades,
        diamonds,
        clubs,
    }
}
export default deckCache


 
  