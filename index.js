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

let player = {
    name: "Reshad",
    chips: 145
}


playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
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
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    for (i=0;i<cards.length;i++) {
        cardsEl.textContent += cards[i] + ", "
    }
    if (isAlive === false) {
        cardsEl.textContent += "."
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }else{

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