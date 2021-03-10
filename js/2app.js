const state = {
    deck: ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"],
    currentDeck: [],
    isFirstHand: true,
    dealerHand: [],
    playerHand: [],
    stay: false,
    bust: false,
    hitCard: [],
    drawnCard: []
}
/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let playerHandEl = document.getElementById("playerHand")

let dealerHandEl = document.getElementById('dealerHand')
let dealerHandEl2 = document.getElementById('dealerHand2')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')
let numValue = {
'dA': 10
}
/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', hitToPlayer)
stayBtn.addEventListener('click', stayFunc)

/*-------------------------------- Functions --------------------------------*/
function dealCards() {
    state.currentDeck = state.deck;
    shuffleCards();
    dealToPlayer();
    dealToDealer();
    playerHandEl.classList.add('card', dealToPlayer.drawnCard)
}
function shuffleCards() {
    if (state.isFirstHand) {
        shuffleArray(state.currentDeck);
        state.isFirstHand = false;
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function dealToPlayer() {
    for (let i=0; i<2; i++) {
        let drawnCard = state.currentDeck.pop();
        state.playerHand.push(drawnCard);
    }
}
function dealToDealer() {
    for (let i=0; i<2; i++) {
        let drawnCard = state.currentDeck.pop();
        state.dealerHand.push(drawnCard);
    }
}
function hitToPlayer() {
hitCard = Math.floor(Math.random()*state.currentDeck).pop()
playerHand.push(hitCard)
}
console.log(hitCard)