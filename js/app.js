//Constances--------------------------------------------------------------------
 const state = {
     
    deck: ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"],
    isFirstHand: true,
    dealerHand:[],
    playerHand: [],
    dealerHandNumVal: [],
    playerHandNumVal: [],
    hitCard: [],
    drawnCard: [],
    playerCount: 0,
    dealerCount: 0,
    bust: false

 }
//variables-----------------------------------------------------------------------
let currentDeck = state.deck;
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
let playerMessage = document.getElementById('playerMessage')






/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealCards)
hitBtn.addEventListener('click', ()=>{
    if (state.playerHand.length < 5) {
        drawnCard = currentDeck.pop();
        state.playerHand.push(drawnCard);
        console.log('playerHand',state.playerHand);
        check(state.playerHand)
        console.log(playerTotal)
        
    
    }
    if (state.playerHand.length === 3)
        busted()
        playerHitEl.classList.add('card', state.playerHand[2])
    if (state.playerHand.length === 4)
    
        playerHitEl2.classList.add('card', state.playerHand[3])
    if (state.playerHand.length === 5)
    
        playerHitEl3.classList.add('card', state.playerHand[4])
})

 

/*-------------------------------- Functions --------------------------------*/
function reset(){
    if(state.bust = true){
        state.isFirstHand = true,
        state.dealerHand =[],
        state.playerHand = [],
        state.dealerHandNumVal = [],
        state.playerHandNumVal = [],
        state.hitCard = [],
        state.drawnCard = [],
        state.playerCount = 0,
        state.dealerCount = 0,
        state.bust = false
        playerHandEl = document.getElementById('playerHand')
        playerHandEl2 = document.getElementById('playerHand2')
        playerHitEl = document.getElementById('playerHit')
        playerHitEl2 = document.getElementById('playerHit2')
        playerHitEl3 = document.getElementById('playerHit3')
        dealerHandEl = document.getElementById('dealerHand')
        dealerHandEl2 = document.getElementById('dealerHand2')
        playerMessage = document.getElementById('playerMessage')
        drawnCard 
        playerHandEl.classList.remove('card')
        playerHandEl2.classList.remove('card')
        playerHitEl.classList.remove('card', 'outline')
        playerHitEl2.classList.remove('card','outline')
        playerHitEl3.classList.remove('card','outline')
    }


}
function busted(){
    if(playerTotal > 21){
        playerMessage.innerText = "Busted!"
        reset()
    
    }
}

function check(array){ 
    console.log(array)
    
     for(let i=0; i < array.length; i++){
        cardLookup(array[i])
        
     }
     for(let i=0; i<state.playerHandNumVal.length; i++){
        playerTotal += state.playerHandNumVal[i]
    }
      
      //compare playertotal to dealertotal
   

} 

function cardLookup(card) {
    console.log(card)
    let cardValue;
    if (card === "dA"  || card === "hA"  || card ==="cA"  || card === "sA" ){
        cardValue = 11;
        console.log(cardValue)
    }
    
        console.log(cardValue)
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
    console.log(state.playerHandNumVal.length)
       
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
