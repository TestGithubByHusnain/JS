console.log("Operators in js")

let a= 45
let b=64

// Arithmetic Operator
console.log("a + b = ", a+b) //Addition
console.log("a - b = ", a-b) //Subtraction
console.log("a / b = ", a/b) // Divsion
console.log("a * b = ", a*b) //Multiply
console.log("a % b = ", a%b) //Modulud
console.log("a ** b = ", a**b) //Exponentiation

// Assigment Operator
console.log("a = b = ", a=b)
console.log("a += b = ", a+=b)
console.log("a -= b = ", a-=b)
console.log("a *= b = ", a*=b)
console.log("a /= b = ", a/=b)
console.log("a %= b = ", a%=b)

// Comparison Operator
5 == "5";    // true (loose equality)
5 === "5";   // false (strict equality: value + type)
5 != 3;      // true
5 > 2;       // true

// Logical operator
true && false   // false
true || false   // true
!false          // true

// String operator
let name = "Husnain";
console.log("Hello " + name); // "Hello Husnain"

// Type operator
typeof "Hello"    // "string"
typeof 5          // "number"

// Ternary operator
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

