let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let cards = []  //array - ordered list of items

let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""

let player = {    //object
    name: "You have",
    chips: 100
}


function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if (player.chips != 0 && player.chips > 0) {
        renderGame()
    } else {
        message = "You're out of the game!'"
        messageEl.textContent = message
        alert("You are out of the game!")
    }
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false
        player.chips += 20
    } else if (sum > 21){
        message = "You Lost this round! Try again."
        isAlive = false
        player.chips -= 20
    } else if (player.chips === 0){
        message = "You're out of the game!'"
    }
    for (i=0;i<cards.length;i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    playerEl.textContent = player.name + ": $" + player.chips
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 10)
    if (randomNumber === 1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}