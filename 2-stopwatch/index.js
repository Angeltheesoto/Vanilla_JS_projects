// Variables
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let int = null;
let hour = 0;
let minute = 0;
let second = 0;

// Starts the function timing(), it runs every second using setInterval.
start.addEventListener('click', () => {
 // prevents from clicking start over again making it bug out.
 if(int !== null){
  clearInterval(int);
 }
 int = setInterval(timing,1000);
})
// Stops the timer by setting the int to null.
pause.addEventListener('click', () => {
 clearInterval(int)
})
// Resets min/ sec to 0, html text to 00:00, and the interval back to null.
reset.addEventListener('click', () => {
 clearInterval(int)
 hour = 0;
 minute = 0;
 second = 0;
 timer.innerHTML = ` 00 : 00 : 00 `
})
// Runs seconds to 60 then adds 1 to minutes.
function timing() {
 second++;
 if(second === 60){
  second = 0;
  minute += 1;
 }
 if(minute === 60){
  minute = 0;
  hour += 1;
 }
 if(hour === 24){
  hour = 0;
 }
 // Adds 0 in front if number is less than 10.
 // Ternary js = if - else if - return
 let h = hour < 10 ? '0' + hour : hour;
 let m = minute < 10 ? '0' + minute : minute;
 let s = second < 10 ? '0' + second : second;
 timer.textContent = ` ${h} : ${m} : ${s} `;
}


