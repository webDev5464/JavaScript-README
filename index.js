const hours = new Date().getHours()

let greeting = ""

if (hours < 10) {
  greeting = "Good Morning"
} else if (hours < 20) {
  greeting = "Good Day"
}
else {
  greeting = "Good Evening"
}

console.log(greeting);