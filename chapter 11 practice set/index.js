// Create a js class to create a complex number. Create a constructor to set the real and complex part
// class complex{
//     constructor(real, imaginary){
//         this.real = real
//         this.imaginary = imaginary
//     }
// }
// let a= new complex(2, 4)
// let b= new complex (6, 2)

// Write a method to add two complex number in the above class
// class complex {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }

//   // Method to add another complex number
//   add(other) {
//     let newReal = this.real + other.real;
//     let newImaginary = this.imaginary + other.imaginary;
//     return new complex(newReal, newImaginary);
//   }

  // Optional: Method to display the complex number
//   toString() {
//     return `${this.real} + ${this.imaginary}i`;
//   }
// }

// let a = new complex(2, 4);
// let b = new complex(6, 2);

// Add a and b
// let result = a.add(b);

// console.log(result.toString());  // Output: 8 + 6i


// Create a class student from a class Human overrides a method and see changes
// class Human{
// constructor(name, fvrtfood){
//     this.name= name,
//     this.fvrtfood = fvrtfood
// }
// walk(){
//     console.log(this.name + "Human is walking")
// }
// }

// class Student extends Human{
// walk (){
//     console.log(this.name + " Student is walking")
// }
// }
// let o = new Student("Husnain", "Mutton")
// o.walk()

// See if student is an instance of human using instance keyword
// console.log(o instanceof Human )

// Use getter and setter to set and get the real and imaginary parts of the complex number
class Complex {
  constructor(real, imaginary) {
    this._real = real;           // use underscore to indicate private variable
    this._imaginary = imaginary;
  }

  // Getter for real
  get real() {
    return this._real;
  }

  // Setter for real
  set real(value) {
    this._real = value;
  }

  // Getter for imaginary
  get imaginary() {
    return this._imaginary;
  }

  // Setter for imaginary
  set imaginary(value) {
    this._imaginary = value;
  }

  // Optional: Display complex number
  toString() {
    return `${this._real} + ${this._imaginary}i`;
  }
}

// Usage
let c = new Complex(3, 4);

console.log(c.toString());        // Output: 3 + 4i

// Using setters
c.real = 5;
c.imaginary = 7;

// Using getters
console.log("Real:", c.real);          // Output: Real: 5
console.log("Imaginary:", c.imaginary); // Output: Imaginary: 7

console.log(c.toString());        // Output: 5 + 7i




