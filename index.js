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



// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];

// console.log(year);
// [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'May' ]



// const numbers = [45, 4, 9, 16, 25];

// let text = ""

// let y = numbers.reduce((value, total, index, array) => {
//   return value + total

// })

// let text = ""

// numbers.forEach((v) => {
//   return text += v + "<br>"
// })


// let y = numbers.map((x) => {
//   return x + "<br>"
// })



const myArr = [
  { name: "X00", price: 100 },
  { name: "X01", price: 100 },
  { name: "X02", price: 100 },
  { name: "X03", price: 100 },
  { name: "X04", price: 110 },
  { name: "X05", price: 110 },
  { name: "X06", price: 110 },
  { name: "X07", price: 110 },
  { name: "X08", price: 120 },
  { name: "X09", price: 120 },
  { name: "X10", price: 120 },
  { name: "X11", price: 120 },
  { name: "X12", price: 130 },
  { name: "X13", price: 130 },
  { name: "X14", price: 130 },
  { name: "X15", price: 130 },
  { name: "X16", price: 140 },
  { name: "X17", price: 140 },
  { name: "X18", price: 140 },
  { name: "X19", price: 140 }
];

myArr.sort((p1, p2) => {
  if (p1.price < p2.price) {
    return -1
  }

  if (p1.price > p2.price) {
    return 1
  }
})

let text = ""

myArr.forEach((value) => {
  return text += value.name + " " + value.price + "<br>"
})

console.log(text);

/*
X00 100
X01 100
X02 100
X03 100
X04 110
X05 110
X06 110
X07 110
X08 120
X09 120
X10 120
X11 120
X12 130
X13 130
X14 130
X15 130
X16 140
X17 140
X18 140
X19 140
*/