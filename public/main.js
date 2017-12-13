// let location = document.getElementById('location');
// let day = document.getElementById('day');
// let time = document.getElementById('time');
// let description = document.getElementById('description');
// let price = document.getElementById('price');
//
// document.write('location');





//Date/Time script
document.getElementById("date").textContent = new Date();

const currentDate = new Date();
const month = currentDate.getMonth();

const monthNames= [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const day = currentDate.getDate();
const year = currentDate.getFullYear();

const dateString = day + " " + monthNames[month] + " " + year;

document.getElementById("date").textContent = dateString;


function startTime() {
  const now = new Date();
  // Pull the hours out of current date.
  let hours = now.getHours();

  // Figure out if it's AM or PM.
  const meridien = hours >= 12 ? "pm" : "am";

  // Let's use 12-hour time instead of 24 hour.
  hours = hours % 12;
  hours = hours ? hours : 12;

  // If hour is a single digit, add '0' in front of it.
  hours = hours < 10 ? '0' + hours : hours;

  // Pull the minutes out of the date.
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Pull the seconds out of the date.
  let seconds = now.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Build a string with the variables we made above.
  const timeString = hours + ":" + minutes + ":" + seconds + " " + meridien;

  document.getElementById("time").textContent = timeString;

  // Set timeout that reruns startTime() every 1/2 second.
  const timeout = setTimeout(startTime, 500);
}
startTime();










