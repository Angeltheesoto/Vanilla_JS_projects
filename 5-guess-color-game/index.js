// Variables
let colorValue = document.querySelector('.color-val');
const newColor = document.querySelector('.new-color');
const answer = document.querySelector('.answer');
const easyMode = document.querySelector('.easy');
const hardMode = document.querySelector('.hard');
let square = document.querySelectorAll('.square');
const choices = document.querySelector('.choices-container');


// Toggle between easy and hard mode to remove or add last three boxes.
function createDiv() {
  const div = document.createElement('div');
  div.setAttribute('class', 'square');
  div.style.backgroundColor = `rgb(${randomRgbColor()})`;
  choices.appendChild(div)
  };

function removeDiv() {
 [...choices.children].slice(-3).forEach(choices.removeChild.bind(choices));
};

// Whenever the new colors button is clicked give everything a new color.
newColor.addEventListener('click', () => {
  randomColors();
  changeColor()
  colorAssign()
})

hardMode.addEventListener('click', () => {
  hardMode.classList.add('active');
  easyMode.classList.remove('active');
  createDiv()
  createDiv()
  createDiv()
  changeColor()
  randomColors()
  colorAssign()
})

easyMode.addEventListener('click', () => {
  hardMode.classList.remove('active');
  easyMode.classList.add('active');
  removeDiv()
  changeColor()
  randomColors()
  colorAssign()
})

// Have the RGB() change to a new color every refresh and assign that color to each of the boxes at random.

// This assigns all the squares a random color.
function randomColors() {
  for (i = 0; i < square.length; i++) {
  square[i].style.backgroundColor = `rgb(${randomRgbColor()})`;
  }
}
randomColors();

// Creates a random rgb color for heading
function changeColor() {
  colorValue.innerHTML = `RGB(${randomRgbColor()})`;
}
changeColor()

// This gives a random number
function randomInteger(max) {
  return Math.floor(Math.random() *(max + 1))
}
randomInteger()

// Gives a random number to each rgb
function randomRgbColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return [r, g, b]
}

// have the heading rgb color assign to a random box and change the background to that color.

// assigns the color displayed to the background
function colorAssign() {
  let headContainer = document.querySelector('.head-container');
  let textInfo = document.getElementById('text-content');
  headContainer.style.backgroundColor = textInfo.textContent;
}
colorAssign()

function titleColorBox() {
  let ranNum = Math.floor(Math.random() * (square.length)); i++;
  
  return ranNum

}
  console.log(titleColorBox())








// Have the middle button display correct if you get it right or try again if you get it wrong.






