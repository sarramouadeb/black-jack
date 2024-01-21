let player = {
name: "player",
chips: 200 
}
let hasblackjack= false
let sumc=0
let isalive= false;
let sum=document.getElementById("sum")
let card=document.getElementById("cards")
let cards=[]
let message=document.getElementById("message")
let player1=document.getElementById("player")
let message1=""
player1.textContent = player.name +": $" + player.chips


function getrandomcard(){
    //return a random number between 1 and 13
    let randomnumber=Math.floor(Math.random()*13)+1
    if (randomnumber>10){
        return 10
    } else if(randomnumber===1){
        return 11
    } else{
        return randomnumber
    }

}



function start(){
    isalive=true;
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()

    cards=[firstcard,secondcard]

    sumc= firstcard+secondcard

rendergame();
}

function rendergame(){
    card.textContent ="cards: "
    for(let i=0; i<cards.length;i++){
        card.textContent+=cards[i] + " "
    }

sum.textContent="sum: "+ sumc

if (sumc<=20){
    message1="do you want a new card?"
} else if(sumc===21){
    message1="you've got Blackjack!"
    hasblackjack=true;
}else{
message1="you're out of game!"
isalive=false;
}
message.textContent=message1;
}


function newcard(){
    if(isalive===true && hasblackjack === false){
            let card = getrandomcard();
            sumc+=card;
            cards.push(card)
            rendergame();
    }
}