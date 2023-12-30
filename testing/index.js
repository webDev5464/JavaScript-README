// startBorder(boolean: true or false, color:string, size:number, title:string) 
const startBorder = (control, color, size, title) => console.log((control === true ? `%c <<<<<| ${title} |>>>>>` : `%c <<<<<||||||||||||>>>>>`), (`color: ${color}; font-size: ${size}px;`));

//!/* ---------------------------------- */
startBorder(true, "red", 22, "Start")
//!/* ---------------------------------- */

const list = []

//!/* ---------------------------------- */
startBorder(false, "blue", 22)
//!/* ---------------------------------- */
