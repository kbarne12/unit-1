//Constances--------------------------------------------------------------------
const state = {
    deck: ["dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02", "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02", "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02", "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02", "dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"],
    isFirstHand: true,
    dealerHand: [],
    dealerHand2: [],
    playerHand: [],
    dealerHandNumVal: [],
    playerHandNumVal: [],
    hitCard: [],
    drawnCard: [],
    playerCount: 0,
    dealerCount: 0,
    bust: false,
    draw: false
}
//variables-----------------------------------------------------------------------
let currentDeck = state.deck;
let playerTotal = 0;
let dealerTotal = 0;
let dealerDrawnCard = []
/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')
let playerHandEl = document.getElementById('playerHand')
let playerHandEl2 = document.getElementById('playerHand2')
let dealerHandEl = document.getElementById('dealerHand')
let dealerHandEl2 = document.getElementById('dealerHand2')
let dealerHandEl3 = document.getElementById('dealerHand3')
let dealerHandEl4 = document.getElementById('dealerHand4')
let playerMessage = document.getElementById('playerMessage')
const playerCardSpaces = {
    1: (() => document.getElementById('playerHand'))(),
    2: (() => document.getElementById('playerHand2'))(),
    3: (() => document.getElementById('playerHit'))(),
    4: (() => document.getElementById('playerHit2'))(),
    5: (() => document.getElementById('playerHit3'))(),
}
/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', hitFunction)
stayBtn.addEventListener('click', stayFunction)
/*-------------------------------- Functions --------------------------------*/
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function shuffleCards() {
    if (state.isFirstHand = true) {
        shuffleArray(currentDeck);
        state.isFirstHand = false;
    }
    console.log('current Deck', currentDeck)
}
function dealToPlayer() {
    for (let i = 0; i < 2; i++) {
        drawnCard = currentDeck.pop();
        state.playerHand.push(drawnCard);
        playerHandEl.classList.add('card', state.playerHand[0])
        playerHandEl2.classList.add('card', state.playerHand[1])
        state.isFirstHand = false
    }
    for (let i = 0; i < state.playerHand.length; i++) {
        playerTotal += cardLookup(state.playerHand[i])
    }
    console.log(playerTotal)
}
function dealerCheck(array) {
    for (let i = 0; i < array.length; i++) {
        dealerTotal += cardLookup(array[i])
    }
}
function dealToDealer() {
    for (let i = 0; i < 2; i++) {
        drawnCard = currentDeck.pop();
        state.dealerHand.push(drawnCard);
        dealerHandEl.classList.add('card', state.dealerHand[0])
        dealerHandEl2.classList.add('card', 'back-blue', state.dealerHand[1])
    }
    console.log('dealer hand', state.dealerHand)
}
function dealCards() {
    shuffleCards()
    dealToPlayer()
    dealToDealer()
    console.log('PLAYER TOTAL', playerTotal)
}
function hitFunction() {
    drawnCard = currentDeck.pop()
    state.playerHand.push(drawnCard)
    console.log('LENGTH OF PLAYER HAND', state.playerHand.length)
    let indexTracker = state.playerHand.length
    playerCardSpaces[indexTracker].classList.add('card', state.playerHand[indexTracker - 1])
    playerTotal += cardLookup(drawnCard)
    console.log('PLAYER TOTAL', playerTotal)
}
function stayFunction() {
    dealerHandEl2.classList.remove('back-blue')
    dealerCheck(state.dealerHand)
    if (dealerTotal < 16) {
        draw()
    }
    busted()
    isWinner()
    console.log(dealerTotal)
}
function cardLookup(card) {
    console.log(card)
    let cardValue
    if (card === "dA" || card === "hA" || card === "cA" || card === "sA") {
        cardValue = 11;
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10") {
        cardValue = 10;
    }
    if (card === "d09" || card === "h09" || card === "c09" || card === "s09") {
        cardValue = 9;
    }
    if (card === "d08" || card === "h08" || card === "c08" || card === "s08") {
        cardValue = 8;
    }
    if (card === "d07" || card === "h07" || card === "c07" || card === "s07") {
        cardValue = 7;
    }
    if (card === "d06" || card === "h06" || card === "c06" || card === "s06") {
        cardValue = 6;
    }
    if (card === "d05" || card === "h05" || card === "c05" || card === "s05") {
        cardValue = 5;
    }
    if (card === "d04" || card === "h04" || card === "c04" || card === "s04") {
        cardValue = 4;
    }
    if (card === "d03" || card === "h03" || card === "c03" || card === "s03") {
        cardValue = 3;
    }
    if (card === "d02" || card === "h02" || card === "c02" || card === "s02") {
        cardValue = 2;
    }
    console.log('CARD VALUE CHECKER', cardValue)
    return cardValue
}
function draw() {
    dealerDrawnCard = currentDeck.pop()
    state.dealerHand.push(dealerDrawnCard)
    dealerHandEl3.classList.add('card', state.dealerHand[2])
    dealerTotal += cardLookup(dealerDrawnCard)
    setTimeout(() => draw2(), 2000)
    console.log("draw", dealerTotal)
}
function draw2() {
    if(state.dealerHand.length === 3 && dealerTotal <= 16){
        dealerDrawnCard2 = currentDeck.pop()
        state.dealerHand.push(dealerDrawnCard2)
        dealerHandEl4.classList.add('card', state.dealerHand[3]) 
        dealerTotal += cardLookup(dealerDrawnCard2)
        console.log(state.dealerHand)  
    } 
}

function isWinner() {
    if (playerTotal >= 21 && dealerTotal >= 21) {
        winner()
    }
}
function winner() {
    if (playerTotal > dealerTotal) {
        playerMessage.innerText = "Player Wins!"
    }
    if (playerTotal < dealerTotal) {
        playerMessage.innerText = "Dealer Wins!"
    }
    if (playerTotal === dealerTotal) {
        playerMessage.innerText = "It's a push!"
    }
}
function busted() {
    if (playerTotal > 21) {
        playerMessage.innerText = "Player Busted!!!  Dealer Wins!"
    }
    if (dealerTotal > 21) {
        playerMessage.innerText = "Dealer Busted!!! Player Wins!"
    }
}