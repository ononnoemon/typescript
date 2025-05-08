class Person {
    // ✅ 1. Private Field (only inside class accessible)
    #id;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.#id = Math.floor(Math.random() * 1000); // unique ID
    }
  
    // ✅ 2. Getter → read-only property
    get personInfo() {
      return `${this.name}, ${this.age} years old, ID: ${this.#id}`;
    }
  
    // ✅ 2. Setter → validate before update
    set changeName(newName) {
      if (newName.length > 1) {
        this.name = newName;
      } else {
        console.log("❌ Name too short!");
      }
    }
  
    // Normal Methods
    eat() {
      console.log(`${this.name} is eating`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping`);
    }
  
    // ✅ 3. Static Method → class-level utility
    static sayHello() {
      console.log("👋 Hello from Person class!");
    }
  }

  
  class Student extends Person {
    constructor(name, age, roll) {
      super(name, age); // call parent constructor
      this.roll = roll;
    }
  
    study() {
      console.log(`${this.name} is studying. Roll: ${this.roll}`);
    }
  }



  const a = new Person("Abul", 30);
a.eat();                // Abul is eating
console.log(a.personInfo);  // Getter use
a.changeName = "Apu";       // Setter use
console.log(a.personInfo);  // Name updated

Person.sayHello();     // Static method call

const b = new Student("Babul", 22, 101);
b.sleep();             // inherited from Person
b.study();             // Student specific method
console.log(b.personInfo);  // Inherited getter





//