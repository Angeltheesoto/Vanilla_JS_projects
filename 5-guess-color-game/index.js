// Variables
let colorValue = document.querySelector('.color-val');
const newColor = document.querySelector('.new-color');
const answer = document.querySelector('.answer');
const easyMode = document.querySelector('.easy');
const hardMode = document.querySelector('.hard');
let square = document.querySelectorAll('.square');
let choices = document.querySelector('.choices-container');


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
  answer.style.display = 'none'
})

hardMode.addEventListener('click', () => {
  hardMode.classList.add('active');
  easyMode.classList.remove('active');
  answer.style.display = 'none'

  if(choices.childElementCount === 6){
    changeColor()
    randomColors()
    colorAssign()
  } else {
    changeColor()
    randomColors()
    colorAssign()
    createDiv()
    createDiv()
    createDiv()
  }
})

easyMode.addEventListener('click', () => {
  hardMode.classList.remove('active');
  easyMode.classList.add('active');
  changeColor()
  randomColors()
  colorAssign()
  answer.style.display = 'none'

  if(choices.childElementCount > 3){
    removeDiv()
  } else {
    return null
  }
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

// assigns the color displayed to the background, and a random square
function colorAssign() {
  let correctColor = document.querySelector('.correct-color');
  let textInfo = document.getElementById('text-content');
  correctColor.style.backgroundColor = textInfo.textContent;
  
  square[titleColorBox()].style.backgroundColor = textInfo.textContent
}
colorAssign()

// Chooses a random square from the list
function titleColorBox() {
  let ranNum = Math.floor(Math.random() * (square.length)); i++;
  return ranNum
}
  console.log(titleColorBox())

// If the color chosen matches the title rgb then create new colors else have it disappear.

function clickSquare() {
  for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', (e) => {
    let correctColor = document.querySelector('.correct-color');
    let answer = document.querySelector('.answer');
      if((e.target).style.backgroundColor == correctColor.style.backgroundColor) {
        console.log('Correct');
        answer.style.display = 'inline-block'
        answer.textContent = 'CORRECT'
      } else {
        console.log('Try again')
        answer.style.display = 'inline-block'
        answer.textContent = 'Try Again'
      }
    })
  }
}
clickSquare()
