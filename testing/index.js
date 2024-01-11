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

let text = "8274612863"
let arr = []

for (let x = 0; x < text.length; x++) {
  arr[x] = Number(text[x])
}

console.log(arr);

/*
  ? API : https://res.cloudinary.com/dpiiduvvx/raw/upload/v1703580765/API/productsAPI
*/