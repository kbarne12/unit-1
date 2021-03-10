//Constances--------------------------------------------------------------------
const cardVal = {
    "dK": 10, "dQ": 10, "dJ": 10,"d10": 10,"d09": 9,"d08": 8,"d07": 7,"d06": 6,"d05": 5,"d04": 4,"d03": 3,"d02": 2,"hA": 0,"hQ": 10,"hK": 10,"hJ": 10,"h10": 10,"h09": 9,"h08": 8,"h07": 7,"h06": 6,"h05": 5,"h04": 4,"h03": 3,"h02": 2,"cA": 0,"cQ": 10,"cK": 10,"cJ": 10,"c10": 10,"c09": 9,"c08": 8,"c07": 7,"c06": 6,"c05": 5,"c04": 4,"c03": 3,"c02": 2,"sA": 0,"sQ": 10,"sK": 10,"sJ": 10,"s10": 10,"s09": 9,"s08": 8,"s07": 7,"s06": 6,"s05": 5,"s04": 4,"s03": 3,"s02": 2
 
 }
 const state = {
    deck: ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"],
    isFirstHand: true,
    dealerHand: [],
    playerHand: [],
    stay: false,
    bust: false,
    hitCard: [],
    drawnCard: []
 }
//variables-----------------------------------------------------------------------
let currentDeck = state.deck;
/*------------------------ Cached Element References ------------------------*/
    let dealBtn = document.getElementById("btn")
// let stayBtn = document.getElementById('stay')
// let hitBtn = document.getElementById('hit')
// let playerHandEl = document.getElementById('playerHand')
// let playerHandEl2 = document.getElementById('playerHand2')
// let playerHitEl = document.getElementById('playerHit')
// let playerHitEl2 = document.getElementById('playerHit2')
// let playerHitEl3 = document.getElementById('playerHit3')
// let dealerHandEl = document.getElementById('dealerHand')
// let dealerHandEl2 = document.getElementById('dealerHand2')






/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
// hitBtn.addEventListener('click', hitClick)
// stayBtn.addEventListener('click', stayFunc)



/*-------------------------------- Functions --------------------------------*/
function dealCards() {
    if(state.isFirstHand){
        shuffleArray(currentDeck);
        state.isFirstHand = false;
    }console.log(currentDeck)
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function dealToPlayer() {
    for (let i=0; i<2; i++) {
        drawnCard = currentDeck.pop();
        state.playerHand.push(drawnCard);
    }
}





//reset button
//turn
// isWinner