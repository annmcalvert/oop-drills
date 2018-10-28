//using separate objects
let person1 = {
    name: 'Everett',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    } 
}

let person2 = {
    name: 'Dennis',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    } 
}

let person3 = {
    name: 'Polly',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    } 
}

let person4 = {
    name: 'Jerry',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    } 
}

let person5 = {
    name: 'Melissa',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    } 
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//creating pseudoclass
function Person(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello! My name is ${this.name}. I live in ${this.city} and I am ${this.age} years old.`);
}

let p1 = new Person('Everett', 'Birmingham', '3');
let p2 = new Person('Dennis', 'Birmingham', '34');
let p3 = new Person('Polly', 'Arley', '65');
let p4 = new Person('Jerry', 'Arley', '62');
let p5 = new Person('Melissa', 'Curry', '34');

p1.greet();
p2.greet();
p3.greet();
p4.greet();
p5.greet();

//classes using ES6
class People {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    greeting(name, city, age) {
        console.log(`Hello! My name is ${this.name}. I live in ${this.city} and I am ${this.age} years old.`);
    }
}

let per1 = new People('Everett', 'Birmingham', '3');
let per2 = new People('Dennis', 'Birmingham', '34');
let per3 = new People('Polly', 'Arley', '65');
let per4 = new People('Jerry', 'Arley', '62');
let per5 = new People('Melissa', 'Curry', '34');

per1.greeting();
per2.greeting();
per3.greeting();
per4.greeting();
per5.greeting();



