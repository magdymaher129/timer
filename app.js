let x = new Date(Date.now());
let date = x.toLocaleDateString();

let date2 = x.toDateString();
let para = document.getElementById("p");
para.innerHTML = date2;

let ss = document.getElementById("ss");
let date3 =
  "   Time:  " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
ss.innerHTML = date3;

setTimeout(() => {
  window.location.reload(1);
}, 1000);

week = ["Sunday", "Monday", "thursday", "Wednesday", "Tuesday.", "Friday"];
console.log("today is :" + week[x.getDay()]);
let hour = x.getHours();
let period = "";
if (hour > 12) {
  let offset = hour - 12;
  hour = offset;
  period = "PM";
} else {
  hour = hour;
  period = "AM";
}
console.log(
  "current time is :" +
    hour +
    " " +
    period +
    " :" +
    x.getMinutes() +
    ":" +
    x.getSeconds(),
);
// console.log(moment().format("MMM Do YY"));
// console.log(moment().format("LTS"))
// calculate the area of triangle with 3 sides formula
let a, b, c;
a = 5;
b = 3;
c = 4;
let s = (a + b + c) / 2;
let area = Math.pow(s * (s - a) * (s - b) * (s - c), 0.5);
console.log("area:" + area.toFixed(2));
