
// variables ==>>>>>>>>>>>>>>>>>>>
// OutPuts -
let historyValue = document.querySelector('#history-value');
let outputValue = document.querySelector('#output-value');
// special-
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
// operators -
let operations = document.querySelectorAll('.operator')
// let percent = document.querySelector('#percent');
// let divide = document.querySelector('#divide');
// let multiply = document.querySelector('#multiply');
// let subtract = document.querySelector('#subtract');
// let add = document.querySelector('#add');
let equal = document.querySelector('#equal');
// numbers -
let number = document.querySelector('.number');


// clear button
clear.addEventListener('click', function(){
 outputValue.textContent = 0;
 historyValue.textContent = 0;
})
// backspace button
backspace.addEventListener('click', function() { 
 outputValue.textContent 
})

