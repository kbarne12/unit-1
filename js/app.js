/*-------------------------------- Constants --------------------------------*/






/*-------------------------------- Variables --------------------------------*/
let playerHand = []
let playerHit = []
let dealerHand = []
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]




/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let playerHandEl = document.getElementById('playerHand')
let playerHandEl2 = document.getElementById('playerHand2')
let playerHitEl = document.getElementById('playerHit')
let playerHitEl2 = document.getElementById('playerHit2')
let dealerHandEl = document.getElementById('dealerHand')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')





/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealClick)
hitBtn.addEventListener('click', hitClick)




/*-------------------------------- Functions --------------------------------*/
function dealClick(){
    let pickedCards
    let pickedCardR
    let randIdx = Math.floor(Math.random()*deck.length)
    let randIdx2 = Math.floor(Math.random()*deck.length)
    pickedCards = deck.splice(randIdx, 1)
    pickedCardR = deck.splice(randIdx2, 1)
    playerHand.push(pickedCards, pickedCardR)
    console.log('playerHand', playerHand)
    
    render(pickedCards, pickedCardR)
}

function render(pickedCards, pickedCardR){
    if(playerHand.length === 2){
        playerHandEl.classList.remove('outline')
        playerHandEl2.classList.remove('outline')
    }
    playerHandEl.classList.add(pickedCards)
    playerHandEl2.classList.add(pickedCardR)
    
       
} 
function hitClick(){
    let hitCard
    let randIdxHit = Math.floor(Math.random()*deck.length)
    hitCard = deck.splice(randIdxHit, 2)
    playerHit.push(hitCard)
    console.log('playerHit', playerHit)
    addHit(hitCard)
}
function addHit(hitCard){
    if(playerHit.length === 1){
        playerHitEl.classList.remove('outline')
        playerHitEl.classList.add(hitCard[0])
    }
    if(playerHit.length === 2){
        playerHitEl2.classList.remove('outline')
        playerHitEl2.classList.add(hitCard[1])
    }
     
}
//reset button