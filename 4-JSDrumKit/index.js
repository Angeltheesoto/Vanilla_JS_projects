// button variables
const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const f = document.querySelector('.f');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');
const semicolon = document.querySelector('.semicolon');

// audio variables
const sound1 = document.querySelector('.sound1');
const sound2 = document.querySelector('.sound2');
const sound3 = document.querySelector('.sound3');
const sound4 = document.querySelector('.sound4');
const sound5 = document.querySelector('.sound5');
const sound6 = document.querySelector('.sound6');
const sound7 = document.querySelector('.sound7');
const sound8 = document.querySelector('.sound8');

 a.addEventListener('click', () => {
  sound1.currentTime = 0;
  sound1.play();
 })
 s.addEventListener('click', () => {
  sound2.currentTime = 0;
  sound2.play();
 })
 d.addEventListener('click', () => {
  sound3.currentTime = 0;
  sound3.play();
 })
 f.addEventListener('click', () => {
  sound4.currentTime = 0;
  sound4.play();
 })
 j.addEventListener('click', () => {
  sound5.currentTime = 0;
  sound5.play();
 })
 k.addEventListener('click', () => {
  sound6.currentTime = 0;
  sound6.play();
 })
 l.addEventListener('click', () => {
  sound7.currentTime = 0;
  sound7.play();
 })
 semicolon.addEventListener('click', () => {
  sound8.currentTime = 0;
  sound8.play();
 })

function keyPressed() {
 document.addEventListener('keydown', (e) => {
  if(e.key == 'a') {
   sound1.currentTime = 0;
   sound1.play();
  } 
  if(e.key == 's') {
   sound2.currentTime = 0;
   sound2.play();
  } 
  if(e.key == 'd') {
   sound3.currentTime = 0;
   sound3.play();
  } 
  if(e.key == 'f') {
   sound4.currentTime = 0;
   sound4.play();
  } 
  if(e.key == 'j') {
   sound5.currentTime = 0;
   sound5.play();
  } 
  if(e.key == 'k') {
   sound6.currentTime = 0;
   sound6.play();
  } 
  if(e.key == 'l') {
   sound7.currentTime = 0;
   sound7.play();
  } 
  if(e.key == ';') {
   sound8.currentTime = 0;
   sound8.play();
  } 
 })
}
keyPressed()

// window.addEventListener("keydown", () => {
// function playSound(e) {
//   // const keycode = e.key;
//   const keyElement = document.querySelector(`div[data-key=${keycode}]`);

//   console.log(keyElement);

//    const audio = document.querySelector(`audio[data-key='${keycode}']`);

//    // if(keyElement == audio) {
//    //  audio.currentTime = 0;
//    //  audio.play();
//    // }
//    // window.addEventListener("keydown", playSound);
//   }
//   playSound()
//  });


// document.addEventListener('keydown', e => {
//  let keyCode = document.keyCode;

//  const keyElement = document.querySelector(`audio[data-key='${keyCode}']`);
 
//  const audio = document.querySelector(`audio[data-key='${keyCode}']`);

//   audioElement.currentTime = 0;
// 	 audioElement.play();
// })