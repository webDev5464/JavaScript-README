// !/* ---------------------------------- */
const Server = ({ color, backgroundColor, title, size }) => console.log(
  (title != null ? `\n%c<<<<<| ${title.toUpperCase()} |>>>>>\n` : `\n%c<<<<<|||||||||>>>>>\n`),
  (`color: ${color}; font-size: ${size}px; background-color: ${backgroundColor};`)
);

Server({ color: "lightGreen", title: "starting", backgroundColor: "black" })

setTimeout(() => {
  Server({ color: "lightGreen", backgroundColor: "black", title: "ending" })
}, 5000)
// !/* ---------------------------------- */

/*
  ? API : https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI
*/

//? Start here

function greet(name, myFunction) {
  console.log('Hello world');
  myFunction(name);
}

function sayName(name) {
  console.log('Hello ' + name);
}

setTimeout(greet, 2000, 'John', sayName);