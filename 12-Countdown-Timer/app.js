const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay();

// let futureDate = new Date(2023, 0, 6, 9, 7, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();

const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();
const timeOfDay = hours > 12 ? "pm" : "am";

giveaway.textContent = `giveway ends on ${day}, ${date} ${month} ${year} ${hours}:${minute}${timeOfDay}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60ms
  // 1d = 24hrs

  //  value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all the values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // set values array
  const values = [days, hours, minutes, seconds];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `
      <h4 class="expired">sorry, this giveway has expired</h4>
    `;
  }
}

// set countdown
const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
