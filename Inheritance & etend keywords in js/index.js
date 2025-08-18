// // Parent class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// // Child class inheriting from Animal
// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call the parent class constructor
//         this.breed = breed;
//     }

//     speak() {
//         console.log(`${this.name} barks.`);
//     }
// }

// // Example usage
// const animal = new Animal('Generic Animal');
// animal.speak(); // Output: Generic Animal makes a noise.

// const dog = new Dog('Buddy', 'Golden Retriever');
// dog.speak(); // Output: Buddy barks.


// Method overriding

class Employee{
    login(){
        console.log(`Employee ha logged in`)
    }
    logout(){
        console.log(`Employee has logout`)
    }
    requestLeaves(leaves){
console.log(`Employee has requested ${leaves} leaves`)
    }
}
class Programmer extends Employee{
requestCoffee(x){
    console.log(`Employee has requested $(x) coffees`)
}
requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves+1} leaves (One extra)`)
}

}
let e = new Employee()
e.login()
e.requestLeaves(3)