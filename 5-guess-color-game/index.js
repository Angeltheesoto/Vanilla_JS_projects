// Variables
const colorValue = document.querySelector('.color-val');
const newColor = document.querySelector('.new-color');
const answer = document.querySelector('.answer');
const easyMode = document.querySelector('.easy');
const hardMode = document.querySelector('.hard');
const square = document.querySelectorAll('.square');
const choices = document.querySelector('.choices-container');

// Toggle between easy and hard mode to remove or add last three boxes.
function createDiv() {
  const div = document.createElement('div');
  div.setAttribute('class', 'square del');
  choices.appendChild(div)
 };

function removeDiv() {
 [...choices.children].slice(-3).forEach(choices.removeChild.bind(choices));
};

hardMode.addEventListener('click', () => {
 hardMode.classList.add('active');
 easyMode.classList.remove('active');
 createDiv()
 createDiv()
 createDiv()
})

easyMode.addEventListener('click', () => {
 hardMode.classList.remove('active');
 easyMode.classList.add('active');
 removeDiv()
})

// Have the RGB() change to a new color every refresh and assign that color to one of the boxes at random.





// Have the boxes display completely random colors and whenever the new colors button is clicked give everything a new color.






// Have the middle button display correct if you get it right or try again if you get it wrong.






