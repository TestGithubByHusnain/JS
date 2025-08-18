// let a={
//     name:"Husnain",
//     language:"Js"
// }
// console.log(a)

// Prototype
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// const p1 = new Person("Husnain");
// p1.greet(); // Hello, my name is Husnain


// Classes and objects:
// class Railwayform {
//   submit() {
//     alert("Form submitted");
//   }

//   cancel() {
//     alert(this.name + ": This form is cancelled");
//   }

//   fill(name) {
//     this.name = name; // ✅ use the parameter
//   }
// }

// let harryForm = new Railwayform();
// harryForm.fill("Harry");

// let rohan = new Railwayform();
// rohan.fill("Rohan");

// harryForm.submit();  // shows: Form submitted
// rohan.submit();      // shows: Form submitted
// rohan.cancel();      // shows: Rohan: This form is cancelled


// contructor

class Railwayform {
    constructor(){
        console.log("Constructor called")
    }
  submit() {
    alert("Form submitted");
  }

  cancel() {
    alert(this.name + ": This form is cancelled");
  }

  fill(name) {
    this.name = name; // ✅ use the parameter
  }
}

let harryForm = new Railwayform();
// harryForm.fill("Harry");

// let rohan = new Railwayform();
// rohan.fill("Rohan");

// harryForm.submit();  // shows: Form submitted
// rohan.submit();      // shows: Form submitted
// rohan.cancel();      // shows: Rohan: This form is cancelled