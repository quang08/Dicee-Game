let randomNum1 = Math.floor((Math.random() * 6) + 1); 
//random num 1-> 6

let randomImg1 = "images/" + "dice" + randomNum1 + ".png" 
//everytime this is called it will give a random source "images/dice1.png" -> images/dice6.png"

let randomDice1 = document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
//change the attribute using DOM, everytime refresh, a random dice img

//same thing
let randomNum2 = Math.floor((Math.random()*6)+1);
let randomImg2 = "images/" + "dice" + randomNum2 + ".png" 
let randomDice2 = document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

//announcing the winner
if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🚩 !!!";
}else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩 !!!";
}else{
    document.querySelector("h1").innerHTML = "Draw !!!"
}