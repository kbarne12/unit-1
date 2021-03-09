/*-------------------------------- Constants --------------------------------*/






/*
-------------------------------- Variables --------------------------------*/
let dealer;
let player;
let playerHand = []
let playerHit = []
let dealerHand = []
let isWinner;
let calculate; 
let stay = false
let hitCard
let turn = false
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
let = "dA","dQ","dK","dJ","d10", "hA","hQ","hK","hJ","h10"
let pickedCards
let pickedCardR
let pickedCardD
let pickedCardD2
let randIdx = Math.floor(Math.random()*deck.length)
let randIdx2 = Math.floor(Math.random()*deck.length)
let randIdx3 = Math.floor(Math.random()*deck.length)
let randIdx4 = Math.floor(Math.random()*deck.length)
pickedCards = deck.splice(randIdx, 1)
pickedCardR = deck.splice(randIdx2, 1)
pickedCardD = deck.splice(randIdx3, 1)
pickedCardD2 = deck.splice(randIdx4, 1)
playerHand.push(pickedCards, pickedCardR)
dealerHand.push(pickedCardD, pickedCardD2)
player = pickedCards + pickedCardR 
    console.log('playerHand', playerHand)
    console.log('dealerHand', dealerHand)
    console.log(player)




/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let playerHandEl = document.getElementById('playerHand')
let playerHandEl2 = document.getElementById('playerHand2')
let playerHitEl = document.getElementById('playerHit')
let playerHitEl2 = document.getElementById('playerHit2')
let playerHitEl3 = document.getElementById('playerHit3')
let dealerHandEl = document.getElementById('dealerHand')
let dealerHandEl2 = document.getElementById('dealerHand2')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')





/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealClick)
hitBtn.addEventListener('click', hitClick)
stayBtn.addEventListener('click', stayFunc)



/*-------------------------------- Functions --------------------------------*/
function stayFunc(){
    turn = true

}
// function to total points


function dealClick(){
    
    render(pickedCards, pickedCardR, pickedCardD, pickedCardD2)
}

function render(pickedCards, pickedCardR, pickedCardD, pickedCardD2){
    if(playerHand.length === 2 && dealerHand.length === 2){
        
    }
    playerHandEl.classList.add(pickedCards)
    playerHandEl2.classList.add('card', pickedCardR)
    dealerHandEl.classList.add('card', pickedCardD)
    dealerHandEl2.classList.add('card', 'back-blue', pickedCardD2)
       
}    
function hitClick(){
    let randIdxHit = Math.floor(Math.random()*deck.length)
    hitCard = deck.splice(randIdxHit, 4)
    playerHit.push(hitCard)
    console.log('playerHit', playerHit)
    addHit(hitCard)
}
function addHit(hitCard){
    if(playerHit.length === 1 && playerHand.length === 2){
        playerHitEl.classList.remove('outline')
        
    }
    playerHitEl.classList.add(hitCard[0])
    if(playerHit.length === 2){
        playerHitEl2.classList.remove('outline')
        playerHitEl2.classList.add(hitCard[1])
    }
    if(playerHit.length === 3){
        playerHitEl3.classList.remove('outline')
        playerHitEl3.classList.add(hitCard[2])
     }
    }





//reset button
//turn
// isWinner