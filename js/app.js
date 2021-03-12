//Constances--------------------------------------------------------------------
const cardVal = {
    "dK": 10, "dQ": 10, "dJ": 10,"d10": 10,"d09": 9,"d08": 8,"d07": 7,"d06": 6,"d05": 5,"d04": 4,"d03": 3,"d02": 2,"hA": 0,"hQ": 10,"hK": 10,"hJ": 10,"h10": 10,"h09": 9,"h08": 8,"h07": 7,"h06": 6,"h05": 5,"h04": 4,"h03": 3,"h02": 2,"cA": 0,"cQ": 10,"cK": 10,"cJ": 10,"c10": 10,"c09": 9,"c08": 8,"c07": 7,"c06": 6,"c05": 5,"c04": 4,"c03": 3,"c02": 2,"sA": 0,"sQ": 10,"sK": 10,"sJ": 10,"s10": 10,"s09": 9,"s08": 8,"s07": 7,"s06": 6,"s05": 5,"s04": 4,"s03": 3,"s02": 2
 
 }
 const state = {
    deck: ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"],
    isFirstHand: true,
    dealerHand: [],
    playerHand: [],
    dealerHandNumVal: [],
    playerHandNumVal: [],
    stay: false,
    bust: false,
    hitCard: [],
    drawnCard: [],
    playerCount: 0,
    dealerCount: 0

 }
//variables-----------------------------------------------------------------------
let currentDeck = state.deck;
let playerPoints;
let playerTotal = 0;



/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')
let playerHandEl = document.getElementById('playerHand')
let playerHandEl2 = document.getElementById('playerHand2')
let playerHitEl = document.getElementById('playerHit')
let playerHitEl2 = document.getElementById('playerHit2')
let playerHitEl3 = document.getElementById('playerHit3')
let dealerHandEl = document.getElementById('dealerHand')
let dealerHandEl2 = document.getElementById('dealerHand2')






/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', ()=>{
    if (state.playerHand.length < 5) {
        drawnCard = currentDeck.pop();
        state.playerHand.push(drawnCard);
        //state.playerHandNumVal.push(drawnCard);
        console.log('playerHand',state.playerHand);
        check(state.playerHand)
    }

    if (state.playerHand.length === 3)
        playerHitEl.classList.add('card', state.playerHand[2])
    if (state.playerHand.length === 4)
        playerHitEl2.classList.add('card', state.playerHand[3])
    if (state.playerHand.length === 5)
        playerHitEl3.classList.add('card', state.playerHand[4])
})

// stayBtn.addEventListener('click', stayFunc)



/*-------------------------------- Functions --------------------------------*/
function check(array){ 
    console.log(array)
    
     for(let i=0; i < array.length; i++){
        cardLookup(array[i])
        
     } 
     
// Now we are getting the array of num values
} console.log(state.playerHandNumVal)

function cardLookup(card) {
    console.log(card)
    let cardValue;
    if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
        cardValue = 11;
        console.log(cardValue)
    }
    if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
        card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
        card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
        card === "d10" || card === "h10" || card === "c10" || card === "s10"){
        cardValue = 10;
        console.log(cardValue)
    }
    if (card === "d09" || card === "h09" || card ==="c09" || card === "s09"){
        cardValue = 9;
        console.log(cardValue)
    }
    if (card === "d08" || card === "h08" || card ==="c08" || card === "s08"){
        cardValue = 8;
        console.log(cardValue)
    }
    if (card === "d07" || card === "h07" || card ==="c07" || card === "s07"){
        cardValue = 7;
        console.log(cardValue)
    }
    if (card === "d06" || card === "h06" || card ==="c06" || card === "s06"){
        cardValue = 6;
        console.log(cardValue)
    }
    if (card === "d05" || card === "h05" || card ==="c05" || card === "s05"){
        cardValue = 5;
        console.log(cardValue)
    }
    if (card === "d04" || card === "h04" || card ==="c04" || card === "s04"){
        cardValue = 4;
        console.log(cardValue)
    }
    if (card === "d03" || card === "h03" || card ==="c03" || card === "s03"){
        cardValue = 3;
        console.log(cardValue)
    }
    if (card === "d02" || card === "h02" || card ==="c02" || card === "s02"){
        cardValue = 2; 
        console.log(cardValue)
    }   
    state.playerHandNumVal.push(cardValue) 
    playerTotal = state.playerHandNumVal[0] + state.playerHandNumVal[1] + state.playerHandNumVal[2];
    console.log('player total', playerTotal)
   
    //return cardValue;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleCards() {
    if(state.isFirstHand = true){
        shuffleArray(currentDeck);
        state.isFirstHand = false;
    }console.log('current Deck',currentDeck)
}


function dealToPlayer() {
    if(state.playerHand.length === 0)
    for (let i=0; i<2; i++) {
        drawnCard = currentDeck.pop();
        state.playerHand.push(drawnCard);
        //state.playerHandNumVal.push(drawnCard);
        playerHandEl.classList.add('card', state.playerHand[0])
        playerHandEl2.classList.add('card', state.playerHand[1])
        state.isFirstHand = false
    } console.log('player hand', state.playerHand)
    
 }
//  how to stop button?
function dealToDealer() {
    if(state.dealerHand.length === 0)
    for (let i=0; i<2; i++) {
        drawnCard = currentDeck.pop();
        state.dealerHand.push(drawnCard);
        dealerHandEl.classList.add('card', state.dealerHand[0])
        dealerHandEl2.classList.add('card','back-blue', state.dealerHand[1])
    }console.log('dealer hand',state.dealerHand)
}
function dealCards(){
    shuffleCards()
    dealToPlayer()
    dealToDealer()
    
} 
console.log('playerHandNumVal', state.playerHandNumVal)

//reset button
//turn

// isWinner