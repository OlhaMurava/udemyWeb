// Генерую випадкове число для гравця 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png"; // "dice1.png" до "dice6.png"


var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randomDiceImage1);

// Генерую випадкове число для гравця 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; 

var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", randomDiceImage2);

// Змінюю текст
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "It's a Draw!";
}
