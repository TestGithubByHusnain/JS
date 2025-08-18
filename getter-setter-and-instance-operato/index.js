class Person {
  constructor(name) {
    this._name = name; // conventionally use underscore to mark it private
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name must be valid");
    }
  }
}

const p1 = new Person("Ali");

console.log(p1.name);   // getter: Ali
p1.name = "Husnain";    // setter
console.log(p1.name);   // getter: Husnain
