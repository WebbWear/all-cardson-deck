const addMessage = (message) => {
  const newLi = document.createElement('li')
  newLi.textContent = message
  document.querySelector('.results').appendChild(newLi)
}
const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const deck = []

// create deck
const fullDeck = () => {
for (j = 0; j < suits.length; j++) {

  for (i = 0; i < cards.length; i++) {
      deck.push(cards[i] + ' of ' + suits[j])
    }
  }
}

// shuffle deck
let shufffledCard

const shuffleDeck = () => {
  // random shuffle through cards and suits array
  let a = 0
  let b = 0
  let temp = null

  for (a = 0; a < cards.length; a++ ) {
    b = Math.floor(Math.random() * (a + 1))
    temp = deck[a]
    deck[a] = deck[b]
    deck[b] = temp
    console.log(cards,suits)
  }
}

const clickShuffle  = () => {
  console.log(cards.pop());
}

const main = () => {
  document.querySelector('h1').textContent += '?'
  document.querySelector('button').addEventListener('click', clickShuffle)
}

document.addEventListener('DOMContentLoaded', main)

