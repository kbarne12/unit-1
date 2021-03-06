/*-------------------------------- Constants --------------------------------*/






/*-------------------------------- Variables --------------------------------*/
let playerHand = []
let dealerHand = []
let deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]




/*------------------------ Cached Element References ------------------------*/
let dealBtn = document.getElementById('btn')
let playerHandEl = document.getElementById('playerHand')
let dealerHandEl = document.getElementById('dealerHand')
let stayBtn = document.getElementById('stay')
let hitBtn = document.getElementById('hit')





/*----------------------------- Event Listeners -----------------------------*/
dealBtn.addEventListener('click', dealClick)





/*-------------------------------- Functions --------------------------------*/
function dealClick(){
    
    // pull 2 random cards to a variable
    // splice the cards out of deck
    // add card to player deck
    // call render function
}
function render(pickedCards){
    //remove outline
    //add card css selector to player hand

}