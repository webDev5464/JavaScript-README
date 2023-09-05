// let num = 1

// try {
//   num.toPrecision(500)
// } catch (err) {
//   console.log(err.name);
// }
// // RangeError

// try {
//   eval("alert('Hello World)") //
// } catch(err) {
//   console.log(err.name);
// }
// // SyntaxError

let num = 1
try {
  num.toUpperCase()      // You can not convert a number to upper case.
} catch (err) {
  console.log(err.name);
}
// TypeError