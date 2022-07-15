// variables
const category = document.getElementById('category');
const stickman = document.getElementById('stickman');
const clue = document.getElementById('clue');
const word = document.getElementById('word');
let btnContainer = document.getElementById('buttons');
const hint = document.querySelector('.hint');
const playAgain = document.querySelector('.play');
let preWord = document.querySelector('.word');
let answer = document.querySelector('.answer');
// let alphabetBtn = document.querySelector(".alphabetBtn");


// Elements
let btn = document.createElement("button");

// Arrays
let alphabet = [
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let wordAndHint = {
 'one': {'word': 'apple', 'hint': 'Is a red fruit.'},
 'two': {'word': 'lime', 'hint': 'Is a green fruit.'},
 'three': {'word': 'orange', 'hint': 'Is a orange fruit.'},
 'four': {'word': 'grape', 'hint': 'Is a purple fruit.'},
 'five': {'word': 'banana', 'hint': 'Is a yellow fruit.'}
};

// The game
function hangmanGame() {
// Retrieves all value and property
// const props = Object.getOwnPropertyNames(wordAndHint);
// console.log(props); 

 // Retrives a random key and or value.
 function getRandomProperty(para) {
   const keys = Object.keys(para);
   return keys[Math.floor(Math.random() * keys.length)];
 }
 // lets you change that key or value to call it.
 function randomWord() {
  let randomWord = wordAndHint[getRandomProperty(wordAndHint)].word;
  return randomWord
 }
 // console.log(words[getRandomProperty(words)].hint);

// Loops through all the items in alphabet and has them displayed to the browser.
 function displayAlphabet() {
   btnContainer.innerHTML = alphabet.map((i) => `<button type='button' class='alphabetBtn'>${i}</button>`).join('');
 }
 displayAlphabet()

 // Make the word show each part of it as an underscore _
 function underscore() {
  let theWord = preWord.innerHTML;
  let answer = document.querySelector('.answer');
  [...theWord].forEach((c) => {
   answer.innerHTML += `<li>${c}</li>`;
   word.innerHTML += `<li>${c = '_'}</li>`;
  });
 }

 // Whenever a button is clicked locate and reveal those letters
 function btnLoopDisplay() {
  
let alphabetBtn = document.querySelectorAll(".alphabetBtn");

alphabetBtn.forEach((list) => { 
   list.addEventListener('click', () => {
    // HERE! - Make the letter clicked display to the console.
    console.log(`${'clicked'}`)
  })
 })

 }
btnLoopDisplay()


 // Play again button
 playAgain.addEventListener('click', () => {
  preWord.innerHTML = randomWord();
  preWord.style.display = 'none'
  clue.textContent = 'Clue: Click hint to reveal';
  answer.textContent = ''; 
  word.innerHTML = '';
  underscore()
 })

// Hint reveal button
 hint.addEventListener('click', () => {
  if(word.textContent === wordAndHint.one.word){
   clue.textContent = wordAndHint.one.hint
  } else if(word.textContent === wordAndHint.two.word){
   clue.textContent = wordAndHint.two.hint
  } else if(word.textContent === wordAndHint.three.word){
   clue.textContent = wordAndHint.three.hint
  } else if(word.textContent === wordAndHint.four.word){
   clue.textContent = wordAndHint.four.hint
  } else if(word.textContent === wordAndHint.five.word){
   clue.textContent = wordAndHint.five.hint
  }
 })

}
hangmanGame()
