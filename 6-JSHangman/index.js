// variables
const category = document.getElementById('category');
const stickman = document.getElementById('stickman');
const clue = document.getElementById('clue');
const word = document.getElementById('word');
const btnContainer = document.getElementById('buttons');
const hint = document.getElementById('hint');
const play = document.getElementById('play');

// Elements
let btn = document.createElement("button");

// Have all the buttons display
let alphabet = [
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function hangmanGame() {
 function loopAlphabetBtns() {
  for (let i = 0; i < alphabet.length; i++) {
   alphabet[i]
  }
 }
// Loops through all the items in alphabet and has them displayed to the browser.
 function displayAlphabet() {
  window.onload = () => {
   btnContainer.innerHTML = alphabet.map((i) => `<button type='button' class='alphabetBtn'>${i}</button>`).join('');
  };
 }
 displayAlphabet()



}
hangmanGame()
