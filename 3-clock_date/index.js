
// DATE -
// variables
const weekday = document.querySelector('.weekday');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');

let daysOfWeek = [
 'Sunday',
 'Monday',
 'Tuesday',
 'Wednesday',
 'Thursday',
 'Friday',
 'Saturday'
];

let months = [
 'January',
 'febuary',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December'
];

let date = new Date;
let dd = date.getDay(); // Day of the week
let mm = date.getMonth(); // Month
let nn = date.getDate(); // Number of the month day
let yy = date.getFullYear(); // Year
let currentDay = daysOfWeek[dd];
let currentMonth = months[mm];

function todayDate() {
 weekday.innerHTML = `${currentDay},`;
 month.innerHTML = `${currentMonth}`;
 day.innerHTML = `${nn},`;
 year.innerHTML = `${yy}`;
};
todayDate();


// TIME -
function showTime() {
 const timeZone = document.querySelector('.time');
 let dateTwo = new Date();
 let session = 'am';
 let h = dateTwo.getHours();
 let m = dateTwo.getMinutes();
 let s = dateTwo.getSeconds();

 if(h == 0){
  h = 12;
 }
 if(h > 12){
  h = h - 12;
  session = 'pm';
 };

 h = (h < 10) ? '0' + h : h;
 m = (m < 10) ? '0' + m : m;
 s = (s < 10) ? '0' + s : s;
 let time = `${h} : ${m} : ${s} ${session}`;
 timeZone.textContent = time;
 setTimeout(showTime, 1000);
}
showTime();