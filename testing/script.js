// const numbers = [45, 4, 9, 16, 25];

// let text = ""

// numbers.forEach((x) => {
//   return text += x + "<br>"
// })

// document.getElementById("demo").innerHTML = text

// const numbers = [45, 4, 9, 16, 25];

// console.log(
//   numbers.reduce((x, y) => {
//     return x + y;
//   })
// );

// let date = new Date()

// console.log(date.getDate);

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

const d = new Date();
let month = months[d.getMonth()];

console.log(month);