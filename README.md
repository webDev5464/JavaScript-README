![logo](javascript.png)
# 📝JavaScript Basic

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
**⚠️ Note** :

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

#### 🔺 Logical Assignment Operators
| Operator | Example | Same As          |
| :------- | :------ | :--------------- |
| &&=      | x &&= y | x = && (x=y)     |
| ??=      | x ??= y | x = x ?? (x = y) |

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

#### 🔺 The `&&=` Operators
The **Logical AND assignment operator** is used between two values.

If the first value is true, the second value is assigned.

```js
let x = 10;
x &&= 5;
```
| Result |
| :----- |
| 5      |

#### 🔺 The `??=` Operators
The **Nullish coalescing assignment operator** is used between two values.

If the first value is undefined or null, the second value is assigned.
```js
let x;
x ??= 5;
```
| result |
| :----- |
| 5      |

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
const cars = ["saad", "volvo", "BMW"];

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
****
⚠️
Six other escape sequences are valid in JavaScript:

| Code | Result               |
| :--- | :------------------- |
| \b   | Backspace            |
| \f   | Form Feed            |
| \n   | New Line             |
| \r   | Carriage Return      |
| \t   | Horizontal Tabulator |
| \v   | Vertical Tabulator   |

****

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
⚠️
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
⚠️ **Note :**

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
⚠️ **Note**

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
 ⚠️ **Note**

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
⚠️ **Note**

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
⚠️ **Did You Notice?**

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
⚠️ WARNING !!

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
⚠️ **Note:** Array indexes start with 0
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
⚠️ **The Difference Between Arrays and Objects**

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
⚠️ **Warning !**

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
⚠️ **Note**

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

console.log(myArrayMax(points));        // 100
```

#### 🔺 Using Math.min() on an Array

You can use `Math.min.apply` to find the lowest number in an array:

```js
const points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

console.log(myArrayMin(points));        // 1
```

## 📌 Sorting Array

#### 🔺 Sorting an Array

The `sort()` method sorts an array alphabetically:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);        
//  [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.sort()
console.log(fruits);        
//  [ 'Apple', 'Banana', 'Mango', 'Orange' ]
```

#### 🔺 Reversing an Array

The `reverse()` method reverses the elements in an array.

You can use it to sort an array in descending order:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);        
//  [ 'Banana', 'Orange', 'Apple', 'Mango' ]

fruits.sort()
fruits.reverse()
console.log(fruits);        
//  [ 'Orange', 'Mango', 'Banana', 'Apple' ]
```

#### 🔺 Numeric Sort

By default, the `sort()` function sorts values as **strings**.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the `sort()` method will produce incorrect result when sorting numbers.

You can fix this by providing a **compare function**:

```js
const points = [40, 100, 1, 5, 25, 10];
console.log(points);
// [ 40, 100, 1, 5, 25, 10 ]

points.sort((a, b) => { return a - b })
console.log(points);
// [ 1, 5, 10, 25, 40, 100 ]
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
// 90,8,18,32,50
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

****
[![Learn : Next Js Documentation](https://img.shields.io/badge/LEARN-Next_js-emreld.svg)](https://github.com/badshah5464/Next_Js-README.git) [![Learn : Git and Github](https://img.shields.io/badge/LEARN-Git_and_Github-emreld.svg)](https://github.com/badshah5464/Git-And-Github_README.git)
****
