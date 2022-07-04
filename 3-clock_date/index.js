
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
//  variables
const time = document.querySelector('.time');
let nycTime = date.toLocaleTimeString();

function currentTime() {
 time.innerHTML = nycTime;
};
currentTime();

let myTime = setTimeout()







