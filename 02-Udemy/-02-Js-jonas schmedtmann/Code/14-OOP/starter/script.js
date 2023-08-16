'use strict';

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!206. What is Object-Oriented Programming?
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//~ no code  in this lesson
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!207. OOP in JavaScript
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//~no code  in this lesson

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!208. Constructor Functions and the new Operator
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this!
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const bashar = new person('bashar', 2000);
// console.log(bashar);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new person('matilda ', 2017);
// const jack = new person('jack', 1975);
// console.log(matilda, jack);

// console.log(bashar instanceof person);

// person.hey = function () {
//   console.log('hey ther 🙋 ');
//   console.log(this);
// };

// person.hey();
// // bashar.hey() //^ cant accces
// // //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// // //!209. Prototypes
// // //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// console.log(person.prototype);

// person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// bashar.calcAge();
// matilda.calcAge();

// console.log(bashar.__proto__);
// console.log(bashar.__proto__ === person.prototype);

// console.log(person.prototype.isPrototypeOf(bashar));
// console.log(person.prototype.isPrototypeOf(matilda));
// console.log(person.prototype.isPrototypeOf(person));

// //prototyeOfLinkedObjects;

// person.prototype.species = 'Homo Sapiens';

// console.log(bashar.species, matilda.species);

// console.log(bashar.hasOwnProperty('firstName'));
// console.log(bashar.hasOwnProperty('species'));

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!210. Prototypal Inheritance and The Prototype Chain
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//~ no code
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!211.Prototypal Inheritance on Built-In Objects

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// console.log(bashar.__proto__);
// // Object.prototype(top of prototype chain)
// console.log(bashar.__proto__.__proto__);
// console.log(bashar.__proto__.__proto__.__proto__);

// console.dir(person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === {}
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!212. Coding Challenge #1
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// const merceds = new Car('mercedes', 95);
// console.log(bmw, merceds);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} id going up to ${this.speed}km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} break It can reduce speed by ${this.speed}km/h`);
// };
// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!213. ES6 Classes
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//class expression
// const person = class{}

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // instance method
//   //method will be added to prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   //static method
//   static hey() {
//     console.log('hey ther 🙋 ');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('jessica davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

// jessica.greet;

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mod

// const walter = new PersonCl('walter white', 1965);

// PersonCl.hey();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!214. Setters and Getters

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const account = {
//   owener: 'bashar',

//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.movements);

// account.latest = 50;
// console.log(account.movements);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!215. Static Methods

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//* the code includes in the Previous lessons
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!216. Object.create

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1997);
// sarah.calcAge();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!217. Coding Challenge #2

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// class carCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} id going up to ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} break It can reduce speed by ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new carCl('ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!218. Inheritance Between "Classes": Constructor Functions
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const student = function (firstName, birthYear, course) {
//   person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //linking prototypes
// student.prototype = Object.create(person.prototype);

// student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const mike = new student('mike', 2020, 'computer science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof student);
// console.log(mike instanceof person);
// console.log(mike instanceof Object);

// student.prototype.constructor = student;
// console.dir(student.prototype.constructor);
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!219. Coding Challenge #3
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going up to ${this.speed}km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} break It can reduce speed by ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // link the prototype

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going up to ${this.speed}km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//! 220. Inheritance Between "Classes": ES6 Classes

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //always need to happen frist
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const Martha = new StudentCl('Martha jones', 2012, 'computer science');
// Martha.introduce();
// Martha.calcAge();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!221. Inheritance Between "Classes": Object.create
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);

// const studentProto = Object.create(PersonProto);
// studentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// studentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(studentProto);
// jay.init('jay', 2010, 'computer scinece');
// jay.introduce();
// jay.calcAge();
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!222. Another Class Example
//!223. Encapsulation: Protected Properties and Methods
//!224. Encapsulation: Private Class Fields and Methods
//!225. Chaining Methods
//!226. ES6 Classes Summary

// all in one
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// *1) Public fields
// *2) Private fields
// *3) Public methods
// *4) Private methods
// *(there is also the static version)

// class Account {
//   // *1) Public fields(instance not on prototype)
//   locale = navigator.language;
//   // _movments = [];

//   // *2) Private fields(instance not on prototype)
//   #movments = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //*protect property
//     this.#pin = pin;
//     // this._movments = [];
//     // this.locale = navigator.language;

//     console.log(`thanks for opening an account`);
//   }

//   // *3) Public methods

//   //puplic interface

//   getMovments() {
//     return this.#movments;
//   }

//   deposit(val) {
//     this.#movments.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestloan(val) {
//     if (this._approveloan(val)) {
//       this.deposit(val);
//       console.log(`loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   // *4) Private methods => not suported yet
//   // #approveloan(val) {
//   //   return true;
//   // }

//   _approveloan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('bashar', 'EUR', 1111);
// // acc1.movments.push(250) //* bad way
// // acc1.movments.push(-140)
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestloan(1000);
// // acc1._approveloan(1000);
// console.log(acc1.getMovments());

// console.log(acc1);
// console.log(acc1.pin);
// Account.helper();

// // console.log(acc1.#movments);
// // console.log(acc1.#pin);
// // console.log(acc1.#approveloan);

// acc1.deposit(300).deposit(500).withdraw(35).requestloan(25000).withdraw(4000);
// console.log(acc1.getMovments());

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//!227. Coding Challenge #4
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

// console.log(rivian.#charge);

rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
