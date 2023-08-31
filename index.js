// const numbers = [4, 9, 16, 25, 29];

// let result = numbers.findIndex((value, index, array) => {
//   return value > 18
// })

// console.log("First number over 18 has index " + result);
// // First number over 18 has index 3



// const myArr = Array.from("ABCDEFG");
// console.log(myArr);
// // ['A', 'B', 'C', 'D', 'E', 'F', 'G']



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const key = fruits.keys()

// let text = ""
// for (let x of key) {
//   text += x + "<br>"
// }

// console.log(text);
// // /* 0<br>1<br>2<br>3<br> */



// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.includes("Apple"));
// // true

// const f = fruits.entries()

// text = ""
// for (let x of f) {
//   text += x + "<br>"
// }
// console.log(text);
// // 0,Banana<br>1,Orange<br>2,Apple<br>3,Mango<br>



const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);
// [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'May' ]