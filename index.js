const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = ""
let i = 0

while (cars[i]) {
  text += cars[i] + "<br>"
  i++ 
}

console.log(text);

// BMW<br>Volvo<br>Saab<br>Ford<br>