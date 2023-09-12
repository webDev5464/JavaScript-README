 ![logo](javascript.png)
# 🎓 JavaScript Basic

## 📌 Statements

```js
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

console.log(z)
```

| result |
| :----- |
| 11     |

- JavaScript statement are composed of : `valuess`, `Operators`, `Expressions`, `Keywords` and `Comments`.

**This statement tells the browser to write *"Hello World!"* inside an HTML element with *id="demo"*.**

```js
document.getElementById("demo").innerHTML = "Hello World!";
```

#### 🔺 Semicolons

Add a semicolon at the end of each executable statement.

```js
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
```

| result |
| :----- |
| 11     |

When separated by semicolons, multiple statements on one line are allowed:

## 📌 Keywords

JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

| Keyword  | Description                                                   |
| :------- | :------------------------------------------------------------ |
| var      | Declares a variable                                           |
| let      | Declares a block variable                                     |
| const    | Declares a block constant                                     |
| if       | Marks a block of statements to be executed on a condition     |
| switch   | Marks a block of statements to be executed in different cases |
| for      | Marks a block of statements to be executed in a loop          |
| function | Declares a function                                           |
| return   | Exist a  function                                             |
| try      | Implements error handling to a block of statements            |

## 📌 syntax

#### 🔺 How to create variables ?

#### 🔺 How to use variables ?

```js
// create variables:
var x;
let y;

// use variables:
x = 5;
y = 6;
let z = x + y;
```

## 📌 comments

- Single line comment.
- Multiple line comment.

**Single line comments.**

```js
// Change Heading:
document.getElementById("myH").innerHTML ="My first page.";

let x = 5; // Declare x, give it the value of 5.
```

**Multiple line comments.**

```js
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```

## 📌 variables

**Variables are Containers for storing Data.**

JavaScript variables can be declared in 4 ways:

- Automatically
- Using `var`
- Using `let`
- Using `const`

```js
// Using var
var x = 5;
var y = 6;
var z = x + y;
```

****
📝 **Note** :

- It is considered good programming practice to always declare variables before use.
- The `var` keyword was used in all JavaScript code from 1995 to 2015.
- The `let` and `const` keywords were added to JavaScript in 2015.
- The `var` keyword should only be used in code written for older browsers.

****

```js
// using let 
let x = 5;
let y = 6;
let z = x + y;
console.log(z);
```

| result |
| :----- |
| 11     |

```js
// using const 
const a = "Hello";
const b = "World!";
const c = a + ' ' + b;
console.log(c);
```

| result       |
| :----------- |
| Hello World! |

#### 🔺 When to Use var, let, or const?

- Always declare variables
- Always use `const` if the value should not be changed
- Always use `const` if the type should not be changed (Arrays and Objects)
- Only use `let` if you can't use `const`
- Only use `var` if you MUST support old browsers.

#### 🔺 Then we "output" the value inside an HTML paragraph with id="demo"

```html
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
```

#### 🔺 Dollar Sign $

Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:

```js
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
```

#### 🔺 Underscore (_)
Since JavaScript treats underscore as a letter, identifiers containing_ are valid variable names:
```js
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;
```

## 📌 Block scope

#### 🔺 let Block Scope
Variables declared inside a { } block cannot be accessed from outside the block:
```js
{
    let x = 2;
}
// x can not be use here!
```
Redeclaring a variable inside a block will not redeclare the variable outside the block:
```js
let x = 10;
// x is here 10

{
    let x = 2;
    // x is here 2
}

// x is here 10
```

#### 🔺 const Block Scope
```js
const x = 10;
// x here is 10

{
    const x = 5;
    // x here is 5
}

// x is here is 10
```

## 📌 Operators

The **Assignment Operator** (`=`) assign value a varibale.
```js
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
```

#### 🔺 Addition Operators
The **Addition Operators** (`+`) adds numbers:
```js
let x = 5;
let y = 2;
let z = x + y;
```

#### 🔺 Multiplication
The **Multiplication Operators** (`*`) multiplees numbers:
```js
let x = 5;
let y = 2;
let z = x * y;
```

## 📌 Type of Operators
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- String Operators
- Logical Operators
- Bitwise Operators
- Ternary Operators
- Type Operators

## 📌 Arithmetic Operators
| Operator | Description    |
| :------- | :------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| **       | Exponentiation |
| /        | Division       |
| %        | Modulus        |
| ++       | Increment      |
| --       | Decrement      |

#### 🔺 Adding
The **adding** operator (`+`) adds numbers:
```js
let x = 5;
let y = 2;
let z = x + y;
```
| result |
| :----- |
| 7      |

#### 🔺 Subtracting
The **subtraction** operator (`-`) subtracts nymbers.
```js
let x = 5;
let y = 2;
let z = x - y;
```
| result |
| :----- |
| 3      |

#### 🔺 Multiplying
The **multiplication** operator (`*`) multiplies numbers.
```js
let x = 5;
let y = 2;
let z = x * y;
```
| result |
| :----- |
| 10     |

#### 🔺 Dividing
The **division** operator (`/`) divides numbers.
```js
let x = 5;
let y = 2;
let z = x / y;
```
| result |
| :----- |
| 2.5    |

#### 🔺 Remainder
The **modulus** operator (`%`) returns the division remainder.
```js
let x = 5;
let y = 2;
let z = x % y;
```
| result |
| :----- |
| 1      |

#### 🔺 Incrementing
The **increment** operator (`++`) increments numbers.
```js
let x = 5;
x++;
let z = x;
```
| result |
| :----- |
| 6      |

#### 🔺 Decrementing
The **decrement** operator (`--`) decrements numbers.
```js
let x = 5;
x--;
let z = x;
```
| result |
| :----- |
| 4      |

#### 🔺 Exponentiation
The **exponentiation** operator (`**`) raises the first operand to the power of the second operand.
```js
let x = 5;
let z = x ** 2;
```
| result |
| :----- |
| 25     |

x ** y produces the same result as `Math.pow(x,y)`:

```js
let x = 5;
let z = Math.pow(x,2);
```
| result |
| :----- |
| 25     |

## 📌 Assignment Operators

Assignment operators assign values to JavaScript variables.

| Operator | Example  | Same As    |
| :------- | :------- | :--------- |
| =        | x=y      | x=y        |
| +=       | x + = y  | x = x + y  |
| -=       | x - = y  | x = x - y  |
| *=       | x * = y  | x = x * y  |
| /=       | x / = y  | x = x / y  |
| %=       | x % = y  | x = x % y  |
| **=      | x ** = y | x = x ** y |

#### 🔺 The `=` Operator
The **Simple Assignment Operator** assigns a value to a variable.

```js
let x = 10;

// For debugging
console.log(x);
```
| result |
| :----- |
| 10     |

****

```js
let x = 10;
let y = 5 + x;

console.log(y);
```
| result |
| :----- |
| 15     |

#### 🔺 The `+=` Operator

The **Addition Assignment Operator** adds a value to a variable.

```js 
let x = 10;
x += 6;

console.log(x);
```
| result |
| :----- |
| 16     |

****

```html
<p id="demo"></p>
```

```js
let text = "Hello";
text += "World!";

document.getElementById("demo").innerHTML = text;
```
| result       |
| :----------- |
| Hello World! |

#### 🔺 The `-=` Operators

The **Subtraction Assignment Operator** subtracts a value from a variable.

```js
let x = 10;
x -= 5;
```

#### 🔺 The `*=` Operators

The **Multiplication Assignment Operator** multiplies a variable.

```js
let x = 10;
x *= 5;
```
| result |
| :----- |
| 50     |

#### 🔺 The `**=` Operators

The **Exponentiation Assignment Operator** raises a variable to the power of the operand.
```js
let x = 10;
x **= 5;
```
| Result |
| :----- |
| 100000 |

#### 🔺 The `/=` Operators
The **Division Assignment Operator** divides a variable.
```js
let x = 10;
x /= 5;
```
| Result |
| :----- |
| 2      |

#### 🔺 The `%=` Operators
The **Remainder Assignment Operator** assigns a remainder to a variable.
```js
let x = 10;
x %= 5;
```
| Result |
| :----- |
| 0      |

## 📌 Data Types

#### 🔺 JavaScript has 8 Datatypes

**1.** String

**2.** Number

**3.** Bigint

**4.** Boolean

**5.** Undefined

**6.** Null

**7.** Symbol

**8.** Object

#### 🔺 The Object Datatype

The Object data type can contain:

**1.** An Object

**2.** An array

**3.** A date   

****
```js
// Numbers:
let length = 16;
let weight = 7.5;

// String:
let x = "Hello"
let y = "John Doe"

// Booleans:
let x =  true;
let y = false;

// Object:
const person = {firstName : "John", lastName : "Doe"};

// Array object:
const cars = ["Saad", "volvo", "BMW"];

// Date Object:
const date = new Date("2023-09-11");
```
****

**Note :** A JavaScript variable can hold any type of data.

#### 🔺 The Concept of Data Types

In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

```js
let x = 16 + "Volvo";
```
| result  |
| :------ |
| 16Volvo |

Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

```js
let x = "16" + "Volvo";
```
| result  |
| :------ |
| 16Volvo |

**Note :** When adding a number and a string, JavaScript will treat the number as a string.

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

```js
let x = 16 + 4 + "Volvo";
```
| result  |
| :------ |
| 20Volvo |

**Note :** When adding a number and a string, JavaScript will treat the number as a string.

```js
let x = "Volvo" + 16 + 4;
```
| result   |
| :------- |
| Volvo164 |

#### 🔺 Types are Dynamic

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

```js
let x;
x = 5;
x = "John"

console.log(x);
```

| result |
| :----- |
| john   |


```js
let x;
x = 5;
console.log(x);

x = "John"
```

| result |
| :----- |
| 5      |

#### 🔺 String

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

```js
// Using dubble quotes:
let carName = "Volvo xc60"

// Using single quotes:
let carName = 'Volvo xc60'
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
```

#### 🔺 Numbers

All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:

```js
// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;
```

#### 🔺 Bigint

All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

```js
let x = BigInt("123456789012345678901234567890");
```

#### 🔺 Booleans

Booleans can only have two values: `true` or `false`.

```js
let x = 5;
let y = 5;
let z = 6;

console.log(x == y) // true
console.log(x == z) // false
```

#### 🔺 Arrays

JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called `cars`, containing three items (car names):

```js
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0])
```

| result |
| :----- |
| Saab   |

Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

#### 🔺 Object

JavaScript objects are written with curly braces `{}`.

Object properties are written as name:value pairs, separated by commas.

```js
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person.firstName + " is " + person.age + " years old.")
```

| result                |
| :-------------------- |
| John is 50 years old. |

#### 🔺 Undefined

In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`.

```js
let car;
console.log(car);
```
| result    |
| :-------- |
| undefined |

#### 🔺 Empty Values

An empty value has nothing to do with `undefined`.

An empty string has both a legal value and a type.

```js
let car = "";    // The value is "", the typeof is "string"
```

## 📌 Functions

****
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
****

```js
function myFunction(p1, p2) {
    return p1 * p2
};

let result = myFunction(4, 7);
console.log(result);
```
| result |
| :----- |
| 28     |

The code to be executed, by the function, is placed inside curly brackets: **{}**

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

#### 🔺 Function syntax

- A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
- Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
- The parentheses may include parameter names separated by commas:
**(parameter1, parameter2, ...)**
- Function `parameters` are listed inside the parentheses () in the function definition.
- Function `arguments` are the values received by the function when it is invoked.
- Inside the function, the arguments (the parameters) behave as local variables.

#### 🔺 Invocation
The code inside the function will execute when "something" `invokes` (calls) the function:

- When an event occurs (when a user clicks a button)
- When it is invoked (called) from JavaScript code
- Automatically (self invoked)

You will learn a lot more about function invocation later in this tutorial.

```js 
let x = myFunction(4, 3);
console.log(x)

function myFunction(a, b) {
    return a * b
};
```

| result |
| :----- |
| 12     |

****
#### 🔺 Whay Functions?
With functions you can reuse code

You can write code that can be used many times.

You can use the same code with different arguments, to produce different results.
****

#### 🔺 The `()` Operators

The () operators invokes (calls) the function:

```js
function toCelsius(f) {
    return (5/9) * (f-32);
};

let value = toCelsius(77);

console.log(value);     // result : 25
```

#### 🔺 Local Variables

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

```js
let text = "Outside : " + typeof car;
console.log(text);

function carDetail() {
  let car = "Volvo";
  let text = "Inside : " + typeof car + " " + car;

  console.log(text);
}

carDetail()
```

| result                |
| :-------------------- |
| Outside : undefined   |
| Inside : string Volvo |

## 📌 Objects

This code assigns a **simple value** (John) to a **variable** named person:

```js
let person = "John";
```

This code assigns a **many values** (John, Doe, 24) to a `variable` named car:

```js
const person = {firstName: "John", lastName: "Doe", age: 24};

console.log(person.firstName + " " + person.lastName);
console.log(person.firstName + " is " + person.age + " years old.")
```

| result                |
| :-------------------- |
| John Doe              |
| John is 24 years old. |


#### 🔺 Object Method

Objects can also have `methods`.

Methods are actions that can be performed on objects.

Methods are stored in properties as `function definitions`.

| Property  | Property Value                                           |
| :-------- | :------------------------------------------------------- |
| firstName | John                                                     |
| lastName  | Doe                                                      |
| age       | 24                                                       |
| eyeColor  | Brown                                                    |
| fullName  | function() {return this.firstName + " " + this.lastName} |

*A method is function stored as a property.*

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  eyeColor: "Brown",
  fullName: function () {
    return (
      this.firstName + " " + this.lastName
    )
  }
};

console.log(person.fullName());
```

| result   |
| :------- |
| John Doe |

In the example above, `this` refer to **person object.**

**this.firstName** means this **firstName** propery of **this**.

**this.firstName** means the **firstName** property of **person**.

## 📌 String

A JavaScript string is zero or more characters written inside quotes.

```js
let text = "Hello World"
```

**You can use single or duble quotes :**

```js
let text01 = "Hello World";
let text02 = 'Hello World';
```

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
```

#### 🔺 String Length

To find the length of a string, use the built-in `length` property:

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length)
```
| result |
| :----- |
| 26     |

#### 🔺 Escape Character

Because strings must be written within quotes, JavaScript will misunderstand this string:

```js
let text = "We are the so-called "Vikings" from the north.";
```

The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the **backslash escape character**.

The backslash (`\`) escape character turns special characters into string characters:

| Code | Result | Description  |
| :--- | :----- | :----------- |
| \'   | '      | Single Quote |
| \"   | "      | Dubble Quote |
| \\   | \      | Backslash    |

The sequence `\"`  inserts a double quote in a string:

```js
let text = "We are the so-called \"Vikings\" from the north.";
```

The sequence `\'`  inserts a single quote in a string:

```js
let text= 'It\'s alright.';
```

The sequence `\\`  inserts a backslash in a string:

```js
let text = "The character \\ is called backslash.";
```

You can also break up a code line within a text string with a single backslash:

```js
document.getElementById("demo").innerHTML = "Hello \
World!";
```

#### 🔺 Strings as Objects

Normally, JavaScript strings are primitive value, created from literals:

But stringscan be also defined as object with the keyword `new`:

```js
let x = "John Doe";
let y = new String(x)
console.log(typeof y);
```

| result |
| :----- |
| object |

****
⚠️ **WARNING !**

Do not create Strings objects.

The `new` keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:
****

When using the `==` operator, x and y are **equal**:  

```js
let x = "John Doe";
let y = new String(x)
console.log(x == y);    // true
```

When using the `===` operator, x and y are not **equal**:

```js
let x = "John Doe";
let y = new String(x)
console.log(x === y);   // false
```

Note the difference between `(x==y)` and `(x===y)`.

## 📌 String Method

|                      |                     |
| :------------------- | :------------------ |
| String length        | String concat()     |
| String slice()       | String trim()       |
| String substring()   | String trimStart()  |
| String substr()      | String trimEnd()    |
| String replace()     | String padStart()   |
| String replaceAll()  | String padEnd()     |
| String toUpperCase() | String charAt()     |
| String toLowerCase() | String charCodeAt() |
| String split()       |                     |

#### 🔺 String Length

The `length` property returns the length of a string.

```js
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)   // 26
```

#### 🔺 String slice()

`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);   // Banana
```

****
📝 **Note**

JavaScript counts positions from zero.

First position is 0.

Second position is 1.
****

If you omit the second parameter, the method will slice out the rest of the string:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);   // banana, Kiwi
```

If a parameter is negative, the position is counted from the end of the string:  

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);   // Banana, Kiwi
```

This example slices out a portion of a string from position -12 to position -6:

```js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);   // Banana
```

#### 🔺String substring()

`substring()` is similar to `slice()`.

The difference is that start and end values less than 0 are treated as 0 in `substring()`.

```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);    // Banana
```

#### 🔺 Replacing String Content

The `replace()` method replaces a specified value with another value in a string:

```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "CodeWithDw");
console.log(newText);   
// Please visit CodeWithDw!
```

****
📝 **Note**

The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
****

To replace all matches, use a regular expression with a `/g` flag (global match):

```js
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "CodeWithDw");    
// Please visit CodeWithDw and CodeWithDw!
```

To replace case insensitive, use a regular expression with an `/i` flag (insensitive):

```js
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "CodeWithDw");    
// Please visit CodeWithDw!
```

#### 🔺 String ReplaceAll()

In 2021, JavaScript introduced the string method `replaceAll()`:

```js
let text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text)
// I love dogs. Dogs are very easy to love. Dogs are very popular.
```

The `replaceAll()` method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

```js
let text = "I love cats. Cats are very easy to love. Cats are very popular";
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
```

#### 🔺  String toUpperCase()

```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase();    // HELLO WORLD!
```

#### 🔺 String toLowerCase()

```js
let text1 = "Hello World!";     
let text2 = text1.toLowerCase();    // hello world!
```

#### 🔺 String concat()

`concat()` joins two or more strings:

```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3)
```
| result      |
| :---------- |
| Hello World |

The `concat()` method can be used instead of the plus operator. These two lines do the same:

```js
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
```

#### 🔺 String trim()

The `trim()` method removes whitespace from both sides of a string:

```js
let text1 = "     Hello World!     ";     // length 22
let text2 = text1.trim();                 // length 12
```

#### 🔺String trimStart()

The `trimStart()` method works like trim(), but removes whitespace only from the start of a string.

```js
let text1 = "     Hello World!     ";     // length 22
let text2 = text1.trimStart();            // length 17
```

#### 🔺 String trimEnd()

The `trimEnd()` method works like `trim()`, but removes whitespace only from the end of a string.

```js
let text1 = "     Hello World!     ";     // length 22
let text2 = text1.trimEnd();              // length 17
```

#### 🔺 String padStart()

The `padStart()` method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.

Pad a string with "0" until it reaches the length 4:

```js
let text = "5";
let padded = text.padStart(4,"0");      // 0005
```

Pad a string with "x" until it reaches the length 4:

```js
let text = "5";
let padded = text.padStart(4,"x");      // xxx5
```

#### 🔺 String padEnd()

The `padEnd()` method pads a string from the end.

It pads a string with another string (multiple times) until it reaches a given length.

```js
let text = "5";
let padded = text.padEnd(4,"0");      // 5000
```

```js
let text = "5";
let padded = text.padEnd(4,"x");      // 5xxx
```

****
 📝 **Note**

The `padStart()` end `padEnd()` method is a string method.

To pad a number, convert the number to a string first.

***How to convert number to string ?***
```js
let x = 5;
x = toString(x);
console.log(typeof x);    // string
```
****

#### 🔺 String charAt()

The `charAt()` method returns the character at a specified index (position) in a string:

```js
let text = "HELLO WORLD";
let char = text.charAt(0);    // H
```

#### 🔺 String split()

A string can be converted to an array with the `split()` method:

```js
let text = "a,b,c,d,e,f";
console.log(text[1]);              // ,
const myArray = text.split(","); 
console.log(myArray[1]);           // b
```

If the separator is omitted, the returned array will contain the whole string in index [0].

If the separator is "", the returned array will be an array of single characters:

```js
let word = "H,e,l,l,o";
word = word.split(",")

let len = word.length

let text = ""
for (let x = 0; x < len; x++) {
  text += word[x] + "<br>"
}

document.getElementById("demo").innerHTML = text;

/*
H
e
l
l
o
*/
```

## 📌 String Search

|                     |                      |
| :------------------ | :------------------- |
| String indexOf()    | String lastIndexOf() |
| String search()     | String match()       |
| String matchAll()   | String includes()    |
| String startsWith() | String endsWith()    |

#### 🔺 String indexOf()

The `indexOf()` method returns the index (position) the first occurrence of a string in a string:

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");     // 7
```

****
📝 **Note**

JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third, ...
****

#### 🔺 String lastIndexOf()

The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string:

```js
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");     // 21
```

Both indexOf(), and lastIndexOf() return -1 if the text is not found:

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("John");     // -1
```

Both methods accept a second parameter as the starting position for the search:

```js
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);     // 21
```

The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is `15`, the search starts at position 15, and searches to the beginning of the string.

```js
let text = "Please locate where 'locate' occurs!";
let lastIndex = text.lastIndexOf("locate", 15);     // 7
```

#### 🔺 String search()

The `search()` method searches a string for a string (or a regular expression) and returns the position of the match:

```js
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));   // 7
```

```js
let text = "Please locate where 'locate' occurs!";
console.log(text.search(/locate/));   // 7
```

****
📝 **Did You Notice?**

The two methods, `indexOf()` and `search()`, are equal?

The two methods, indexOf() and search(), are equal?

The two methods are **NOT** equal. These are the differences:

-  The `search()` method cannot take a second start position argument.
- The `indexOf()` method cannot take powerful search values (regular expressions).

You will learn more about regular expressions in a later chapter.
****

#### 🔺 String match()

The `match()` method returns an array containing the results of matching a string against a string (or a regular expression).

Perform a search for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");    // 5
```

Perform a global, case-insensitive search for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);   // 3 [ 'ain', 'ain', 'ain'  c]
```

Perform a global, case-insensitive search for "ain":

```js
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);    // 4 [ 'ain', 'AIN', 'ain', 'ain' ]
```

## 📌 String Templates

****
Synonyms:

- Template
- Literals
- Template Strings
- String Templates
- Back-Tics Syntax
****

#### 🔺 Back-Tics Syntax

Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

```js
let text = `Hello World!`;
```

#### 🔺 Quotes Inside Strings

With **template literals**, you can use both single and double quotes inside a string:

```js
let text = `He's often called "Johnny"`;
```

#### 🔺 Multiline Strings

**Template literals** allows multiline strings:

```js
let text =
`The quick
brown fox
jumps over
the lazy dog`;
```

#### 🔺 Interpolation

**Template literals** provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

```js
${...}
```

#### 🔺 Variable Substitutions

**Template literals** allow variables in strings:

```js
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
```

#### 🔺 HTML Templates

```js
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
```

## 📌 Numbers

```js
let x = 3.14;   // A number with decimals
let y = 3;      // A number without decimals
```

Extra large or extra small numbers can be written with scientific (exponent) notation:

```js
let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123
```

#### 🔺 Integer Precision

Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

```js
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
```

#### 🔺 Numbers and Strings

****
⚠️ **WARNING !**

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.
****

If you add two numbers, the result will be a number:

```js
let x = 10;
let y = 20;
let z = x + y;
console.log(z);
```
| result |
| :----- |
| 30     |

If you add two strings, the result will be a string concatenation:

```js
let x = "10";
let y = "20";
let z = x + y;
console.log(z);
```
| result |
| :----- |
| 1020   |

If you add a number and a string, the result will be a string concatenation:

```js
let x = 10;
let y = "20";
let z = x + y;
console.log(z)
```
| result |
| :----- |
| 1020   |

A common mistake is to expect this result to be 30:

```js
let x = 10;
let y = 20;
let z = "The result is: " + x + y;
```

A common mistake is to expect this result to be 102030:

```js
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;
console.log(result)
```
| result |
| :----- |
| 3030   |

****
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.
****

#### 🔺 Numeric Strings

JavaScript strings can have numeric content:

```js
let x = 100;         // x is a number

let y = "100";       // y is a string
```

#### 🔺 NaN - Not a Number

`NaN` is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in `NaN` (Not a Number):

```js
let x = 100 / "Apple";
console.log(x)
```
| result |
| :----- |
| NaN    |

#### 🔺 Numbers as Objects

But numbers can also be defined as objects with the keyword new:

```js
let x = 123;
let y = new Number(x)
console.log(typeof y)
```

## 📌 Number Methods

| Method          | Description                                        |
| :-------------- | :------------------------------------------------- |
| toString()      | Return a number as a string                        |
| toExponential() | Returns a number written in exponential notation   |
| toFixed()       | Returns a number written with a number of decimals |
| toPrecision()   | Returns a number written with a specified length   |
| ValueOf()       | Returns a number as a number                       |

#### 🔺 toString() Method

The `toString()` method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):

```js
let x = 12;
x = toString(x)
console.log(typeof(x));   // string
```

#### 🔺 toFixed() Method

`toFixed()` returns a string, with the number written with a specified number of decimals:

```js
let num = 9.656;
const number = num.toFixed(0) + "<br>" + num.toFixed(2) + "<br>" + num.toFixed(4) + "<br>" + num.toFixed(6);
document.getElementById("demo").innerHTML = number

/*
10
9.66
9.6560
9.656000
*/
```

****
📝 toFixed(2) is perfect for working with money.
****

#### 🔺 Number() Method

```js
document.getElementById("demo").innerHTML =
  Number(true) + "<br>" +               // 1
  Number(false) + "<br>" +              // 0
  Number("10") + "<br>" +               // 10
  Number("  10  ") + "<br>" +           // 10
  Number("  10") + "<br>" +             // 10
  Number("10  ") + "<br>" +             // 10
  Number("10.33") + "<br>" +            // 10.33
  Number("10,33") + "<br>" +            // NaN
  Number("10 33") + "<br>" +            // NaN
  Number("John");                       // NaN
```

#### 🔺 parseInt() Method

`parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

```js
document.getElementById("demo").innerHTML = 
  parseInt("-10") + "<br>" +             // -10
  parseInt("-10.33") + "<br>" +          // -10
  parseInt("10") + "<br>" +              // 10
  parseInt("10.33") + "<br>" +           // 10
  parseInt("10 6") + "<br>" +            // 10
  parseInt("10 years") + "<br>" +        // 10
  parseInt("years 10");                  // NaN
```

#### 🔺 Number.isInteger() Method

The `Number.isInteger()` method returns `true` if the argument is an integer.

`toPrecision()` returns a string, with a number written with a specified length:

```js
let num = 9.656;
const number = num.toPrecision() + "<br>" + num.toPrecision(2) + "<br>" + num.toPrecision(4) + "<br>" + num.toPrecision(6);
document.getElementById("demo").innerHTML = number
```

#### 🔺 valueOf() Method

`valueOf()` returns a number as a number.

```js
let x = 123;
x.valueOf();            // 123
(345).valueOf();        // 345
(100 + 23).valueOf();   // 123
```

In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

The `valueOf()` method is used internally in JavaScript to convert Number objects to primitive values.

There is no reason to use it in your code.

## 📌 Array

****
📝 **Whay use arrays ?**

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

```js
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.
****

#### 🔺 Creating an Array

Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

```js 
const array_name = [item1, item2, ...]; 
```

```js
const cars = ["Saab", "Volvo", "BMW"];
```

Spaces and line breaks are not important. A declaration can span multiple lines:

```js
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
```

You can also create an array, and then provide the elements:

```js
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

#### 🔺 Using the JavaScript Keyword new

The following example also creates an Array, and assigns values to it:

```js
const cars = new Array("Saab", "Volvo", "BMW");
```

****
The two examples above do exactly the same.

There is no need to use `new Array()`.

For simplicity, readability and execution speed, use the array literal method.
****

#### 🔺 Accessing Array Elements

You access an array element by referring to the **index number**:

```js
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);     // Saab
```

****
📝 **Note** Array indexes start with 0

[0] is the first element. [1] is the second element.
****

#### 🔺 Accessing the Last Array Element

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length-1])    // Mango
```

#### 🔺 Changing an Array Element

This statement changes the value of the first element in `cars`:

```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars)
```

#### 🔺 Converting an Array to a String

The JavaScript method `toString()` converts an array to a string of (comma separated) array values.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())
```

#### 🔺 Access the Full Array

With JavaScript, the full array can be accessed by referring to the array name:

```js
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)
```

#### 🔺 Arrays are Objects

Arrays are a special type of objects. The `typeof` operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use `numbers` to access its "elements". In this example, `person[0]` returns John:

**Array :**
```js
const person = ["John", "Doe", 46];
```

Objects use `names` to access its "members". In this example, `person.firstName` returns John:

**Object :**
```js
const person = {firstName:"John", lastName:"Doe", age:46};
```

#### 🔺 The length Property

The `length` property of an array returns the length of an array (the number of array elements).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)    // 4
```

#### 🔺 Accessing the First Array Element

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0])
```

#### 🔺 Looping Array Elements

One way to loop through an array, is using a for loop:

```js
let Language = ["html", "css", "JavaScript"]
let Len = Language.length

let text = "<ul>"
for (let i = 0; i < Len; i++) {
  text += "<li>" + Language[i] + "</li>"
}
text += "</ul>"

document.getElementById("demo").innerHTML = text
```

You can also use the `Array.forEach()` function:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>"
fruits.forEach(myFruits)
text += "</ul>"

document.getElementById("demo").innerHTML = text

function myFruits(value) {
  text += "<li>" + value + "</li>"
}
```

#### 🔺 Adding Array Elements

The easiest way to add a new element to an array is using the `push()` method:

```js
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo").innerHTML = fruits;
}
```

New element can also be added to an array using the length property:

```js
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits[fruits.length] = "Lemon";
  document.getElementById("demo").innerHTML = fruits;
}
```

****
⚠️ **WARNING !**

Adding elements with high indexes can create undefined "holes" in an array:
****

```js
const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";

let fLen = fruits.length;
let text = "";
for (i = 0; i < fLen; i++) {
  text += fruits[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

/*
Banana
Orange
Apple
undefined
undefined
undefined
Lemon
*/
```
#### 🔺 Associative Arrays

Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does **not** support arrays with named indexes.

In JavaScript, **arrays** always use **numbered indexes**.  

```js
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;

console.log(person[0] + " " + person.length)    // John 3
```

****
📝 **The Difference Between Arrays and Objects**

In JavaScript, **arrays** use **numbered indexes**.  

In JavaScript, **objects** use **named indexes**.
****

#### 🔺 new Array()

JavaScript has a built-in array constructor `new Array()`.

But you can safely use `[]` instead.

These two different statements both create a new empty array named points:

```js
const points = new Array();
const points = [];
```

These two different statements both create a new array containing 6 numbers:

```js
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
console.log(points[0])    // 40
```

#### 🔺 How to Recognize an Array

A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator `typeof` returns "`object`":

```js
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;       // object
```

The typeof operator returns object because a JavaScript array is an object.

**`Solution 1:`**

To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method `Array.isArray()`:

```js
const fruits = ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruits));       // true
```

**`Solution 2:`**

The `instanceof` operator returns true if an object is created by a given constructor:

```js
var fruits = ["Banana", "Orange", "Apple"];
console.log(fruits instanceof Array)        // true
```

## 📌 Array Methods

|                |                  |
| :------------- | :--------------- |
| Array length   | Array toString() |
| Array pop()    | Array push()     |
| Array shift()  | Array unshift()  |
| Array join()   | Array delete()   |
| Array concat() | Array flat()     |
| Array splice() | Array slice()    |

#### 🔺  Array length

The `length` property returns the length (size) of an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;       // 4
```

#### 🔺 Array toString()

The JavaScript method `toString()` converts an array to a string of (comma separated) array values.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let convertString = fruits.toString()       
// Banana,Orange,Apple,Mango
```

The `join()` method also joins all array elements into a string.

It behaves just like `toString()`, but in addition you can specify the separator:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join("*")
// Banana * Orange * Apple * Mango
```

****
**Popping and Pushing**

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array.
****

#### 🔺 Array pop()

The `pop()` method removes the last element from an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
fruits.pop()
document.getElementById("demo").innerHTML = fruits;
```

The `pop()` method returns the value that was "popped out":

#### 🔺 Array push()

The `push()` method adds a new element to an array (at the end):

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");        
// Banana,Orange,Apple,Mango,Kiwi
```

#### 🔺  Array shift()

Shifting is equivalent to popping, but working on the first element instead of the last.

The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.shift()
console.log(fruits);
// [ 'Orange', 'Apple', 'Mango' ]
```

The `shift()` method returns the value that was "shifted out":

#### 🔺 Array unshift()

The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.unshift("Kiwi")
console.log(fruits);
// [ 'Kiwi', 'Banana', 'Orange', 'Apple', 'Mango' ]
```

****
📝 Array **indexes** start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...
****

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits[0] = "Kiwi";
console.log(fruits);
// [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]
```

#### 🔺 Array length

The `length` property provides an easy way to append a new element to an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits[fruits.length] = "Kiwi"
console.log(fruits);
// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
```

****
⚠️ **WARNING !**

Array elements can be deleted using the JavaScript operator `delete`.

Using `delete` leaves `undefined` holes in the array.

Use pop() or shift() instead.
****

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[0])
// Banana

delete fruits[0]
console.log(fruits[0]);
// undefined
```

#### 🔺 Merging (Concatenating) Arrays

The `concat()` method creates a new array by merging (concatenating) existing arrays:

```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys)
console.log(myChildren);
// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
```

****
The `concat()` method does not change the existing arrays. It always returns a new array.
****

The `concat()` method can take any number of array arguments:

```js
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan' ]
```

The `concat()` method can also take strings as arguments:

```js
const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter");
console.log(myChildren)
// [ 'Emil', 'Tobias', 'Linus', 'Peter' ]
```
#### 🔺 Array splice()

The `splice()` method can be used to add new items to an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits);
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
```

The first parameter (2) defines the position **where** new elements should be **added** (spliced in).

The second parameter (0) defines **how many** elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The `splice()` method returns an array with the deleted items:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi")
console.log(fruits);        
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]

/*
Remove item : Apple,Mango
*/
```

#### 🔺 Using splice() to Remove Elements

With clever parameter setting, you can use `splice()` to remove elements without leaving "holes" in the array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1)
console.log(fruits);        
// [ 'Orange', 'Apple', 'Mango' ]
```

The first parameter (0) defines the position where new elements should be **added** (spliced in).

The second parameter (1) defines **how many** elements should be **removed**.

The rest of the parameters are omitted. No new elements will be added.

#### 🔺 Array slice()

The `slice()` method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.slice(1));       
// [ 'Orange', 'Apple', 'Mango' ]
```

****
📝 **Note**

The slice() method creates a new array.

The slice() method does not remove any elements from the source array.
****

This example slices out a part of an array starting from array element 3 ("Apple"):

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(3));       
// [ 'Apple', 'Mango' ]
```

The `slice()` method can take two arguments like `slice(1, 3)`.

The method then selects elements from the start argument, and up to (but not including) the end argument.

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1, 3));        
// [ 'Orange', 'Lemon' ]
```

If the end argument is omitted, like in the first examples, the `slice()` method slices out the rest of the array.

#### 🔺 Automatic toString()

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let x = fruits.toString()
console.log(typeof x)       // string
```

## 📌 Sorting Arrays

#### 🔺 Sorting an Array

The `sort()` method sorts an array alphabetically:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
console.log(fruits);        
// [ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

#### 🔺 Reversing an Array

The `reverse()` method reverses the elements in an array.

You can use it to sort an array in descending order:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()
fruits.reverse()
console.log(fruits);        
// [ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

#### 🔺 Numeric Sort
By default, the `sort()` function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the `sort()` method will produce incorrect result when sorting numbers.

You can fix this by providing a **compare function**:

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(points)       // [ 40, 100, 1, 5, 25, 10 ]

let sorted = points.sort(function (a, b) { return a - b })
console.log(sorted)       // [ 1, 5, 10, 25, 40, 100 ]
```

#### 🔺 The Compare Function

The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

```js
function(a, b){return a - b}
```

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, `a` is sorted before `b`.

If the result is positive, `b` is sorted before `a`.

If the result is 0, no changes are done with the sort order of the two values.

**Example:**

The compare function compares all the values in the array, two values at a time `(a, b)`.

When comparing 40 and 100, the `sort()` method calls the compare function(40, 100).

The function calculates 40 - 100 `(a - b)`, and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

```js
<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>
```

#### 🔺 Sorting an Array in Random Order

```html
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Arrays</h1>
<h2>The sort() Method</h2>

<p>Click the button (again and again) to sort the array in random order.</p>

<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = points;
}
</script>

</body>
</html>
```

#### 🔺 Using Math.max() on an Array

You can use `Math.max.apply` to find the highest number in an array:

```js
const points = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(myArrayMax(points));        
// 100
```

#### 🔺 Using Math.min() on an Array

You can use `Math.min.apply` to find the lowest number in an array:

```js
const points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(myArrayMin(points));
// 1
```

#### 🔺 Sorting Object Arrays

JavaScript arrays often contain objects:

Even if objects have properties of different data types, the `sort()` method can be used to sort the array.

The solution is to write a compare function to compare the property values:

```js
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 }
];

cars.sort((a, b) => {
  return (
    a.year - b.year
  )
})

function displayCars() {
  document.getElementById("demo").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
}

displayCars()
```

#### 🔺 Stable Array sort()

**revised** the Array `sort()` method.

Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

After ES2019, browsers must use a stable sorting algorithm:

When sorting elements on a value, the elements must keep their relative position to other elements with the same value.

```js
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
```

## 📌 Array Iteration

#### 🔺 Array forEach()

The `forEach()` method calls a function (a callback function) once for each array element.

```js
const numbers = [45, 4, 9, 16, 25];

let text = ""
numbers.forEach((value, index, array) => { return text += value + "<br>" })
document.getElementById("demo").innerHTML = text

/*
45
4
9
16
25
*/
```

Note that the function takes 3 arguments:

- The item value
- The item index
- The array itself
  
The example above uses only the value parameter. The example can be rewritten to:

```js
const numbers = [45, 4, 9, 16, 25];

let text = ""
numbers.forEach((value) => { return text += value + "<br>" })
document.getElementById("demo").innerHTML = text
```

#### 🔺 Array map()

The `map()` method creates a new array by performing a function on each array element.

The `map()` method does not execute the function for array elements without values.

The `map()` method does not change the original array.

This example multiplies each array value by 2:

```js
const numbers = [45, 4, 9, 16, 25];
const number2 = numbers.map((value) => {
  return value * 2
})
document.getElementById("demo").innerHTML = number2

/* 
90, 
8, 
18, 
32, 
50 
*/
```

#### 🔺 Array filter()

The `filter()` method creates a new array with array elements that pass a test.

This example creates a new array from elements with a value larger than 18:

```js
const numbers = [45, 4, 9, 16, 25];
const numFilter = numbers.filter((value) => {
  return value > 18
})

console.log(numFilter);
// 45, 25
```

#### 🔺 Array reduce()

The `reduce()` method runs a function on each array element to produce (reduce it to) a single value.

The `reduce()` method works from left-to-right in the array. See also `reduceRight()`.

****
The `reduce()` method does not reduce the original array.
****

This example finds the sum of all numbers in an array:

```js
const numbers = [45, 4, 9, 16, 25];

console.log(numbers.reduce((total, value, index, array) => {
  return total + value
}));

// 99
```

Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself
The example above does not use the index and array parameters. It can be rewritten to:

```js
const numbers = [45, 4, 9, 16, 25];

console.log(numbers.reduce((total, value) => {
  return total + value
}));

// 99
```

#### 🔺 Array reduceRight()

The `reduceRight()` method runs a function on each array element to produce (reduce it to) a single value.

The `reduceRight()` works from right-to-left in the array. See also `reduce()`.

****
The `reduceRight()` method does not reduce the original array.
****

```js
const numbers = [45, 4, 9, 16, 25];

console.log(numbers.reduceRight((total, value) => {
  return total + value
}));

// 99
```

#### 🔺 Array every()

The `every()` method checks if all array values pass a test.

This example checks if all array values are larger than 18:

```js
const numbers = [45, 4, 9, 16, 25];

let result = numbers.every((value, index, array) => {
  return value > 18
});

console.log("All over 18 is " + result);

// All over 18 is false
```

#### 🔺 Array some()

The `some()` method checks if some array values pass a test.

This example checks if some array values are larger than 18:

```js
const numbers = [45, 4, 9, 16, 25];

let result = numbers.some((value, index, array) => {
  return value > 18
});

console.log("All over 18 is " + result);

// All over 18 is true
```

#### 🔺 Array find()

The `find()` method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18:

```js
const numbers = [4, 9, 16, 25, 29];

let result = numbers.find((value, index, array) => {
  return value > 18
});

console.log("First number over 18 is " + result);

// First number over 18 is 25
```

#### 🔺 Array findIndex()

The `findIndex()` method returns the index of the first array element that passes a test function.

This example finds the index of the first element that is larger than 18:

```js
const numbers = [4, 9, 16, 25, 29];

let result = numbers.findIndex((value, index, array) => {
  return value > 18
})

console.log("First number over 18 has index " + result);
// First number over 18 has index 3
```

#### 🔺 Array.from()

The `Array.from()` method returns an Array object from any object with a length property or any iterable object.

```js
const myArr = Array.from("ABCDEFG");
console.log(myArr);
// ['A', 'B', 'C', 'D', 'E', 'F', 'G']
```

#### 🔺 Array Keys()

The `Array.keys()` method returns an Array Iterator object with the keys of an array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const key = fruits.keys()

let text = ""
for (let x of key) {
  text += x + "<br>"
}

console.log(text);
/* 0<br>1<br>2<br>3<br> */
```

#### 🔺 Array entries()

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries()

text = ""
for (let x of f) {
  text += x + "<br>"
}
console.log(text);
// 0,Banana<br>1,Orange<br>2,Apple<br>3,Mango<br>
```

#### 🔺 Array includes()

ECMAScript 2016 introduced `Array.includes()` to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Apple"));
// true
```

#### 🔺 Array Spread (...)

The ... operator expands an iterable (like an array) into more elements:

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);
// [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'May' ]
```

## 📌 Date Objects

```js
const d = new Date()
```

```js
const d = new Date("2023-9-1")
```

****
📝 **Note**

Date objects are static. The "clock" is not "running".

The computer clock is ticking, date objects are not.
****

#### 🔺 Date Output

By default, JavaScript will use the browser's time zone and display a date as a full text string:

**Fri Sep 01 2023 09:24:22 GMT+0530 (India Standard Time)**

****
You will learn much more about how to display dates, later in this tutorial.
****

#### 🔺 Creating Date Objects

Date objects are created with the `new Date()` constructor.

There are 9 ways to create a new date object:

```js
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
```

#### 🔺 new Date(date string)

`new Date(date string)` creates a date object from a **date string**:

```js
const d = new Date("September 01, 2023 09:28:44");
```

#### 🔺 new Date(year, month, ...)

`new Date(year, month, ...)` creates a date object with a **specified date and time**.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

```js
const d = new Date(2023, 11, 24, 10, 33, 30, 0);
document.getElementById("demo").innerHTML = d
// Sun Dec 24 2023 10:33:30 GMT+0530 (India Standard Time)
```

****
📝 **Note**

JavaScript counts months from **0** to **11**:

**January = 0.**

**December = 11.**
****

#### 🔺 Using 6, 4, 3, or 2 Numbers

6 numbers specify year, month, day, hour, minute, second:

```js
const d = new Date(2023, 11, 24, 10, 33, 30);
```

5 numbers specify year, month, day, hour, and minute:

```js
const d = new Date(2023, 11, 24, 10, 33);
```

4 numbers specify year, month, day, and hour:

```js
const d = new Date(2023, 11, 24, 10);
```

3 numbers specify year, month, and day:

```js
const d = new Date(2023, 11, 24);
```

2 numbers specify year and month:

```js
const d = new Date(2023, 11);
```

## 📌 Short Dates.

#### 🔺 Date Input

There are generally 3 types of JavaScript date input formats:

| Type       | Example                                   |
| :--------- | :---------------------------------------- |
| ISO Date   | "2015-03-25" (The International Standard) |
| Short Date | "03/25/2015"                              |
| Long Date  | "Mar 25 2015" or "25 Mar 2015"            |

#### 🔺 Date Output

Independent of input format, JavaScript will (by default) output dates in full text string format:

```js
Fri Sep 01 2023 12:17:14 GMT+0530 (India Standard Time)
```

### 🔺 ISO Dates

ISO 8601 is the international standard for the representation of dates and times.

The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

```js
const d = new Date("2015-03-25");
```

****
The computed date will be relative to your time zone.

Depending on your time zone, the result above will vary between March 24 and March 25.
****

#### 🔺 ISO Dates (Year and Month)

ISO dates can be written without specifying the day (YYYY-MM):

```js
const d = new Date("2015-03");
```

****
Time zones will vary the result above between February 28 and March 01.
****

#### 🔺 ISO Dates (Only Year)

ISO dates can be written without month and day (YYYY):

```js
const d = new Date("2015");
```

****
Time zones will vary the result above between December 31 2014 and January 01 2015.
****

#### 🔺 Short Dates.

Short dates are written with an "MM/DD/YYYY" syntax like this:

```js
const d = new Date("03/25/2015");
```

#### 🔺 Date Input - Parsing Dates

If you have a valid date string, you can use the `Date.parse()` method to convert it to milliseconds.

`Date.parse()` returns the number of milliseconds between the date and January 1, 1970:

```js
let msec = Date.parse("March 21, 2012");
```

You can then use the number of milliseconds to **convert it to a date** object:

```js
let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
```

## 📌 Get Date Methods

| Method            | Description                                   |
| :---------------- | :-------------------------------------------- |
| getFullYear       | Get **year** as a four digit number (yyyy)    |
| getMonth()        | Get **month** as a number (0-11)              |
| getDate()         | Get **day** as a number (1-31)                |
| getDay()          | Get **weekday** as a number (0-6)             |
| getHours()        | Get **hour** (0-23)                           |
| getMinutes()      | Get **minute** (0-59)                         |
| getSeconds()      | Get **second** (0-59)                         |
| getMilliseconds() | Get **millisecond** (0-999)                   |
| getTime()         | Get time (milliseconds since January 1, 1970) |

****
📝 Note 1
The get methods above return Local time.

Universal time (UTC) is documented at the bottom of this page.
****

****
📝 Note 2
The get methods return information from existing date objects.

In a date object, the time is static. The "clock" is not "running".

The time in a date object is NOT the same as current time.
****

#### 🔺 getFullYear() Method

The `getFullYear()` method returns the year of a date as a four digit number:

```js
const d = new Date();
console.log(d.getFullYear());
// 2023
```

****
⚠️ **WARNING !**

Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it!
****

####  getMonth() Method

The `getMonth()` method returns the month of a date as a number (0-11).

****
📝 Note

In JavaScript, January is month number 0, February is number 1, ...

Finally, December is month number 11.
****

```js
const d = new Date()

console.log(d.getMonth() + 1);
// 9
```

****
📝 **Note**

You can use an array of names to return the month as a name:
****

```js
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date()
let month = months[d.getMonth()]

console.log(month);
// September
```

#### 🔺 getDate() Method

The `getDate()` method returns the day of a date as a number (1-31):

```js
const d = new Date()
console.log(d.getDate());
// 1
```

#### 🔺 getHours() Method

The `getHours()` method returns the hours of a date as a number (0-23):

```js
const d = new Date()
console.log(d.getHours());
// 22
```

#### 🔺 getMinutes() Method

The `getMinutes()` method returns the minutes of a date as a number (0-59):

```js
const d = new Date()
console.log(d.getMinutes());
// 15
```

#### 🔺 getSeconds() Method

The `getSeconds()` method returns the seconds of a date as a number (0-59):

```js
const d = new Date()
console.log(d.getSeconds());
// 20
```

#### 🔺 getMilliseconds() Method

The `getMilliseconds()` method returns the milliseconds of a date as a number (0-999):

```js
const d = new Date()
console.log(d.getMilliseconds());
// 609
```

#### 🔺 getDay() Method

The `getDay()` method returns the weekday of a date as a number (0-6).

```js
const d = new Date()
console.log(d.getDay());
// 5
```

****
📝 **Note**

You can use an array of names, and getDay() to return weekday as a name:
****

```js
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date()
console.log(days[d.getDay()]);
// Friday
```

#### 🔺 getTime() Method

The `getTime()` method returns the number of milliseconds since January 1, 1970:

```js
const d = new Date("1970-01-01")
console.log(d.getTime());
// 0
```

```js
const d = new Date()
console.log(d.getTime());
// 1693587194392
```

#### 🔺 Date.now() Method

`Date.now()` returns the number of milliseconds since January 1, 1970.

```js
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.random(Date.now() / year)
console.log(years);
// 54
```

## 📌 Set Date Methods

Set Date methods are used for setting a part of a date:

| Method            | Description                                       |
| :---------------- | :------------------------------------------------ |
| setDate()         | Set the day as a number (1-31)                    |
| setFullYear()     | Set the year (optionally month and day)           |
| setHours()        | Set the hour (0-23)                               |
| setMilliseconds() | Set the milliseconds (0-999)                      |
| setMinutes()      | Set the minutes (0-59)                            |
| setMonth()        | Set the month (0-11)                              |
| setSeconds()      | Set the seconds (0-59)                            |
| setTime()         | Set the time (milliseconds since January 1, 1970) |

#### 🔺 setFullYear() Method

The `setFullYear()` method sets the year of a date object. In this example to 2020:

```js
const d = new Date()
d.setFullYear(2023)
document.getElementById("demo").innerHTML = d
// Sat Sep 02 2023 02:05:29 GMT+0530 (India Standard Time)
```

#### 🔺 setMonth() Method

The `setMonth()` method sets the month of a date object (0-11):

```js
const d = new Date()
d.setMonth(8)
// Sat Sep 02 2023 10:05:53 GMT+0530 (India Standard Time)
```

#### 🔺 setDate() Method

The `setDate()` method sets the day of a date object (1-31):

```js
const d = new Date()
d.setDate(3)
// Sun Sep 03 2023 10:08:08 GMT+0530 (India Standard Time)
```

#### 🔺 setHours() Method

The `setHours()` method sets the hours of a date object (0-23):

```js
const d = new Date()
d.setHours(11)
// Sat Sep 02 2023 11:08:24 GMT+0530 (India Standard Time)
```

#### 🔺 setMinutes() Method

The `setMinutes()` method sets the minutes of a date object (0-59):

```js
const d = new Date()
d.setMinutes(15)
// Sat Sep 02 2023 10:15:58 GMT+0530 (India Standard Time)
```

#### 🔺 setSeconds() Method

The `setSeconds()` method sets the seconds of a date object (0-59):

```js
const d = new Date()
d.setSeconds(30)
document.getElementById("demo").innerHTML = d
// Sat Sep 02 2023 11:33:30 GMT+0530 (India Standard Time)
```

#### 🔺 Compare Dates

Dates can easily be compared.

The following example compares today's date with January 14, 2100:

```js
let text
const today = new Date()
const someDay = new Date()
someDay.setFullYear(2100, 0, 14)

if (someDay > today) {
  text = "Today is before January 14, 2100."
} else {
  text = "Today is after January 14, 2100."
}

console.log(text);
// Today is before January 14, 2100.
```

****
JavaScript counts months from 0 to 11. January is 0. December is 11.
****

## 📌 Math

#### 🔺 Number to Integer

There are 4 common methods to round a number to an integer:

|               |                                               |
| :------------ | :-------------------------------------------- |
| Math.round(x) | Returns x rounded to its nearest integer      |
| Math.ceil(x)  | Returns x rounded up to its nearest integer   |
| Math.floor(x) | Returns x rounded down to its nearest integer |
| Math.trunc(x) | Returns the integer part of x                 |

#### 🔺 Math.round()

`Math.round(x)` returns the nearest integer:

```js
console.log(Math.round(4.6))
// 5

console.log(Math.round(4.5))
// 5 

console.log(Math.round(4.4))
// 4
```

#### 🔺 Math.ceil()

`Math.ceil(x)` returns the value of x rounded up to its nearest integer:

```js
console.log(Math.ceil(4.3));
// 5

console.log(Math.ceil(4.5));
// 5

console.log(Math.ceil(4.6));
// 5

console.log(Math.ceil(4));
// 4

console.log(Math.ceil(-4.3));
// -4

console.log(Math.ceil(-4));
// -4
```

#### 🔺 Math.floor()

Math.floor(x) returns the value of x rounded down to its nearest integer:

```js
console.log(Math.floor(4.9))
// 4

console.log(Math.floor(4.7))
// 4

console.log(Math.floor(4.4))
// 4

console.log(Math.floor(4.2))
// 4

console.log(Math.floor(-4.2))
// -5
```

#### 🔺 Math.trunc()

Math.trunc(x) returns the integer part of x:

```js
console.log(Math.trunc(4.9))
// 4

console.log(Math.trunc(4.7))
// 4

console.log(Math.trunc(4.4))
// 4

console.log(Math.trunc(4.2))
// 4

console.log(Math.trunc(-4.2))
// -4
```

#### 🔺 Math.random()

Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

```js
<p id="demo"></p>
<button onclick="randomValue()">Click!</button>

<script>
  let randomValue = () => {
    document.getElementById("demo").innerHTML = Math.random()
  }
</script>

// Returns a random number:
```

#### 🔺 Random Integers

`Math.random()` used with `Math.floor()` can be used to return random integers.

****
There is no such thing as JavaScript integers.

We are talking about numbers with no decimals here.
****

```js
// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;
```

#### 🔺 A Proper Random Function

As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

This JavaScript function always returns a random number between min (included) and max (excluded):

```js
<button onclick="document.getElementById('demo').innerHTML = getRndInteger(0,10)">Click Me</button>

<p id="demo"></p>

<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
</script>
```

```js
<button onclick="document.getElementById('demo').innerHTML = getRndInteger(1,10)">Click Me</button>

<p id="demo"></p>

<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
</script>
```

## 📌 Booleans

#### 🔺 Boolean Values

Very often, in programming, you will need a data type that can only have one of two values, like

- YES / NO
- ON / OFF
- TRUE / FALSE
- 
For this, JavaScript has a **Boolean** data type. It can only take the values **true** or **false**.

#### 🔺 Boolean() Function

You can use the Boolean() function to find out if an expression (or a variable) is true:

```js
console.log(Boolean(10 > 9));

// true
```

```js
console.log(Boolean(10 < 9));

// false
```

#### 🔺 Comparisons and Conditions

The chapter JS Comparisons gives a full overview of comparison operators.

The chapter JS Conditions gives a full overview of conditional statements.

Here are some examples:

| Operator | Description  | Example              |
| :------- | :----------- | :------------------- |
| ==       | equal to     | if (day == "Monday") |
| >        | greater than | if (salary > 9000)   |
| <        | less than    | if (age < 18>)       |

#### 🔺 Everything Without a "Value" is False

The Boolean value of **0** (zero) is **false**:

```js
let x = 0
console.log(Boolean(x))

// false
```

The Boolean value of "" (empty string) is **false**:

```js
let x = ""
console.log(Boolean(x))

// false
```

The Boolean value of **undefined** is **false**:

```js
let x 
console.log(Boolean(x))

// false
```

The Boolean value of **null** is **false**:

```js
let x = null
console.log(Boolean(x))

// false
```

The Boolean value of **false** is (you guessed it) **false**:

```js
let x = false
console.log(Boolean(x))

// false
```

```js
let x = 5
let y = 5

console.log(Boolean(x == y))
// true
```

```js
let x = 5
let y = 6

console.log(Boolean(x == y))
// false
```

```js
let x = 5
let y = "5"

console.log(Boolean(x === y))
// false
```

#### 🔺 How Can it be Used

Comparison operators can be used in conditional statements to compare values and take action depending on the result:

```js
if (age < 18) text = "Too young to buy alcohol";
```

#### 🔺 Conditional (Ternary) Operator

JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

**Syntax**

```
variablename = (condition) ? value1:value2 
```

```js
let age = 28
let compare =  (18 < age) ? "Too Young" : "To Small"
console.log(compare); 

// Too Young
```

```js
let age = 18
let compare =  (18 < age) ? "Too Young" : "To Small"
console.log(compare); 
// Too Small
```

```js
let age = 18
let compare =  (18 <= age) ? "Too Young" : "To Small"
console.log(compare); 
// Too Young
```

```html
  <input type="text" id="age">

  <input type="submit" value="Submit" onclick="arrowFunction()">

  <p id="demo"></p>
  
  <script>
    let arrowFunction = () => {
      let text = ""
      let age = Number(document.getElementById("age").value)

      if (isNaN(age)) {
        text = "Input is a not a number"
      } else {
        text = (age => 18) ? "Too young" : "Too Small"
      }

      document.getElementById("demo").innerHTML = text + " to vote"
    }
  </script>
```

## 📌 if, else, and else if

****
Conditional statements are used to perform different actions based on different conditions.
****

#### Conditional Statements

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true

- Use `else` to specify a block of code to be executed, if the same condition is false

- Use `else if` to specify a new condition to test, if the first condition is false

- Use `switch` to specify many alternative blocks of code to be executed

#### The if Statement

Use the `if` statement to specify a block of JavaScript code to be executed if a condition is true.

***Syntax***

```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```

****
⚠️ **warning**

That if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
****

Make a "Good day" greeting if the hour is less than 18:00:

```js
if (hours < 18) {
  console.log("Good Day")
}
```

#### 🔺 The else Statement

Use the `else` statement to specify a block of code to be executed if the condition is false.

***Syntax***

```js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

```js
const hours = new Date().getHours()

let greeting = ""

if (hours < 18) {
  greeting = "Good Day"
} else {
  greeting = "Good Evening"
}

console.log(greeting);
```

```js
if (new Date().getHours() < 18) {
  document.getElementById("time").innerHTML = "Good Day";
} else {
  document.getElementById("time").innerHTML = "Good Evening";
}
```

#### 🔺 The else if Statement

Use the `else if` statement to specify a new condition if the first condition is false.

***Syntax***

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

```js
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
```

## 📌 Switch Statement

****
The `switch` statement is used to perform different actions based on different conditions.
****

Use the `switch` statement to select one of many code blocks to be executed.

***Syntax***

```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

The `getDay()` method returns the weekday as a number between 0 and 6.

(Sunday=0, Monday=1, Tuesday=2 ..)

This example uses the weekday number to calculate the weekday name:

```js
const x = new Date().getDay()

let days

switch (x) {
  case 0:
    days = "Sunday"
    break
  case 1:
    days = "Monday"
    break
  case 2:
    days = "Tuesday"
    break
  case 3:
    days = "Wednesday"
    break
  case 4:
    days = "Thursday"
    break
  case 5:
    days = "Friday"
    break
  case 6:
    days = "Saturday"
}

console.log("Today is " + days);
```

#### 🔺 break Keyword

When JavaScript reaches a `break` keyword, it breaks out of the switch block.

This will stop the execution inside the switch block.

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

****
📝 **Note**
If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
****

#### 🔺 The default Keyword

The `default` keyword specifies the code to run if there is no case match:

The `getDay()` method returns the weekday as a number between 0 and 6.

If today is neither Saturday (6) nor Sunday (0), write a default message:

```js
const x = new Date().getDay()

let days

switch (x) {
  case 6:
    days = "Saturday"
    break
  case 0:
    days = "Sunday"
    break
  default:
    days = "Looking forward to the Weekend"
}

console.log(days);
```

The `default` case does not have to be the last case in a switch block:

```js
let days

switch (new Date().getDay()) {
  default:
    days = "Looking forward to the Weekend"
    break
  case 6:
    days = "Saturday"
    break
  case 0:
    days = "Sunday"
}

console.log(days);
```

****
If `default` is not the last case in the switch block, remember to end the default case with a break.
****

#### 🔺 Common Code Blocks

Sometimes you will want different switch cases to use the same code.

In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

```js
let text

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend"
    break
  case 0:
  case 6:
    text = "It is weekend"
    break
  default:
    text = "Looking forward to the  Weekend"
}

console.log(text);
```

#### 🔺 Switching Details

If multiple cases matches a case value, the `first` case is selected.

If no matching cases are found, the program continues to the `default` label.

If no default label is found, the program continues to the statement(s) `after the switch`.

#### 🔺 Strict Comparison

Switch cases use strict comparison (===).

The values must be of the same type to match.

A strict comparison can only be true if the operands are of the same type.

In this example there will be no match for x:

```js
  <input type="number" id="text">
  <button type="submit" onclick="myValue()">Submit</button>
  <p id="result"></p>

  <script>
    let myValue = () => {
      let value = Number(document.getElementById("text").value)

      switch (value) {
        case 0:
          text = "Off"
          break
        case 1:
          text = "On"
          break
        default:
          text = "Value is not found"
      }

      document.getElementById("result").innerHTML = text
    }
  </script>
```

## 📌 For Loop

****
Loops can execute a block of code a number of times.
****

***Loops*** are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:

```js
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]

let text = ""

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>"
}

console.log(text)
// BMW<br>Volvo<br>Saab<br>Ford<br>Fiat<br>Audi<br>
```

#### 🔺 Different Kinds of Loops

JavaScript supports different kinds of loops:

- `for` - loops through a block of code a number of times
- `for/in` - loops through the properties of an object
- `for/of` - loops through the values of an iterable object
- `while` - loops through a block of code while a specified condition is true
- `do/while` - also loops through a block of code while a specified condition is true

#### 🔺 The For Loop

The `for` statement creates a loop with 3 optional expressions:

```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```

**Expression 1** is executed (one time) before the execution of the code block.

**Expression 2** defines the condition for executing the code block.

**Expression 3** is executed (every time) after the code block has been executed.

```js
for (let x = 0; x < 5; x++) {
  console.log(x)
}

/* 
0
1
2
3
4
*/
```

From the example above, you can read:

Expression 1 sets a variable before the loop starts (let i = 0).

Expression 2 defines the condition for the loop to run (i must be less than 5).

Expression 3 increases a value (i++) each time the code block in the loop has been executed.

**Expression 1**

Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).

This is not always the case. JavaScript doesn't care. Expression 1 is optional.

You can initiate many values in expression 1 (separated by comma):

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"]

let i, len, text
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>"
}

document.getElementById("demo").innerHTML = text
```

**Expression 2**

Often expression 2 is used to evaluate the condition of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

****
If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.
****

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"]

let i = 2, len = cars.length, text = ""

for (;i < len; i++) {
  text += cars[i] + "<br>"  
}

document.getElementById("demo").innerHTML = text
/*
Saab
Ford
*/
```

**Expression 3**

Often expression 3 increments the value of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 3 is optional.

Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.

Expression 3 can also be omitted (like when you increment your values inside the loop):

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"]

let i = 2, len = cars.length, text = ""

for (; i < len;) {
  text += cars[i] + "<br>"
  i++
}

document.getElementById("demo").innerHTML = text
/*
Saab
Ford
*/
```

## 📌 For In Loop

The JavaScript `for in` statement loops through the properties of an Object:

***Syntax***

```js
for (key in object) {
  // code block to be executed
}
```

```js
const person = { fname: "John", lname: "Doe", age: 25 }

let text = ""

for (let x in person) {
  text += person[x]
}

console.log(text);
// JohnDoe25
```

**Example Explained**

- The **for** **in** loop iterates over a **person** object
- Each iteration returns a **key** (x)
- The key is used to access the **value** of the key
- The value of the key is **person[x]**

```js
const numbers = [45, 4, 9, 16, 25];
let text = ""

for (let x in numbers) {
  text += numbers[x]
}

console.log(text)
// 45491625
```

****
⚠️ **warning**
Do not use **for** **in** over an Array if the index **order** is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a **for** loop, a **for** **of** loop, or **Array.forEach()** when the order is important.
****

```js
const numbers = [45, 4, 9, 16, 25]
let txt = ""

numbers.forEach((value, index, array) => {
  txt += value
})

console.log(txt)
// 45491625
```

## 🔺 The For Of Loop

The JavaScript `for of` statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

***Syntax***

```js
for (variable of iterable) {
  // code block to be executed
}
```

*variable* - For every iteration the value of the next property is assigned to the variable. Variable can be declared with `const`, `let`, or `var`.

#### 🔺 Looping over an Array

```js
const cars = ["BMW", "Volvo", "Mini"];

let text = ""
for (let x of cars) {
  text += x + "<br>"
}

console.log(text)
// BMW<br>Volvo<br>Mini<br>
```

#### 🔺 Looping over a String

```js
const cars = "JavaScript"

let text = ""
for (let x of cars) {
  text += x + "<br>"
}

console.log(text)
// J<br>a<br>v<br>a<br>S<br>c<br>r<br>i<br>p<br>t<br>
```

## 📌 While Loop

Loops can execute a block of code as long as a specified condition is true.

The `while` loop loops through a block of code as long as a specified condition is true.

***Syntax***

```js
while (condition) {
  // code block to be executed
}
```

In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

```js
let text = ""
let i = 0
while (i < 10) {
  text += "<br>The Number is " + i
  i++
}

console.log(text);

/*
<br>The Number is 0
<br>The Number is 1
<br>The Number is 2
<br>The Number is 3
<br>The Number is 4
<br>The Number is 5
<br>The Number is 6
<br>The Number is 7
<br>The Number is 8
<br>The Number is 9
*/
```

#### 🔺 The Do While Loop

The `do while` loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```js
do {
  // code block to be executed
}
while (condition);
```

The example below uses a `do while` loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

```js
let text = ""
let i = 0

do {
  text += "<br>The Number is " + i
  i++
} while (i < 10)

console.log(text);

/*
<br>The Number is 0
<br>The Number is 1
<br>The Number is 2
<br>The Number is 3
<br>The Number is 4
<br>The Number is 5
<br>The Number is 6
<br>The Number is 7
<br>The Number is 8
<br>The Number is 9
*/
```

#### 🔺 Comparing For and While

If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

The loop in this example uses a `for` loop to collect the car names from the cars array:

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = ""
let i = 0

for (; cars[i];) {
  text += cars[i] + "<br>"
  i++
}

console.log(text);

// BMW<br>Volvo<br>Saab<br>Ford<br>
```

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = ""
let i = 0

while (cars[i]) {
  text += cars[i] + "<br>"
  i++ 
}

console.log(text);

// BMW<br>Volvo<br>Saab<br>Ford<br>
```

## 🔺 Break and Continue

The `break` statement "jumps out" of a loop.

The `continue` statement "jumps over" one iteration in the loop.

You have already seen the `break` statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

The `break` statement can also be used to jump out of a loop:

```js
let text = ""
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += i + "<br>"
}
document.getElementById("demo").innerHTML = text
/*
0
1
2
*/
```

In the example above, the `break` statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

#### 🔺 The Continue Statement

The `continue` statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

This example skips the value of 3:

```js
let text = ""
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += i + "<br>"
}
document.getElementById("demo").innerHTML = text
/*
0
1
2
3
4
5
6
7
8
9
*/
```

#### 🔺 Labels

To label JavaScript statements you precede the statements with a label name and a colon:

```
label:
statements
```

The `break` and the `continue` statements are the only JavaScript statements that can "jump out of" a code block.

***Syntax***

```
break labelname;

continue labelname;
```

The `continue` statement (with or without a label reference) can only be used to **skip one loop iteration.**

The `break` statement, without a label reference, can only be used to **jump out of a loop or a switch.**

With a label reference, the break statement can be used to **jump out of any code block:**

```js
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

document.getElementById("demo").innerHTML = text;
/*
BMW
Volvo
*/
```

## 📌 Errors

***Throw, and Try...Catch...Finally***

The `try` statement defines a code block to run (to try).

The `catch` statement defines a code block to handle any error.

The `finally` statement defines a code block to run regardless of the result.

The `throw` statement defines a custom error.

#### 🔺 Errors Will Happen!

When executing JavaScript code, different errors can occur.

Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

In this example we misspelled "alert" as "adddlert" to deliberately produce an error:

```js
try {
  textAlert("Hello World")
} catch (err) {
  console.log(err.message);
}
```

#### try and catch

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements `try` and `catch` come in pairs:

```
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
```

#### The throw Statement

The `throw` statement allows you to create a custom error.

Technically you can **throw an exception (throw an error)**.

The exception can be a JavaScript `String`, a `Number`, a `Boolean` or an `Object`:

```js
throw "Too big";    // throw a text
throw 500;          // throw a number
```

If you use `throw` together with `try` and `catch`, you can control program flow and generate custom error messages.

```js
<input type="text" id="input">
<button type="submit" onclick="resultFunction()">Test Input!</button>
<p id="result"></p>

<script>
  let resultFunction = () => {
    const result = document.getElementById("result")
    result.innerHTML = ""
    let input = document.getElementById("input").value

    try {
      if (input.trim() == "") throw "empty"
      if (isNaN(input)) throw "Not a Number!"
      input = Number(input)
      if (input < 5) throw "too low"
      if (input > 10) throw "too high"          
    } catch (err) {
      result.innerHTML = "input is " + err
    }
  }
</script>
```

### 🔺 The finally Statement

The `finally` statement lets you execute code, after try and catch, regardless of the result:

```js
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```

```js
<input type="text" id="input">
<button onclick="resultFunction()">Test Input!</button>
<p id="result"></p>

<script>
  let resultFunction = () => {
    let result = document.getElementById("result")
    result.innerHTML = ""
    let input = document.getElementById("input").value

    try {
      if (input.trim() == "") throw "is empty"
      if (isNaN(input)) throw "is not a number"
      input = Number(input)
      if (input < 5) throw "too low"
      if (input > 10) throw "too high"
    } catch (err) {
      result.innerHTML = "input is " + err
    } finally {
      document.getElementById("input").value = ""
    }
  }
</script>
```

#### 🔺 Error Object Properties

| Property | Description                                 |
| :------- | :------------------------------------------ |
| name     | set or returns an error name                |
| message  | set or returns and error message (a string) |

#### 🔺 Error Name Values

Six different values can be returned by the error name property:

| Error name     | Description                                  |
| :------------- | :------------------------------------------- |
| EvalError      | An error has occurred in the eval() function |
| RangeError     | A number "out of range" has occurred         |
| ReferenceError | An illegal reference has occurred            |
| SyntaxError    | A syntax error has occurred                  |
| TypeError      | A type error has occurred                    |
| URIError       | An error in encodeURI() has occurred         |

The six different values are described below.

#### 🔺 Range Error

A `RangeError` is thrown if you use a number that is outside the range of legal values.

For example: You cannot set the number of significant digits of a number to 500.

```js
let num = 1

try {
  num.toPrecision(500)      // A number cannot have 500 significate digits
} catch (err) {
  console.log(err.name);
}
// RangeError
```

#### 🔺 Reference Error

A `ReferenceError` is thrown if you use (reference) a variable that has not been declared:

```js
let x = 5
try {
  x = y + 1     // y cannot be used (reference)
} catch (err) {
  console.log(err.name);
}
// ReferenceError
```

#### 🔺 Syntax Error

A `SyntaxError` is thrown if you try to evaluate code with a syntax error.

```js
try {
  eval("alert('Hello World)") //
} catch(err) {
  console.log(err.name);
}
// SyntaxError
```

#### 🔺 Type Error

A `TypeError` is thrown if you use a value that is outside the range of expected types:

```js
let num = 1
try {
  num.toUpperCase()      // You can not convert a number to upper case.
} catch (err) {
  console.log(err.name);
}
// TypeError
```

#### 🔺 Arrow Function

****
Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:
****

```js
let myFunction = (a, b) => { a * b }
console.log(myFunction(2, 5));
```

**Before Arrow**

```js
let hello = function () {
  return "Hello world"
}

console.log(hello());
// Hello World!
```

**With Arrow Function**

```js
let hello = () => {
  return "Hello World!"
}
console.log(hello());
// Hello World!
```

It gets shorter! If the function has only one statement, and the statement `returns` a value, you can remove the brackets and the return keyword:

```js
let hello = (value) => {
  return "Hello " + value
}
console.log(hello("World!"));
// Hello World!
```

In fact, if you have only one parameter, you can skip the parentheses as well:

**Arrow Function Without Parentheses:**

```js
let hello = value => "Hello " + value
console.log(hello("World!"));
// Hello World!
```

****
****
****

## 🎓 What is JSON ?

<!-- - [Click end learn about JSON](./JSON.md) -->

🚧 ***Under Working***

## 🎓 HTML DOM

🚧 ***Under Working***

## 🎓 Browser BOM

🚧 ***Under Working***

<!--  -->

****
[![Learn : Next Js Documentation](https://img.shields.io/badge/LEARN-Next_js-emreld.svg)](https://github.com/badshah5464/Next_Js-README.git) [![Learn : Git and Github](https://img.shields.io/badge/LEARN-Git_and_Github-emreld.svg)](https://github.com/badshah5464/Git-And-Github_README.git)
****

<!--  -->